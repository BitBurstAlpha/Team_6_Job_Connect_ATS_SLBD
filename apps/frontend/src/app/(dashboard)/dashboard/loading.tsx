import { CardSkeleton } from '@/components/card-skeleton';

export default function DashboardLoading() {
    return (
        <div className="grid gap-10">
            <CardSkeleton />
        </div>
    );
}
