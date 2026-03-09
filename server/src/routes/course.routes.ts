import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getCourseDetails,
  getCourses,
  getFullCourseDetails,
  getInstructorCourses,
  updateCourse,
  updateCourseProgress,
} from "../controllers/course.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router: Router = Router();

/**
 * @route  POST /create-course
 * @desc   Create a new course
 * @access Private (Instructor only)
 */
router.route("/create-course").post(isAuth, createCourse);

/**
 * @route  GET /get-courses
 * @desc   Get all available courses
 * @access Public
 */
router.route("/get-courses").get(getCourses);
/**
 * @route  POST /get-course-detials
 * @desc   Get basic details of a course
 * @access Public
 */
router.route("/get-course-detials").post(getCourseDetails);
/**
 * @route  POST /get-full-course-detials
 * @desc   Get full course details including sections and sub-sections
 * @access Private
 */
router.route("/get-full-course-detials").post(getFullCourseDetails);
/**
 * @route  POST /update-course
 * @desc   Update course details
 * @access Private (Instructor only)
 */
router.route("/update-course").post(updateCourse);
/**
 * @route  GET /get-instructor-course
 * @desc   Get all courses created by the instructor
 * @access Private (Instructor only)
 */
router.route("/get-instructor-course").get(getInstructorCourses);
/**
 * @route  DELETE /delete-course
 * @desc   Delete a course
 * @access Private (Instructor only)
 */
router.route("/delete-course").delete(deleteCourse);
/**
 * @route  POST /update-course-progress
 * @desc   Update course progress for a user
 * @access Private
 */
router.route("/update-course-progress").post(updateCourseProgress);

export default router;
