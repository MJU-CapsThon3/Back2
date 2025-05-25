/*
  Warnings:

  - You are about to drop the column `title` on the `battle_room` table. All the data in the column will be lost.
  - Added the required column `topic_a` to the `battle_room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic_b` to the `battle_room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `side` to the `battle_title` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `battle_room` DROP COLUMN `title`,
    ADD COLUMN `started_at` DATETIME(6) NULL,
    ADD COLUMN `topic_a` VARCHAR(100) NOT NULL,
    ADD COLUMN `topic_b` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `battle_title` ADD COLUMN `side` CHAR(1) NOT NULL;

-- AlterTable
ALTER TABLE `ranking` MODIFY `rank` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `room_participants` ADD COLUMN `side` CHAR(1) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `profile_image_url` VARCHAR(1000) NULL;

-- CreateTable
CREATE TABLE `chat_messages` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `room_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `side` CHAR(1) NOT NULL,
    `message` TEXT NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `battle_votes` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `room_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `vote` VARCHAR(10) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `chat_messages` ADD CONSTRAINT `chat_messages_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chat_messages` ADD CONSTRAINT `chat_messages_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `battle_room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `battle_votes` ADD CONSTRAINT `battle_votes_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `battle_room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `battle_votes` ADD CONSTRAINT `battle_votes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
