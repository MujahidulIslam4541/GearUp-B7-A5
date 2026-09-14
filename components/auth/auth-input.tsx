"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  cornerLink?: React.ReactNode
}

export function AuthInput({
  label,
  id,
  name,
  type = "text",
  error,
  cornerLink,
  className,
  ...props
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === "password"
  const resolvedType = isPassword ? (showPassword ? "text" : "password") : type
  const inputName = name || id

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-xs font-medium text-foreground">
          {label}
        </Label>
        {cornerLink}
      </div>

      <div className="relative">
        <Input
          id={id}
          name={inputName}
          type={resolvedType}
          className={cn(isPassword && "pr-10", className)}
          aria-invalid={!!error}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        )}
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
