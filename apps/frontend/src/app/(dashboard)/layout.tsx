import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getServerSession } from '@/lib/session';
import { DashboardNav } from '@/components/shared/dashboard/dashboardNav';
import { dashboardConfig } from '@/config/dashboard';
import { SidebarMiniProfile } from '@/components/shared/dashboard/SidebarMiniProfile';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import { MobileSidebar } from '@/components/shared/dashboard/mobileSidebar';
import { MiniProfile } from '@/components/shared/profile';

interface DashboardLayoutProps {
    children?: React.ReactNode;
}

export default async function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    const session = await getServerSession();

    if (!session) {
        return notFound();
    }

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-white md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    {/* sidebar header  */}
                    <div className="flex h-14 items-center justify-center px-4 lg:h-[60px] lg:px-6">
                        <Image
                            src="/logo.png"
                            alt="LSBU Logo"
                            className="h-auto"
                            width={80}
                            height={50}
                            priority
                        />
                    </div>

                    <div className="flex-1">
                        <SidebarMiniProfile />

                        <DashboardNav items={dashboardConfig.sidebarNav} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-white shadow-sm px-4 lg:h-[60px] lg:px-6">
                    <MobileSidebar />

                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <Icons.search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search Job Title"
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form>
                    </div>

                    <MiniProfile />
                </header>

                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
