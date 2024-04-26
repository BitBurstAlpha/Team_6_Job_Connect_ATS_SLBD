'use client';

import type { User } from '@/types';
import { auth } from '@api/auth.apis';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useUserStore } from '@/store/userStore';

export const SessionProvider = ({
    children,
    session,
}: {
    children: React.ReactNode;
    session: User | null;
}) => {
    const [userSession, setUserSession] = useState<User | null>(session);

    const { setSession, setSessionLoading } = useUserStore();

    const { data, isLoading } = useQuery<{
        data: User;
    } | null>({
        queryKey: ['current-user'],
        queryFn: () => {
            if (session) {
                return axios.get(auth.currentUserApi, {
                    withCredentials: true,
                });
            }

            return Promise.resolve(null);
        },
        retry: 3,
        refetchInterval: 10000,
        refetchOnWindowFocus: true,
        retryDelay: 10000,
        refetchOnReconnect: true,
    });

    useEffect(() => {
        if (data) {
            setUserSession((preValue) => data.data || preValue);
        } else {
            setUserSession(null);
        }

        setSessionLoading(isLoading);

        setSession(userSession);
    }, [data, userSession, setSession, isLoading, setSessionLoading]);

    useEffect(() => {
        setSessionLoading(true);

        return () => setSessionLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
};
