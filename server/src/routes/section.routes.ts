import {
  addSection,
  deleteSection,
  updateSection,
} from "../controllers/section.controller.js";
import { Router } from "express";

const router: Router = Router();

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

export default router;
