import { type Request, type Response, type NextFunction } from "express";
import { createCategorySchema } from "../utils/validator/course.schema.js";
import { prisma } from "../lib/prisma.js";
/**
 * @route  POST /create-category
 * @desc   Create a new course category
 * @access Private (Admin only)
 */
export const createCategory = async (req: Request, res: Response) => {
  try {
    const parsed = createCategorySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        sucees: false,
        message: "All filed are required",
      });
    }

    const { name, description } = parsed.data;

    const categoryDetails = await prisma.category.create({
      data: {
        name: name,
        description: description,
      },
    });

    console.log(categoryDetails);

    res.status(200).json({
      success: true,
      message: "Category created successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: `Internal Server Error ${error.message} `,
      });
    }
  }
};

/**
 * @route  POST /upadte-category
 * @desc   Update an existing course category
 * @access Private (Admin only)
 */
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId, name, description } = req.body;

    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: "CategoryId is required",
      });
    }

    // Check if category exists
    const existingCategory = await prisma.category.findUnique({
      where: { id: Number(categoryId) },
    });

    if (!existingCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Build dynamic update object
    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;

    const updatedCategory = await prisma.category.update({
      where: { id: Number(categoryId) },
      data: updateData,
    });

    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updatedCategory,
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

/**
 * @route  POST /get-categories
 * @desc   Get all course categories
 * @access Public
 */
export const getCategories = async (req: Request, res: Response) => {
  try {
    const allCategory = await prisma.category.findMany();

    res.status(200).json({
      success: true,
      message: "All categories fetched successfully",
      data: allCategory,
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
 * @route  POST /delete-category
 * @desc   Delete a course category
 * @access Private (Admin only)
 */
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.body;

    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: "CategoryId is required",
      });
    }

    // Check if category exists
    const existingCategory = await prisma.category.findUnique({
      where: { id: Number(categoryId) },
      include: {
        course: true, // relation field name in your schema
      },
    });

    if (!existingCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Prevent deletion if courses are linked
    if (existingCategory.course.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Cannot delete category while courses are assigned to it",
      });
    }

    await prisma.category.delete({
      where: { id: Number(categoryId) },
    });

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
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

/**
 * @route POST /get-category-pagedetails
 * @desc  Fetch all the detials for the category page
 * @access Private
 */
export const getCategoryPageDetials = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.body;

    const selectedCategory = await prisma.category.findUnique({
      where: {
        id: Number(categoryId),
      },
      include: {
        course: {
          where: {
            status: "Published",
          },
          include: {
            ratingAndReview: true,
          },
        },
      },
    });

    // Handle the case when the category is not found
    if (!selectedCategory) {
      console.log("Category not found.");
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    // Handle the case when there are no courses
    if (selectedCategory.courses.length === 0) {
      console.log("No courses found for the selected category.");
      return res.status(404).json({
        success: false,
        message: "No courses found for the selected category.",
      });
    }

    const categoriesExceptSelected = await prisma.category.findMany({
      where: {
        id: { not: Number(categoryId) },
      },
      select: { id: true },
    });

    const randomCategory =
      categoriesExceptSelected[
        Math.floor(Math.random() * categoriesExceptSelected.length)
      ];

    const differentCategory = await prisma.category.findUnique({
      where: { id: randomCategory.id },
      include: {
        course: {
          where: { status: "Published" },
        },
      },
    });

    const mostSellingCourses = await prisma.course.findMany({
      where: {
        status: "Published",
      },
      orderBy: {
        sold: "desc",
      },
      take: 10,
      include: {
        instructor: true,
      },
    });

    res.status(200).json({
      success: true,
      mesage: "Category details is found",
      data: {
        selectedCategory,
        differentCategory,
        mostSellingCourses,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: `Internal Sever Error ${error.message}`,
      });
    }
  }
};
