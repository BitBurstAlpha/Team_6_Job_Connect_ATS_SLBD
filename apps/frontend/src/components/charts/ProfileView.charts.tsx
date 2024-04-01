'use client';

import { AreaChart, Card, Title } from '@tremor/react';

const chartdata = [
    {
        date: 'Jan 23',
        views: 180,
    },
    {
        date: 'Feb 23',
        views: 130,
    },
    {
        date: 'Mar 23',
        views: 156,
    },
    {
        date: 'Apr 23',
        views: 165,
    },
    {
        date: 'May 23',
        views: 153,
    },
    {
        date: 'Jun 23',
        views: 124,
    },
];

export function ProfileView() {
    const customTooltip = (props: any) => {
        const { payload, active } = props;
        if (!active || !payload) return null;
        return (
            <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
                {payload.map((category: any, idx: any) => (
                    <div key={idx} className="flex flex-1 space-x-2.5">
                        <div
                            className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
                        />
                        <div className="space-y-1">
                            <p className="text-tremor-content">
                                {category.dataKey}
                            </p>
                            <p className="font-medium text-tremor-content-emphasis">
                                {category.value} view count
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    return (
        <>
            <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Profile View
            </h3>
            <AreaChart
                className="mt-4 h-72"
                data={chartdata}
                index="date"
                categories={['views']}
                colors={['blue']}
                yAxisWidth={30}
                customTooltip={customTooltip}
            />
        </>
    );
}
