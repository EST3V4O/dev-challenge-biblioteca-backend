/*
  Warnings:

  - You are about to drop the column `publishing_company` on the `books` table. All the data in the column will be lost.
  - Added the required column `publisher` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "publishing_company",
ADD COLUMN     "publisher" TEXT NOT NULL;
