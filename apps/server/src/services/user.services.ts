import { eq } from 'drizzle-orm';
import { db } from '../db/db';
import { users } from '../db/schema/users';
import type { NewUser } from '../db/schema/users';

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db
            .select()
            .from(users)
            .where(eq(users.email, email));

        return user[0];
    } catch (error: unknown) {
        return null;
    }
};

export const createUser = async (user: NewUser) => {
    try {
        const newUser = await db.insert(users).values(user);

        return newUser;
    } catch (error: unknown) {
        throw new Error('something went wrong');
    }
};
