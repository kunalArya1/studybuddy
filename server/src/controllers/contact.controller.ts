import { type Request, type Response, type NextFunction } from "express";
import { contactSchema } from "../utils/validator/contact.schema.js";
import { mailerSender } from "../utils/mailSender.js";
import { contactUsEmail } from "../mail/template/contactUs.js";

export const contact = async (req: Request, res: Response) => {
  try {
    const paresed = contactSchema.safeParse(req.body);

    if (!paresed.success) {
      return res.status(400).json({
        success: false,
        message: "All field is required",
      });
    }

    const { email, firstname, lastname, message, phoneNo, countryCode } =
      paresed.data;

    try {
      const emailRes = await mailerSender(
        email,
        "Your Data send successfully",
        contactUsEmail(
          email,
          firstname,
          lastname,
          message,
          phoneNo,
          countryCode,
        ),
      );
      console.log("Email Res ", emailRes);
      return res.json({
        success: true,
        message: "Email send successfully",
      });
    } catch (error) {
      console.log("Error", error);
      if (error instanceof Error) {
        console.log("Error message :", error.message);
        return res.status(500).json({
          success: false,
          message: "Something went wrong while sending mail",
        });
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error message :", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
};
