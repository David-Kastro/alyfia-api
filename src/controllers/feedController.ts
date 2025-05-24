import { Request, Response } from "express";
import { PrismaClient } from "@/prisma-client";
import logger from "../logger";

const prisma = new PrismaClient();

/**
 * Endpoint para listar notícias do feed do usuário autenticado.
 * Retorna todas as notícias das threads que o usuário está inscrito,
 * ordenadas por data de criação (mais recente primeiro).
 */
export const getUserFeed = async (req: Request, res: Response) => {
  const userId = (req as any).user?.userId;
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  try {
    const subscriptions = await prisma.threadSubscription.findMany({
      where: { userId },
      select: { threadId: true },
    });

    const threadIds = subscriptions.map(sub => sub.threadId);

    const newsFeed = await prisma.news.findMany({
      where: { threadId: { in: threadIds } },
      include: { author: true, thread: true, topic: true },
      orderBy: [
        { validationScore: 'desc' },
        { createdAt: 'desc' },
      ],
    });

    res.status(200).json(newsFeed);
  } catch (error: any) {
    logger.error({ error }, "Erro ao buscar feed do usuário");
    res.status(500).json({ error: error.message });
  }
};
