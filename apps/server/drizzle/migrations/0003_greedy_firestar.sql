ALTER TABLE `jobs` DROP FOREIGN KEY `jobs_tagId_tags_id_fk`;
--> statement-breakpoint
ALTER TABLE `tags` ADD `jobId` int NOT NULL;--> statement-breakpoint
ALTER TABLE `tags` ADD CONSTRAINT `tags_jobId_jobs_id_fk` FOREIGN KEY (`jobId`) REFERENCES `jobs`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `jobs` DROP COLUMN `tagId`;