import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import authRouter from "./routes/auth.routes.js";
import fileUpload from "express-fileupload";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import passport from "passport";
dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   }),
// );

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/auth", authRouter);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./temp",
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello from server",
  });
});

export default app;
