-- CreateTable
CREATE TABLE `albums` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `songsId` INTEGER,
UNIQUE INDEX `albums.name_unique`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `songs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
UNIQUE INDEX `songs.link_unique`(`link`),
UNIQUE INDEX `songs.duration_unique`(`duration`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `albums` ADD FOREIGN KEY (`songsId`) REFERENCES `songs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
