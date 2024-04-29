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
            href: '/dashboard/jobs',
            icon: 'briefcase',
        },
        {
            title: 'Profile',
            href: '/dashboard/profile',
            icon: 'users',
        },
    ],
};
