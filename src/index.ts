import express, { type Response, type Request, type Express } from "express";
import { Auth } from "./routers/userRouter.ts";

const app: Express = express();

const port = 5500;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hi!");
});

app.use(express.json());

// Routers
app.use("/", Auth);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
