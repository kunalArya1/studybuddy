import { type Request, type Response, type NextFunction } from "express";

/**
 * @route  POST /capture-payment
 * @desc   Capture payment for a course purchase
 * @access Private
 */
export const capturePayment = async (req: Request, res: Response) => {
  res.json({
    message: "capture payment endpoint",
  });
};

/**
 * @route  POST /verify-payment
 * @desc   Verify payment status after capture
 * @access Private
 */
export const verifyPayment = async (req: Request, res: Response) => {
  res.json({
    message: "verify payment endpoint",
  });
};

/**
 * @route  POST /send-payment-success-email
 * @desc   Send payment success confirmation email to the user
 * @access Private
 */
export const sendPaymentSuccessEmail = async (req: Request, res: Response) => {
  res.json({
    message: "send payment success email",
  });
};
