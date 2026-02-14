import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "../lib/prisma.js";
import { instace } from "../config/razorpay.js";
import * as crypto from "crypto";
import { mailerSender } from "../utils/mailSender.js";
import { paymentSuccessEmail } from "../mail/template/paymentSuccesfullMail.js";
import { courseEnrollmentEmail } from "../mail/template/courseEnrollmentEmail.js";

/**
 * @route  POST /capture-payment
 * @desc   Capture payment for a course purchase
 * @access Private
 */
export const capturePayment = async (req: Request, res: Response) => {
  try {
    const { courses } = req.body;
    const userId = req.user.decode.id;

    if (courses.length === 0) {
      return res.json({ success: false, message: "Please provide Course Id" });
    }

    let totalAmount = 0;

    for (const courseId in courses) {
      let course;

      try {
        course = await prisma.course.findUnique({
          where: {
            id: Number(courseId),
          },
        });

        if (!course) {
          return res
            .status(200)
            .json({ success: false, message: "Could not find the course" });
        }

        const alreadyEnrolled = await prisma.course.findFirst({
          where: {
            id: Number(courseId),
            students: {
              some: {
                id: Number(userId),
              },
            },
          },
        });

        if (!alreadyEnrolled) {
          return res.status(200).json({
            success: false,
            message: "Student is already enrolled",
          });
        }

        totalAmount += course.price;
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
          return res
            .status(500)
            .json({ success: false, message: error.message });
        }
      }
    }

    const currency = "INR";
    const options = {
      amount: totalAmount * 100,
      currency,
      recipt: Math.random().toString(),
    };

    try {
      const paymentResponse = await instace.orders.create(options);
      res.status(200).json({
        success: false,
        message: "Payment capture is done",
        data: paymentResponse,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        return res
          .status(500)
          .json({ success: false, mesage: "Could not Initiate Order" });
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        succes: false,
        message: `Internal server error ${error.message}`,
      });
    }
  }
};

/**
 * @route  POST /verify-payment
 * @desc   Verify payment status after capture
 * @access Private
 */
export const verifyPayment = async (req: Request, res: Response) => {
  try {
    const razorpay_order_id = req.body.razorpay_order_id;
    const razorpay_payment_id = req.body.razorpay_payment_id;
    const razorpay_signature = req.body.razorpay_signature;

    const courses = req.body.courses;
    const userId = req.user.decode.id;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !courses ||
      !userId
    ) {
      return res.status(200).json({
        success: false,
        message: "Payment falied",
      });
    }

    let body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", String(process.env.RAZORPAY_API_SECRET))
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // Enroll the sutdent in the course
      await enrollStudents(courses, userId, res);
      // return the response
      return res
        .status(200)
        .json({ success: true, message: "Payment Verified" });
    }
    return res
      .status(200)
      .json({ success: "false", message: "Payment Failed" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: `Internal Server Error ${error.message}`,
      });
    }
  }
};

const enrollStudents = async (courses: any, userId: Number, res: Response) => {
  try {
    if (!courses || !userId) {
      return res.status(400).json({
        success: false,
        message: "Please Provide data for Courses or UserId",
      });
    }

    for (const courseId of courses) {
      try {
        const result = await prisma.$transaction(async (tx: any) => {
          // 1️⃣ Enroll student in course
          const enrolledCourse = await tx.course.update({
            where: { id: Number(courseId) },
            data: {
              students: {
                connect: { id: Number(userId) },
              },
            },
          });

          // 2️⃣ Create course progress
          const courseProgress = await tx.courseProgress.create({
            data: {
              userId: Number(userId),
              courseId: Number(courseId),
            },
          });

          // 3️⃣ Add course to user
          const enrolledStudent = await tx.user.update({
            where: { id: Number(userId) },
            data: {
              courses: {
                connect: { id: Number(courseId) },
              },
              courseProgress: {
                connect: { id: courseProgress.id },
              },
            },
            select: {
              email: true,
              firstName: true,
            },
          });

          return { enrolledCourse, enrolledStudent };
        });

        // 4️⃣ Send email (outside transaction)
        await mailerSender(
          result.enrolledStudent.email,
          `Successfully Enrolled into ${result.enrolledCourse.courseName}`,
          courseEnrollmentEmail(
            result.enrolledCourse.courseName,
            result.enrolledStudent.name,
          ),
        );
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Course enrollment failed",
        });
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }
};

/**
 * @route  POST /send-payment-success-email
 * @desc   Send payment success confirmation email to the user
 * @access Private
 */
export const sendPaymentSuccessEmail = async (req: Request, res: Response) => {
  try {
    const { orderId, paymentId, amount } = req.body;
    const userId = req.user.id;

    if (!orderId || !paymentId || !amount) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all the fields" });
    }

    const studentEnrolled = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    });

    await mailerSender(
      studentEnrolled.email,
      "Payment Recieved",
      paymentSuccessEmail(studentEnrolled.name, amount, orderId, paymentId),
    );
    res.status(200).json({
      success: true,
      message: "Payment success mail sent",
    });
  } catch (error) {
    console.log("error in sending mail", error);
    return res
      .status(500)
      .json({ success: false, message: "Could not send email" });
  }
};
