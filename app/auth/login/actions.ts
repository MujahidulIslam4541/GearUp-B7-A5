"use server"

import { loginSchema, type LoginFormData } from "@/lib/validations/auth"

export interface LoginActionResult {
  success: boolean
  message: string
  errors?: Partial<Record<keyof LoginFormData, string>>
  user?: { email: string }
}

export async function loginAction(
  data: LoginFormData
): Promise<LoginActionResult> {
  console.log("Login Action - Submitted Data:", data)

  const result = loginSchema.safeParse(data)
  if (!result.success) {
    const errors: Partial<Record<keyof LoginFormData, string>> = {}
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof LoginFormData
      if (field && !errors[field]) errors[field] = issue.message
    })
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors,
    }
  }

  // NOTE: Replace this mock implementation with real backend API call
  // Example:
  // const res = await fetch(`${process.env.API_URL}/auth/login`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // })
  // const json = await res.json()

  return {
    success: true,
    message: "Welcome back! Signing in...",
    user: { email: result.data.email },
  }
}
