import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) =>
  c.html(
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link href='/src/styles.css' rel='stylesheet' />
        <script type='module' src='/src/front/client.tsx' />
      </head>
      <body>
        <div id='root' />
      </body>
    </html>,
  ),
)

export default app
