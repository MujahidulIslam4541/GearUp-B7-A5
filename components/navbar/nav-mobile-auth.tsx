"use client"

import Link from "next/link"
import { LayoutDashboard, LogOut, LogIn, User as UserIcon } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"

interface NavMobileAuthProps {
  onClose: () => void
}

export function NavMobileAuth({ onClose }: NavMobileAuthProps) {
  const { isLoggedIn, user, logout } = useAuth()

  if (isLoggedIn && user) {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2">
          <div className="flex size-9 items-center justify-center rounded-full bg-secondary">
            <UserIcon className="size-5 text-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{user.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>

        <Link
          href="/dashboard"
          onClick={onClose}
          className="flex items-center gap-2.5 rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
        >
          <LayoutDashboard className="size-4 text-muted-foreground" />
          <span>Dashboard</span>
        </Link>

        <button
          type="button"
          onClick={() => {
            logout()
            onClose()
          }}
          className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-4 py-2 text-left text-sm font-medium text-destructive hover:bg-destructive/10"
        >
          <LogOut className="size-4" />
          <span>Log Out</span>
        </button>
      </div>
    )
  }

  return (
    <Button
      render={<Link href="/auth/login" onClick={onClose} />}
      className="w-full justify-center gap-2 font-medium"
    >
      <LogIn className="size-4" />
      <span>Sign In</span>
    </Button>
  )
}
