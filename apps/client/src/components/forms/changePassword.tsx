'use client';
import { z } from 'zod';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { client } from '@api/client.apis';
import { toast } from 'sonner';

const changePasswordSchema = z.object({
    oldPassword: z.string().min(2),
    newPassword: z.string().min(6),
});

export const ChangePasswordForm = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof changePasswordSchema>>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            newPassword: '',
            oldPassword: '',
        },
    });

    const mutation = useMutation({
        mutationFn: (data: z.infer<typeof changePasswordSchema>) => {
            return axios.post(client.changePasswordApi, data, {
                withCredentials: true,
            });
        },
        onSuccess: () => {
            toast.success('password change successful');
        },
        onError: (err) => {
            toast.error('Please double-check your details and try again');
        },
    });

    async function onSubmit(values: z.infer<typeof changePasswordSchema>) {
        mutation.mutate(values);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                    Use your old password and a new password to change your
                    password
                </CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent className="space-y-4">
                        <FormField
                            name="oldPassword"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Old Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="enter old Password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="newPassword"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>New Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="enter new Password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                        <Button className="ml-auto">Update</Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
};
