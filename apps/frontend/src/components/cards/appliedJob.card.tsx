'use client';

import { useGetAppliedJobs } from '@/lib/api';
import { AppliedJobCardItem } from './appliedJobCardItem';

export const AppliedJobCard = () => {
    const { data } = useGetAppliedJobs();

    if (!data) {
        return <p>loading</p>;
    }

    return (
        <>
            {data.data.map((allData) => (
                <AppliedJobCardItem {...allData.job} key={allData.job.id} />
            ))}
        </>
    );
};
