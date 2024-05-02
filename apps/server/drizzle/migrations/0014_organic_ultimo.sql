CREATE TABLE `appliedJobs` (
	`userId` int NOT NULL,
	`jobId` int NOT NULL,
	`crated_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `appliedJobs_userId_jobId_pk` PRIMARY KEY(`userId`,`jobId`)
);
--> statement-breakpoint
ALTER TABLE `appliedJobs` ADD CONSTRAINT `appliedJobs_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `appliedJobs` ADD CONSTRAINT `appliedJobs_jobId_jobs_id_fk` FOREIGN KEY (`jobId`) REFERENCES `jobs`(`id`) ON DELETE no action ON UPDATE no action;