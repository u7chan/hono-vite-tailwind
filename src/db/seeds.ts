import { drizzle } from 'drizzle-orm/node-postgres'
import { accountsTable } from './schema'
import { env } from '../util/env'
import { hashPassword } from '../util/crypt'

const db = drizzle(env.DATABASE_URL)

async function main() {
  console.log('Seeder Started.')

  const account: typeof accountsTable.$inferInsert = {
    email: 'john@example.com',
    passwordHash: await hashPassword('doe'),
  }
  await db.insert(accountsTable).values(account)

  console.log('Seeder Finished.')
}
main()
