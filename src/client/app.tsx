import type { FC } from 'hono/jsx'

import { useNavigaton } from './providers/NavigationProvider'

import SingIn from './ui/SignIn'
import Dashboard from './ui/Dashboard'

const App: FC = () => {
  const { to } = useNavigaton()
  return (
    <>
      {to === '/signin' && <SingIn />}
      {to === '/dashboard' && <Dashboard />}
    </>
  )
}

export default App
