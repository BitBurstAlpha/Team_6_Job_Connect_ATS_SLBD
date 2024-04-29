import { and, eq } from 'drizzle-orm';
import { db } from '../db/db';
import { appliedJobs, jobs } from '../db/schema/jobs';
import type { NewJobs } from '../db/schema/jobs';

export const getAllJobs = async () => {
    const result = await db.query.jobs.findMany({
        with: {
            user: {
                columns: {
                    avatar: true,
                },
                with: {
                    client: {
                        columns: {
                            companyName: true,
                            fullName: true,
                            phoneNumber: true,
                            website: true,
                        },
                    },
                },
            },
            category: {
                columns: {
                    name: true,
                },
            },
            experience: {
                columns: {
                    name: true,
                },
            },
            qualification: {
                columns: {
                    name: true,
                },
            },
            type: {
                columns: {
                    name: true,
                },
            },
        },
    });

    return result;
};

export const getJobBySlug = async (slug: string) => {
    const result = await db.query.jobs.findFirst({
        where: eq(jobs.slug, slug),
    });

    return result;
};

export const deleteJobBySlug = async (slug: string, userId: number) => {
    await db
        .delete(jobs)
        .where(and(eq(jobs.slug, slug), eq(jobs.userId, userId)));
};

export const applyJobBySlug = async (jobId: number, userId: number) => {
    await db.insert(appliedJobs).values({
        jobId: jobId,
        userId: userId,
    });
};

export const updateJobBySlug = async (
    updateData: Partial<NewJobs>,
    slug: string,
    userId: number,
) => {
    await db
        .update(jobs)
        .set(updateData)
        .where(and(eq(jobs.slug, slug), eq(jobs.userId, userId)));
};

export const openingJob = async (job: NewJobs) => {
    const newUser = await db.insert(jobs).values(job);
    return newUser;
};
