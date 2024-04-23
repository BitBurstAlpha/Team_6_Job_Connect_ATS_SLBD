import { object, string, TypeOf } from 'zod';

export const ClientAccountSchema = object({
    body: object({
        companyName: string({
            required_error: 'company name is required',
        }).min(3),
        fullName: string({
            required_error: 'fullName is required',
        }).min(6),
        phoneNumber: string({
            required_error: 'phoneNumber is required',
        }).min(6),
        website: string({
            required_error: 'website is required',
        }).optional(),
    }),
});

export type ClientAccountInput = TypeOf<typeof ClientAccountSchema>['body'];
