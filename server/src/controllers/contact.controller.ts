import { type Request, type Response, type NextFunction } from "express";

export const contact = async (req: Request, res: Response) => {
  res.json({
    message: "contact us endpoint",
  });
};
