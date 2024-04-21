import { DashboardConfig } from '../types';

export const dashboardConfig: DashboardConfig = {
    sidebarNav: [
        {
            title: 'dashboard',
            href: '/dashboard',
            icon: 'grid',
        },
        {
            title: 'Jobs',
            href: '/jobs',
            icon: 'briefcase',
            items: [
                {
                    title: 'All Jobs',
                    href: '/jobs/all_jobs',
                },
            ],
        },
        {
            title: 'Profile',
            href: '/profile',
            icon: 'user',
        },
        {
            title: 'settings',
            href: '/Settings',
            icon: 'settings',
        },
    ],
};
