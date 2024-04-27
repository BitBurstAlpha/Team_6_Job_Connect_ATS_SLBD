import { JobResponse } from '@/types';
import { job } from '@api/job.apis';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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
