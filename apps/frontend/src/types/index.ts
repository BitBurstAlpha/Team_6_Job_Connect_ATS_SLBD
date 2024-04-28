export type JobResponse = {
    id: number;
    title: string;
    description: string;
    slug: string;
    typeId: number;
    categoryId: number;
    experienceId: number;
    qualificationId: number;
    maxSalary: number;
    minSalary: number;
    location: string;
    userId: number;
    createdAt: string;
    updatedAt: string;
    category: {
        name: string;
    };
    experience: {
        name: string;
    };
    qualification: {
        name: string;
    };
    type: {
        name: string;
    };
};
