import express, { type Response, type Request, type Express } from "express";
import { Register } from "./routers/createRouter.ts";
import { Login } from "./routers/loginRouter.ts";

const app: Express = express();

const port = 5500;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hi!");
});

app.use(express.json());

// Routers
app.use("/register", Register);

app.use("/login", Login);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
