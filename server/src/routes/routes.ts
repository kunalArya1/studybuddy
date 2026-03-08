import { Router } from "express";
import authRouter from "./auth.routes.js";
import profileRouter from "./profile.routes.js";
import courseRouter from "./course.routes.js";
import categoryRouter from "./category.routes.js";

const router: Router = Router();

router.use("/auth", authRouter);
router.use("/profile", profileRouter);
router.use("/courses", courseRouter);
router.use("/category", categoryRouter);

export default router;
