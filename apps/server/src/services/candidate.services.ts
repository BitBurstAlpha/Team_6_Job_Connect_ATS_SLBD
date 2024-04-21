import { eq, and } from 'drizzle-orm';

import { db } from '../db/db';
import { users } from '../db/schema/users';
import type { NewUser } from '../db/schema/users';

export const getCandidateByEmail = async (email: string) => {
    const result = await db.query.users.findFirst({
        where: and(eq(users.email, email), eq(users.role, 'candidate')),
    });

    return result;
};

export const createUser = async (user: NewUser) => {
    const newUser = await db.insert(users).values(user);
    return newUser;
};
