import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "../lib/prisma.js";
import otpGenrator from "otp-generator";
import { mailerSender } from "../utils/mailSender.js";
import { otpTemplate } from "../mail/template/otpMailTemplate.js";
import {
  resetPasswordSchema,
  signInSchema,
  signUpSchema,
} from "../utils/validator/auth.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { passwordUpdatedEmailTemplate } from "../mail/template/PasswordUpdate.js";
import { resetPasswordEmailTemplate } from "../mail/template/resetPasswordLinkTemplate.js";
import { string } from "zod";

/**
 * @route   POST /sign-in
 * @desc    Authenticate user and return access token
 * @access  Public
 */
export const signIn = async (req: Request, res: Response) => {
  try {
    const parsed = signInSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(403).json({
        succes: false,
        message: parsed.error.issues.map((issue) => issue.message),
      });
    }

    const { email, password } = parsed.data;

    // Check whether user is registred or not
    const isValidUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!isValidUser) {
      return res.status(401).json({
        succes: false,
        message: "User is not registred",
      });
    }

    if (!(await bcrypt.compare(password, isValidUser.password))) {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    const jwt_scret: string = String(process.env.JWT_SCRET);
    const token = jwt.sign(
      {
        email: isValidUser.email,
        id: isValidUser.id,
        accountType: isValidUser.accountType,
      },
      jwt_scret,
      {
        expiresIn: "24h",
      },
    );

    const { password: hashedPassword, ...userWithoutPassword } = isValidUser;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
    };

    res.cookie("token", token, options).status(200).json({
      succes: true,
      token,
      user: userWithoutPassword,
      message: "user sign-in successfull",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

/**
 * @route   POST /sign-up
 * @desc    Register a new user
 * @access  Public
 */
export const signUp = async (req: Request, res: Response) => {
  try {
    const parsed = signUpSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(403).send({
        success: false,
        message: parsed.error.issues.map((issue) => issue.message),
      });
    }

    let {
      firstName,
      lastName,
      email,
      password,
      accountType,
      contactNumber,
      otp,
    } = parsed.data;

    accountType = accountType ? accountType : "STUDENT";

    const isUser = await prisma.user.findUnique({
      where: { email },
    });

    if (isUser) {
      return res.status(401).json({
        succes: false,
        message: "User alreay registred!please sing-in",
      });
    }

    const otpResponse = await prisma.otp.findMany({
      where: {
        email,
      },
      orderBy: { createdAt: "desc" },
      take: 1,
    });

    const latestOtp = otpResponse[0];

    if (otpResponse?.length === 0) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    } else if (otp !== latestOtp?.otp) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let approved = true;
    if (accountType == "INSTRUCTOR") approved = false;

    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        accountType: accountType,
        contactNumber: contactNumber,
        name: firstName + lastName,
        active: true,
        approved: true,
        profile: {
          create: {
            gender: "Other",
            imageUrl: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
            about: "",
            dob: "",
            contactNumber: contactNumber,
          },
        },
      },
    });

    if (!user) {
      res.status(501).json({
        succes: false,
        message: "Something went wrong!while creating user",
      });
    }

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

/**
 * @route   POST /send-otp
 * @desc    Send a otp after registration
 * @access  Public
 */
export const sendOtp = async (req: Request, res: Response) => {
  try {
    const { email } = req?.body;
    // check whether is registred or not
    const isUser = await prisma.user.findUnique({
      where: { email },
    });

    // if registred do not need otp,login
    if (isUser) {
      return res.status(401).json({
        success: false,
        message: `User is Already Registered`,
      });
    }
    // generate the opt
    var otp: string = otpGenrator?.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    // check whether otp is already there
    const isOpt = await prisma.otp.findFirst({
      where: {
        email: email,
        otp: otp,
      },
    });
    console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", isOpt);
    // if otp is there genrate new otp
    while (isOpt) {
      otp = otpGenrator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
    }
    // add opt in database
    const createdOpt = await prisma.otp.create({
      data: {
        otp,
        email,
      },
    });

    console.log(`Create Otp is ${createdOpt}`);

    try {
      // send mail with otp to the user
      const mailResponse = await mailerSender(
        email,
        "Verification Email",
        otpTemplate(otp),
      );
      console.log("Email sent successfully: ", mailResponse?.response);
      console.log("mail repose 2 ", mailResponse);
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error occurred while sending email: ", error);
        throw error;
      }
    }
    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return res.status(500).json({ success: false, error: error.message });
    } else {
      console.error("Unknown error occurred");
    }
  }
};

/**
 * @route   POST /sign-out
 * @desc    Logout user and invalidate session/token
 * @access  Private
 */
export const signOut = async (req: Request, res: Response) => {
  try {
    res
      .clearCookie("token", {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({
        success: true,
        message: "user sign-out successfully",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};

/**
 * @route   POST /forgot-password
 * @desc    Send password reset link or OTP
 * @access  Public
 */
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    // get the toekn
    const {
      token,
      password,
      confirmPassword,
    }: {
      token: string;
      password: string;
      confirmPassword: string;
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(401).json({
        success: false,
        message: "Password not matching",
      });
    }

    const userDetials = await prisma.user.findFirst({
      where: { token: token },
    });

    // find the user

    if (!userDetials) {
      return res.status(404).json({
        success: false,
        message: "Token is invalid",
      });
    }

    if (userDetials!.resetpasswordExpriesIn! < Date.now()) {
      return res.status(401).json({
        success: false,
        message: "Token is expired, please regenerate your token",
      });
    }
    // then cahnge the password

    const hashedpassword = await bcrypt.hash(password, 10);

    const passwordUpdate = await prisma.user.update({
      where: { email: userDetials.email },
      data: { password: hashedpassword },
    });

    if (!passwordUpdate) {
      return res.status(501).json({
        succes: false,
        message: "Something went wrong while reseting password.",
      });
    }

    const mailResponse = await mailerSender(
      userDetials.email,
      "Your password has been upadted",
      passwordUpdatedEmailTemplate(userDetials.email, userDetials.name),
    );

    return res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while reseting password",
    });
  }
};

/**
 * @route   POST /forgot-password-token
 * @desc    Send mail to reset Password
 * @access  Public
 */
export const forgotPasswordToken = async (req: Request, res: Response) => {
  try {
    // get user email
    const { email } = req.body;

    const isUser = await prisma.user.findUnique({
      where: { email },
    });

    // check whether user is aviable

    if (!isUser) {
      return res.status(404).json({
        success: false,
        message: "User is not registred.",
      });
    }
    // create a token and store in db
    const token = crypto.randomUUID();

    // update the token and the expires time in the dataabse
    const updateTokenAndTime = await prisma.user.update({
      where: { email },
      data: {
        token: token,
        resetpasswordExpriesIn: Date.now() + 5 * 60 * 100,
      },
    });
    // make a link and send the link to the user
    const url = `${req.protocol}://${req.get("host")}/update-password/${token}`;
    // send the url
    const mailResponse = await mailerSender(
      email,
      "Password Reset Link",
      resetPasswordEmailTemplate(email, url),
    );

    //return response
    return res.status(200).json({
      success: true,
      message: "Email sent successfully, please check email and change pwd",
    });

    // it token is vaid then change the password
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset password mail",
    });
  }
};

/**
 * @route   POST /reset-password
 * @desc    Reset user password using token/OTP
 * @access  Public
 */
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const userId: number = req?.user.id;

    const parsed = resetPasswordSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(403).send({
        success: false,
        message: parsed.error.issues.map((issue) => issue.message),
      });
    }

    const { oldPassword, newPassword, confirmPassword } = parsed.data;
    const userDetials = await prisma.user.findUnique({
      where: { id: userId },
    });

    const isPasswordCorrect = await bcrypt.compare(
      oldPassword,
      userDetials!.password!,
    );

    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ success: false, message: "The password is incorrect" });
    }

    const encryptedPassword = await bcrypt.hash(newPassword, 10);

    const updateUserDetials = await prisma.user.update({
      where: { id: userId },
      data: {
        password: encryptedPassword,
      },
    });

    try {
      const emailResponse = await mailerSender(
        updateUserDetials.email,
        "Your password has been upadted",
        passwordUpdatedEmailTemplate(
          updateUserDetials.email,
          updateUserDetials.name,
        ),
      );
      console.log("Email sent successfully:", emailResponse?.response);
    } catch (error) {
      // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
      if (error instanceof Error) {
        console.error("Error occurred while sending email:", error);
        return res.status(500).json({
          success: false,
          message: "Error occurred while sending email",
          error: error.message,
        });
      } else {
        console.error("unkown error", error);
      }
    }

    // Return success response
    return res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error

    if (error instanceof Error) {
      console.error("Error occurred while updating password:", error);
      return res.status(500).json({
        success: false,
        message: "Error occurred while updating password",
        error: error.message,
      });
    }
  }
};
