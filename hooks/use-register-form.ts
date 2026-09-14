"use client"

import { useState } from "react"
import { toast } from "sonner"
import { registerSchema, type RegisterFormData } from "@/lib/validations/auth"

export function useRegisterForm() {
  const [role, setRole] = useState<"CUSTOMER" | "PROVIDER">("CUSTOMER")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterFormData, string>>
  >({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof RegisterFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    const payload = { ...formData, role }
    console.log("Registration Form Data:", payload)

    const result = registerSchema.safeParse(payload)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof RegisterFormData, string>> = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof RegisterFormData
        if (field && !fieldErrors[field]) fieldErrors[field] = issue.message
      })
      setErrors(fieldErrors)
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 600))
    setIsSubmitting(false)
    toast.success("Account created successfully! Welcome to GearUp.")
  }

  return {
    role,
    setRole,
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  }
}
