/*
  Warnings:

  - You are about to drop the column `user_name` on the `Reviews` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Reviews` DROP COLUMN `user_name`,
    ADD COLUMN     `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Users` ADD COLUMN     `user_img` VARCHAR(191);

-- AddForeignKey
ALTER TABLE `Reviews` ADD FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AlterIndex
ALTER TABLE `Users` RENAME INDEX `Users_account_ID_unique` TO `Users.account_ID_unique`;
