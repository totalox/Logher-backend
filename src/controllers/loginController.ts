import { loginUser } from "../services/loginService.ts";
import type { Request, Response } from "express";

export async function login(req: Request, res: Response) {
    const valor =  await loginUser(req.body);
    res.json(valor);
}
