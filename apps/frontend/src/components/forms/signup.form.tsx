'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { routes } from '@/apis/routes';
import { toast } from 'sonner';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import Lottie from 'lottie-react';
import loading from '@/lottie/loading.json';

const signupSchema = z.object({
    username: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    isAgreed: z.literal(true),
});

export const SignupForm = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const mutation = useMutation({
        mutationFn: (data: z.infer<typeof signupSchema>) => {
            return axios.post(routes.registerApi, data);
        },
        onSuccess: () => {
            toast.success(
                '🎉 Your registration is complete. Welcome aboard! 🎉',
            );
            router.push('/login');
        },
    });

    async function onSubmit(values: z.infer<typeof signupSchema>) {
        mutation.mutate(values);
    }

    return (
        <Form {...form}>
            <div>
                <div className="bg-white w-full py-16 px-20 mx-auto rounded-xl shadow space-y-4">
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

                        <FormField
                            name="isAgreed"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="flex items-center w-full space-x-2">
                                            <Checkbox
                                                id="remember"
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />

                                            <div className="items-top flex space-x-2 flex-1">
                                                <div className="grid gap-1.5 leading-none">
                                                    <label
                                                        htmlFor="remember"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        I&apos;m agree with the
                                                        Terms & conditions
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="w-full">
                            <Button
                                disabled={mutation.isPending}
                                size="lg"
                                className="w-full"
                            >
                                {mutation.isPending ? (
                                    <Lottie
                                        animationData={loading}
                                        loop
                                        className="text-white"
                                    />
                                ) : (
                                    'Signup'
                                )}
                            </Button>
                        </div>

                        {mutation.isError ? (
                            <div className="text-sm text-red-500">
                                An error occurred: {mutation.error.message}
                            </div>
                        ) : null}
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
