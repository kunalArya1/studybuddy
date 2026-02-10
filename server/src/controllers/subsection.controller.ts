import { type Request, type Response, type NextFunction } from "express";

/**
 * @route  POST /add-sub-section
 * @desc   Add a new sub-section to a section
 * @access Private (Instructor only)
 */
export const addSubSection = async (req: Request, res: Response) => {
  res.json({ message: "add sub-section endpoint" });
};

/**
 * @route  POST /update-sub-section
 * @desc   Update an existing sub-section
 * @access Private (Instructor only)
 */
export const updateSubSection = async (req: Request, res: Response) => {
  res.json({ message: "update sub-section endpoint" });
};

/**
 * @route  POST /delete-sub-section
 * @desc   Delete a sub-section
 * @access Private (Instructor only)
 */
export const deleteSubSection = async (req: Request, res: Response) => {
  res.json({ message: "delete sub-section endpoint" });
};
