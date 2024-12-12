import { Hono } from 'hono'

import api from './app-api'
import client from './app-client'

const app = new Hono()

app.route('/api', api)
app.route('/', client)

export default app
