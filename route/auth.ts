import { Router } from "express";
import { register } from "../controller/auth";

export const authRouter = Router();

authRouter.post("/register", register);
