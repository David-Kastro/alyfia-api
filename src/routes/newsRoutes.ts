import { Router } from "express";
import {
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
  getNewsByThread,
} from "../controllers/newsController";

const router = Router();

router.get("/", getNews);
router.get("/:id", getNewsById);
router.post("/", createNews);
router.put("/:id", updateNews);
router.delete("/:id", deleteNews);
router.get("/thread/:threadId", getNewsByThread);

export default router;
