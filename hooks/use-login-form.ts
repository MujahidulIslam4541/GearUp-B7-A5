"use client"

import { useState } from "react"
import { toast } from "sonner"
import { loginSchema, type LoginFormData } from "@/lib/validations/auth"

export function useLoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginFormData, string>>
  >({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    if (errors[name as keyof LoginFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    console.log("Login Form Data:", formData)

    const result = loginSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LoginFormData, string>> = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof LoginFormData
        if (field && !fieldErrors[field]) fieldErrors[field] = issue.message
      })
      setErrors(fieldErrors)
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 600))
    setIsSubmitting(false)
    toast.success("Welcome back! Signing in...")
  }

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  }
}
