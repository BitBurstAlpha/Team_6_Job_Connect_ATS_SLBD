import { icons, Search, Menu } from 'lucide-react';

import {
    Squares2X2Icon,
    BriefcaseIcon,
    CogIcon,
    UserIcon,
} from '@heroicons/react/24/solid';

export type Icon = typeof icons;

export const Icons = {
    grid: Squares2X2Icon,
    briefcase: BriefcaseIcon,
    users: UserIcon,
    gear: CogIcon,
    search: Search,
    menu: Menu,
};
