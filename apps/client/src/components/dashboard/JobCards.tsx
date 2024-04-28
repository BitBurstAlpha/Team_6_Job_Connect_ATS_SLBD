'use client';

import { Card, Icon as TremorIcon } from '@tremor/react';
import type { Color } from '@tremor/react';
import { Icons } from '@/components/icons';

type DATA = {
    title: string;
    count: number;
    icon: keyof typeof Icons;
    color: Color;
};

const data: DATA[] = [
    {
        title: 'Published Jobs',
        count: 10,
        icon: 'stack',
        color: 'blue',
    },

    {
        title: 'Applied Jobs',
        count: 210,
        icon: 'edit',
        color: 'orange',
    },

    {
        title: 'Job Visits',
        count: 300,
        icon: 'location',
        color: 'indigo',
    },
    {
        title: 'Hired Candidates',
        count: 110,
        icon: 'documentComplete',
        color: 'emerald',
    },
];

export const JobCards = () => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
            {data.map((cardDetails) => {
                const Icon = Icons[cardDetails.icon || 'stack'];

                return (
                    <Card
                        key={cardDetails.title}
                        className="py-10 flex items-center ring-zinc-100 shadow-md"
                        decoration="top"
                        decorationColor={cardDetails.color}
                    >
                        <div className="flex-1">
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                {cardDetails.title}
                            </p>
                            <p className="text-3xl xl:text-5xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-bold">
                                {cardDetails.count}
                            </p>
                        </div>

                        <TremorIcon
                            icon={Icon}
                            color={cardDetails.color}
                            variant="light"
                            tooltip={cardDetails.title}
                            size="xl"
                            className="rounded-md"
                        />
                    </Card>
                );
            })}
        </div>
    );
};
