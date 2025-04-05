// src/controllers/validationController.ts
import { Request, Response } from "express";
import { PrismaClient, ValidationStatus } from "@prisma/client";
import { updateScoresForNews } from "../services/scoreService";
import { subDays } from "date-fns";

const prisma = new PrismaClient();

// Lista todas as validações, incluindo os dados da notícia e do usuário validador
export const getValidations = async (req: Request, res: Response) => {
  try {
    const validations = await prisma.validation.findMany({
      include: {
        news: true,
        validatedBy: {
          select: {
            id: true,
            username: true,
            email: true,
            score: true,
          },
        },
      },
    });
    res.status(200).json(validations);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Busca uma validação específica pelo ID, incluindo os dados da notícia e do usuário
export const getValidationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const validation = await prisma.validation.findUnique({
      where: { id },
      include: {
        news: true,
        validatedBy: {
          select: {
            id: true,
            username: true,
            email: true,
            score: true,
          },
        },
      },
    });
    if (!validation) {
      return res.status(404).json({ error: "Validation not found" });
    }
    res.status(200).json(validation);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Cria uma nova validação
export const createValidation = async (req: Request, res: Response) => {
  const { newsId, validatedByUserId, info, isCorrectionSuggestion, status } =
    req.body;
  try {
    const newValidation = await prisma.validation.create({
      data: {
        newsId,
        validatedByUserId,
        info,
        isCorrectionSuggestion,
        // Se o status não for informado, define como 'pending'
        status: status || ValidationStatus.pending,
      },
      include: {
        news: true,
        validatedBy: {
          select: {
            id: true,
            username: true,
            email: true,
            score: true,
          },
        },
      },
    });

    if (newValidation && status && status !== ValidationStatus.pending) {
      updateScoresForNews(newValidation.newsId);
    }

    res.status(201).json(newValidation);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Atualiza uma validação existente
export const updateValidation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { info, isCorrectionSuggestion, status } = req.body;
  try {
    const updatedValidation = await prisma.validation.update({
      where: { id },
      data: { info, isCorrectionSuggestion, status },
      include: {
        news: true,
        validatedBy: {
          select: {
            id: true,
            username: true,
            email: true,
            score: true,
          },
        },
      },
    });

    if (updatedValidation && status && status !== ValidationStatus.pending) {
      updateScoresForNews(updatedValidation.newsId);
    }

    res.status(200).json(updatedValidation);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Deleta uma validação
export const deleteValidation = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedValidation = await prisma.validation.delete({
      where: { id },
      include: {
        news: true,
        validatedBy: {
          select: {
            id: true,
            username: true,
            email: true,
            score: true,
          },
        },
      },
    });
    res.status(200).json(deletedValidation);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Busca validações com status 'pending' para um usuário,
 * considerando apenas as solicitações criadas nos últimos 7 dias.
 * O usuário é informado via query parameter (userId).
 */
export const getPendingValidationsForUser = async (
  req: Request,
  res: Response
) => {
  const { userId } = req.query;
  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "Parâmetro 'userId' é obrigatório." });
  }

  // Data limite: 7 dias atrás
  const sevenDaysAgo = subDays(new Date(), 7);

  try {
    const pendingValidations = await prisma.validation.findMany({
      where: {
        validatedByUserId: userId,
        status: ValidationStatus.pending,
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
      include: {
        news: true,
      },
    });

    res.status(200).json(pendingValidations);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
