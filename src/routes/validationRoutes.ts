// src/routes/validationRoutes.ts
import { Router } from "express";
import {
  getValidations,
  getValidationById,
  createValidation,
  updateValidation,
  deleteValidation,
  getPendingValidationsForUser,
} from "../controllers/validationController";

const router = Router();

router.get("/", getValidations);
router.get("/pending", getPendingValidationsForUser); // Novo endpoint para validações pendentes
router.get("/:id", getValidationById);
router.post("/", createValidation);
router.put("/:id", updateValidation);
router.delete("/:id", deleteValidation);

export default router;
