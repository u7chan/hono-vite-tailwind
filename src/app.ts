import { Hono } from 'hono'

import api from './api'
import front from './front'

const app = new Hono()

app.route('/api', api)
app.route('/', front)

export default app
