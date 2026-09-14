"use client"

import Link from "next/link"
import { LayoutDashboard, LogOut, LogIn } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/animate-ui/primitives/radix/dropdown-menu"

interface NavMobileAuthProps {
  onClose: () => void
}

export function NavMobileAuth({ onClose }: NavMobileAuthProps) {
  const { isLoggedIn, user, logout } = useAuth()

  if (isLoggedIn && user) {
    return (
      <>
        <DropdownMenuLabel className="px-3 py-1.5">
          <p className="truncate text-sm font-semibold text-foreground">
            {user.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">{user.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuItem className="cursor-pointer rounded-lg p-0">
          <Link
            href="/dashboard"
            onClick={onClose}
            className="flex w-full items-center gap-2.5 px-3 py-2 text-sm font-medium text-foreground"
          >
            <LayoutDashboard className="size-4 text-muted-foreground" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            logout()
            onClose()
          }}
          className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10"
        >
          <div className="flex w-full items-center gap-2.5">
            <LogOut className="size-4" />
            <span>Log Out</span>
          </div>
        </DropdownMenuItem>
      </>
    )
  }

  return (
    <DropdownMenuItem className="cursor-pointer rounded-lg p-0">
      <Link
        href="/auth/login"
        onClick={onClose}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
      >
        <LogIn className="size-4" />
        <span>Sign In</span>
      </Link>
    </DropdownMenuItem>
  )
}
