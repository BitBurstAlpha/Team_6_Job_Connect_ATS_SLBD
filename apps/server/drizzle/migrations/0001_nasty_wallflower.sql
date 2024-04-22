ALTER TABLE `users` MODIFY COLUMN `role` enum('client','applicant') NOT NULL DEFAULT 'applicant';--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_email_unique` UNIQUE(`email`);