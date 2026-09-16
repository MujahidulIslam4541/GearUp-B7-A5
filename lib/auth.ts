import jwt from "jsonwebtoken"

export type UserRole = "user" | "provider" | "admin"

export interface AuthUser {
  id?: string
  name: string
  email: string
  role: UserRole
}

export interface Session {
  token: string
  user: AuthUser
}

export function normalizeRole(role?: unknown): UserRole {
  if (typeof role !== "string") return "user"
  const lower = role.toLowerCase()
  if (lower.includes("admin")) return "admin"
  if (lower.includes("provider")) return "provider"
  return "user"
}

export function getDashboardRouteForRole(role?: string | null): string {
  const normalized = normalizeRole(role)
  if (normalized === "admin") return "/dashboard/admin"
  if (normalized === "provider") return "/dashboard/provider"
  return "/dashboard/user"
}

export function verifyAccessToken(
  token: string
): Record<string, unknown> | null {
  try {
    const secret = process.env.JWT_ACCESS_TOKEN_SECRET

    if (!secret) return null

    const verified = jwt.verify(token, secret)

    if (typeof verified !== "object" || verified === null) {
      return null
    }

    return verified as Record<string, unknown>
  } catch {
    return null
  }
}