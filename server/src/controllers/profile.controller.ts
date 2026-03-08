import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "../lib/prisma.js";
import { me } from "./auth.controller.js";
import { uplodImage } from "../utils/ImageUploder.js";
import type { UploadedFile } from "express-fileupload";

/**
 * @route  GET /get-user-details
 * @desc   Get logged-in user details
 * @access Private
 */
export const getUserDetails = async (req: Request, res: Response) => {
  try {
    const email = req.user?.email;

    const userDetials = await prisma.user.findUnique({
      where: { email, active: true },
      include: {
        profile: true,
      },
    });
    if (!userDetials) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User details fetched successfully",
      data: userDetials,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

/**
 * @route  PUT /update-profile
 * @desc   Update logged-in user's profile
 * @access Private
 */
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { gender, dob, about, contactNumber } = req.body;
    const updatedProfile = await prisma.profile.update({
      where: { userId: req.user?.id },
      data: {
        gender,
        dob,
        about,
        contactNumber,
      },
    });
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedProfile,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

/**
 * @route  DELETE /delete-profile
 * @desc   Delete logged-in user's profile
 * @access Private
 */
export const deleteProfile = async (req: Request, res: Response) => {
  try {
    // before deleting the profile,unerolle the user from all the courses
    const courses = await prisma.course.findMany({
      where: {
        students: {
          some: {
            id: req.user?.id,
          },
        },
      },
      select: { id: true },
    });

    await Promise.all(
      courses.map((course) =>
        prisma.course.update({
          where: { id: course.id },
          data: {
            students: {
              disconnect: { id: req.user?.id },
            },
          },
        }),
      ),
    );

    await prisma.user.update({
      where: {
        id: req.user?.id,
      },
      data: {
        active: false,
      },
    });

    res.status(200).json({
      success: true,
      message: "Profile deleted successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

/**
 * @route  GET /enrolled-course
 * @desc   Get all courses enrolled by the user
 * @access Private
 */
export const enrolledCourses = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const enrolledCourses = await prisma.course.findMany({
      where: {
        students: {
          some: {
            id: Number(userId),
          },
        },
      },
    });
    res.status(200).json({
      success: true,
      message: "Enrolled courses fetched successfully",
      data: enrolledCourses,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

/**
 * @route  PUT /update-profile-image
 * @desc   Update user's profile image
 * @access Private
 */
export const updateProfileImage = async (req: Request, res: Response) => {
  try {
    const profileImage = req?.files?.profileImage as UploadedFile;

    const response = await uplodImage(profileImage, "profileImage");
    const url = response.secure_url;

    await prisma.profile.update({
      where: { userId: req.user?.id },
      data: {
        imageUrl: url,
      },
    });
    res.status(200).json({
      success: true,
      message: "Profile image updated successfully",
      data: url,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

/**
 * @route  GET /instructor-dashboard
 * @desc   Get instructor dashboard data
 * @access Private (Instructor only)
 */
export const instructorDashboard = async (req: Request, res: Response) => {
  res.json({
    message: "instructor dashboard endpoint",
  });
};
