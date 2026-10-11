import { db } from "../prisma/db.ts";

interface CreateUserInput {
  name: string;
  email: string;
  passwordHash: string;
}

export async function createUser(data: CreateUserInput) {
  return await db.orm.public.User.create({
    name: data.name,
    email: data.email,
    passwordHash: data.passwordHash,
  });
}
