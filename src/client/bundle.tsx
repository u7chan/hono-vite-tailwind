import type { FC } from 'hono/jsx'
import { render } from 'hono/jsx/dom'

import { NavigationProvider } from './providers/NavigationProvider'
import { AuthProvider } from './providers/AuthProvider'

import App from './app'

const Bundle: FC = () => {
  return <AuthProvider onRender={() => <NavigationProvider onRender={() => <App />} />} />
}

const root = document.getElementById('root')
root && render(<Bundle />, root)
