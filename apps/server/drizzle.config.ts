import type { Config } from 'drizzle-kit';
export default {
    schema: './src/db/schema',
    out: './drizzle/migrations',
    driver: 'mysql2',
    dbCredentials: {
        uri: 'mysql://root:irosha@localhost:3306/job_portal',
    },
    breakpoints: true,
} satisfies Config;
