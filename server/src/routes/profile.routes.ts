import { Router } from "express";
import {
  deleteProfile,
  enrolledCourses,
  getUserDetails,
  instructorDashboard,
  updateProfile,
  updateProfileImage,
} from "../controllers/profile.controller.js";

const router: Router = Router();

/**
 * @route GET /get-user-details
 * @desc  Get logged-in user details
 * @access Private
 */
router.route("/get-user-details").get(getUserDetails);

/**
 * @route PUT /update-profile
 * @desc  Update user profile details
 * @access Private
 */
router.route("update-profile").put(updateProfile);
/**
 * @route DELETE /delete-profile
 * @desc  Delete user profile
 * @access Private
 */
router.route("delete-profile").delete(deleteProfile);
/**
 * @route GET /enrolled-course
 * @desc  Get all courses enrolled by the user
 * @access Private
 */
router.route("/enrolled-course").get(enrolledCourses);
/**
 * @route PUT /update-profile-image
 * @desc  Update user profile image
 * @access Private
 */
router.route("update-profile-image").put(updateProfileImage);
/**
 * @route GET /instructor-dashboard
 * @desc  Get instructor dashboard analytics and data
 * @access Private (Instructor only)
 */
router.route("instructor-dashboard").get(instructorDashboard);

export default router;
