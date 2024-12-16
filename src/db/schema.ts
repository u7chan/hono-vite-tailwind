import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'

export const accountsTable = pgTable('accounts', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
})
