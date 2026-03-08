import { type Request, type Response, type NextFunction } from "express";
import { prisma } from "../lib/prisma.js";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
/**
 * @route  POST /create-category
 * @desc   Create a new course category
 * @access Private (Admin only)
 */
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newCategory = await prisma.category.create({
      data: {
        name,
        description,
      },
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: newCategory,
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
  try {
    const categories = await prisma.category.findMany();

    res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      data: categories,
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
 * @route  POST /delete-category
 * @desc   Delete a course category
 * @access Private (Admin only)
 */
export const deleteCategory = async (req: Request, res: Response) => {
  res.json({ message: "delete category endpoint" });
};

export const categoryPageDetails = async (req: Request, res: Response) => {
  try {
    const categoryId = Number(req.params.id);

    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: "Invalid category id",
      });
    }

    // 1️⃣ Selected Category + Courses
    const selectedCategory = await prisma.category.findUnique({
      where: { id: categoryId },
      include: {
        courses: {
          where: {
            status: "Published",
          },
          include: {
            instructor: true,
            reviews: true,
          },
        },
      },
    });

    if (!selectedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // 2️⃣ Get other categories
    const categoriesExceptSelected = await prisma.category.findMany({
      where: {
        id: {
          not: categoryId,
        },
      },
      select: { id: true },
    });

    // 3️⃣ Random category selection
    let differentCategory = null;

    if (categoriesExceptSelected.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * categoriesExceptSelected.length,
      );

      const randomCategoryId = categoriesExceptSelected[randomIndex]
        ?.id as number;

      differentCategory = await prisma.category.findUnique({
        where: { id: randomCategoryId },
        include: {
          courses: {
            where: {
              status: "Published",
            },
            include: {
              instructor: true,
            },
          },
        },
      });
    }

    // 4️⃣ Run heavy queries in parallel
    const [mostSellingCourses, topRatedCoursesRaw] = await Promise.all([
      prisma.course.findMany({
        where: {
          status: "Published",
        },
        orderBy: {
          invocie: {
            _count: "desc",
          },
        },
        take: 10,
        include: {
          instructor: true,
          category: true,
        },
      }),

      prisma.course.findMany({
        where: {
          status: "Published",
        },
        include: {
          reviews: true,
          instructor: true,
          category: true,
        },
      }),
    ]);

    // 5️⃣ Calculate average rating
    const topRatedCourses = topRatedCoursesRaw
      .map((course) => {
        const avgRating =
          course.reviews.reduce((acc, review) => acc + review.rating, 0) /
          (course.reviews.length || 1);

        return {
          ...course,
          avgRating,
        };
      })
      .sort((a, b) => b.avgRating - a.avgRating)
      .slice(0, 10);

    // 6️⃣ Response
    return res.status(200).json({
      success: true,
      message: "Category page data fetched successfully",
      data: {
        selectedCategory,
        differentCategory,
        mostSellingCourses,
        topRatedCourses,
      },
    });
  } catch (error) {
    console.error("CATEGORY PAGE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch category page details",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
