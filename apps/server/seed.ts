import 'dotenv/config';
import { logger } from './src/utils/logger';
import { db } from './src/db/db';
import {
    type,
    category,
    experience,
    qualification,
} from './src/db/schema/jobs';
import { eq } from 'drizzle-orm';

const jobTypeList: string[] = [
    'full-time',
    'part-time',
    'freelance',
    'internship',
];

const jobCategoryList: string[] = [
    'Information Technology',
    'Healthcare',
    'Finance',
    'Marketing',
    'Education',
    'Engineering',
    'Sales',
];

const jobExperienceList: string[] = [
    'Entry Level',
    'Mid Level',
    'Senior Level',
    'Executive',
];

const jobQualificationList: string[] = [
    "Bachelor's Degree",
    "Master's Degree",
    'Ph.D.',
    'Professional Certification',
    'Relevant Work Experience',
];

const jobType: (typeof type.$inferInsert)[] = [];
const jobCategory: (typeof category.$inferInsert)[] = [];
const jobExperience: (typeof experience.$inferInsert)[] = [];
const jobQualification: (typeof qualification.$inferInsert)[] = [];

const seed = async () => {
    try {
        logger.info('Congratulation Seed Successful 🌱🎉');

        // Seed Job Types
        for (let i = 0; i < jobTypeList.length; i++) {
            const dbType = await db.query.type.findFirst({
                where: eq(type.name, jobTypeList[i]),
            });

            if (dbType) continue;

            jobType.push({
                name: jobTypeList[i],
                id: i + 1,
            });
        }

        if (jobType.length !== 0) {
            await db.insert(type).values(jobType);
        }

        // Seed Job Categories
        for (let i = 0; i < jobCategoryList.length; i++) {
            const dbCategory = await db.query.category.findFirst({
                where: eq(category.name, jobCategoryList[i]),
            });

            if (dbCategory) continue;

            jobCategory.push({
                name: jobCategoryList[i],
                id: i + 1,
            });
        }

        if (jobCategory.length !== 0) {
            await db.insert(category).values(jobCategory);
        }

        // Seed Job Experience
        for (let i = 0; i < jobExperienceList.length; i++) {
            const dbExperience = await db.query.experience.findFirst({
                where: eq(experience.name, jobExperienceList[i]),
            });

            if (dbExperience) continue;

            jobExperience.push({
                name: jobExperienceList[i],
                id: i + 1,
            });
        }

        if (jobExperience.length !== 0) {
            await db.insert(experience).values(jobExperience);
        }

        // Seed Job Qualification
        for (let i = 0; i < jobQualificationList.length; i++) {
            const dbQualification = await db.query.qualification.findFirst({
                where: eq(qualification.name, jobQualificationList[i]),
            });

            if (dbQualification) continue;

            jobQualification.push({
                name: jobQualificationList[i],
                id: i + 1,
            });
        }

        if (jobQualification.length !== 0) {
            await db.insert(qualification).values(jobQualification);
        }

        process.exit(0);
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error(err.message);
            process.exit(1);
        }

        logger.error('error while seeding 🌱');

        process.exit(1);
    }
};

seed();
