import {type Request,type Response,type NextFunction} from "express";
import { createCourseSchema } from "../utils/validator/course.schema.js";
import { prisma } from "../lib/prisma.js";
import { uplodImage } from "../utils/ImageUploder.js";
import type { UploadedFile } from "express-fileupload";
import { connect } from "node:http2";
import { includes } from "zod";
import { convertSecondsToDuration } from "../utils/secToDuration.js";


/**
 * @route  POST /add-section
 * @desc   Add a new section to a course
 * @access Private (Instructor only)
 */
export const addSection = async (req: Request, res: Response) => {
  res.json({ message: "add section endpoint" });
};

/**
 * @route  POST /update-section
 * @desc   Update an existing section
 * @access Private (Instructor only)
 */
export const updateSection = async (req: Request, res: Response) => {
  res.json({ message: "update section endpoint" });
};

/**
 * @route  DELETE /delete-section
 * @desc   Delete a section from a course
 * @access Private (Instructor only)
 */
export const deleteSection = async (req: Request, res: Response) => {
  res.json({ message: "delete section endpoint" });
};

/**
 * @route  POST /add-sub-section
 * @desc   Add a new sub-section to a section
 * @access Private (Instructor only)
 */
export const addSubSection = async (req: Request, res: Response) => {
  res.json({ message: "add sub-section endpoint" });
};

/**
 * @route  POST /update-sub-section
 * @desc   Update an existing sub-section
 * @access Private (Instructor only)
 */
export const updateSubSection = async (req: Request, res: Response) => {
  res.json({ message: "update sub-section endpoint" });
};

/**
 * @route  POST /delete-sub-section
 * @desc   Delete a sub-section
 * @access Private (Instructor only)
 */
export const deleteSubSection = async (req: Request, res: Response) => {
  res.json({ message: "delete sub-section endpoint" });
};

/**
 * @route  POST /create-course
 * @desc   Create a new course
 * @access Private (Instructor only)
 */
export const createCourse = async (req: Request, res: Response) => {
  try {
    const userId = req.user.decode.id;

    const parsed = createCourseSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(403).json({
        succes: false,
        message: parsed.error.issues.map((issue) => issue.message),
      });
    }

    const {
      courseName,
      courseDescription,
      whatYouWillLearn,
      price,
      instruction,
      tag,
      category,
      status
    } = parsed.data;
    // Get thumbnail image from request files
    const thumbnail = req.files!.thumbnailImage!;

    const file :UploadedFile = Array.isArray(thumbnail)? thumbnail[0] : thumbnail;

    // Convert the tag and instructions from stringified Array to Array
    const tags = JSON.parse(String(tag));
    const instructions = JSON.parse(instruction);

    const instructorDetials = await prisma.user.findUnique({
      where:{id:userId}
    });

    if (!instructorDetials) {
      return res.status(404).json({
        success: false,
        message: "Instructor Details Not Found",
      })
    }

    const categories = await prisma.category.findMany({
      where: {
        name: {
          in: category
        }
      }
    });

    // uplod tumbnail
    const thumbnailImage = await uplodImage(file,process.env.THUMBNAIL_FOLER!)


    const newCourse = await prisma.course.create({
      data:{
        courseName,
        courseDescription,
        whatWillYouLearn:whatYouWillLearn,
        price,
        instruction,
        tags,
        thumbnail:thumbnailImage.secure_url,
        instructorId: instructorDetials.id,
        status: "Draft",
        category: {
          connect: category.map((name) => ({ name }))
        }
      }
    })

    // Return the new course and a success message
    res.status(200).json({
      success: true,
      data: newCourse,
      message: "Course Created Successfully",
    })

  } catch (error) {
    console.error(error)
    if(error instanceof Error){
      res.status(500).json({
      success: false,
      message: "Failed to create course",
      error: error.message,
    })
    }
    
  }
};

/**
 * @route  GET /get-courses
 * @desc   Get all available courses
 * @access Public
 */
export const getCourses = async (req: Request, res: Response) => {
  try {
    const allCourse = await prisma.course.findMany({
      where:{status:"Published"},
      select:{
        courseName: true,
        price: true,
        thumbnail: true,
        studentsEnrolled: true,
        ratingAndReviews: true,
        instructor: {
          select:{
            id:true,
            name:true,
            email:true
          }
        }
      }
    });


    res.status(200).json({
      success:true,
      message:"all course fetched",
      data: allCourse
    })
  } catch (error) {
    if(error instanceof Error){
      res.status(501).json({
        success:false,
        message:"Something went wrong while fetching the data"
      })
    }
  }
};

/**
 * @route  POST /get-course-detials
 * @desc   Get basic details of a course
 * @access Public
 */
export const getCourseDetails = async (req: Request, res: Response) => {
  try {
    const courseId = req.body;

    const courseDetial = await prisma.course.findUnique({
      where:{id: Number(courseId)},
      include:{
        instructor:{
          include:{
            profile:true
          }
        },
        category:true,
        reviews:true,
        courseContent:{
          include:{
            subSection:{
              select:{
                id:true,
                title:true,
                description:true,
              }
          }
        }
      }

      },
      
    });

    let totalDurationInSeconds = 0
    courseDetial!.courseContent!.forEach((content) => {
      content.subSection.forEach((subSection) => {
        const timeDurationInSeconds = parseInt(subSection.timeDuration)
        totalDurationInSeconds += timeDurationInSeconds
      })
    });

    const totalDuration = convertSecondsToDuration(totalDurationInSeconds);


    res.status(200).json({
      success:true,
      messaage:"Course detials fetched",
      data: {
        courseDetial,
        totalDuration,
      }
    })
  } catch (error) {
    if(error instanceof Error){
      res.status(501).json({
        success:false,
        message: `Something went wrong while fetching the data ${error.message}`
      })
    }
  }
};

/**
 * @route  POST /get-full-course-detials
 * @desc   Get full course details including sections and sub-sections
 * @access Private
 */
export const getFullCourseDetails = async (req: Request, res: Response) => {
  const courseId = req.body;
  const courseDetials = await prisma.course.findUnique({
    where:{id:courseId},
    include:{
      instructor:{
        include:{
          profile:true
        }
      },
      category:true,
      reviews:true,
      courseContent:{
        include:{
          subSection:true
        }
      }
    },
    
  })
  
};

/**
 * @route  POST /update-course
 * @desc   Update course details
 * @access Private (Instructor only)
 */
export const updateCourse = async (req: Request, res: Response) => {


try {
    const { courseId, ...updates } = req.body;

    const isCourse = await prisma.course.findUnique({
      where:{id:courseId}
    });

    if(!isCourse){
      return res.status(404).json({
        success: false,
        message:"Course not found"
      })
    }

    // if thumbnail is there
    if(req.files){
      const thumbnail = req.files!.thumbnailImage!;

      const file :UploadedFile = Array.isArray(thumbnail)? thumbnail[0] : thumbnail;

      const thumbnailImageUpdate = await uplodImage(file,process.env.THUMBNAIL_FOLER!);

      const updateThumbnail = await prisma.course.update({
        where:{id:isCourse.id},
        data:{thumbnail:thumbnailImageUpdate.secure_url}
      })
    }

    const data: any = {
    ...(updates.courseName && { courseName: updates.courseName }),
    ...(updates.courseDescription && { courseDescription: updates.courseDescription }),
    ...(updates.whatWillYouLearn && { whatWillYouLearn: updates.whatWillYouLearn }),
    ...(updates.price && { price: Number(updates.price) }),
    ...(updates.instruction && { instruction: updates.instruction }),
    ...(updates.status && { status: updates.status }),
  };

  if (updates.tag) {
    data.tags = Array.isArray(updates.tag)
      ? updates.tag
      : JSON.parse(updates.tag);
  }

  if (updates.category) {
    const categories = Array.isArray(updates.category)
      ? updates.category
      : JSON.parse(updates.category);
      data.categories = {
      set: [], // clear old relations
      connect: categories.map((id: number) => ({ id }))
    };

  }

    await prisma.course.update({
      where: { id: Number(courseId) },
      data
    });

    const updatedCourse = await prisma.course.findUnique({
    where: { id: Number(courseId) },
    include: {
      instructor: {
        include: {
          profile: true
        }
      },
      categories: true,
      ratingAndReviews: true,
      courseContent: {
        include: {
          subSection: true
        }
      }
    }
  });

  res.status(200).json(
    {
      success:true,
      message:"Course updated succesfully"
    }
  )
} catch (error) {
  if(error instanceof Error){
    res.status(501).json({
      success:false,
      message: "something went wrong while updating course"
    })
  }
}



};

/**
 * @route  DELETE /delete-course
 * @desc   Delete a course
 * @access Private (Instructor only)
 */
export const deleteCourse = async (req: Request, res: Response) => {
  res.json({ message: "delete course endpoint" });
};

/**
 * @route  GET /get-instructor-course
 * @desc   Get all courses created by the instructor
 * @access Private (Instructor only)
 */
export const getInstructorCourses = async (req: Request, res: Response) => {
  res.json({ message: "get instructor courses endpoint" });
};


/**
 * @route  POST /update-course-progress
 * @desc   Update course progress for a user
 * @access Private
 */
export const updateCourseProgress = async (req: Request, res: Response) => {
  res.json({ message: "update course progress endpoint" });
};

/**
 * @route  POST /create-category
 * @desc   Create a new course category
 * @access Private (Admin only)
 */
export const createCategory = async (req: Request, res: Response) => {
  res.json({ message: "create category endpoint" });
};

/**
 * @route  POST /upadte-category
 * @desc   Update an existing course category
 * @access Private (Admin only)
 */
export const updateCategory = async (req: Request, res: Response) => {
  res.json({ message: "update category endpoint" });
};

/**
 * @route  POST /get-category
 * @desc   Get all course categories
 * @access Public
 */
export const getCategory = async (req: Request, res: Response) => {
  res.json({ message: "get category endpoint" });
};

/**
 * @route  POST /delete-category
 * @desc   Delete a course category
 * @access Private (Admin only)
 */
export const deleteCategory = async (req: Request, res: Response) => {
  res.json({ message: "delete category endpoint" });
};

/**
 * @route  POST /create-rating
 * @desc   Create a rating and review for a course
 * @access Private
 */
export const createRating = async (req: Request, res: Response) => {
  res.json({ message: "create rating endpoint" });
};

/**
 * @route  GET /get-average-rating
 * @desc   Get average rating of a course
 * @access Public
 */
export const getAverageRating = async (req: Request, res: Response) => {
  res.json({ message: "get average rating endpoint" });
};

/**
 * @route  GET /get-reviews
 * @desc   Get all reviews for a course
 * @access Public
 */
export const getReviews = async (req: Request, res: Response) => {
  res.json({ message: "get reviews endpoint" });
};
