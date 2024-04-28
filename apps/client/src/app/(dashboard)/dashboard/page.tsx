import { JobCards } from '@/components/dashboard/JobCards';
import { CandidateViewCard } from '@/components/dashboard/candidateViewCard';
import JobViewChart from '@/components/dashboard/jobViewChart';

export default function Login() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
            <div className="xl:col-span-3 space-y-10">
                <JobViewChart />
                <JobCards />
            </div>

            <CandidateViewCard />
        </div>
    );
}
