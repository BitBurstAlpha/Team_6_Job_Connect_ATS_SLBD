'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export const HeaderAction = () => {
    const router = useRouter();

    return (
        <div className="space-x-4">
            <Button onClick={() => router.push('/login')}>Login</Button>
            <Button
                variant="outline"
                className="border-blue-300 text-blue-600 hover:text-blue-800"
                onClick={() => router.push('/signup')}
            >
                Candidate SignUp
            </Button>
        </div>
    );
};
