import type { FC } from 'hono/jsx'
import { render } from 'hono/jsx/dom'
import { NavigationProvider } from './hooks/useNavigation'
import App from './app'

const Bundle: FC = () => {
  return <NavigationProvider>{() => <App />}</NavigationProvider>
}

const root = document.getElementById('root')
root && render(<Bundle />, root)
