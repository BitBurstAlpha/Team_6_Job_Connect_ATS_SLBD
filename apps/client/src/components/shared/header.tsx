import Image from 'next/image';
import { getServerSession } from '@/lib/session';
import { HeaderNav } from './headerNav';
import { HeaderAction } from './headerAction';
import { HeaderProfile } from './headerProfile';

export const Header = async () => {
    const session = await getServerSession();

    return (
        <header className="mx-auto max-w-[1920px] p-4 shadow-sm border-b border-neutral-100">
            <div className="flex justify-between ">
                <div>
                    <Image
                        src="/logo.png"
                        alt="LSBU Logo"
                        className="h-auto"
                        width={80}
                        height={50}
                        priority
                    />
                </div>

                {session ? null : <HeaderNav />}

                {session ? (
                    <HeaderProfile
                        url={session.avatar}
                        fallback={session.username.substring(0, 2)}
                        username={session.username}
                        role={session.role}
                    />
                ) : (
                    <HeaderAction />
                )}
            </div>
        </header>
    );
};
