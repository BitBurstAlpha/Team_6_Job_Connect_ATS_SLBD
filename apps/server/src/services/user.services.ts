import { eq, and } from 'drizzle-orm';

import { db } from '../db/db';
import { users } from '../db/schema/users';
import type { NewUser } from '../db/schema/users';

export const getUserByEmail = async (email: string) => {
    const result = await db.query.users.findFirst({
        where: eq(users.email, email),
    });

    return result;
};

export const getUserByEmailWithRole = async (
    email: string,
    role: (typeof users.role.enumValues)[number],
) => {
    const result = await db.query.users.findFirst({
        where: and(eq(users.email, email), eq(users.role, role)),
    });

    return result;
};

export const createUser = async (user: NewUser) => {
    await db.insert(users).values(user);
};

export const updateUserById = async (
    updateData: Partial<NewUser>,
    userId: number,
) => {
    await db.update(users).set(updateData).where(eq(users.id, userId));
};
