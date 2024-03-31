import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

export const SignupForm = () => {
    return (
        <div className="w-1/2">
            <div className="bg-white max-w-lg py-16 px-20 mx-auto rounded-xl shadow space-y-4">
                <div className="w-full">
                    <h2 className="text-3xl font-medium text-center">
                        Sign Up
                    </h2>
                </div>

                <div className="space-y-2 w-full">
                    <Input
                        type="username"
                        placeholder="username"
                        className="h-12"
                    />

                    <Input
                        type="email"
                        placeholder="email address"
                        className="h-12"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        className="h-12"
                    />

                    <Input
                        type="confirm password"
                        placeholder="Confirm Password"
                        className="h-12"
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
                                I&apos;m agree with the Terms & conditions
                            </label>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <Button size="lg" className="w-full">
                        Signup
                    </Button>
                </div>

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
    );
};
