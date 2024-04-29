import { CardSkeleton } from '@/components/card-skeleton';

export default function DashboardJobsLoading() {
    return (
        <div className="grid gap-10">
            <CardSkeleton />
        </div>
    );
}
