import { AuthInput } from "@/components/auth/auth-input"
import type { RegisterFormData } from "@/lib/validations/auth"

interface RegisterFieldsProps {
  formData: Omit<RegisterFormData, "role">
  errors: Partial<Record<keyof RegisterFormData, string>>
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function RegisterFields({
  formData,
  errors,
  onChange,
}: RegisterFieldsProps) {
  return (
    <div className="space-y-4">
      <AuthInput
        id="name"
        label="Full Name"
        placeholder="e.g. Alex Morgan"
        value={formData.name}
        onChange={onChange}
        error={errors.name}
      />
      <AuthInput
        id="email"
        type="email"
        label="Email Address"
        placeholder="alex@example.com"
        value={formData.email}
        onChange={onChange}
        error={errors.email}
      />
      <AuthInput
        id="password"
        type="password"
        label="Password"
        placeholder="At least 6 characters"
        value={formData.password}
        onChange={onChange}
        error={errors.password}
      />
      <AuthInput
        id="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Re-enter password"
        value={formData.confirmPassword}
        onChange={onChange}
        error={errors.confirmPassword}
      />
    </div>
  )
}
