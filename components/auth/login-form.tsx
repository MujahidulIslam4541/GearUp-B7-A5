"use client"

import Link from "next/link"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthInput } from "@/components/auth/auth-input"
import { useLoginForm } from "@/hooks/use-login-form"

export function LoginForm() {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useLoginForm()

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-1">
        <h1 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Welcome Back
        </h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Sign in to your GearUp account to manage rentals and gear.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          id="email"
          type="email"
          label="Email Address"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <AuthInput
          id="password"
          type="password"
          label="Password"
          placeholder="Your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          cornerLink={
            <Link href="#" className="text-xs text-primary hover:underline">
              Forgot password?
            </Link>
          }
        />

        <label
          htmlFor="rememberMe"
          className="flex cursor-pointer items-center gap-2 text-xs text-muted-foreground"
        >
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="size-4 rounded-sm border-input accent-primary"
          />
          <span>Remember me on this device</span>
        </label>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" /> Signing In...
            </span>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>

      <p className="text-center text-xs text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/register"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          Create one
        </Link>
      </p>
    </div>
  )
}
