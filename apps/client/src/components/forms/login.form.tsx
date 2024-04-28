'use client';
import { z } from 'zod';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { useSession } from '@/context/useSession';

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const LoginForm = () => {
    const router = useRouter();
    const { refetch } = useSession();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const mutation = useMutation({
        mutationFn: (data: z.infer<typeof loginSchema>) => {
            return axios.post(
                client.loginApi,
                {
                    type: 'client',
                    ...data,
                },
                {
                    withCredentials: true,
                },
            );
        },
        onSuccess: (data: { data: User }) => {
            toast.success(
                `Hello! ${data.data.username}. 🎉 You're in! Welcome back to your account. 🎉`,
            );
            refetch();
            router.push('/account-create');
        },
        onError: (err) => {
            toast.error('Please double-check your credentials and try again');
        },
    });

    async function onSubmit(values: z.infer<typeof loginSchema>) {
        mutation.mutate(values);
    }

    return (
        <Form {...form}>
            <div className="w-1/2">
                <div className="bg-white max-w-lg py-16 px-20 mx-auto rounded-xl shadow space-y-4">
                    <div className="w-full">
                        <h2 className="text-3xl font-medium text-center">
                            Hello Again!
                        </h2>
                    </div>

                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <div className="space-y-2 w-full">
                            <FormField
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="email address"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                name="password"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="password"
                                                type="password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex items-center w-full">
                            {/* Remember Checkbox  */}
                            <div className="items-top flex space-x-2 flex-1">
                                <Checkbox id="remember" />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="remember"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            {/* Forget Password Link */}
                            <Link
                                href="#"
                                className="text-blue-600 text-sm font-medium"
                            >
                                Forget Password?
                            </Link>
                        </div>

                        <div className="w-full">
                            <Button type="submit" size="lg" className="w-full">
                                {mutation.isPending ? (
                                    <Lottie
                                        animationData={loading}
                                        loop
                                        className="text-white"
                                    />
                                ) : (
                                    'Login'
                                )}
                            </Button>
                        </div>
                    </form>

                    <div className="flex w-full">
                        <div className="mx-auto flex space-x-2">
                            <p className="">New Job Seeker?</p>
                            <Link href="/signup" className="text-blue-600">
                                Signup
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
};
