'use client';

import { SessionContextProvider } from '@/context/useSession';
import { User } from '@/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Providers({
    children,
    session,
}: {
    children: React.ReactNode;
    session: User | null;
}) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <SessionContextProvider session={session}>
                {children}
            </SessionContextProvider>
        </QueryClientProvider>
    );
}
