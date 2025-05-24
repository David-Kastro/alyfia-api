import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(3, "Username deve ter no mínimo 3 caracteres."),
  email: z.string().email("Email inválido."),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres."),
});

export const loginSchema = z.object({
  email: z.string().email("Email inválido."),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres."),
});