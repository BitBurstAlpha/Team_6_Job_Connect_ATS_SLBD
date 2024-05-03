'use client';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Icons } from '@/components/icons';
import DOMPurify from 'dompurify';
import dateFormat from 'dateformat';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { routes } from '@/apis/routes';
import { toast } from 'sonner';
import axios from 'axios';
import { useState } from 'react';
import { JobResponse } from '@/types';

export const JobCardItem = (job: JobResponse) => {
    const [loading, setLoading] = useState<boolean>(false);

    const applyJobHandler = async (slug: string) => {
        try {
            setLoading(true);

            await axios.post(
                `${routes.applyJob}/${slug}`,
                {},
                {
                    withCredentials: true,
                },
            );

            toast.success('your are successful applied for job');
        } catch (err: unknown) {
            if (err instanceof Error) {
                if (err.message === 'Request failed with status code 409') {
                    toast.error('you already applied this job!');
                } else {
                    toast.error('first need to login for apply job');
                }
            } else {
                toast.error('something went wrong');
            }
        } finally {
            setLoading(false);
        }
    };

    const description = DOMPurify.sanitize(job.description);

    return (
        <Card
            key={job.id}
            className="flex sm:space-x-4 flex-col sm:flex-row p-4"
        >
            <Avatar className="w-20 h-20 rounded-sm border border-">
                <AvatarFallback>{job.title.substring(0, 2)}</AvatarFallback>
                <AvatarImage
                    src={process.env.NEXT_PUBLIC_API_ENDPOINT + job.user.avatar}
                />
            </Avatar>

            <div>
                <CardHeader className="p-0">
                    <CardTitle>
                        <div>
                            <p className="text-sm mb-1">
                                {job.user.client.companyName}
                            </p>
                            <h1>{job.title}</h1>
                        </div>
                    </CardTitle>
                    <div className="text-zinc-700 flex flex-wrap gap-3 my-2">
                        <div className="flex items-center gap-1">
                            <Icons.location className="h-5 w-5" />
                            <p className="capitalize">{job.location}</p>
                        </div>

                        <div className="flex items-center gap-1">
                            <Icons.clock className="h-5 w-5" />
                            <p className="capitalize">{job.type.name}</p>
                        </div>

                        <div className="flex items-center gap-1">
                            <Icons.pound className="h-5 w-5" />
                            <p className="capitalize">
                                {job.minSalary} - {job.maxSalary}
                            </p>
                        </div>

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

            <CardFooter>
                <Button
                    disabled={loading}
                    onClick={(e) => {
                        applyJobHandler(job.slug);
                    }}
                >
                    {loading ? 'applying...' : 'Apply job'}
                </Button>
            </CardFooter>
        </Card>
    );
};
