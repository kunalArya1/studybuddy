import { Router } from "express";
import {
  capturePayment,
  sendPaymentSuccessEmail,
  verifyPayment,
} from "../controllers/payment.controller.js";

const router: Router = Router();

/**
 * @route  POST /capture-payment
 * @desc   Capture payment for a course purchase
 * @access Private
 */
router.route("/capture-payment").post(capturePayment);
/**
 * @route  POST /verify-payment
 * @desc   Verify payment status after capture
 * @access Private
 */
router.route("/verify-payment").post(verifyPayment);

/**
 * @route  POST /send-payment-sucess-email
 * @desc   Send payment success confirmation email to the user
 * @access Private
 */
router.route("/send-payment-sucess-email").post(sendPaymentSuccessEmail);

export default router;
