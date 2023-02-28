/*
  Warnings:

  - The primary key for the `Chapter` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Chapter_id_seq";
