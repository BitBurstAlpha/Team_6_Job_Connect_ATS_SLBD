import { eq } from 'drizzle-orm';

import { db } from '../db/db';
import { appliedJobs } from '../db/schema/jobs';

export const getCurrentUserAppliedJobs = async (userId: number) => {
    const result = await db.query.appliedJobs.findMany({
        where: eq(appliedJobs.userId, userId),
        with: {
            job: true,
        },
    });

    return result;
};
