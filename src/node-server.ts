import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

import app from './app'
app.use('/static/*', serveStatic({ root: './dist' }))

const port = 3000

console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
