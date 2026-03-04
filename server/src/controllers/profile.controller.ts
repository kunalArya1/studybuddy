import { type Request, type Response, type NextFunction } from "express";

/**
 * @route  GET /get-user-details
 * @desc   Get logged-in user details
 * @access Private
 */
export const getUserDetails = async (req: Request, res: Response) => {
  res.json({
    message: "user details endpoint",
  });
};

/**
 * @route  PUT /update-profile
 * @desc   Update logged-in user's profile
 * @access Private
 */
export const updateProfile = async (req: Request, res: Response) => {
  res.json({
    mesaage: "update profile endpoint",
  });
};

/**
 * @route  DELETE /delete-profile
 * @desc   Delete logged-in user's profile
 * @access Private
 */
export const deleteProfile = async (req: Request, res: Response) => {
  res.json({
    message: "delete profile endpoint",
  });
};

/**
 * @route  GET /enrolled-course
 * @desc   Get all courses enrolled by the user
 * @access Private
 */
export const enrolledCourses = async (req: Request, res: Response) => {
  res.json({
    message: "enrolled courese endpoint",
  });
};

/**
 * @route  PUT /update-profile-image
 * @desc   Update user's profile image
 * @access Private
 */
export const updateProfileImage = async (req: Request, res: Response) => {
  res.json({
    message: "update profile picture endpoint",
  });
};

/**
 * @route  GET /instructor-dashboard
 * @desc   Get instructor dashboard data
 * @access Private (Instructor only)
 */
export const instructorDashboard = async (req: Request, res: Response) => {
  res.json({
    message: "instructor dashboard endpoint",
  });
};
