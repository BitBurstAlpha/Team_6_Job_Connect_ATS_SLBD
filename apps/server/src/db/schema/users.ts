import { relations } from 'drizzle-orm';
import {
    mysqlTable,
    int,
    varchar,
    text,
    mysqlEnum,
    timestamp,
} from 'drizzle-orm/mysql-core';
import { jobs } from './jobs';

export const users = mysqlTable('users', {
    id: int('id').autoincrement().primaryKey(),
    username: varchar('username', { length: 100 }).notNull(),
    avatar: text('avatar').default('/uploads/avatar.png').notNull(),
    email: varchar('email', { length: 100 }).unique().notNull(),
    password: text('password').notNull(),
    role: mysqlEnum('role', ['client', 'applicant'])
        .default('applicant')
        .notNull(),
    createdAt: timestamp('crated_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export const usersRelations = relations(users, ({ many, one }) => ({
    jobs: many(jobs),
    client: one(client),
}));

export type NewUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

export const client = mysqlTable('client', {
    id: int('id').autoincrement().primaryKey(),
    companyName: varchar('companyName', { length: 100 }).notNull(),
    fullName: varchar('fullName', { length: 100 }).notNull(),
    phoneNumber: varchar('phoneNumber', { length: 50 }).notNull(),
    website: varchar('website', { length: 25 }),
    userID: int('userId')
        .references(() => users.id)
        .unique(),
    createdAt: timestamp('crated_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export type NewClient = typeof client.$inferInsert;
