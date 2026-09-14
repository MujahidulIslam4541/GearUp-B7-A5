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

export function useAuth(): AuthState {
  const isLoggedIn = false

  const logout = () => {
    // Stub for future authentication integration
  }

  return {
    isLoggedIn,
    user: isLoggedIn ? STATIC_USER : null,
    logout,
  }
}
