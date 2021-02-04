/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[photo]` on the table `albums`. If there are existing duplicate values, the migration will fail.
  - Added the required column `photo` to the `albums` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `albums` ADD COLUMN     `photo` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `albums.photo_unique` ON `albums`(`photo`);
