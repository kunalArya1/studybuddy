import { z } from "zod";

//const { email, firstname, lastname, message, phoneNo, countrycode } = req.body;
export const contactSchema = z.object({
  email: z.email("Invalid email"),
  firstname: z.string().min(2, "First name is required"),
  lastname: z.string().min(2, "Last name is required"),
  message: z.string().min(30, "Message should be at least 30 character long"),
  phoneNo: z.string().min(10, "Number should be 10 digit"),
  countryCode: z.string().min(3, "Country code is required"),
});
