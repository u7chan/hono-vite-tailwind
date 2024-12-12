import type { FC } from 'hono/jsx'
import { useNavigaton } from './hooks/useNavigation'

import SingIn from './ui/SignIn'
import Dashboard from './ui/Dashboard'

const App: FC = () => {
  const { to } = useNavigaton()
  console.log('#c', { to })
  return (
    <>
      {to === '' && <SingIn />}
      {to === 'dashboard' && <Dashboard />}
    </>
  )
}

export default App
