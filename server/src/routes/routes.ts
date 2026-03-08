import { Router } from "express";
import authRouter from "./auth.routes.js";
import profileRouter from "./profile.routes.js";
import courseRouter from "./course.routes.js";
import categoryRouter from "./category.routes.js";
import sectionRouter from "./section.routes.js";
import subsectionRouter from "./subsection.routes.js";
import ratingRouter from "./rating.routes.js";
import paymentRouter from "./payment.routes.js";
import contactRouter from "./contact.routes.js";

const router: Router = Router();

router.use("/auth", authRouter);
router.use("/profile", profileRouter);
router.use("/courses", courseRouter);
router.use("/category", categoryRouter);
router.use("/section", sectionRouter);
router.use("/subsection", subsectionRouter);
router.use("/rating", ratingRouter);
router.use("/payment", paymentRouter);
router.use("/contact", contactRouter);

export default router;
