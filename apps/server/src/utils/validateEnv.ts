import { cleanEnv, port, str, num } from 'envalid';

export const ValidateEnv = () => {
    cleanEnv(process.env, {
        PORT: port(),
        DATABASE_URL: str(),
        ORIGIN: str(),
        NODE_ENV: str(),

        JWT_ACCESS_KEY: str(),

        NODEMAILER_HOST: str(),
        NODEMAILER_PORT: num(),
        NODEMAILER_AUTH_USER: str(),
        NODEMAILER_AUTH_PASS: str(),
    });
};
