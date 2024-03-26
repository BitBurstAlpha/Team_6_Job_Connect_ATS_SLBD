import { hash, verify } from 'argon2';

export const passwordHash = async (plainPassword: string) => {
    const hashedPassword = await hash(plainPassword);
    return hashedPassword;
};

export const passwordCompare = async (hash: string, plainPassword: string) => {
    const comparedPassword = await verify(hash, plainPassword);

    return comparedPassword;
};
