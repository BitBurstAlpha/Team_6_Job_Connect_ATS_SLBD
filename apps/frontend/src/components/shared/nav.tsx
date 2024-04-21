'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SidebarNavItem } from '../../types';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

interface DashboardNavProps {
    items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
    const path = usePathname();

    if (!items?.length) {
        return null;
    }

    return (
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {items.map((item, index) => {
                const Icon = Icons[item.icon || 'grid'];
                return (
                    item.href && (
                        <Link key={index} href={item.href}>
                            <span
                                className={cn(
                                    'group capitalize flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                                    path === item.href
                                        ? 'bg-primary/10 hover:bg-primary/10 hover:text-blue-700 text-primary'
                                        : 'transparent',
                                )}
                            >
                                <Icon className="mr-2 h-6 w-6" />
                                <span>{item.title}</span>
                            </span>
                        </Link>
                    )
                );
            })}
        </nav>
    );
}
