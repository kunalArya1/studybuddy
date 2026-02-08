import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const token =
    req.cookies.token ||
    req.body.token ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token is missing",
    });
  }

  try {
    const decode = jwt.verify(token, String(process.env.JWT_SECRET));
    req.user = decode;
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "token is invalid",
    });
  }
  next();
};

export const isStudent = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user.accountType !== "STUDENT") {
      return res.status(401).json({
        success: false,
        message: "This is a protected route for Students only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role cannot be verified, please try again",
    });
  }
};
export const isInstructor = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (req.user.accountType !== "INSTRUCTOR") {
      return res.status(401).json({
        success: false,
        message: "This is a protected route for Instructor only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role cannot be verified, please try again",
    });
  }
};
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user.accountType !== "ADMIN") {
      return res.status(401).json({
        success: false,
        message: "This is a protected route for Admin only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role cannot be verified, please try again",
    });
  }
};
