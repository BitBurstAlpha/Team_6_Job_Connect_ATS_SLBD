import { eq } from 'drizzle-orm';

import { db } from '../db/db';
import { users } from '../db/schema/users';
import type { NewUser } from '../db/schema/users';

export const getUserByEmail = async (email: string) => {
    const result = await db.query.users.findFirst({
        where: eq(users.email, email),
    });

    return result;
};

export const createUser = async (user: NewUser) => {
    const newUser = await db.insert(users).values(user);
    return newUser;
};
