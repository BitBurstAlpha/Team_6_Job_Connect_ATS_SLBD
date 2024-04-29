'use client';

import { JobData } from '@/types';
import { Card } from './ui/card';

export type JobFieldData = {
    types: JobData[] | null;
    categories: JobData[] | null;
    experiences: JobData[] | null;
    qualifications: JobData[] | null;
};

export const JobFilter = ({
    categories,
    experiences,
    qualifications,
    types,
}: JobFieldData) => {
    return (
        <Card className="p-4">
            <h2 className="text-lg font-bold mb-4">Filters</h2>

            <h3 className="font-bold mb-3">Job Type</h3>
            <ul className="space-y-4">
                {types?.map((type) => (
                    <li className="flex items-center" key={type.id}>
                        <input
                            id={`type-${type.id}`}
                            type="radio"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />

                        <label
                            htmlFor={`type-${type.id}`}
                            className="ml-3 capitalize text-sm text-gray-600"
                        >
                            {type.name}
                        </label>
                    </li>
                ))}
            </ul>
        </Card>
    );
};
