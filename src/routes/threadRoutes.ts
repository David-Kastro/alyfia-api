// src/routes/threadRoutes.ts
import { Router } from "express";
import {
  getThreads,
  getThreadById,
  createThread,
  updateThread,
  deleteThread,
  subscribeToThread,
} from "../controllers/threadController";

const router = Router();

router.get("/", getThreads);
router.get("/:id", getThreadById);
router.post("/", createThread);
router.put("/:id", updateThread);
router.delete("/:id", deleteThread);
router.post("/subscribe", subscribeToThread);

export default router;
