import { Hono } from 'hono'
// import { getSignedCookie } from 'hono/cookie'
import { env } from './util/env'

const app = new Hono()
const isProduction = env.PROD

app.get('/', async (c) => {
  // const sessionSecret = 'sponge_bob'
  // const cookie = await getSignedCookie(c, sessionSecret)
  // const sessionId = cookie.session || ''
  return c.html(
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        {isProduction ? (
          <>
            <link href='/static/styles.css' rel='stylesheet' />
            <script type='module' src='/static/bundle.js' />
          </>
        ) : (
          <>
            <link href='/src/client/styles.css' rel='stylesheet' />
            <script type='module' src='/src/client/bundle.tsx' />
          </>
        )}
      </head>
      <body>
        <div id='root' />
      </body>
    </html>,
  )
})

export default app
