'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface IMiniProfile {
    avatar: string;
    username: string;
}

export function SidebarMiniProfile({ avatar, username }: IMiniProfile) {
    return (
        <div className="w-full py-8 flex flex-col space-y-2 justify-center items-center">
            <Avatar className="h-24 w-24">
                <AvatarFallback>FK</AvatarFallback>
                <AvatarImage className="object-cover" src={avatar} />
            </Avatar>

            <p className="capitalize text-xl font-semibold">{username}</p>
        </div>
    );
}
