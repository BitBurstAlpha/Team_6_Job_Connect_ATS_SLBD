import { hash } from 'argon2';

export const passwordHash = async (plainPassword: string) => {
    const hashedPassword = await hash(plainPassword);
    return hashedPassword;
};
