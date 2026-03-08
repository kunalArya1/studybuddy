import {
  categoryPageDetails,
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../controllers/category.controller.js";

import { Router } from "express";
import { isAdmin, isAuth } from "../middlewares/auth.middleware.js";

const router: Router = Router();
/**
 * @route  POST /create-category
 * @desc   Create a new course category
 * @access Private (Admin only)
 */
router.route("/create-category").post(isAuth, isAdmin, createCategory);
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
router.route("/get-category").get(getCategory);
/**
 * @route  POST /delete-category
 * @desc   Delete a course category
 * @access Private (Admin only)
 */
router.route("delete-category").post(deleteCategory);

router.route("/get-category-page-details/:id").post(categoryPageDetails);

export default router;
