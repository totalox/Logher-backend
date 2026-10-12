import { UserService } from "../controllers/createController.ts";
import { Router } from "express";

export const Register = Router();

Register.post("/register", UserService);
