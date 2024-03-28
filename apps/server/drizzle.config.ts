import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
    schema: './src/db/schema',
    out: './drizzle/migrations',
    driver: 'mysql2',
    dbCredentials: {
        uri: (process.env.DATABASE_URL as string) ?? '',
    },
    breakpoints: true,
} satisfies Config;
