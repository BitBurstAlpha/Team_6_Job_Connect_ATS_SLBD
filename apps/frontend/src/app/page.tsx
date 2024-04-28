import { JobCard } from '@/components/cards/job.card';
import { Header } from '@/components/shared/header';

export default function Home() {
    return (
        <main>
            <Header />
            <div className="lg:grid grid-cols-4 gap-8 lg:px-24 py-12 max-w-[1920px] mx-auto">
                <div></div>
                <div className="col-span-2 bg-white p-4 rounded-sm">
                    <JobCard />
                </div>
                <div></div>
            </div>
        </main>
    );
}
