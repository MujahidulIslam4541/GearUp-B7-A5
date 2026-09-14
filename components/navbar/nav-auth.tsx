"use client"

import Link from "next/link"
import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavUserMenu } from "@/components/navbar/nav-user-menu"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"

interface NavAuthProps {
  className?: string
}

export function NavAuth({ className }: NavAuthProps) {
  const { isLoggedIn } = useAuth()

  return (
    <div className={cn("items-center", className)}>
      {isLoggedIn ? (
        <NavUserMenu />
      ) : (
        <Button
          render={<Link href="/auth/login" />}
          size="sm"
          className="gap-1.5 font-medium shadow-xs"
        >
          <LogIn className="size-4" />
          <span>Sign In</span>
        </Button>
      )}
    </div>
  )
}
