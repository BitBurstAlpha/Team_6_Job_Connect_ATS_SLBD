import { db } from '../db/db';

export const getAllJobType = async () => {
    const result = await db.query.type.findMany();
    return result;
};

export const getAllJobCategory = async () => {
    const result = await db.query.category.findMany();
    return result;
};

export const getAllJobExperience = async () => {
    const result = await db.query.experience.findMany();
    return result;
};

export const getAllJobQualification = async () => {
    const result = await db.query.qualification.findMany();
    return result;
};
