"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { registerAction } from "@/app/auth/register/actions"
import type { RegisterFormData, RegisterRole } from "@/lib/validations/auth"

type FormFields = Omit<RegisterFormData, "role">

export function useRegisterForm() {
  const router = useRouter()
  const [role, setRole] = useState<RegisterRole>("user")
  const [formData, setFormData] = useState<FormFields>({
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
    if (isSubmitting) return
    setErrors({})
    setIsSubmitting(true)

    const res = await registerAction({ ...formData, role })
    setIsSubmitting(false)

    if (!res.success) {
      if (res.errors) setErrors(res.errors)
      toast.error(res.message)
      return
    }

    toast.success(res.message)
    router.push("/auth/login")
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

