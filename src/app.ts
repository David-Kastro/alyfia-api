// src/app.ts
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import threadRoutes from "./routes/threadRoutes";
import topicRoutes from "./routes/topicRoutes";
import newsRoutes from "./routes/newsRoutes";
import issueRoutes from "./routes/issueRoutes";
import validationRoutes from "./routes/validationRoutes";
import authRoutes from "./routes/authRoutes";
import { authenticate } from "./middlewares/authMiddleware";
import cors from "cors";
import feedRoutes from "./routes/feedRoutes";
import { errorHandler } from "./middlewares/errorMiddleware";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

// Rotas públicas
app.use("/api/auth", authRoutes);

// Rotas da API
app.use("/api/users", authenticate, userRoutes);
app.use("/api/threads", authenticate, threadRoutes);
app.use("/api/topics", authenticate, topicRoutes);
app.use("/api/news", authenticate, newsRoutes);
app.use("/api/issues", authenticate, issueRoutes);
app.use("/api/validations", authenticate, validationRoutes);
app.use("/api/feed", authenticate, feedRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
