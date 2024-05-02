'use client';

import { usePublicJobs } from '@/lib/api';
import { JobCardItem } from './JobCardItem';

export const JobCard = () => {
    const { data } = usePublicJobs();

    if (!data) {
        return <p>loading</p>;
    }

    return (
        <>
            {data.data.map((job) => (
                <JobCardItem {...job} key={job.id} />
            ))}
        </>
    );
};
