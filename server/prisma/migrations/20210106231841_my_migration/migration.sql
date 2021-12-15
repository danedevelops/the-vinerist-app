-- CreateTable
CREATE TABLE `Wineries` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `winery_name` VARCHAR(191) NOT NULL,
    `winery_address` VARCHAR(191) NOT NULL,
    `winery_desc` VARCHAR(191) NOT NULL,
    `coordinates` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WineriesImages` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `wineryID` INT NOT NULL,
    `imageLink` VARCHAR(191) NOT NULL,
INDEX `wineryID`(`wineryID`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vintages` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `vintage_name` VARCHAR(191) NOT NULL,
    `vintage_year` VARCHAR(191) NOT NULL,
    `assoc_winery` INT NOT NULL,
    `description` VARCHAR(191) NOT NULL,
INDEX `assoc_winery`(`assoc_winery`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VintagesImages` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `vintagesID` INT NOT NULL,
    `imageLink` VARCHAR(191) NOT NULL,
INDEX `vintagesID`(`vintagesID`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reviews` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(191) NOT NULL,
    `user_level` VARCHAR(191) NOT NULL,
    `user_review` VARCHAR(191) NOT NULL,
    `star_review` INT NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `vintageID` INT NOT NULL,
INDEX `vintageID`(`vintageID`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReviewsImages` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `reviewsID` INT NOT NULL,
    `imageLink` VARCHAR(191) NOT NULL,
INDEX `reviewsID`(`reviewsID`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Accounts` (
    `id` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `creation_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
UNIQUE INDEX `User_Accounts.email_unique`(`email`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `new_user` BOOLEAN NOT NULL DEFAULT true,
    `account_ID` VARCHAR(191) NOT NULL,
UNIQUE INDEX `Users_account_ID_unique`(`account_ID`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WineriesImages` ADD FOREIGN KEY (`wineryID`) REFERENCES `Wineries`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vintages` ADD FOREIGN KEY (`assoc_winery`) REFERENCES `Wineries`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VintagesImages` ADD FOREIGN KEY (`vintagesID`) REFERENCES `Vintages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reviews` ADD FOREIGN KEY (`vintageID`) REFERENCES `Vintages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReviewsImages` ADD FOREIGN KEY (`reviewsID`) REFERENCES `Reviews`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD FOREIGN KEY (`account_ID`) REFERENCES `User_Accounts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
