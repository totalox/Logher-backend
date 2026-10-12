import { userType } from "../schemas/userSchema.ts";
import { db } from "../prisma/db.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function loginUser(data: userType) {
  // Desestruturação do user
  const [user] = await db.orm.public.User.where((e) =>
    e.email.eq(data.email),
  ).all();

  if (!user) {
    return;
  }

  // Match de senha hashshada
  const matchPassword = bcrypt.compareSync(data.password, user.password);

  if (matchPassword) {
    const variavel = jwt.sign(
      {
        email: user.email,
      },
      String(process.env.JWT_ENV),
      {
        expiresIn: "1h",
      },
    );
    return variavel;
  } else {
    console.log("bus peidou molhado (senha falhou)");
  }
}
