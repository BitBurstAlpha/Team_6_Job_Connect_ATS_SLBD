'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import DOMPurify from 'dompurify';
import dateFormat from 'dateformat';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { JobResponse } from '@/types';

export const AppliedJobCardItem = (job: JobResponse) => {
    const description = DOMPurify.sanitize(job.description);

    return (
        <Card
            key={job.id}
            className="flex sm:space-x-4 flex-col sm:flex-row p-4"
        >
            <div>
                <CardHeader className="p-0">
                    <CardTitle>
                        <div>
                            <h1>{job.title}</h1>
                        </div>
                    </CardTitle>
                    <div className="text-zinc-700 flex flex-wrap gap-3 my-2">
                        <div className="flex items-center gap-1">
                            <Icons.calendarClock className="h-5 w-5" />
                            <p className="capitalize">
                                {dateFormat(job.createdAt, 'longDate')}
                            </p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0 py-4">
                    <div
                        className="line-clamp-4"
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                    />
                </CardContent>
            </div>
        </Card>
    );
};
