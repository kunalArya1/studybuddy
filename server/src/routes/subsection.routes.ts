import {
  addSubSection,
  deleteSubSection,
  updateSubSection,
} from "../controllers/subsection.controller.js";

import { Router } from "express";

const router: Router = Router();

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

export default router;
