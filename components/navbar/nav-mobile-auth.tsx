"use client"

import Link from "next/link"
import { LayoutDashboard, LogOut, LogIn } from "lucide-react"
import { useAuth } from "@/lib/auth"
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
          className="flex cursor-pointer items-center gap-2.5 px-3 py-2 text-sm font-medium text-destructive focus:bg-destructive/10 focus:text-destructive"
        >
          <LogOut className="size-4" />
          <span>Log Out</span>
        </DropdownMenuItem>
      </>
    )
  }

  return (
    <DropdownMenuItem className="cursor-pointer rounded-lg p-0">
      <Link
        href="/auth/login"
        onClick={onClose}
        className="flex w-full items-center gap-2.5 px-3 py-2 text-sm font-semibold text-primary"
      >
        <LogIn className="size-4" />
        <span>Sign In</span>
      </Link>
    </DropdownMenuItem>
  )
}
