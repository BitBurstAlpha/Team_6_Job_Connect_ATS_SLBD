import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import mysql from 'mysql2/promise';
import { logger } from './src/utils/logger';

async function migrateDB() {
    const connection = await mysql.createConnection({
        uri: 'mysql://root:irosha@localhost:3306/job_portal',
    });

    const db = drizzle(connection);

    try {
        await migrate(db, { migrationsFolder: 'drizzle/migrations' });
        await connection.end();
        logger.info('Migration Successful');
        process.exit(0);
    } catch (err) {
        logger.info('Migration Fail');
        process.exit(1);
    }
}

migrateDB();
