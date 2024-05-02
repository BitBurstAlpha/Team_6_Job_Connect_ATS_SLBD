import 'server-only';
import { cookies } from 'next/headers';
import { auth } from '@api/auth.apis';
import { User } from '@/types';

export const getServerSession = async (): Promise<User | null> => {
    try {
        const accessToken = cookies().get('accessToken')?.value;

        const res: Response = await fetch(auth.currentUserApi, {
            credentials: 'include',
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error('Unauthorized');
        }

        const user: User = await res.json();

        if (user.role !== 'client') {
            throw new Error('user not client - Unauthorized');
        }

        return user;
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
        }

        return null;
    }
};
