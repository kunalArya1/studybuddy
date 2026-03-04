import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invlaid email"),
    password: z.string().min(6, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(6),
    accountType: z.enum(["STUDENT", "INSTRUCTOR", "ADMIN"]).optional(),
    otp: z.string().min(6, "OTP is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm Password do not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be six character long"),
});

export const resetPasswordSchema = z
  .object({
    oldPassword: z.string(),
    newPassword: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Password and Confirm Password do not match",
    path: ["confirmPassword"],
  });
