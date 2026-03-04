import { type Request, type Response, type NextFunction } from "express";
import { ratingShema } from "../utils/validator/course.schema.js";
import { prisma } from "../lib/prisma.js";
import { connect } from "node:http2";

/**
 * @route  POST /create-rating
 * @desc   Create a rating and review for a course
 * @access Private
 */
export const createRating = async (req: Request, res: Response) => {
  try {
    const userId = req.user.decode.id;
    
    const parsed = ratingShema.safeParse(req.body);

    if(!parsed.success){
      return res.status(400).json({
        success: false,
        message: "All filed are required"
      })
    }

    const { rating,review,courseId} =  parsed.data;

    const courseDetails = await prisma.course.findFirst({
      where:{
        id: Number(courseId),
        students:{
          some:{
            id:Number(userId)
          }
        }
      }
    });


    if(!courseDetails) {
            return res.status(404).json({
                success:false,
                message:'Student is not enrolled in the course',
            });
    }

    const alreadyReviewed = await prisma.ratingAndReview.findFirst({
      where:{
        userId:userId,
        courseId:courseId
      }
    });

     if(alreadyReviewed) {
            return res.status(403).json({
                success:false,
                message:'Course is already reviewed by the user',
            });
    }

    const createReview = await prisma.ratingAndReview.create({
      data:{
        rating: Number(rating),
        review: review,
        user:{
          connect:{
            id: Number(userId)
          }
        },
        course:{
          connect:{
            id: Number(courseId)
          }
        }
      }
    });

    res.status(200).json({
      succes: true,
      message: "Review submite successfully"
    });
  } catch (error) {
    if(error instanceof Error){
      res.status(500).json({
        success:false,
        message:"Something went wrong while reviewing"
      })
    }
  }
};

/**
 * @route  GET /get-average-rating
 * @desc   Get average rating of a course
 * @access Public
 */
export const getAverageRating = async (req: Request, res: Response) => {
  try {
    const {courseId} = req.body;

    const avgRating = await prisma.ratingAndReview.aggregate({
      where:{
        courseId: Number(courseId)
      },
      _avg:{
        rating: true
      }
    });


    if(avgRating._avg!.rating! > 0){
      return res.status(200).json({
                success:true,
                message:"Average rating fetched succesfully",
                data: avgRating._avg!.rating!,
            })

    }


    //if no rating/Review exist
        return res.status(200).json({
            success:true,
            message:'Average Rating is 0, no ratings given till now',
            averageRating:0,
        })

  } catch (error) {
    if( error instanceof Error){
      res.status(500).json({
        success:false,
        message:`Internal server error ${error.message}`
      })
    }
  }
};

/**
 * @route  GET /get-reviews
 * @desc   Get all reviews for a course
 * @access Public
 */
export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await prisma.ratingAndReview.findMany({
      orderBy:{
        rating: "desc"
      },
      include:{
        user:{
          select:{
            name:true,
            email: true,
            profile:{
              select:{
                imageUrl:true
              }
            }
          },
        },
        course:{
          select:{
            courseName:true,
            courseDescription:true
          }
        }
      }
    });

    return res.status(200).json({
            success:true,
            message:"All reviews fetched successfully",
            data:reviews,
    });
  } catch (error) {
    if( error instanceof Error){
      res.status(500).json({
      success:false,
      message:`Internal server error ${error.message}` 
    })
    }
    
  }
};
