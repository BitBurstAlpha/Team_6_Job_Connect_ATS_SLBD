import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';
import { JobResponse } from '@/types';
import { routes } from '@/apis/routes';

export const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api`,
    timeout: 1000,
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        toast.error('refresh page and try again');
        throw error;
    },
);

export const usePublicJobs = () => {
    return useQuery<{
        data: JobResponse[];
    } | null>({
        queryKey: ['public-job'],
        queryFn: () => {
            return api.get(routes.jobApi);
        },
    });
};
