import { JobResponse, User } from '@/types';
import { auth } from '@api/auth.apis';
import { job } from '@api/job.apis';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

export const api = axios.create({
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
            return axios.get(job.jobApi, {
                withCredentials: true,
            });
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
            return axios.get(auth.currentUserApi, {
                withCredentials: true,
            });
        },
        refetchOnWindowFocus: true,
    });
};
