// src/controllers/newsController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@/prisma-client";
import axios from "axios";
import { updateScoresForNews } from "../services/scoreService";
import { assignValidationRequests } from "../services/validationService";
import logger from "../logger";
import { analyzeNewsContent } from "../services/newsAnalysisService";

const LENGUAGE = "Brazilian portuguese"; // Define o idioma como português
const LLM_MODEL = "gpt-4o-mini"; // Define o modelo de linguagem

const prisma = new PrismaClient();

// Lista todas as notícias, incluindo dados das relações
export const getNews = async (req: Request, res: Response) => {
  try {
    const news = await prisma.news.findMany({
      include: {
        thread: true,
        topic: true,
        author: {
          select: { id: true, username: true, email: true, score: true },
        },
        issues: true,
        validations: true,
      },
    });
    res.status(200).json(news);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Busca uma notícia específica pelo ID, incluindo dados das relações
export const getNewsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const newsItem = await prisma.news.findUnique({
      where: { id },
      include: {
        thread: true,
        topic: true,
        author: {
          select: { id: true, username: true, email: true, score: true },
        },
        issues: true,
        validations: true,
      },
    });
    if (!newsItem) {
      return res.status(404).json({ error: "News not found" });
    }
    res.status(200).json(newsItem);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Cria uma nova notícia e analisa seu conteúdo para gerar issues
export const createNews = async (req: Request, res: Response) => {
  const { title, content, threadId, topicId } = req.body;
  const userId = (req as any).user?.userId;

  try {
    const thread = await prisma.thread.findUnique({ where: { id: threadId } });
    if (!thread) return res.status(404).json({ error: "Thread não encontrada." });

    const newNews = await prisma.news.create({
      data: { title, content, threadId, topicId, authorId: userId },
    });

    await assignValidationRequests(newNews.id);

    // Usa novo serviço de análise detalhada
    const issues = await analyzeNewsContent(content, thread.descriptionPrompt);

    for (const issue of issues) {
      await prisma.issue.create({
        data: {
          newsId: newNews.id,
          type: issue.type,
          description: issue.description,
          positionStart: issue.positionStart,
          positionEnd: issue.positionEnd,
          sentiment: issue.sentiment,
        },
      });
    }

    await updateScoresForNews(newNews.id);

    const createdNews = await prisma.news.findUnique({
      where: { id: newNews.id },
      include: { issues: true, validations: true },
    });

    res.status(201).json(createdNews);
  } catch (error: any) {
    logger.error({ error }, "Erro ao criar notícia");
    res.status(400).json({ error: error.message });
  }
};

// Atualiza uma notícia existente
export const updateNews = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, threadId, topicId } = req.body;
  const userId = (req as any).user?.userId;

  try {
    const existingNews = await prisma.news.findUnique({ where: { id } });

    if (!existingNews) {
      return res.status(404).json({ error: "Notícia não encontrada." });
    }

    // Salvar registro da edição
    await prisma.newsEdit.create({
      data: {
        newsId: id,
        editedById: userId,
        oldContent: existingNews.content,
        newContent: content,
      },
    });

    const updatedNews = await prisma.news.update({
      where: { id },
      data: { title, content, threadId, topicId },
    });

    await updateScoresForNews(updatedNews.id);

    res.status(200).json(updatedNews);
  } catch (error: any) {
    logger.error({ error }, "Erro ao atualizar notícia");
    res.status(400).json({ error: error.message });
  }
};

// Deleta uma notícia
export const deleteNews = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedNews = await prisma.news.delete({
      where: { id },
      include: {
        thread: true,
        topic: true,
        author: {
          select: { id: true, username: true, email: true, score: true },
        },
      },
    });
    res.status(200).json(deletedNews);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getNewsByThread = async (req: Request, res: Response) => {
  const threadId = req.params.threadId;

  try {
    const newsList = await prisma.news.findMany({
      where: { threadId },
      include: {
        author: { select: { id: true, username: true, score: true } },
        topic: true,
        issues: true,
        thread: true,
        validations: true,
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(newsList);
  } catch (error: any) {
    console.error("Erro ao listar notícias:", error);
    res.status(500).json({ error: error.message });
  }
};
