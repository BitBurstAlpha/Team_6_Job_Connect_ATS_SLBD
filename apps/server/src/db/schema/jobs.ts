import {
    mysqlTable,
    int,
    varchar,
    timestamp,
    text,
    primaryKey,
} from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { users } from './users';

export const jobs = mysqlTable('jobs', {
    id: int('id').autoincrement().primaryKey(),
    title: varchar('title', { length: 100 }).notNull(),
    description: text('description').notNull(),
    slug: varchar('slug', { length: 255 }).unique().notNull(),
    typeId: int('typeId')
        .references(() => type.id)
        .notNull(),
    categoryId: int('categoryId')
        .references(() => category.id)
        .notNull(),
    experienceId: int('experienceId')
        .references(() => experience.id)
        .notNull(),
    qualificationId: int('qualificationId')
        .references(() => qualification.id)
        .notNull(),
    maxSalary: int('maxSalary').notNull(),
    minSalary: int('minSalary').notNull(),
    location: varchar('location', { length: 100 }).notNull(),
    userId: int('userId')
        .references(() => users.id)
        .notNull(),
    createdAt: timestamp('crated_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export const appliedJobs = mysqlTable(
    'appliedJobs',
    {
        userId: int('userId').references(() => users.id),
        jobId: int('jobId').references(() => jobs.id),
        createdAt: timestamp('crated_at').defaultNow().notNull(),
        updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
    },
    (table) => {
        return {
            pk: primaryKey({ columns: [table.userId, table.jobId] }),
        };
    },
);

export const appliedJobsRelations = relations(appliedJobs, ({ many }) => ({
    jobs: many(jobs),
}));

export type NewJobs = typeof jobs.$inferInsert;

export const type = mysqlTable('type', {
    id: int('id').autoincrement().primaryKey(),
    name: varchar('name', { length: 50 }).unique().notNull(),
    createdAt: timestamp('crated_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export const typeRelations = relations(type, ({ many }) => ({
    jobs: many(jobs),
}));

export const category = mysqlTable('category', {
    id: int('id').autoincrement().primaryKey(),
    name: varchar('name', { length: 50 }).unique().notNull(),
    createdAt: timestamp('crated_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export const categoryRelations = relations(category, ({ many }) => ({
    jobs: many(jobs),
}));

export const experience = mysqlTable('experience', {
    id: int('id').autoincrement().primaryKey(),
    name: varchar('name', { length: 50 }).unique().notNull(),
    createdAt: timestamp('crated_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export const experienceRelations = relations(experience, ({ many }) => ({
    jobs: many(jobs),
}));

export const qualification = mysqlTable('qualification', {
    id: int('id').autoincrement().primaryKey(),
    name: varchar('name', { length: 50 }).unique().notNull(),
    createdAt: timestamp('crated_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export const tags = mysqlTable('tags', {
    id: int('id').autoincrement().primaryKey(),
    name: varchar('name', { length: 50 }).notNull(),
    jobId: int('jobId')
        .references(() => jobs.id)
        .notNull(),
    createdAt: timestamp('crated_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

export const tagsRelations = relations(tags, ({ one }) => ({
    job: one(jobs, {
        fields: [tags.jobId],
        references: [jobs.id],
    }),
}));

export const jobsRelations = relations(jobs, ({ one, many }) => ({
    user: one(users, {
        fields: [jobs.userId],
        references: [users.id],
    }),
    type: one(type, {
        fields: [jobs.typeId],
        references: [type.id],
    }),
    category: one(category, {
        fields: [jobs.categoryId],
        references: [category.id],
    }),
    experience: one(experience, {
        fields: [jobs.experienceId],
        references: [experience.id],
    }),
    qualification: one(qualification, {
        fields: [jobs.qualificationId],
        references: [qualification.id],
    }),
    appliedJobs: many(appliedJobs),
    tags: many(tags),
}));
