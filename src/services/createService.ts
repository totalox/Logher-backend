import { db } from "../prisma/db.ts";
import { userType } from "../schemas/userSchema.ts";
import bcrypt from "bcrypt";

export async function createUser(data: userType) {
  const passHash = bcrypt.hashSync(data.password, 10);
  return await db.orm.public.User.create({
    name: data.name,
    email: data.email,
    password: passHash,
  });
}
