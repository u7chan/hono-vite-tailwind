import { Hono } from 'hono'
import { setSignedCookie } from 'hono/cookie'
import signIn from './api/signIn'

const app = new Hono()
const isHttps = process.env.HTTPS === 'true'

app.get('/', (c) => {
  return c.json({
    status: 'OK',
  })
})

app.post('/signin', async (c) => {
  const { email, password } = await c.req.json()
  if (!signIn(email, password)) {
    return new Response('Unauthorized', { status: 401 })
  }
  const sessionKey = 'session'
  const sessionSecret = 'sponge_bob'
  const sessionId = 'dummy'
  const expiresAtSeconds = 60 * 60 // now + 1h
  const expiresAt = new Date(Date.now() + 1000 * expiresAtSeconds)
  await setSignedCookie(c, sessionKey, sessionId, sessionSecret, {
    path: '/',
    prefix: isHttps ? 'secure' : undefined,
    secure: isHttps,
    httpOnly: true,
    maxAge: expiresAtSeconds,
    sameSite: 'Strict',
  })
  return c.json({
    expires_at: expiresAt.toISOString(),
  })
})

export default app
