import { Router } from "express";
import { contact } from "../controllers/contact.controller.js";

const router: Router = Router();

router.route("/connect").post(contact);

export default router;
