import { createTransport } from 'nodemailer';
import { logger } from './logger';

interface options {
    email: string;
    subject: string;
    body: string;
}

const transporter = createTransport({
    host: process.env.NODEMAILER_HOST,
    port: Number(process.env.NODEMAILER_PORT) || 587,
    secure: false,
    auth: {
        user: process.env.NODEMAILER_AUTH_USER,
        pass: process.env.NODEMAILER_AUTH_PASS,
    },
});

const sendEmail = async (options: options) => {
    logger.info(process.env.NODEMAILER_AUTH_USER);

    try {
        await transporter.sendMail({
            from: '"jobPortal" <iroshorton12@gmail.com>',
            to: options.email,
            subject: options.subject,
            text: options.body,
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            logger.info(e.message);

            return;
        }

        logger.info('something went wrong while sending message');
    }
};

export default sendEmail;
