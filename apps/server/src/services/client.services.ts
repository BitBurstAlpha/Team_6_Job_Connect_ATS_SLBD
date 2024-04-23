import { eq } from 'drizzle-orm';

import { db } from '../db/db';
import { client } from '../db/schema/users';
import type { NewClient } from '../db/schema/users';

export const getClientById = async (userId: number) => {
    const result = await db.query.client.findFirst({
        where: eq(client.userID, userId),
    });

    return result;
};

export const createClientAccount = async (clientInfo: NewClient) => {
    const newUser = await db.insert(client).values(clientInfo);
    return newUser;
};
