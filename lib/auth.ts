export interface AuthUser {
  name: string
  email: string
  avatarUrl?: string
}

export interface AuthState {
  isLoggedIn: boolean
  user: AuthUser | null
  logout: () => void
}

const STATIC_USER: AuthUser = {
  name: "Alex Morgan",
  email: "alex.morgan@gearup.io",
}

// Temporary auth state helper (to be replaced with real auth session / cookie)
export function useAuth(): AuthState {
  const isLoggedIn = true
  const logout = () => {}

  return {
    isLoggedIn,
    user: isLoggedIn ? STATIC_USER : null,
    logout,
  }
}
