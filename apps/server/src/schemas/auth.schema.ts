import { object, string, TypeOf } from 'zod';

export const LoginUserSchema = object({
    body: object({
        email: string({
            required_error: 'email is required',
        }).email('email is not valid'),
        password: string({
            required_error: 'password is required',
        }).min(6),
        type: string().optional(),
    }),
});

export type LoginUserInput = TypeOf<typeof LoginUserSchema>['body'];
