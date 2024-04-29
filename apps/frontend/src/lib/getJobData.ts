import 'server-only';
import { cookies } from 'next/headers';
import { baseUrl, routes } from '@/apis/routes';
import { JobData } from '@/types';

export const getJobType = async (): Promise<JobData[] | null> => {
    try {
        const res: Response = await fetch(
            `${baseUrl}${routes.generic.jobTypesApi}`,
            {
                method: 'GET',
            },
        );

        if (!res.ok) {
            throw new Error('Unauthorized');
        }

        const result: JobData[] = await res.json();

        return result;
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
        }

        return null;
    }
};

export const getJobCategory = async (): Promise<JobData[] | null> => {
    try {
        const res: Response = await fetch(
            baseUrl + routes.generic.jobCategoriesApi,
            {
                credentials: 'include',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
                },
            },
        );

        if (!res.ok) {
            throw new Error('Unauthorized');
        }

        const result: JobData[] = await res.json();

        return result;
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
        }

        return null;
    }
};

export const getJobExperience = async (): Promise<JobData[] | null> => {
    try {
        const res: Response = await fetch(
            baseUrl + routes.generic.jobExperienceApi,
            {
                credentials: 'include',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
                },
            },
        );

        if (!res.ok) {
            throw new Error('Unauthorized');
        }

        const result: JobData[] = await res.json();

        return result;
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
        }

        return null;
    }
};

export const getJobQualification = async (): Promise<JobData[] | null> => {
    try {
        const res: Response = await fetch(
            baseUrl + routes.generic.jobQualificationsApi,
            {
                credentials: 'include',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${cookies().get('accessToken')?.value}`,
                },
            },
        );

        if (!res.ok) {
            throw new Error('Unauthorized');
        }

        const result: JobData[] = await res.json();

        return result;
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
        }

        return null;
    }
};
