'use client';

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
import { routes } from '@/apis/routes';
import { useSession } from '@/context/useSession';
import { toast } from 'sonner';

export const MiniProfile = () => {
    const router = useRouter();

    const { user, isSessionLoading, refetch } = useSession();

    const logoutHandler = async () => {
        try {
            await axios.post(
                routes.logoutApi,
                {},
                {
                    withCredentials: true,
                },
            );
        } catch (err) {
            toast.error('something went wrong');
        } finally {
            refetch();
            router.push('/login');
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 border p-1 border-neutral-400 rounded-full">
                    <Avatar>
                        <AvatarImage
                            src={user?.avatar}
                            className="object-cover"
                        />
                        <AvatarFallback>
                            {user?.username.substring(0, 2)}
                        </AvatarFallback>
                    </Avatar>

                    <p className="capitalize">{user?.username}</p>

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
