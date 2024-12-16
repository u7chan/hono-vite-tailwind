import { useContext, createContext, type FC, type Child } from 'hono/jsx'

interface Auth {
  loggedIn: boolean
}

const AuthContext = createContext<Auth | null>(null)

export const AuthProvider: FC<{ onRender: () => Child }> = ({ onRender }) => {
  return (
    <AuthContext.Provider
      value={{
        loggedIn: false, // TODO
      }}
    >
      {onRender()}
    </AuthContext.Provider>
  )
}

export function useAuth(): Auth {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
