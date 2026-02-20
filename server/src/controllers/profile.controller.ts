import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "../lib/prisma.js";
import { uplodImage } from "../utils/ImageUploder.js";
import type { UploadedFile } from "express-fileupload";
import { convertSecondsToDuration } from "../utils/secToDuration.js";

/**
 * @route  GET /get-user-details
 * @desc   Get logged-in user details
 * @access Private
 */
export const getUserDetails = async (req: Request, res: Response) => {
  try {
    const userId = req.user.decode.id;

    const userDetails = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
      includes: {
        profile: true,
      },
    });

    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      data: userDetails,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: `Internal Server Error ${error.message}`,
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
    const userId = req.user.decode.id;
    const { dateOfBirth = "", about = "", contactNumber } = req.body;

    const user = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        profile: {
          update: {
            dateOfBirth,
            about,
            contactNumber,
          },
        },
      },
    });

    if (!user) {
      return res.status(500).json({
        success: false,
        message: `Something Went wrong while updating the user`,
      });
    }

    res.status(200).json({
      success: true,
      message: `User details updated successfully`,
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: `Internal Server Error ${error.message}`,
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
    const userId = req.user.decode.id;

    await prisma.$transaction(async (tx: any) => {
      const user = await tx.user.findUnique({
        where: { id: Number(userId) },
        include: {
          profile: true,
          courses: true,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      await tx.user.update({
        where: { id: Number(userId) },
        data: {
          courses: {
            set: [],
          },
        },
      });

      if (user.profile) {
        await tx.profile.delete({
          where: { id: user.profile.id },
        });
      }

      await tx.user.delete({
        where: { id: Number(userId) },
      });
    });

    res.status(200).json({
      success: true,
      message: "User profile deleted succcessfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: `Internal Server Error ${error.message}`,
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
    const displayPicture = req.files?.displayPicture;
    const userId = req.user.id;

    if (!displayPicture) {
      return res.status(400).json({
        success: false,
        message: "Display picture is required",
      });
    }

    // Upload to Cloudinary
    const image = await uplodImage(
      displayPicture as UploadedFile,
      String(process.env.FOLDER_NAME),
    );

    // Update user
    const updatedProfile = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        image: image.secure_url,
      },
      select: {
        id: true,
        image: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Image updated successfully",
      data: updatedProfile,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: `Internal Server Error ${error.message}`,
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
    const userId = Number(req.user.id);

    const userDetails = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        courses: {
          include: {
            courseContent: {
              include: {
                subSection: true,
              },
            },
          },
        },
        courseProgress: true,
      },
    });

    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const coursesWithProgress = userDetails.courses.map((course: any) => {
      let totalDurationInSeconds = 0;

      let totalSubsections = 0;

      course.courseContent.forEach((section: any) => {
        totalDurationInSeconds += section.subSection.reduce(
          (acc: any, curr: any) => acc + Number(curr.timeDuration),
          0,
        );

        totalSubsections += section.subSection.length;
      });

      const progress = userDetails.courseProgress.find(
        (p: any) => p.courseId === course.id,
      );

      const completedVideos = progress?.completedSubSections.length || 0;

      const progressPercentage =
        totalSubsections === 0
          ? 100
          : Number(((completedVideos / totalSubsections) * 100).toFixed(2));

      return {
        ...course,
        totalDuration: convertSecondsToDuration(totalDurationInSeconds),
        progressPercentage,
      };
    });

    return res.status(200).json({
      success: true,
      data: coursesWithProgress,
    });
  } catch (error: any) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: `Internal Server Error ${error.message}`,
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
  try {
    const instructorId = req.user.id;

    const courses = await prisma.course.findMany({
      where: {
        instructorId: Number(instructorId),
      },
      select: {
        id: true,
        courseName: true,
        courseDescription: true,
        price: true,

        _count: {
          select: {
            students: true, // relation field name
          },
        },
      },
    });

    const courseData = courses.map((course: any) => {
      const totalStudentsEnrolled = course._count.students;
      const totalAmountGenerated = totalStudentsEnrolled * course.price;

      return {
        id: course.id,
        courseName: course.courseName,
        courseDescription: course.courseDescription,
        totalStudentsEnrolled,
        totalAmountGenerated,
      };
    });

    return res.status(200).json({
      success: true,
      courses: courseData,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: `Internal Server Error ${error.message}`,
      });
    }
  }
};
