'use client';

import { User } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import axios from 'axios';
import { client } from '@api/client.apis';

export const DashboardProfile = ({ session }: { session: User | null }) => {
    const router = useRouter();

    const logoutHandler = async () => {
        try {
            await axios.post(
                client.logoutApi,
                {},
                {
                    withCredentials: true,
                },
            );

            router.push('/login');
        } catch (err) {
            router.push('/login');
        }
    };

    if (!session) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 border p-1 border-neutral-400 rounded-full">
                    <Avatar>
                        <AvatarImage
                            src={session.avatar}
                            className="object-cover"
                        />
                        <AvatarFallback>
                            {session.username.substring(0, 2)}
                        </AvatarFallback>
                    </Avatar>

                    <p className="capitalize">{session.username}</p>

                    <Icons.chevronDown className="h-6 x-6 text-primary" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuItem onClick={logoutHandler}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
