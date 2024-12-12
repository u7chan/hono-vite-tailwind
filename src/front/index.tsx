import { Hono } from 'hono'

const app = new Hono()
const isProduction = process.env.PROD === 'true'

if (isProduction) {
  const { serveStatic } = await import('@hono/node-server/serve-static')
  app.use('/static/*', serveStatic({ root: './dist' }))
}

app.get('/', (c) =>
  c.html(
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
            <link href='/src/front/styles.css' rel='stylesheet' />
            <script type='module' src='/src/front/bundle.tsx' />
          </>
        )}
      </head>
      <body>
        <div id='root' />
      </body>
    </html>,
  ),
)

export default app
