import { type Request, type Response, type NextFunction } from "express";

/**
 * @route  POST /add-section
 * @desc   Add a new section to a course
 * @access Private (Instructor only)
 */
export const addSection = async (req: Request, res: Response) => {
  res.json({ message: "add section endpoint" });
};

/**
 * @route  POST /update-section
 * @desc   Update an existing section
 * @access Private (Instructor only)
 */
export const updateSection = async (req: Request, res: Response) => {
  res.json({ message: "update section endpoint" });
};

/**
 * @route  DELETE /delete-section
 * @desc   Delete a section from a course
 * @access Private (Instructor only)
 */
export const deleteSection = async (req: Request, res: Response) => {
  res.json({ message: "delete section endpoint" });
};
