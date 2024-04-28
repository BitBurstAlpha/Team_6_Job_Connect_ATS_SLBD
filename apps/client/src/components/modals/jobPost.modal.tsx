'use client';

import { z } from 'zod';
import Lottie from 'lottie-react';
import loading from '@lottie/loading.json';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { IJobPostData } from '@/types';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';
import { Label } from '../ui/label';
import Tiptap from '../tiptap';
import axios from 'axios';
import { job } from '@api/job.apis';
import { JobPostRequestBodyType } from '@/types';
import { usePublicJobs } from '@/lib/api';

const defaultDescription = `
        <p>A Full Stack Software Engineer is a versatile professional who possesses both frontend and backend development skills. They are proficient in creating user-facing interfaces as well as managing server-side logic and databases.</p>
        <p></p>
        <h2>Skills</h2>
        <ul>
            <li>Proficiency in HTML, CSS, and JavaScript.</li>
            <li>Experience with frontend frameworks like React, Angular, or Vue.js.</li>
            <li>Strong understanding of backend technologies such as Node.js, Python/Django, or Java/Spring.</li>
            <li>Knowledge of database management systems like SQL and NoSQL.</li>
            <li>Familiarity with version control systems such as Git.</li>
            <li>Problem-solving skills and attention to detail.</li>
            <li>Excellent communication and teamwork abilities.</li>
            <li>Ability to adapt to new technologies and learn quickly.</li>
        </ul>`;

const jobPostingSchema = z.object({
    title: z
        .string()
        .min(2, {
            message: 'Please enter a string with at least two characters',
        })
        .max(50),
    description: z.string().min(10).trim(),
    typeId: z.string({
        required_error: 'Please specify the type of job being posted.',
    }),
    categoryId: z.string({
        required_error: 'Please specify the category of job being posted.',
    }),
    experienceId: z.string({
        required_error: 'Please specify the experience of job being posted.',
    }),
    qualificationId: z.string({
        required_error: 'Please specify the qualification of job being posted.',
    }),
    maxSalary: z.number(),
    minSalary: z.number(),
    location: z.string({
        required_error: 'Please enter a location',
    }),
});

export function JobPostModal({
    categories,
    experiences,
    qualifications,
    types,
    updateJobSlug,
    updateData,
}: IJobPostData) {
    const [open, setOpen] = useState(false);

    const { refetch } = usePublicJobs();

    const form = useForm<z.infer<typeof jobPostingSchema>>({
        resolver: zodResolver(jobPostingSchema),
        defaultValues: {
            title: updateData
                ? updateData.title
                : 'Full Stack Software Engineer',
            description: updateData
                ? updateData.description
                : defaultDescription,
            categoryId: updateData ? updateData.categoryId.toString() : '',
            location: updateData ? updateData.location : 'New York, NY',
            experienceId: updateData ? updateData.experienceId.toString() : '',
            qualificationId: updateData
                ? updateData.qualificationId.toString()
                : '',
            typeId: updateData ? updateData.typeId.toString() : '',
            minSalary: updateData ? updateData.minSalary : 300,
            maxSalary: updateData ? updateData.maxSalary : 500,
        },
    });

    const mutation = useMutation({
        mutationFn: (data: JobPostRequestBodyType) => {
            return axios.post(job.jobApi, data, {
                withCredentials: true,
            });
        },
        onSuccess: () => {
            toast.success('🎉 Job posting successful! Congratulations! 🎉');
            setOpen(false);
            refetch();
            form.reset();
        },
        onError: () => {
            toast.error('Please double-check your details and try again');
        },
    });

    const updateMutation = useMutation({
        mutationFn: (data: JobPostRequestBodyType) => {
            return axios.patch(`${job.jobApi}/${updateJobSlug}`, data, {
                withCredentials: true,
            });
        },
        onSuccess: () => {
            toast.success('🎉 Job Updated successful! 🎉');
            refetch();
            setOpen(false);
        },
        onError: () => {
            toast.error('Please double-check your details and try again');
        },
    });

    function onSubmit(values: z.infer<typeof jobPostingSchema>) {
        if (updateJobSlug) {
            updateMutation.mutate({
                ...values,
                typeId: Number(values.typeId),
                categoryId: Number(values.categoryId),
                experienceId: Number(values.experienceId),
                qualificationId: Number(values.qualificationId),
            });
        } else {
            mutation.mutate({
                ...values,
                typeId: Number(values.typeId),
                categoryId: Number(values.categoryId),
                experienceId: Number(values.experienceId),
                qualificationId: Number(values.qualificationId),
            });
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {updateJobSlug ? (
                    <Button>Update Job</Button>
                ) : (
                    <Button>Post a Job</Button>
                )}
            </DialogTrigger>
            <DialogContent className="lg:max-w-screen-lg overflow-y-auto max-h-[90%]">
                <DialogHeader className="sticky top-0 bg-white p-6 shadow-sm border-b-neutral-100">
                    <DialogTitle>
                        {updateJobSlug ? 'Update a Job' : 'Post a Job'}
                    </DialogTitle>
                    <DialogDescription>
                        Click Job Post when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6 p-6"
                    >
                        <div className="grid gap-4 py-2 p-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center space-x-4 space-y-2">
                                        <FormLabel className="text-right">
                                            Title
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="col-span-3"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage className="col-start-2 col-span-3 " />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="typeId"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center space-x-4 space-y-2">
                                        <FormLabel className="text-right">
                                            Job Type
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="col-span-3 capitalize">
                                                    <SelectValue placeholder="Select a type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {types?.map((type) => (
                                                    <SelectItem
                                                        className="capitalize"
                                                        key={type.id}
                                                        value={type.id.toString()}
                                                    >
                                                        {type.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>

                                        <FormMessage className="col-start-2 col-span-3 " />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="categoryId"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center space-x-4 space-y-2">
                                        <FormLabel className="text-right">
                                            Job Category
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="col-span-3 capitalize">
                                                    <SelectValue placeholder="Select a Category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {categories?.map((category) => (
                                                    <SelectItem
                                                        className="capitalize"
                                                        key={category.id}
                                                        value={category.id.toString()}
                                                    >
                                                        {category.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>

                                        <FormMessage className="col-start-2 col-span-3 " />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="experienceId"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center space-x-4 space-y-2">
                                        <FormLabel className="text-right">
                                            Experience Level
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="col-span-3 capitalize">
                                                    <SelectValue placeholder="Select a Experience Level" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {experiences?.map(
                                                    (experience) => (
                                                        <SelectItem
                                                            className="capitalize"
                                                            key={experience.id}
                                                            value={experience.id.toString()}
                                                        >
                                                            {experience.name}
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>

                                        <FormMessage className="col-start-2 col-span-3 " />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="qualificationId"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center space-x-4 space-y-2">
                                        <FormLabel className="text-right">
                                            Qualification
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="col-span-3 capitalize">
                                                    <SelectValue placeholder="Select a qualification Level" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {qualifications?.map(
                                                    (qualification) => (
                                                        <SelectItem
                                                            className="capitalize"
                                                            key={
                                                                qualification.id
                                                            }
                                                            value={qualification.id.toString()}
                                                        >
                                                            {qualification.name}
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>

                                        <FormMessage className="col-start-2 col-span-3 " />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center space-x-4 space-y-2">
                                        <FormLabel className="text-right">
                                            Location
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="col-span-3"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage className="col-start-2 col-span-3 " />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-4 items-baseline space-x-4 space-y-2">
                                <Label className="text-right">
                                    Salary Range (£)
                                </Label>
                                <div className="col-span-3">
                                    <div className="grid grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="minSalary"
                                            render={({ field }) => (
                                                <FormItem className="grid gap-3">
                                                    <FormLabel>
                                                        Min Salary
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="number"
                                                            {...field}
                                                        />
                                                    </FormControl>

                                                    <FormMessage className="col-start-2 col-span-3 " />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="maxSalary"
                                            render={({ field }) => (
                                                <FormItem className="grid gap-3">
                                                    <FormLabel>
                                                        Max Salary
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="number"
                                                            {...field}
                                                        />
                                                    </FormControl>

                                                    <FormMessage className="col-start-2 col-span-3 " />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-baseline space-x-4 space-y-2">
                                        <FormLabel className="text-right">
                                            Description
                                        </FormLabel>
                                        <FormControl>
                                            <div className="col-span-3">
                                                <Tiptap
                                                    description={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </div>
                                        </FormControl>

                                        <FormMessage className="col-start-2 col-span-3" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <DialogFooter className="p-4">
                            <Button
                                disabled={
                                    mutation.isPending ||
                                    updateMutation.isPending
                                }
                                type="submit"
                            >
                                {mutation.isPending ||
                                updateMutation.isPending ? (
                                    <Lottie
                                        animationData={loading}
                                        loop
                                        className="text-white"
                                    />
                                ) : updateJobSlug ? (
                                    'Update the job'
                                ) : (
                                    'Post Job'
                                )}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
