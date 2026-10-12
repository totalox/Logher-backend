import { login } from "../controllers/loginController.ts";
import { Router } from "express";

export const Login = Router();

Login.post("/login", login);
