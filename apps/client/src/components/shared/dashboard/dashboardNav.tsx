'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SidebarNavItem } from '@/types';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
;

interface DashboardNavProps {
    items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
    const path = usePathname();

    if (!items?.length) {
        return null;
    }

    return (
        <nav className="grid items-start gap-2 px-2">
            {items.map((item, index) => {
                const Icon = Icons[item.icon || 'grid'];
                return (
                    item.href && (
                        <Link
                            key={index}
                            href={item.disabled ? '/' : item.href}
                        >
                            <span
                                className={cn(
                                    'group flex items-center font-semibold rounded-md p-3 hover:bg-accent hover:text-accent-foreground',
                                    path === item.href
                                        ? 'bg-primary/10 text-primary hover:text-primary'
                                        : 'transparent',
                                    item.disabled &&
                                        'cursor-not-allowed opacity-80',
                                )}
                            >
                                <Icon
                                    className={cn(
                                        'mr-2 h-6 w-6 stroke-[2.5px]',
                                        path === item.href
                                            ? 'text-primary'
                                            : 'text-neutral-700',
                                    )}
                                />
                                <span>{item.title}</span>
                            </span>
                        </Link>
                    )
                );
            })}
        </nav>
    );
}
