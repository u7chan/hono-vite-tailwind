import { and, eq } from 'drizzle-orm'
import { accountsTable } from '../db/schema'
import { drizzleScope } from '../db/drizzle-scope'
import { comparePassword } from '../util/crypt'

async function signIn(email: string, password: string): Promise<boolean> {
  const data = await drizzleScope((db) =>
    db
      .select()
      .from(accountsTable)
      .where(and(eq(accountsTable.email, email))),
  )
  if (data.length < 0) return false
  return comparePassword(password, data[0].passwordHash)
}

export default signIn
