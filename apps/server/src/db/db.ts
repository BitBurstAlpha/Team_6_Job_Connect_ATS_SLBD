import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const poolConnection = mysql.createPool({
    uri: 'mysql://root:irosha@localhost:3306/job_portal',
});

export const db = drizzle(poolConnection);
