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
            <div className="space-y-6">
                <div>
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
                </div>

                <div>
                    <h3 className="font-bold mb-3">Job Category</h3>
                    <ul className="space-y-4">
                        {categories?.map((category) => (
                            <li className="flex items-center" key={category.id}>
                                <input
                                    id={`type-${category.id}`}
                                    type="radio"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />

                                <label
                                    htmlFor={`type-${category.id}`}
                                    className="ml-3 capitalize text-sm text-gray-600"
                                >
                                    {category.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-3">Job Experience</h3>
                    <ul className="space-y-4">
                        {experiences?.map((experience) => (
                            <li
                                className="flex items-center"
                                key={experience.id}
                            >
                                <input
                                    id={`type-${experience.id}`}
                                    type="radio"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />

                                <label
                                    htmlFor={`type-${experience.id}`}
                                    className="ml-3 capitalize text-sm text-gray-600"
                                >
                                    {experience.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-3">Job qualification</h3>
                    <ul className="space-y-4">
                        {qualifications?.map((qualification) => (
                            <li
                                className="flex items-center"
                                key={qualification.id}
                            >
                                <input
                                    id={`type-${qualification.id}`}
                                    type="radio"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />

                                <label
                                    htmlFor={`type-${qualification.id}`}
                                    className="ml-3 capitalize text-sm text-gray-600"
                                >
                                    {qualification.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
};
