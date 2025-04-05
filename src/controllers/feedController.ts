import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Endpoint para listar notícias do feed do usuário autenticado.
 * Retorna todas as notícias das threads que o usuário está inscrito,
 * ordenadas por data de criação (mais recente primeiro).
 */
export const getUserFeed = async (req: Request, res: Response) => {
  const userId = (req as any).user?.userId;
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Primeiro, busca as threads onde o usuário está inscrito
    const subscriptions = await prisma.threadSubscription.findMany({
      where: { userId },
      select: { threadId: true },
    });

    const threadIds = subscriptions.map((sub) => sub.threadId);

    // Busca notícias dessas threads ordenadas pela data de criação
    const newsFeed = await prisma.news.findMany({
      where: {
        threadId: { in: threadIds },
      },
      include: {
        author: { select: { id: true, username: true, score: true } },
        thread: true,
        topic: true,
        issues: true,
        validations: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(newsFeed);
  } catch (error: any) {
    console.error("Erro ao buscar feed:", error);
    res.status(500).json({ error: error.message });
  }
};
