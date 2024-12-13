import { useState, useContext, createContext, type FC, type Child } from 'hono/jsx'

interface Navigation {
  to: string
  goto: (to: string) => void
}

const NavigationContext = createContext<Navigation | null>(null)

export const NavigationProvider: FC<{ onRender: () => Child }> = ({ onRender }) => {
  const [to, setTo] = useState('')
  const handleGoTo = (value: string) => {
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
