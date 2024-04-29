import { Metadata } from 'next';
import Image from 'next/image';
import { LoginForm } from '@/components/forms/login.form';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export const metadata: Metadata = {
    title: 'Login | LSBU',
    description: 'login page',
};

export default async function Login() {
    return (
        <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <Link
                href="/signup"
                className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'absolute right-4 top-4 md:right-8 md:top-8',
                )}
            >
                Signup
            </Link>

            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 via-green-300/20 to-indigo-300/20" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <Logo />
                </div>

                <div className="absolute bottom-0 right-0 ">
                    <Image
                        src="/images/login_img.png"
                        alt="login_img"
                        width={844}
                        height={785}
                        priority
                    />
                </div>

                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2 p-4 bg-black/30 rounded-md ">
                        <p className="text-lg ">
                            &ldquo;Hiring is the most important people function
                            you have, and most of us aren’t as good at it as we
                            think. Refocusing your resources on hiring better
                            will have a higher return than almost any training
                            program you can develop. &rdquo;
                        </p>
                        <footer className="text-sm">
                            Laszlo Bock, Co-founder and CEO of Humu and Author
                            of Work Rules
                        </footer>
                    </blockquote>
                </div>
            </div>

            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:max-w-screen-sm">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Login your candidate account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email and password for login to your
                            account
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
