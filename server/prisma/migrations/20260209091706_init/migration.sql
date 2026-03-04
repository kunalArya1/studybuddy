/*
  Warnings:

  - You are about to drop the column `CourseId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `SubSection` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `SubSection` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_CourseId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "CourseId";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SubSection" DROP COLUMN "Title",
ADD COLUMN     "title" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
