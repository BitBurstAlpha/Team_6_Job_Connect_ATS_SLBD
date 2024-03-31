'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export const Header = () => {
    return (
        <header className="m-4">
            <div className="flex justify-between">
                <div>
                    <Image
                        src="/logo.png"
                        alt="LSBU Logo"
                        width={100}
                        height={300}
                        priority
                    />
                </div>

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

                <div className="space-x-4">
                    <Button>Login</Button>
                    <Button
                        variant="outline"
                        className="border-blue-300 text-blue-600 hover:text-blue-800"
                    >
                        Candidate SignUp
                    </Button>
                </div>
            </div>
        </header>
    );
};
