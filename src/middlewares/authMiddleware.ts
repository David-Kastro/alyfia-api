import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: { userId: string; email: string };
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "your_secret_here",
    (err, decoded: any) => {
      if (err) {
        return res.status(401).json({ error: "Token inválido ou expirado." });
      }

      req.user = { userId: decoded.userId, email: decoded.email };
      next();
    }
  );
};
