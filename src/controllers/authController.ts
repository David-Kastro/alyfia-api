import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const saltRounds = 10;

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Username, email and password are required." });
    }

    // Verifica se já existe um usuário com o mesmo e-mail
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User already exists with this email." });
    }

    // Criptografa a senha
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Cria o usuário no banco
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

    // Gera um token JWT para o novo usuário
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET || "your_secret_here",
      { expiresIn: "7d" }
    );

    res.status(201).json({ user: newUser, token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "your_secret_here",
      { expiresIn: "7d" }
    );

    // Excluindo passwordHash da resposta
    const { passwordHash, ...userData } = user;

    res.status(200).json({ user: userData, token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
