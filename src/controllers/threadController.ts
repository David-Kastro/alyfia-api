// src/controllers/threadController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getThreads = async (req: Request, res: Response) => {
  const userId = (req as any).user?.userId;
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const threadsData = await prisma.thread.findMany({
      include: {
        ThreadSubscription: {
          where: { userId },
          select: { id: true },
        },
        topics: true,
        news: true,
      },
    });

    const threads = threadsData.map((thread) => ({
      ...thread,
      subscribed: thread.ThreadSubscription.length > 0,
    }));
    res.status(200).json(threads);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getThreadById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const thread = await prisma.thread.findUnique({
      where: { id },
      include: { topics: true, news: true },
    });
    if (!thread) {
      return res.status(404).json({ error: "Thread not found" });
    }
    res.status(200).json(thread);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const createThread = async (req: Request, res: Response) => {
  const { title, descriptionPrompt } = req.body;
  const user = (req as any).user;
  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const newThread = await prisma.thread.create({
      data: {
        title,
        descriptionPrompt,
        authorId: user.userId,
      },
    });
    res.status(201).json(newThread);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateThread = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, descriptionPrompt } = req.body;
  try {
    const updatedThread = await prisma.thread.update({
      where: { id },
      data: { title, descriptionPrompt },
    });
    res.status(200).json(updatedThread);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteThread = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedThread = await prisma.thread.delete({
      where: { id },
    });
    res.status(200).json(deletedThread);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const subscribeToThread = async (req: Request, res: Response) => {
  const { threadId } = req.body;
  const userId = (req as any).user?.userId;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!threadId) {
    return res.status(400).json({ error: "Thread ID is required" });
  }

  try {
    // Verifica se já existe a inscrição
    const existingSubscription = await prisma.threadSubscription.findFirst({
      where: { userId, threadId },
    });

    if (existingSubscription) {
      return res
        .status(400)
        .json({ error: "Usuário já está inscrito nesta thread." });
    }

    // Cria a inscrição
    const subscription = await prisma.threadSubscription.create({
      data: {
        userId,
        threadId,
      },
    });

    res
      .status(201)
      .json({ message: "Inscrição realizada com sucesso!", subscription });
  } catch (error: any) {
    console.error("Erro ao inscrever usuário na thread:", error);
    res.status(500).json({ error: error.message });
  }
};
