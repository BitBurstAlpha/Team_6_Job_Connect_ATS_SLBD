'use client';

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/store/userStore';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export const Header = () => {
    const router = useRouter();

    const { session, isSessionLoading } = useUserStore();

    if (isSessionLoading) {
        return <h1>loading</h1>;
    }

    return (
        <header className="m-4">
            <div className="flex justify-between">
                <div>
                    <Image
                        src="/logo.png"
                        alt="LSBU Logo"
                        className="w-auto"
                        width={100}
                        height={300}
                        priority
                    />
                </div>

                {session ? null : (
                    <div>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        Job
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink></NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        For employers
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink></NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                )}

                {session?.id ? (
                    <p>{session.username}</p>
                ) : (
                    <div className="space-x-4">
                        <Button onClick={() => router.push('/login')}>
                            Login
                        </Button>
                        <Button
                            variant="outline"
                            className="border-blue-300 text-blue-600 hover:text-blue-800"
                            onClick={() => router.push('/signup')}
                        >
                            Candidate SignUp
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
};
