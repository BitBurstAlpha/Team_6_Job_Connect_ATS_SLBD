import { icons, PoundSterling, CalendarClock } from 'lucide-react';

import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export type Icon = typeof icons;

export const Icons = {
    location: MapPinIcon,
    clock: ClockIcon,
    pound: PoundSterling,
    calendarClock: CalendarClock,
};
