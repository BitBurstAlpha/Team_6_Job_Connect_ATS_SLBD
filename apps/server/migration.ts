import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import mysql from 'mysql2/promise';

async function migrateDB() {
    const connection = await mysql.createConnection({
        uri: 'mysql://root:irosha@localhost:3306/job_portal',
    });

    const db = drizzle(connection);

    try {
        await migrate(db, { migrationsFolder: 'drizzle/migrations' });
        await connection.end();
        console.log('Migration Successful');
        process.exit(0);
    } catch (err) {
        console.log('Migration Fail');
        process.exit(1);
    }
}

migrateDB();
