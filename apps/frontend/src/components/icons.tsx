import {
    LayoutGrid,
    Settings,
    BriefcaseBusiness,
    UserCircle,
    icons as LucideIcon,
} from 'lucide-react';

export type Icon = keyof typeof LucideIcon;

export const Icons = {
    grid: LayoutGrid,
    user: UserCircle,
    settings: Settings,
    briefcase: BriefcaseBusiness,
};
