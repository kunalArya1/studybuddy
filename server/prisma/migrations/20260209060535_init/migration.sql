/*
  Warnings:

  - Added the required column `instruction` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatWillYouLearn` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "courseStatus" AS ENUM ('Draft', 'Published');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "instruction" TEXT NOT NULL,
ADD COLUMN     "status" "courseStatus" NOT NULL,
ADD COLUMN     "whatWillYouLearn" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "CourseId" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_CourseId_fkey" FOREIGN KEY ("CourseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
