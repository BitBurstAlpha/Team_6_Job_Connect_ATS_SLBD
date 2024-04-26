'use client';

import { User } from '@/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from '@/providers/SessionProvider';

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
            <SessionProvider session={session}>{children}</SessionProvider>
        </QueryClientProvider>
    );
}
