import { useState, useContext, createContext, type FC, type Child } from 'hono/jsx'

type Route = '/' | '/dashboard'

interface Navigation {
  to: Route
  goto: (to: Route) => void
}

const NavigationContext = createContext<Navigation | null>(null)

export const NavigationProvider: FC<{ onRender: () => Child }> = ({ onRender }) => {
  const [to, setTo] = useState<Route>('/')
  const handleGoTo = (value: Route) => {
    setTo(value)
  }
  return (
    <NavigationContext.Provider
      value={{
        to,
        goto: handleGoTo,
      }}
    >
      {onRender()}
    </NavigationContext.Provider>
  )
}

export function useNavigaton(): Navigation {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigaton must be used within a NavigationProvider')
  }
  return context
}
