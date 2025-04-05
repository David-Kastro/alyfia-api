import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const saltRounds = 10; // Número de rounds para o bcrypt

// Listar todos os usuários (sem a senha)
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        score: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Buscar um usuário por ID (sem a senha)
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        score: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Criar um novo usuário, realizando a hash da senha no backend
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body; // Recebe a senha em texto puro
  try {
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
        score: 0,
      },
      select: {
        id: true,
        username: true,
        email: true,
        score: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Atualizar um usuário (se a senha for atualizada, realiza a hash)
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, email, password, score } = req.body;
  try {
    let dataToUpdate: {
      username?: string;
      email?: string;
      passwordHash?: string;
      score?: number;
    } = {
      username,
      email,
      score,
    };
    if (password) {
      const passwordHash = await bcrypt.hash(password, saltRounds);
      dataToUpdate.passwordHash = passwordHash;
    }
    const updatedUser = await prisma.user.update({
      where: { id },
      data: dataToUpdate,
      select: {
        id: true,
        username: true,
        email: true,
        score: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar um usuário
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedUser = await prisma.user.delete({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        score: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.status(200).json(deletedUser);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
