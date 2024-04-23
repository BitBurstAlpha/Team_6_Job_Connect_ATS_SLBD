import { db } from '../db/db';
import { jobs } from '../db/schema/jobs';
import type { NewJobs } from '../db/schema/jobs';

export const openingJob = async (job: NewJobs) => {
    const newUser = await db.insert(jobs).values(job);
    return newUser;
};
