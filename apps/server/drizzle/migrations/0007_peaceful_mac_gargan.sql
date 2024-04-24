ALTER TABLE `jobs` MODIFY COLUMN `slug` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_slug_unique` UNIQUE(`slug`);