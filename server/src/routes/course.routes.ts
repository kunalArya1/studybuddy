import { Router } from "express";
import {
  addSection,
  addSubSection,
  createCategory,
  createCourse,
  createRating,
  deleteCategory,
  deleteCourse,
  deleteSection,
  deleteSubSection,
  getAverageRating,
  getCategory,
  getCourseDetails,
  getCourses,
  getFullCourseDetails,
  getInstructorCourses,
  getReviews,
  updateCategory,
  updateCourse,
  updateCourseProgress,
  updateSection,
  updateSubSection,
} from "../controllers/course.controller.js";

const router: Router = Router();

/**
 * @route  POST /create-course
 * @desc   Create a new course
 * @access Private (Instructor only)
 */
router.route("/create-course").post(createCourse);
/**
 * @route  POST /add-section
 * @desc   Add a new section to a course
 * @access Private (Instructor only)
 */
router.route("/add-section").post(addSection);
/**
 * @route  POST /update-section
 * @desc   Update an existing section
 * @access Private (Instructor only)
 */
router.route("/update-section").post(updateSection);
/**
 * @route  DELETE /delete-section
 * @desc   Delete a section from a course
 * @access Private (Instructor only)
 */
router.route("delete-section").delete(deleteSection);
/**
 * @route  POST /add-sub-section
 * @desc   Add a new sub-section to a section
 * @access Private (Instructor only)
 */
router.route("/add-sub-section").post(addSubSection);

/**
 * @route  POST /update-sub-section
 * @desc   Update an existing sub-section
 * @access Private (Instructor only)
 */
router.route("/update-sub-section").post(updateSubSection);
/**
 * @route  POST /delete-sub-section
 * @desc   Delete a sub-section
 * @access Private (Instructor only)
 */
router.route("/delete-sub-section").post(deleteSubSection);
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

/**
 * @route  POST /create-category
 * @desc   Create a new course category
 * @access Private (Admin only)
 */
router.route("/create-category").post(createCategory);
/**
 * @route  POST /upadte-category
 * @desc   Update an existing course category
 * @access Private (Admin only)
 */
router.route("/upadte-category").post(updateCategory);
/**
 * @route  POST /get-category
 * @desc   Get all course categories
 * @access Public
 */
router.route("/get-category").post(getCategory);
/**
 * @route  POST /delete-category
 * @desc   Delete a course category
 * @access Private (Admin only)
 */
router.route("delete-category").post(deleteCategory);

/**
 * @route  POST /create-rating
 * @desc   Create a rating and review for a course
 * @access Private
 */
router.route("/create-rating").post(createRating);
/**
 * @route  GET /get-average-rating
 * @desc   Get average rating of a course
 * @access Public
 */
router.route("/get-average-rating").get(getAverageRating);
/**
 * @route  GET /get-reviews
 * @desc   Get all reviews for a course
 * @access Public
 */
router.route("get-reviews").get(getReviews);

export default router;
