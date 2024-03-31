import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

export const LoginForm = () => {
    return (
        <div className="w-1/2">
            <div className="bg-white max-w-lg py-16 px-20 mx-auto rounded-xl shadow space-y-4">
                <div className="w-full">
                    <h2 className="text-3xl font-medium text-center">
                        Hello Again!
                    </h2>
                </div>

                <div className="space-y-2 w-full">
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
                    <Button size="lg" className="w-full">
                        Login
                    </Button>
                </div>

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
    );
};
