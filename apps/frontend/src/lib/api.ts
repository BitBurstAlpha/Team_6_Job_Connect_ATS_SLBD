import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';
import { JobResponse, User } from '@/types';
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

export const useGetAppliedJobs = () => {
    return useQuery<{
        data: {
            job: JobResponse;
            user: User;
        }[];
    } | null>({
        queryKey: ['applied-jobs'],
        queryFn: () => {
            return api.get(routes.appliedJobs);
        },
    });
};

export const useSessionQuery = () => {
    return useQuery<
        | {
              data: User;
          }
        | null
        | undefined
    >({
        queryKey: ['current-user'],
        queryFn: () => {
            return axios.get(routes.currentUserApi, {
                withCredentials: true,
            });
        },
        refetchOnWindowFocus: true,
        retry: 1,
        retryDelay: 10000,
    });
};
