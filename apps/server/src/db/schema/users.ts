import {
    mysqlTable,
    int,
    varchar,
    text,
    mysqlEnum,
    timestamp,
} from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    id: int('id').autoincrement().primaryKey(),
    username: varchar('username', { length: 100 }).notNull(),
    email: varchar('email', { length: 100 }).unique().notNull(),
    password: text('password').notNull(),
    role: mysqlEnum('role', ['client', 'candidate'])
        .default('candidate')
        .notNull(),
    createdAt: timestamp('crated_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export type NewUser = typeof users.$inferInsert;
