export const base = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const baseUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api`;

const routes = {
    jobApi: `/jobs`,
    currentUserApi: `${baseUrl}/auth/applicant/current-user`,
    logoutApi: `${baseUrl}/auth/logout`,
    registerApi: `${baseUrl}/applicant/register`,
    loginApi: `${baseUrl}/auth/create-session`,
    applyJob: `${baseUrl}/jobs/apply`,
    generic: {
        jobTypesApi: `/generic/jobs/type`,
        jobCategoriesApi: `/generic/jobs/category`,
        jobExperienceApi: `/generic/jobs/experience`,
        jobQualificationsApi: `/generic/jobs/qualification`,
    },
};

export { routes };
