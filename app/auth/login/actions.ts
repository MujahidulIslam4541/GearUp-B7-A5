"use server"

import { cookies } from "next/headers"
import { loginSchema, type LoginFormData } from "@/lib/validations/auth"
import { decodeJwtRole, getDashboardRouteForRole } from "@/lib/auth"

const LOGIN_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`

export interface LoginActionResult {
  success: boolean
  message: string
  redirectTo?: string
  errors?: Partial<Record<keyof LoginFormData, string>>
}

export async function loginAction(data: LoginFormData): Promise<LoginActionResult> {

  const result = loginSchema.safeParse(data)
  if (!result.success) {
    const errors: Partial<Record<keyof LoginFormData, string>> = {}
    result.error.issues.forEach((i) => {
      const field = i.path[0] as keyof LoginFormData
      if (field && !errors[field]) errors[field] = i.message
    })
    return { success: false, message: "Please correct the errors in the form.", errors }
  }

  try {
    const res = await fetch(LOGIN_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: result.data.email, password: result.data.password }),
    })
    const json = await res.json().catch(() => null)


    if (!res.ok || json?.success === false) {
      return { success: false, message: json?.message || "Invalid email or password." }
    }

    const accessToken = json?.data?.accessToken || json?.accessToken

    const refreshToken = json?.data?.refreshToken || json?.refreshToken

    if (!accessToken) return { success: false, message: "Login failed: No access token received." }

    const cookieStore = await cookies()

    const isProd = process.env.NODE_ENV === "production"

    const opts = { httpOnly: true, secure: isProd, sameSite: "lax" as const, path: "/" }

    cookieStore.set("accessToken", accessToken, { ...opts, maxAge: 60 * 60 * 24 * 7 })

    if (refreshToken) cookieStore.set("refreshToken", refreshToken, { ...opts, maxAge: 60 * 60 * 24 * 30 })

    const role = decodeJwtRole(accessToken)

    return { success: true, message: json?.message || "Login successful!", redirectTo: getDashboardRouteForRole(role) }

  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : "Unable to reach server." }
  }
}

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("accessToken")
  cookieStore.delete("refreshToken")
}
