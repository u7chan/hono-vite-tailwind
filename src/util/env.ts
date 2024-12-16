import 'dotenv/config'

export const env = {
  PROD: process.env.PROD === 'true',
  DATABASE_URL: process.env.DATABASE_URL || '',
}
