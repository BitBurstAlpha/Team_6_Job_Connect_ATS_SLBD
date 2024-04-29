import 'server-only';
import { cookies } from 'next/headers';
import { routes } from '@/apis/routes';
import { User } from '@/types';

export const getServerSession = async (): Promise<User | null> => {
    try {
        const res: Response = await fetch(routes.currentUserApi, {
            credentials: 'include',
            method: 'GET',
            headers: {
                Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
            },
        });

        if (!res.ok) {
            throw new Error('Unauthorized');
        }

        const user: User = await res.json();

        if (user.role !== 'applicant') {
            throw new Error('Unauthorized');
        }

        return user;
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
        }

        return null;
    }
};
