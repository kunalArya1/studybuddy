import { Router, type Request, type Response } from "express";
import {
  forgotPassword,
  resetPassword,
  signIn,
  signOut,
  signUp,
} from "../controllers/auth.controller.js";

const router: Router = Router();

/**
 * @route POST /sign-in
 * @desc  User sign-in
 * @access Public
 */
router.route("/sign-in").post(signIn);

/**
 * @route POST /sign-up
 * @desc  User sign-up
 * @access Public
 */
router.route("/sign-up").post(signUp);

/**
 * @route POST /send-otp
 * @desc  User send-otp
 * @access Public
 */
router.route("/send-otp").post();
/**
 * @route POST /sign-out
 * @desc  User sign-out
 * @access Private
 */
router.route("/sign-out").get(signOut);
/**
 * @route POST /forgot-password
 * @desc  User forgot-password
 * @access Public
 */
router.route("/forgot-password").post(forgotPassword);
/**
 * @route POST /forgot-password-token
 * @desc  User forgot-password-token
 * @access Public
 */
router.route("/forgot-password-token").post(forgotPassword);
/**
 * @route POST /reset-password
 * @desc  User reset-password
 * @access Private
 */
router.route("/reset-password").get(resetPassword);
export default router;
