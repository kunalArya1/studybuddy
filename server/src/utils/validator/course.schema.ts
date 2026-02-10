import { z} from "zod";

export const createCourseSchema = z.object({
    courseName: z.string().min(5,"Course name is required"),
    courseDescription: z.string().min(30,"Course description is required"),
    whatYouWillLearn: z.string().min(7,"whatYouWillLearn is required"),
    price: z.number().min(1,"course price is required"),
    instruction: z.string().min(20,"Instruction is required"),
    tag: z.array(z.string()).min(1,"tags are required"),
    category: z.array(z.string()).min(1,"categorys are required"),
    status: z.string().min(1,"status is required")
});


export const ratingShema = z.object({
    rating: z.string().min(1,"Rating is required"),
    review: z.string().min(10,"Review is required"),
    courseId: z.number("Invlaid format")
})