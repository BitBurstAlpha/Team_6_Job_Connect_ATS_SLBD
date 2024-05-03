import { AppliedJobCard } from '@/components/cards/appliedJob.card';

export default function AppliedJobs() {
    return (
        <div className="w-full space-y-4 bg-white p-4 rounded-sm">
            <h1 className="text-xl font-bold mb-4">Applied Jobs</h1>

            <AppliedJobCard />
        </div>
    );
}
