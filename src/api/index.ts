import { Hono } from 'hono'

const api = new Hono()

api.get('/', (c) => {
  return c.json({
    status: 'Health OK',
    date: new Date().toLocaleString(),
  })
})

export default api
