// src/controllers/newsController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { updateScoresForNews } from "../services/scoreService";
import { assignValidationRequests } from "../services/validationService";

const LENGUAGE = "Brazilian portuguese"; // Define o idioma como português
const LLM_MODEL = "gpt-4o-mini"; // Define o modelo de linguagem

const prisma = new PrismaClient();

/**
 * Função auxiliar para analisar o conteúdo da notícia usando a API do OpenAI (GPT-4)
 * Retorna uma lista de issues encontradas.
 */
async function analyzeNewsContent(content: string): Promise<any[]> {
  const openAiApiKey = process.env.OPENAI_API_KEY;
  if (!openAiApiKey) {
    console.error("API key do OpenAI não definida.");
    return [];
  }

  // TODO: melhorar prompt para identificar "false_fact" e "off_topic"

  const prompt = `
Analyze the following ${LENGUAGE} news content and identify any bias, inconsistencies, and communication issues.

Content to analyze (in ${LENGUAGE}):
"${content}"

Return your answer strictly as a JSON object containing an array named "issues". Each issue object must contain the following fields:

- "type": one of ["bias", "subjectivity", "contradiction", "ad", "opinion", "sentiment_bias"]
- "description": brief description of the issue (in ${LENGUAGE})
- "positionStart" (optional): initial character position of problematic text
- "positionEnd" (optional): final character position of problematic text
- "sentiment" (optional): one of ["positive", "negative", "neutral"] when applicable

Example of expected output (in ${LENGUAGE}):

{
  "issues": [
    {
      "type": "bias",
      "description": "Uso da palavra 'fracasso' sugere forte viés negativo.",
      "positionStart": 12,
      "positionEnd": 20,
      "sentiment": "negative"
    }
  ]
}`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: LLM_MODEL,
        messages: [
          {
            role: "system",
            content:
              "You're a news content analyst specialized in identifying issues in news texts. Your task is to analyze the provided text and identify potential problems.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.2,
        max_tokens: 300,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAiApiKey}`,
        },
      }
    );

    // Supondo que o GPT retorne uma resposta em formato JSON com uma lista de issues
    const analysisText = response.data.choices[0].message.content;
    let issues = [];
    try {
      issues = JSON.parse(analysisText)?.issues || [];
    } catch (parseError) {
      console.error("Erro ao converter resposta em JSON:", parseError);
    }
    return issues;
  } catch (error) {
    console.error("Erro na chamada para a API do OpenAI:", error);
    return [];
  }
}

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
    // Cria a notícia no banco de dados
    const newNews = await prisma.news.create({
      data: {
        title,
        content,
        threadId,
        topicId,
        authorId: userId,
        validationScore: 0,
      },
      include: {
        thread: true,
        topic: true,
        author: {
          select: { id: true, username: true, email: true, score: true },
        },
      },
    });

    assignValidationRequests(newNews.id);

    // Chama a função que analisa o conteúdo da notícia usando GPT-4
    const issues = await analyzeNewsContent(content);

    // Para cada issue retornada, cria um registro na tabela de issues
    for (const issue of issues) {
      // Espera que issue tenha os campos: type, description, positionStart, positionEnd, sentiment
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

    // Reconsulta a notícia já incluindo as issues criadas
    const createdNews = await prisma.news.findUnique({
      where: { id: newNews.id },
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

    if (
      createdNews &&
      createdNews.validations.length + createdNews.issues.length > 0
    ) {
      updateScoresForNews(createdNews.id);
    }

    res.status(201).json(createdNews);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Atualiza uma notícia existente
export const updateNews = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, threadId, topicId } = req.body;
  try {
    const updatedNews = await prisma.news.update({
      where: { id },
      data: { title, content, threadId, topicId },
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
    res.status(200).json(updatedNews);
  } catch (error: any) {
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
