import { createUser } from "../services/createService.ts";
import type { Request, Response } from "express";

export async function UserService(req: Request, res: Response) {
  const variavel = await createUser(req.body);
  res.json(variavel)
}
