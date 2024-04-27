import { DashboardConfig } from '@/types';

export const dashboardConfig: DashboardConfig = {
    sidebarNav: [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: 'grid',
        },
        {
            title: 'Jobs',
            href: '/dashboard/jobs',
            icon: 'briefcase',
        },
        {
            title: 'Candidate',
            href: '/dashboard/candidate',
            icon: 'users',
        },
        {
            title: 'Settings',
            href: '/dashboard/settings',
            icon: 'gear',
        },
    ],
};
