import { icons, Search, Menu, ChevronDown, Ellipsis } from 'lucide-react';

import {
    Squares2X2Icon,
    BriefcaseIcon,
    CogIcon,
    UserIcon,
    RectangleStackIcon,
    PencilSquareIcon,
    MapPinIcon,
    ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/solid';

export type Icon = typeof icons;

export const Icons = {
    grid: Squares2X2Icon,
    briefcase: BriefcaseIcon,
    users: UserIcon,
    gear: CogIcon,
    search: Search,
    menu: Menu,
    chevronDown: ChevronDown,
    dotMenu: Ellipsis,
    stack: RectangleStackIcon,
    edit: PencilSquareIcon,
    location: MapPinIcon,
    documentComplete: ClipboardDocumentCheckIcon,
};
