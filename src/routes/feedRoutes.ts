import { Router } from "express";
import { getUserFeed } from "../controllers/feedController";

const router = Router();

// Endpoint para listar o feed do usuário por id
router.get("/", getUserFeed);

export default router;
