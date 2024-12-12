import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    status: 'Health OK',
    date: new Date().toLocaleString(),
  })
})

export default app
