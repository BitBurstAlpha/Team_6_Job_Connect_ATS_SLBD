'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { toast } from 'sonner';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';

const signupSchema = z.object({
    username: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
});

export const SignupForm = () => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    async function onSubmit(values: z.infer<typeof signupSchema>) {
        try {
            setLoading(true);

            const response = await axios.post(
                'http://localhost:8000/api/users/register',
                {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                },
            );

            if (response.status == 201) {
                toast.success('register success');
                router.push('/');
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error('register fail');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <div className="w-1/2">
                <div className="bg-white max-w-lg py-16 px-20 mx-auto rounded-xl shadow space-y-4">
                    <div className="w-full">
                        <h2 className="text-3xl font-medium text-center">
                            Sign Up
                        </h2>
                    </div>

                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <div className="space-y-2 w-full">
                            <FormField
                                name="username"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>username</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="username"
                                                className="h-12"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="email address"
                                                className="h-12"
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
                                        <FormLabel>password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="password"
                                                className="h-12"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                name="confirmPassword"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="confirm password"
                                                className="h-12"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex items-center w-full">
                            <div className="items-top flex space-x-2 flex-1">
                                <Checkbox id="remember" />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="remember"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I&apos;m agree with the Terms &
                                        conditions
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <Button size="lg" className="w-full">
                                {loading ? 'loading...' : 'Signup'}
                            </Button>
                        </div>
                    </form>

                    <div className="flex w-full">
                        <div className="mx-auto flex space-x-2">
                            <p className="">Already have account?</p>
                            <Link href="/login" className="text-blue-600">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
};
