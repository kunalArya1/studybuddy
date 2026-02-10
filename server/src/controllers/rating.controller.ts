import { type Request, type Response, type NextFunction } from "express";

/**
 * @route  POST /create-rating
 * @desc   Create a rating and review for a course
 * @access Private
 */
export const createRating = async (req: Request, res: Response) => {
  res.json({ message: "create rating endpoint" });
};

/**
 * @route  GET /get-average-rating
 * @desc   Get average rating of a course
 * @access Public
 */
export const getAverageRating = async (req: Request, res: Response) => {
  res.json({ message: "get average rating endpoint" });
};

/**
 * @route  GET /get-reviews
 * @desc   Get all reviews for a course
 * @access Public
 */
export const getReviews = async (req: Request, res: Response) => {
  res.json({ message: "get reviews endpoint" });
};
