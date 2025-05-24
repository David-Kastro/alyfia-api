import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`[${new Date().toISOString()}] Error:`, err);
  
  res.status(err.statusCode || 500).json({
    error: err.message || "Erro interno do servidor."
  });
};