"use server"

import { registerSchema, type RegisterFormData } from "@/lib/validations/auth"

const REGISTER_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`

export interface RegisterActionResult {
  success: boolean
  message: string
  errors?: Partial<Record<keyof RegisterFormData, string>>
}

export async function registerAction(data: RegisterFormData): Promise<RegisterActionResult> {
  const result = registerSchema.safeParse(data)
  if (!result.success) {
    const errors: Partial<Record<keyof RegisterFormData, string>> = {}
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof RegisterFormData
      if (field && !errors[field]) errors[field] = issue.message
    })
    return { success: false, message: "Please correct the errors in the form.", errors }
  }

  const role = result.data.role.toLowerCase() === "provider" ? "provider" : "user"

  try {
    const res = await fetch(REGISTER_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: result.data.name,
        email: result.data.email,
        password: result.data.password,
        role,
      }),
    })
    const json = await res.json().catch(() => null)

    console.log("register api response", json)

    if (!res.ok || json?.success === false) {
      return {
        success: false,
        message: json?.message || "Registration failed. Please try again with different details.",
      }
    }

    return {
      success: true,
      message: json?.message || "Account created successfully! Please sign in to continue.",
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unable to reach server. Please try again.",
    }
  }
}
