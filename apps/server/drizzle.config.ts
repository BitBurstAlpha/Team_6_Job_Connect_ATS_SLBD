import type { Config } from 'drizzle-kit';
export default {
    schema: './src/db/schema',
    out: './drizzle/migrations',
    driver: 'mysql2',
    breakpoints: true,
} satisfies Config;
