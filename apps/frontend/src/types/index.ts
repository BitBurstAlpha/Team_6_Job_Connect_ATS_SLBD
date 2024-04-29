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
    user: {
        avatar: string;
        client: {
            companyName: string;
            fullName: string;
            phoneNumber: string;
            website?: string;
        };
    };
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

export interface JobData {
    id: number;
    name: string;
}

export interface JobData {
    id: number;
    name: string;
}
