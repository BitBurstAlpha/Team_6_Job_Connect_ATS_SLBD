CREATE TABLE `client` (
	`id` int AUTO_INCREMENT NOT NULL,
	`companyName` varchar(100) NOT NULL,
	`fullName` varchar(100) NOT NULL,
	`phoneNumber` varchar(50) NOT NULL,
	`website` varchar(25),
	`userId` int,
	`crated_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `client_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `client` ADD CONSTRAINT `client_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;