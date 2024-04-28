'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { MoreHorizontal } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

import { JobPostModal } from '../modals/jobPost.modal';
import { IJobPostData } from '@/types';
import { api, usePublicJobs } from '@/lib/api';
import Lottie from 'lottie-react';
import loading from '@lottie/loading.json';
import { job } from '@api/job.apis';

export function JobListView({
    categories,
    experiences,
    qualifications,
    types,
}: IJobPostData) {
    const { data, isLoading, isError, refetch } = usePublicJobs();

    const jobDeleteHandler = async (slug: string) => {
        await api.delete(`${job.jobApi}/${slug}`);

        refetch();
    };

    if (isError) {
        return (
            <div className="flex m-auto flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight text-red-500">
                    Something Went Wrong
                </h3>
                <Button onClick={() => refetch()}>Try Again</Button>
            </div>
        );
    }

    if (isLoading && !isError) {
        return (
            <div className="flex flex-col m-auto items-center gap-1 text-center">
                <Lottie animationData={loading} loop className="text-white" />
            </div>
        );
    }

    if (data?.data.length === 0 && !isLoading) {
        return (
            <div className="flex m-auto flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                    No job postings available
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Reach potential candidates by posting job openings here.
                </p>
                <JobPostModal
                    types={types}
                    categories={categories}
                    experiences={experiences}
                    qualifications={qualifications}
                />
            </div>
        );
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Job Number</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Type</TableHead>
                    <TableHead className="hidden md:table-cell">
                        Category
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                        Created at
                    </TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.map((job) => (
                    <TableRow key={job.slug}>
                        <TableCell className="font-medium">
                            {job.slug}
                        </TableCell>

                        <TableCell>
                            <Badge variant="outline">{job.title}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell capitalize">
                            {job.type.name}
                        </TableCell>
                        <TableCell className="hidden md:table-cell capitalize">
                            {job.category.name}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                            {job.createdAt}
                        </TableCell>

                        <TableCell className="space-x-4">
                            <JobPostModal
                                types={types}
                                categories={categories}
                                experiences={experiences}
                                qualifications={qualifications}
                                updateData={job}
                                updateJobSlug={job.slug}
                            />

                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive">
                                        Delete
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Are you sure delete this job?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This
                                            will permanently delete &quot;
                                            {job.title}&quot; this job delete
                                            and remove data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            className="bg-red-600 hover:bg-red-400"
                                            onClick={() => {
                                                jobDeleteHandler(job.slug);
                                            }}
                                        >
                                            Delete
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </TableCell>

                        {/* <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">
                                            Toggle menu
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                        Actions
                                    </DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem
                                    // onClick={() => {
                                    //     jobDeleteHandler(job.slug);
                                    // }}
                                    >
                                        
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu> */}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
