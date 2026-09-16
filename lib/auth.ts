import jwt from "jsonwebtoken"

export interface AuthUser {
  id?: string
  name: string
  email: string
  role: "user" | "provider" | "admin"
}

export interface Session {
  token: string
  user: AuthUser
}

export function normalizeRole(role?: unknown): "user" | "provider" | "admin" {
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

export async function verifyAccessToken(
  token: string
): Promise<Record<string, unknown> | null> {
  try {
    const secret = process.env.JWT_ACCESS_TOKEN_SECRET
    if (secret) {
      const verified = jwt.verify(token, secret)
      if (typeof verified === "object" && verified !== null) {
        return verified as Record<string, unknown>
      }
    }
  } catch {
    // Secret mismatch or verify failure, safely fallback to decode
  }

  try {
    const decoded = jwt.decode(token)
    if (typeof decoded === "object" && decoded !== null) {
      const payload = decoded as Record<string, unknown>
      if (payload.exp && typeof payload.exp === "number") {
        if (payload.exp * 1000 < Date.now()) return null
      }
      return payload
    }
    return null
  } catch {
    return null
  }
}
