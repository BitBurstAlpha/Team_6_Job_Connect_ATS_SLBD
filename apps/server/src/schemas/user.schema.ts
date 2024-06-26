import { object, string, TypeOf } from 'zod';

export const RegisterUserSchema = object({
    body: object({
        username: string({
            required_error: 'username is required',
        }),
        email: string({
            required_error: 'email is required',
        }).email('email is not valid'),
        password: string({
            required_error: 'password is required',
        }).min(6),
        confirmPassword: string({
            required_error: 'confirm password is required',
        }).min(6),
    }).refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'password and confirm password do not match',
    }),
});

export type RegisterUserInput = TypeOf<typeof RegisterUserSchema>['body'];

export const PasswordChangeSchema = object({
    body: object({
        oldPassword: string({
            required_error: 'old password is required',
        }).min(6),
        newPassword: string({
            required_error: 'new password is required',
        }).min(6),
    }),
});

export type PasswordChangeInput = TypeOf<typeof PasswordChangeSchema>['body'];
