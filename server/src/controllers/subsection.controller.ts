import { type Request, type Response, type NextFunction } from "express";
import {
  addSubsectionSchema,
  deleteSubsectionShcema,
  updateSubsectionSchema,
} from "../utils/validator/course.schema.js";
import { uplodImage } from "../utils/ImageUploder.js";
import { prisma } from "../lib/prisma.js";

/**
 * @route  POST /add-sub-section
 * @desc   Add a new sub-section to a section
 * @access Private (Instructor only)
 */
export const addSubSection = async (req: Request, res: Response) => {
  try {
    const parsed = addSubsectionSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "All field are required",
      });
    }

    const { sectionId, title, description } = parsed.data;
    const video = req!.files!.video;

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "video is required",
      });
    }

    const vidoeUpload = await uplodImage(video, process.env.FOLDER_NAME);

    const subSection = await prisma.subSection.create({
      data: {
        title,
        description,
        timeDuration: `${vidoeUpload.duration}`,
        videoUrl: vidoeUpload.secure_url,
      },
      section: {
        connect: {
          id: Number(sectionId),
        },
      },
    });

    const updateScetion = await prisma.Seciton.findUnique({
      where: { id: Number(sectionId) },
      include: {
        subSection: true,
      },
    });

    res.status(200).json({
      succes: true,
      message: "subsection created succesfully",
      data: updateScetion,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error creating new sub-section:", error);
      return res.status(500).json({
        success: true,
        message: `Internal Server Error ${error.message}`,
      });
    }
  }
};

/**
 * @route  POST /update-sub-section
 * @desc   Update an existing sub-section
 * @access Private (Instructor only)
 */
export const updateSubSection = async (req: Request, res: Response) => {
  try {
    const parsed = updateSubsectionSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "All fileds are required",
      });
    }

    const { sectionId, subSectionId, title, description } = parsed.data;

    const updateData: any = {};

    if (title !== undefined) {
      updateData.title = title;
    }
    if (description !== undefined) {
      updateData.description = description;
    }

    if (req.files && req.files.video !== undefined) {
      const video = req.files.video;

      const uploadDetails = await uplodImage(video, process.env.FOLDER_NAME);

      updateData.videoUrl = uploadDetails.secure_url;
      updateData.timeDuration = `${uploadDetails.duration}`;
    }

    const updatedsubSection = await prisma.$transaction(async (tx: any) => {
      await tx.subSection.update({
        where: { id: Number(subSectionId) },
        data: updateData,
      });
      return tx.section.findUnique({
        where: { id: Number(sectionId) },
        include: { subSection: true },
      });
    });
    return res.json({
      success: true,
      data: updatedsubSection,
      message: "Section updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the section",
    });
  }
};

/**
 * @route  POST /delete-sub-section
 * @desc   Delete a sub-section
 * @access Private (Instructor only)
 */
export const deleteSubSection = async (req: Request, res: Response) => {
  try {
    const parsed = deleteSubsectionShcema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "All field are required",
      });
    }

    const { sectionId, subSectionId } = parsed.data;

    const updatedSection = await prisma.$transaction(async (tx: any) => {
      const existing = await tx.subSection.findUnique({
        where: { id: Number(subSectionId) },
      });

      if (!existing) {
        throw new Error("SubSection not found");
      }

      await tx.subSection.delete({
        where: { id: Number(subSectionId) },
      });

      return tx.section.findUnique({
        where: { id: Number(sectionId) },
        include: { subSection: true },
      });
    });

    return res.json({
      success: true,
      data: updatedSection,
      message: "SubSection deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the SubSection",
    });
  }
};
