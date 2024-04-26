import { User } from '@/types';
import { create } from 'zustand';

interface UserState {
    session: User | null;
    isSessionLoading: boolean;
    setSession: (user: User | null) => void;
    setSessionLoading: (loadState: boolean) => void;
}

export const useUserStore = create<UserState>()((set) => ({
    session: null,
    isSessionLoading: true,
    setSession: (session) => set(() => ({ session: session })),
    setSessionLoading: (loadState) =>
        set(() => ({ isSessionLoading: loadState })),
}));
