'use client';

import { LineChart } from '@tremor/react';

const data = [
    {
        date: 'Aug 01',
        'Job View': 10,
    },
    {
        date: 'Aug 02',
        'Job View': 30,
    },
    {
        date: 'Aug 03',
        'Job View': 50,
    },
    {
        date: 'Aug 04',
        'Job View': 60,
    },
    {
        date: 'Aug 05',
        'Job View': 90,
    },
    {
        date: 'Aug 06',
        'Job View': 10,
    },
    {
        date: 'Aug 07',
        'Job View': 50,
    },
    {
        date: 'Aug 08',
        'Job View': 80,
    },
    {
        date: 'Aug 09',
        'Job View': 150,
    },
    {
        date: 'Aug 10',
        'Job View': 950,
    },
    {
        date: 'Aug 11',
        'Job View': 180,
    },
    {
        date: 'Aug 12',
        'Job View': 980,
    },
    {
        date: 'Aug 13',
        'Job View': 580,
    },
    {
        date: 'Aug 14',
        'Job View': 980,
    },
    {
        date: 'Aug 15',
        'Job View': 880,
    },
];

export default function JobViewChart() {
    return (
        <>
            <div className="flex items-center">
                <h3 className="flex-1 text-lg text-tremor-default font-semibold text-tremor-content-strong dark:text-dark-tremor-content">
                    Job View
                </h3>
                <p className="mt-1 shrink-0 text-2xl font-bold text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    5880
                </p>
            </div>
            <LineChart
                data={data}
                index="date"
                categories={['Job View']}
                colors={['blue']}
                yAxisWidth={55}
                onValueChange={() => {}}
                className="mt-6 hidden h-96 sm:block"
            />
            <LineChart
                data={data}
                index="date"
                categories={['Job View']}
                colors={['blue']}
                showYAxis={false}
                showLegend={false}
                startEndOnly={true}
                className="mt-6 h-72 sm:hidden"
            />
        </>
    );
}
