'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import axios from 'axios';
import { client } from '@api/client.apis';

export const HeaderProfile = ({
    url,
    fallback,
    role,
    username,
}: {
    url: string;
    fallback: string;
    username: string;
    role: string;
}) => {
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

    return (
        <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
                <Avatar>
                    <AvatarImage src={url} className="object-cover" />
                    <AvatarFallback className="uppercase">
                        {fallback}
                    </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                    <p className="capitalize font-medium">{username}</p>
                    <p className="capitalize text-xs font-medium">{role}</p>
                </div>
            </div>

            <Button variant="outline" onClick={logoutHandler} type="button">
                Logout
            </Button>
        </div>
    );
};
