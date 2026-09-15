export interface AuthUser {
  name: string
  email: string
  role?: string
}

export interface AuthState {
  isLoggedIn: boolean
  user: AuthUser | null
  logout: () => void
}

export function decodeJwtRole(token: string): string | null {
  try {
    const parts = token.split(".")
    if (parts.length < 2) return null
    const payloadJson = Buffer.from(parts[1], "base64url").toString("utf-8")
    const payload = JSON.parse(payloadJson) as { role?: string }
    return payload.role ? String(payload.role).toLowerCase() : null
  } catch {
    return null
  }
}

export function getDashboardRouteForRole(role?: string | null): string {
  if (!role) return "/dashboard/user"
  const normalized = role.toLowerCase()
  if (normalized.includes("admin")) return "/dashboard/admin"
  if (normalized.includes("provider")) return "/dashboard/provider"
  return "/dashboard/user"
}

export function useAuth(): AuthState {
  return {
    isLoggedIn: false,
    user: null,
    logout: () => { },
  }
}
