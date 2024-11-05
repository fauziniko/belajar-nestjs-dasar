/*
  Warnings:

  - You are about to drop the column `frist_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `las_name` on the `users` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `frist_name`,
    DROP COLUMN `las_name`,
    ADD COLUMN `first_name` VARCHAR(100) NOT NULL,
    ADD COLUMN `last_name` VARCHAR(100) NULL,
    ADD COLUMN `role` VARCHAR(100) NULL;
