import { DashboardConfig } from '@/types';

export const dashboardConfig: DashboardConfig = {
    sidebarNav: [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: 'grid',
        },
        {
            title: 'Applied Jobs',
            href: '/dashboard/applied-jobs',
            icon: 'briefcase',
        },
        {
            title: 'Settings',
            href: '/dashboard/settings',
            icon: 'gear',
        },
    ],
};
