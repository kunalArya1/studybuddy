import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import authRouter from "./routes/auth.routes.js";

const app: Application = express();

app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello from server",
  });
});

export default app;
