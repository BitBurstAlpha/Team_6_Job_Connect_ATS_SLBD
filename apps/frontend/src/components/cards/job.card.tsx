'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { usePublicJobs } from '@/lib/api';
import DOMPurify from 'dompurify';

export const JobCard = () => {
    const { data } = usePublicJobs();

    if (!data) {
        return <p>loading</p>;
    }

    return (
        <>
            {data.data.map((job) => {
                const description = DOMPurify.sanitize(job.description);

                return (
                    <Card key={job.id}>
                        <CardHeader>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>
                                <div
                                    className="line-clamp-4"
                                    dangerouslySetInnerHTML={{
                                        __html: description,
                                    }}
                                />
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                );
            })}
        </>
    );
};
