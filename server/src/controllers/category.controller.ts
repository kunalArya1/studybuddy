import { type Request, type Response, type NextFunction } from "express";
/**
 * @route  POST /create-category
 * @desc   Create a new course category
 * @access Private (Admin only)
 */
export const createCategory = async (req: Request, res: Response) => {
  res.json({ message: "create category endpoint" });
};

/**
 * @route  POST /upadte-category
 * @desc   Update an existing course category
 * @access Private (Admin only)
 */
export const updateCategory = async (req: Request, res: Response) => {
  res.json({ message: "update category endpoint" });
};

/**
 * @route  POST /get-category
 * @desc   Get all course categories
 * @access Public
 */
export const getCategory = async (req: Request, res: Response) => {
  res.json({ message: "get category endpoint" });
};

/**
 * @route  POST /delete-category
 * @desc   Delete a course category
 * @access Private (Admin only)
 */
export const deleteCategory = async (req: Request, res: Response) => {
  res.json({ message: "delete category endpoint" });
};
