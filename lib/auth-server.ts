import { cookies } from "next/headers"
import { verifyAccessToken, normalizeRole, Session } from "./auth"

export async function getServerSession(): Promise<Session | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("accessToken")?.value
    if (!token) return null

    const payload = await verifyAccessToken(token)
    if (!payload) return null

    const role = normalizeRole(payload.role)
    const email = typeof payload.email === "string" ? payload.email : ""
    const name =
      typeof payload.name === "string" && payload.name.trim()
        ? payload.name.trim()
        : email
          ? email.split("@")[0]
          : "User"
    const id =
      typeof payload.id === "string"
        ? payload.id
        : typeof payload.userId === "string"
          ? payload.userId
          : typeof payload.sub === "string"
            ? payload.sub
            : ""

    return {
      token,
      user: { id, name, email, role },
    }
  } catch {
    return null
  }
}

