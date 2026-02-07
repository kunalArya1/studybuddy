import { type Request, type Response, type NextFunction } from "express";

/**
 * @route   POST /sign-in
 * @desc    Authenticate user and return access token
 * @access  Public
 */
export const signIn = async (req: Request, res: Response) => {
  res.json({
    message: "sign-in routes",
  });
};

/**
 * @route   POST /sign-up
 * @desc    Register a new user
 * @access  Public
 */
export const signUp = async (req: Request, res: Response) => {
  res.json({
    message: "sign-up routes",
  });
};
/**
 * @route   POST /send-otp
 * @desc    Send a otp after registration
 * @access  Public
 */
export const sendOtp = async (req: Request, res: Response) => {
  res.json({
    message: "sign-up routes",
  });
};

/**
 * @route   POST /sign-out
 * @desc    Logout user and invalidate session/token
 * @access  Private
 */
export const signOut = async (req: Request, res: Response) => {
  res.json({
    message: "sign-out routes",
  });
};

/**
 * @route   POST /forgot-password
 * @desc    Send password reset link or OTP
 * @access  Public
 */
export const forgotPassword = async (req: Request, res: Response) => {
  res.json({
    message: "sign-out routes",
  });
};

/**
 * @route   POST /forgot-password-token
 * @desc    Send mail to reset Password
 * @access  Public
 */
export const forgotPasswordToken = async (req: Request, res: Response) => {
  res.json({
    message: "sign-out routes",
  });
};

/**
 * @route   POST /reset-password
 * @desc    Reset user password using token/OTP
 * @access  Public
 */
export const resetPassword = async (req: Request, res: Response) => {
  res.json({
    message: "sign-out routes",
  });
};
