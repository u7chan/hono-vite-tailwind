import { Hono } from 'hono'

const app = new Hono()

if (import.meta.env.PROD) {
  const module = await import('hono/bun')
  app.use('/static/*', module.serveStatic({ root: './dist' }))
}

app.get('/', (c) =>
  c.html(
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        {import.meta.env.PROD ? (
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
