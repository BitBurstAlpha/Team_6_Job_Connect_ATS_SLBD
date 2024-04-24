import { number, object, string, TypeOf } from 'zod';

export const JobPostingSchema = object({
    body: object({
        title: string({
            required_error: 'title is required',
        }).max(100),
        description: string({
            required_error: 'description is required',
        }),
        typeId: number().min(1),
        categoryId: number().min(1),
        experienceId: number().min(1),
        qualificationId: number().min(1),
        maxSalary: number().min(1),
        minSalary: number().min(1),
        location: string({
            required_error: 'title is required',
        }).max(100),
    }),
});

export type JobPostingInput = TypeOf<typeof JobPostingSchema>['body'];

export const JobUpdateSchema = object({
    body: object({
        title: string({
            required_error: 'title is required',
        })
            .max(100)
            .optional(),
        description: string({
            required_error: 'description is required',
        }).optional(),
        typeId: number().min(1).optional(),
        categoryId: number().min(1).optional(),
        experienceId: number().min(1).optional(),
        qualificationId: number().min(1).optional(),
        maxSalary: number().min(1).optional(),
        minSalary: number().min(1).optional(),
        location: string({
            required_error: 'title is required',
        })
            .max(100)
            .optional(),
    }),
});

export type JobUpdateInput = TypeOf<typeof JobUpdateSchema>['body'];
