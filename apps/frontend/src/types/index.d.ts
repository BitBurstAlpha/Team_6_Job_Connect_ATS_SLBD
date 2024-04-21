import { Icons } from '../components/icons';

export type Items = {
    title: string;
    href: string;
};

export type SidebarNavItem = {
    title: string;
    icon?: keyof typeof Icons;
} & (
    | {
          href: string;
          items?: never;
      }
    | {
          href?: string;
          items: Items[];
      }
);

export type DashboardConfig = {
    sidebarNav: SidebarNavItem[];
};
