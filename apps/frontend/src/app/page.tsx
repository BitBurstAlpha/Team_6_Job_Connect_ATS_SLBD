import { HeroSection } from '@/components/HeroSection';
import { JobCard } from '@/components/cards/job.card';
import { JobFilter } from '@/components/jobFilter';
import { Header } from '@/components/shared/header';
import {
    getJobType,
    getJobCategory,
    getJobExperience,
    getJobQualification,
} from '@/lib/getJobData';

export default async function Home() {
    const types = await getJobType();
    const categories = await getJobCategory();
    const experiences = await getJobExperience();
    const qualifications = await getJobQualification();

    return (
        <main>
            <Header />

            <HeroSection />
            <div className="lg:grid grid-cols-4 gap-8 lg:px-24 py-12 max-w-[1920px] mx-auto">
                <div className="space-y-4 bg-white p-4 rounded-sm">
                    <JobFilter
                        types={types}
                        categories={categories}
                        experiences={experiences}
                        qualifications={qualifications}
                    />
                </div>
                <div className="col-span-3 space-y-4 bg-white p-4 rounded-sm">
                    <JobCard />
                </div>
            </div>
        </main>
    );
}
