/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[name]` on the table `songs`. If there are existing duplicate values, the migration will fail.
  - Added the required column `name` to the `songs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `songs` ADD COLUMN     `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `songs.name_unique` ON `songs`(`name`);
