import { JobPostModal } from '@/components/modals/jobPost.modal';
import {
    getJobCategory,
    getJobExperience,
    getJobQualification,
    getJobType,
} from '@/lib/getJobData';
import { JobListView } from '@/components/Job/JobList';

export default async function Jobs() {
    const types = await getJobType();
    const categories = await getJobCategory();
    const experiences = await getJobExperience();
    const qualifications = await getJobQualification();

    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg flex-1 font-semibold md:text-2xl">
                    Jobs
                </h1>

                <JobPostModal
                    types={types}
                    categories={categories}
                    experiences={experiences}
                    qualifications={qualifications}
                />
            </div>
            <div className="flex flex-1 rounded-lg border border-dashed shadow-sm">
                <JobListView
                    categories={categories}
                    experiences={experiences}
                    qualifications={qualifications}
                    types={types}
                />
            </div>
        </>
    );
}
