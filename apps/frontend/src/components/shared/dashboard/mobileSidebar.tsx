'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { DashboardNav } from './dashboardNav';
import { dashboardConfig } from '@/config/dashboard';
import { Icons } from '@/components/icons';
import { Logo } from '@/components/logo';

export function MobileSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <Icons.menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
                <div className="flex justify-center mb-5">
                    <Logo />
                </div>

                <DashboardNav items={dashboardConfig.sidebarNav} />
            </SheetContent>
        </Sheet>
    );
}
