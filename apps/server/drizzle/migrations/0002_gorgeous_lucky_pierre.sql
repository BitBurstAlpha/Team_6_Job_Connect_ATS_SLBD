CREATE TABLE `category` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`crated_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `category_id` PRIMARY KEY(`id`),
	CONSTRAINT `category_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `experience` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`crated_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `experience_id` PRIMARY KEY(`id`),
	CONSTRAINT `experience_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `jobs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(100) NOT NULL,
	`description` text NOT NULL,
	`typeId` int NOT NULL,
	`categoryId` int NOT NULL,
	`experienceId` int NOT NULL,
	`qualificationId` int NOT NULL,
	`maxSalary` varchar(100) NOT NULL,
	`minSalary` varchar(100) NOT NULL,
	`location` varchar(100) NOT NULL,
	`tagId` int NOT NULL,
	`userId` int NOT NULL,
	`crated_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `jobs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `qualification` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`crated_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `qualification_id` PRIMARY KEY(`id`),
	CONSTRAINT `qualification_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`crated_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `tags_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `type` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`crated_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `type_id` PRIMARY KEY(`id`),
	CONSTRAINT `type_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_typeId_type_id_fk` FOREIGN KEY (`typeId`) REFERENCES `type`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_categoryId_category_id_fk` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_experienceId_experience_id_fk` FOREIGN KEY (`experienceId`) REFERENCES `experience`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_qualificationId_qualification_id_fk` FOREIGN KEY (`qualificationId`) REFERENCES `qualification`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_tagId_tags_id_fk` FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;