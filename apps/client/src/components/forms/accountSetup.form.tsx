'use client';
import { z } from 'zod';

import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { client } from '@api/client.apis';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-react';
import loading from '@lottie/loading.json';
import { toast } from 'sonner';
import type { User } from '@/types';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useMutation } from '@tanstack/react-query';

const accountSetupSchema = z.object({
    companyName: z.string().min(2),
    fullName: z.string().min(6),
    phoneNumber: z.string().min(7),
    website: z.string().optional(),
});

export const AccountSetupForm = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof accountSetupSchema>>({
        resolver: zodResolver(accountSetupSchema),
        defaultValues: {
            companyName: '',
            fullName: '',
            phoneNumber: '',
        },
    });

    const mutation = useMutation({
        mutationFn: (data: z.infer<typeof accountSetupSchema>) => {
            return axios.post(client.accountCreateApi, data, {
                withCredentials: true,
            });
        },
        onSuccess: (data: { data: User }) => {
            toast.success('🎉 your are successful setup client account. 🎉');
            router.push('/dashboard');
        },
        onError: (err) => {
            toast.error('Please double-check your details and try again');
        },
    });

    async function onSubmit(values: z.infer<typeof accountSetupSchema>) {
        mutation.mutate(values);
    }

    return (
        <Form {...form}>
            <div className="">
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <div className="space-y-6 w-full">
                        <FormField
                            name="companyName"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="enter company name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="fullName"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="enter your full name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="phoneNumber"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="enter your phone number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="website"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Website (optional)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="enter your website"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="ml-auto">
                        <Button type="submit" size="lg" className="w-full">
                            {mutation.isPending ? (
                                <Lottie
                                    animationData={loading}
                                    loop
                                    className="text-white"
                                />
                            ) : (
                                'Continue'
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </Form>
    );
};
