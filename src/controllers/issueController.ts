// src/controllers/issueController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Lista todas as issues, incluindo dados da notícia associada
export const getIssues = async (req: Request, res: Response) => {
  try {
    const issues = await prisma.issue.findMany({
      include: {
        news: true,
      },
    });
    res.status(200).json(issues);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Busca uma issue específica pelo ID, incluindo dados da notícia associada
export const getIssueById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const issue = await prisma.issue.findUnique({
      where: { id },
      include: {
        news: true,
      },
    });
    if (!issue) {
      return res.status(404).json({ error: "Issue not found" });
    }
    res.status(200).json(issue);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Cria uma nova issue
export const createIssue = async (req: Request, res: Response) => {
  const { newsId, type, description, positionStart, positionEnd, sentiment } =
    req.body;
  try {
    const newIssue = await prisma.issue.create({
      data: {
        newsId,
        type,
        description,
        positionStart,
        positionEnd,
        sentiment,
      },
      include: {
        news: true,
      },
    });
    res.status(201).json(newIssue);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Atualiza uma issue existente
export const updateIssue = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { newsId, type, description, positionStart, positionEnd, sentiment } =
    req.body;
  try {
    const updatedIssue = await prisma.issue.update({
      where: { id },
      data: {
        newsId,
        type,
        description,
        positionStart,
        positionEnd,
        sentiment,
      },
      include: {
        news: true,
      },
    });
    res.status(200).json(updatedIssue);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Deleta uma issue
export const deleteIssue = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedIssue = await prisma.issue.delete({
      where: { id },
      include: {
        news: true,
      },
    });
    res.status(200).json(deletedIssue);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
