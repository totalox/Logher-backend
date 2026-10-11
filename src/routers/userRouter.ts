import { UserService } from "../controllers/userController.ts";
import { Router } from "express";

export const Auth = Router();

Auth.post("/", UserService)


