import {
  createRating,
  getAverageRating,
  getReviews,
} from "../controllers/rating.controller.js";

import { Router } from "express";

const router: Router = Router();

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
