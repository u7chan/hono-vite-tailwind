import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres'
import pg from 'pg'
import { env } from '../util/env'

export async function drizzleScope<T>(
  callback: (db: NodePgDatabase<Record<string, never>>) => Promise<T>,
): Promise<T> {
  const pool = new pg.Pool({
    connectionString: env.DATABASE_URL,
  })
  const db = drizzle(pool)
  const r: T = await callback(db)
  await pool.end()
  return r
}
