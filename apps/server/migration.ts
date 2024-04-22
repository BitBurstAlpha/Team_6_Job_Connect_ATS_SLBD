import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import mysql from 'mysql2/promise';
import { logger } from './src/utils/logger';
import 'dotenv/config';

async function migrateDB() {
    const connection = await mysql.createConnection({
        uri: process.env.DATABASE_URL,
    });

    const db = drizzle(connection);

    try {
        await migrate(db, { migrationsFolder: 'drizzle/migrations' });
        await connection.end();
        logger.info('Migration Successful');
        process.exit(0);
    } catch (err) {
        if (err instanceof Error) {
            logger.info(err.message);

            process.exit(1);
        }

        logger.info('Migration Fail', err);

        process.exit(1);
    }
}

migrateDB();
