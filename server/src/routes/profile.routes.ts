import { Router } from "express";

const router: Router = Router();

/**
 * @route GET /get-user-details
 * @desc  Get logged-in user details
 * @access Private
 */
router.route("/get-user-details").get();

/**
 * @route PUT /update-profile
 * @desc  Update user profile details
 * @access Private
 */
router.route("update-profile").put();
/**
 * @route DELETE /delete-profile
 * @desc  Delete user profile
 * @access Private
 */
router.route("delete-profile").delete();
/**
 * @route GET /enrolled-course
 * @desc  Get all courses enrolled by the user
 * @access Private
 */
router.route("/enrolled-course").get();
/**
 * @route PUT /update-profile-image
 * @desc  Update user profile image
 * @access Private
 */
router.route("update-profile-image").put();
/**
 * @route GET /instructor-dashboard
 * @desc  Get instructor dashboard analytics and data
 * @access Private (Instructor only)
 */
router.route("instructor-dashboard").get();


export default router;
