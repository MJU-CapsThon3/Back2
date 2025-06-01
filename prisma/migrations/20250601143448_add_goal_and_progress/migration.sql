-- AlterTable
ALTER TABLE `quest_completion` ADD COLUMN `progress` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `quests` ADD COLUMN `goal` INTEGER NOT NULL DEFAULT 1;
