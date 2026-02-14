import { z } from "zod";

export const createCourseSchema = z.object({
  courseName: z.string().min(5, "Course name is required"),
  courseDescription: z.string().min(30, "Course description is required"),
  whatYouWillLearn: z.string().min(7, "whatYouWillLearn is required"),
  price: z.number().min(1, "course price is required"),
  instruction: z.string().min(20, "Instruction is required"),
  tag: z.array(z.string()).min(1, "tags are required"),
  category: z.array(z.string()).min(1, "categorys are required"),
  status: z.string().min(1, "status is required"),
});

export const ratingShema = z.object({
  rating: z.string().min(1, "Rating is required"),
  review: z.string().min(10, "Review is required"),
  courseId: z.number("Invlaid format"),
});

export const addSectionSchema = z.object({
  sectionName: z.string().min(5, "Seciton Name is required"),
  courseId: z.number("coursrId is required"),
});

export const updateSectionSchema = z.object({
  sectionName: z.string().min(5, "Section Name is required"),
  sectionId: z.number("Section id is required"),
  courseId: z.number("course id is required"),
});

export const deleteSectionSchema = z.object({
  sectionId: z.number("Section id is required"),
  courseId: z.number("Course id is required"),
});

// Subsection
export const addSubsectionSchema = z.object({
  sectionId: z.number("section id is required"),
  title: z.string().min(4, "subsection title is required"),
  description: z.string().min(10, "subsection description is required"),
});

export const updateSubsectionSchema = z.object({
  sectionId: z.number("section id is required"),
  subSectionId: z.number("sub section id is required"),
  title: z.string().min(4, "subsection title is required"),
  description: z.string().min(10, "subsection description is required"),
});

export const deleteSubsectionShcema = z.object({
  sectionId: z.number("section id is required"),
  subSectionId: z.number("Subsection id is required"),
});

// Category

export const createCategorySchema = z.object({
  name: z.string().min(3, "Category name is required"),
  description: z
    .string()
    .min(10, "Category description be at least 10 Character")
    .optional(),
});
