import { Router, type Request, type Response } from "express";
import {
  forgotPassword,
  resetPassword,
  sendOtp,
  signIn,
  signOut,
  signUp,
} from "../controllers/auth.controller.js";

const router: Router = Router();

/**
 * @swagger
 * /auth/sign-in:
 *   post:
 *     summary: User sign-in
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: Password@123
 *     responses:
 *       200:
 *         description: Login successful
 */
router.route("/sign-in").post(signIn);

/**
 * @swagger
 * /auth/sign-up:
 *   post:
 *     summary: User sign-up
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *               - confirmPassword
 *               - otp
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Kunal
 *               lastName:
 *                 type: string
 *                 example: Kumar
 *               email:
 *                 type: string
 *                 example: kunal@gmail.com
 *               password:
 *                 type: string
 *                 example: Password@123
 *               confirmPassword:
 *                 type: string
 *                 example: Password@123
 *               accountType:
 *                 type: string
 *                 enum: [STUDENT, INSTRUCTOR]
 *                 example: STUDENT
 *               contactNumber:
 *                 type: string
 *                 example: "9876543210"
 *               otp:
 *                 type: string
 *                 example: "123456"
 */
router.route("/sign-up").post(signUp);

/**
 * @swagger
 * /auth/send-otp:
 *   post:
 *     summary: Send OTP to email
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@gmail.com
 */

router.route("/send-otp").post(sendOtp);

/**
 * @swagger
 * /auth/sign-out:
 *   get:
 *     summary: User sign-out
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logged out successfully
 */
router.route("/sign-out").get(signOut);

/**
 * @swagger
 * /auth/forgot-password-token:
 *   post:
 *     summary: Send password reset link
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@gmail.com
 */
router.route("/forgot-password").post(forgotPassword);

/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Reset password for logged-in user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [oldPassword, newPassword, confirmPassword]
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 example: OldPassword@123
 *               newPassword:
 *                 type: string
 *                 example: NewPassword@123
 *               confirmPassword:
 *                 type: string
 *                 example: NewPassword@123
 */
router.route("/reset-password").post(resetPassword);
export default router;
