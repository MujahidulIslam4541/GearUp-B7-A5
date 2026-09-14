"use client"

import Link from "next/link"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RoleToggle } from "@/components/auth/role-toggle"
import { AuthInput } from "@/components/auth/auth-input"
import {
  TabPanels,
  TabPanel,
} from "@/components/animate-ui/primitives/headless/tabs"
import { useRegisterForm } from "@/hooks/use-register-form"

const FIELDS = [
  { id: "name", label: "Full Name", placeholder: "e.g. Alex Morgan" },
  {
    id: "email",
    type: "email",
    label: "Email Address",
    placeholder: "alex@example.com",
  },
  {
    id: "password",
    type: "password",
    label: "Password",
    placeholder: "At least 6 characters",
  },
  {
    id: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Re-enter your password",
  },
] as const

export function RegisterForm() {
  const {
    role,
    setRole,
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useRegisterForm()

  const renderFields = () =>
    FIELDS.map((f) => (
      <AuthInput
        key={f.id}
        id={f.id}
        type={"type" in f ? f.type : "text"}
        label={f.label}
        placeholder={f.placeholder}
        value={formData[f.id]}
        onChange={handleChange}
        error={errors[f.id]}
      />
    ))

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-1">
        <h1 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Create an Account
        </h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Join GearUp to rent or list equipment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <RoleToggle role={role} onRoleChange={setRole}>
          <TabPanels>
            <TabPanel className="space-y-4">{renderFields()}</TabPanel>
            <TabPanel className="space-y-4">{renderFields()}</TabPanel>
          </TabPanels>
        </RoleToggle>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" /> Creating Account...
            </span>
          ) : (
            "Create Account"
          )}
        </Button>
      </form>

      <p className="text-center text-xs text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  )
}
