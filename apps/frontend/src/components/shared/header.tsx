'use client';

import { useRouter } from 'next/navigation';
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
import { useSession } from '@/context/useSession';
import { MiniProfile } from './profile';

export const Header = () => {
    const router = useRouter();

    const { user } = useSession();

    return (
        <header className="p-4  border-b border-zinc-200 shadow-sm">
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

                {!user ? (
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
                ) : (
                    <MiniProfile />
                )}
            </div>
        </header>
    );
};
