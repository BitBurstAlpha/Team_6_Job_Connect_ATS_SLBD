import {
    icons,
    PoundSterling,
    CalendarClock,
    ChevronDown,
    MenuIcon,
    Search,
} from 'lucide-react';

import {
    ClockIcon,
    Squares2X2Icon,
    BriefcaseIcon,
    CogIcon,
    UserIcon,
    RectangleStackIcon,
    PencilSquareIcon,
    MapPinIcon,
    ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

export type Icon = typeof icons;

export const Icons = {
    grid: Squares2X2Icon,
    briefcase: BriefcaseIcon,
    users: UserIcon,
    gear: CogIcon,
    clock: ClockIcon,
    pound: PoundSterling,
    calendarClock: CalendarClock,
    chevronDown: ChevronDown,
    stack: RectangleStackIcon,
    edit: PencilSquareIcon,
    location: MapPinIcon,
    documentComplete: ClipboardDocumentCheckIcon,
    menu: MenuIcon,
    search: Search,
};
