// src/controllers/topicController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@/prisma-client";

const prisma = new PrismaClient();

export const getTopics = async (req: Request, res: Response) => {
  try {
    const topics = await prisma.topic.findMany({
      include: {
        thread: true, // inclui dados da thread associada (opcional)
        news: true, // inclui as notícias relacionadas (opcional)
      },
    });
    res.status(200).json(topics);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getTopicById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const topic = await prisma.topic.findUnique({
      where: { id },
      include: {
        thread: true,
        news: true,
      },
    });
    if (!topic) {
      return res.status(404).json({ error: "Topic not found" });
    }
    res.status(200).json(topic);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const createTopic = async (req: Request, res: Response) => {
  const { title, threadId } = req.body;
  try {
    const newTopic = await prisma.topic.create({
      data: {
        title,
        threadId,
        trendingScore: 0,
      },
    });
    res.status(201).json(newTopic);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateTopic = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, trendingScore } = req.body;
  try {
    const updatedTopic = await prisma.topic.update({
      where: { id },
      data: { title, trendingScore },
    });
    res.status(200).json(updatedTopic);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTopic = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedTopic = await prisma.topic.delete({
      where: { id },
    });
    res.status(200).json(deletedTopic);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getTopicsByThreadWithCount = async (
  req: Request,
  res: Response
) => {
  const threadId = req.params.threadId;

  try {
    const topics = await prisma.topic.findMany({
      where: { threadId },
      orderBy: { title: "asc" },
      include: {
        _count: {
          select: { news: true },
        },
      },
    });

    const formattedTopics = topics.map((topic) => ({
      id: topic.id,
      threadId: topic.threadId,
      title: topic.title,
      newsCount: topic._count.news,
    }));

    res.status(200).json(formattedTopics);
  } catch (error: any) {
    console.error("Erro ao listar tópicos com contagem de notícias:", error);
    res.status(500).json({ error: error.message });
  }
};
