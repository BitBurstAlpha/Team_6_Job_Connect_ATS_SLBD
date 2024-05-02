import { useSessionQuery } from '@/lib/api';
import { User } from '@/types';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { createContext, useContext } from 'react';

const SessionContext = createContext<{
    user: User | null | undefined;
    refetch: (options?: RefetchOptions | undefined) => Promise<
        QueryObserverResult<
            | {
                  data: User;
              }
            | null
            | undefined,
            Error
        >
    >;
    isSessionLoading: boolean;
    //@ts-ignore
}>(null);

function SessionContextProvider({
    children,
    session,
}: {
    children: React.ReactNode;
    session: User | null;
}) {
    const { data, isLoading: isSessionLoading, refetch } = useSessionQuery();

    let currentUser: User | null = null;

    if (data?.data.role === 'applicant') {
        currentUser = data.data;
    }

    return (
        <SessionContext.Provider
            value={{ user: currentUser ?? session, refetch, isSessionLoading }}
        >
            {children}
        </SessionContext.Provider>
    );
}

const useSession = () => useContext(SessionContext);

export { SessionContextProvider, useSession };
