import { Router } from "express";
import { register, login } from "../controllers/authController";
import { loginSchema, registerSchema } from "../validators/authValidators";

const router = Router();

router.post("/register", async (req, res, next) => {
  try {
    const data = registerSchema.parse(req.body);
    req.body = data;
    await register(req, res);
  } catch (err: any) {
    console.error(err);
    next({ statusCode: 400, message: err.errors });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const data = loginSchema.parse(req.body);
    req.body = data;
    await login(req, res);
  } catch (err: any) {
    next({ statusCode: 400, message: err.errors });
  }
});

export default router;
