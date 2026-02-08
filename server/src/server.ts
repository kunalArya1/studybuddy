import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import authRouter from "./routes/auth.routes.js";
import fileUpload from "express-fileupload";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";

const app: Application = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", authRouter);
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
