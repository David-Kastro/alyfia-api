import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import logger from "../logger";
import { PrismaClient } from "@/prisma-client";

const prisma = new PrismaClient();
const saltRounds = 10;

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      logger.warn({ email }, "Tentativa de registro duplicado");
      return res.status(400).json({ error: "Usuário já existe com este email." });
    }

    const passwordHash = await bcrypt.hash(password, saltRounds);
    const newUser = await prisma.user.create({
      data: { username, email, passwordHash },
      select: { id: true, username: true, email: true, score: true, createdAt: true },
    });

    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    logger.info({ userId: newUser.id, email: newUser.email }, "Usuário registrado com sucesso");
    res.status(201).json({ user: newUser, token });
  } catch (error: any) {
    console.error(error);
    logger.error({ error }, "Erro no registro de usuário");
    res.status(500).json({ error: "Erro interno ao registrar usuário." });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      logger.warn({ email }, "Falha de login (email ou senha incorreta)");
      return res.status(401).json({ error: "Email ou senha inválidos." });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    logger.info({ userId: user.id }, "Login realizado com sucesso");
    const { passwordHash, ...userData } = user;
    res.status(200).json({ user: userData, token });
  } catch (error: any) {
    console.log(error)
    logger.error({ error }, "Erro no login do usuário");
    res.status(500).json({ error: "Erro interno ao fazer login." });
  }
};
