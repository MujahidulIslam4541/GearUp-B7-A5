"use server"

import { registerSchema, type RegisterFormData } from "@/lib/validations/auth"

export interface RegisterActionResult {
  success: boolean
  message: string
  errors?: Partial<Record<keyof RegisterFormData, string>>
  user?: { name: string; email: string; role: string }
}

export async function registerAction(
  data: RegisterFormData
): Promise<RegisterActionResult> {
  console.log("Register Action - Submitted Data:", data)

  const result = registerSchema.safeParse(data)
  if (!result.success) {
    const errors: Partial<Record<keyof RegisterFormData, string>> = {}
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof RegisterFormData
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
  // const res = await fetch(`${process.env.API_URL}/auth/register`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // })
  // const json = await res.json()

  return {
    success: true,
    message: "Account created successfully! Welcome to GearUp.",
    user: {
      name: result.data.name,
      email: result.data.email,
      role: result.data.role,
    },
  }
}
