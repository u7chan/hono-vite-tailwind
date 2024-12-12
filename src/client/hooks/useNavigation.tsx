import { useState, useContext, createContext, type PropsWithChildren } from 'hono/jsx'

interface Navigation {
  to: string
  goto: (to: string) => void
}

const NavigationContext = createContext<Navigation | null>(null)

export function NavigationProvider({ children }: PropsWithChildren) {
  const [to, setTo] = useState('')
  const handleGoTo = (value: string) => {
    console.log('#a', { value })
    setTo(value)
  }
  console.log('#b', { to })
  return (
    <NavigationContext.Provider
      value={{
        to,
        goto: handleGoTo,
      }}
    >
      {children}
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
