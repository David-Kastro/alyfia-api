// src/routes/topicRoutes.ts
import { Router } from "express";
import {
  getTopics,
  getTopicById,
  createTopic,
  updateTopic,
  deleteTopic,
  getTopicsByThreadWithCount,
} from "../controllers/topicController";

const router = Router();

router.get("/", getTopics);
router.get("/:id", getTopicById);
router.post("/", createTopic);
router.put("/:id", updateTopic);
router.delete("/:id", deleteTopic);
router.get("/thread/:threadId", getTopicsByThreadWithCount);

export default router;
