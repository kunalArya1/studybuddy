import { type Request, type Response, type NextFunction } from "express";
import {
  addSectionSchema,
  deleteSectionSchema,
  updateSectionSchema,
} from "../utils/validator/course.schema.js";
import { prisma } from "../lib/prisma.js";

/**
 * @route  POST /add-section
 * @desc   Add a new section to a course
 * @access Private (Instructor only)
 */
export const addSection = async (req: Request, res: Response) => {
  try {
    const parsed = addSectionSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "All filed are required",
      });
    }

    const { sectionName, courseId } = parsed.data;

    const newSection = await prisma.course.update({
      where: { id: Number(courseId) },
      data: {
        courseContent: {
          create: {
            sectionName,
          },
        },
      },
    });

    if (!newSection) {
      return res.status(500).json({
        succes: false,
        message: "something went wrong while creating the newsection",
      });
    }

    res.status(200).json({
      success: true,
      message: "section added successfully",
      data: newSection,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: `Internal server error ${error.message}`,
      });
    }
  }
};

/**
 * @route  POST /update-section
 * @desc   Update an existing section
 * @access Private (Instructor only)
 */
export const updateSection = async (req: Request, res: Response) => {
  try {
    const parsed = updateSectionSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "All filed are required",
      });
    }

    const { sectionName, sectionId, courseId } = parsed.data;

    const [updatedSection, course] = await prisma.$transaction([
      prisma.section.update({
        where: { id: Number(sectionId) },
        data: { sectionName: sectionName },
      }),

      prisma.course.findUnique({
        where: { id: Number(courseId) },
        include: {
          courseContent: {
            include: {
              subSection: true,
            },
          },
        },
      }),
    ]);

    return res.status(200).json({
      success: true,
      message: "Section is updated successfully",
      data: course,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: `Internal server error ${error.message}`,
      });
    }
  }
};

/**
 * @route  DELETE /delete-section
 * @desc   Delete a section from a course
 * @access Private (Instructor only)
 */
export const deleteSection = async (req: Request, res: Response) => {
  try {
    const parsed = deleteSectionSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "All filed are required",
      });
    }

    const { sectionId, courseId } = parsed.data;

    const section = await prisma.section.findUnique({
      where: { id: Number(sectionId) },
    });

    if (!section) {
      return res.status(404).json({
        success: true,
        message: "section not found",
      });
    }

    await prisma.section.delete({
      where: { id: Number(sectionId) },
    });

    const course = await prisma.course.findUnique({
      where: { id: Number(courseId) },
      include: {
        courseContent: {
          include: {
            subSection: true,
          },
        },
      },
    });

    res.status(200).json({
      suceess: true,
      message: "section is deleted succesfully",
      data: course,
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
