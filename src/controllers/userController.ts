import { createUser } from "../services/userService.ts";
import type { Request, Response } from "express";

export async function UserService(req: Request, res: Response) {
  try {

  } catch (err) {
    console.log(err)
  }
  res.json(await createUser(req.body.name));
}
