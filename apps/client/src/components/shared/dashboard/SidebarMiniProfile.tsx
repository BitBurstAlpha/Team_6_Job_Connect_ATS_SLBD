'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSession } from '@/context/useSession';

export function SidebarMiniProfile() {
    const { user } = useSession();

    if (!user) {
        return null;
    }

    return (
        <div className="w-full py-8 flex flex-col space-y-2 justify-center items-center">
            <Avatar className="h-24 w-24">
                <AvatarFallback>{user.username.substring(0, 2)}</AvatarFallback>
                <AvatarImage className="object-cover" src={user.avatar} />
            </Avatar>

            <p className="capitalize text-xl font-semibold">{user.username}</p>
        </div>
    );
}
