"use client"

import Link from "next/link"
import { LayoutDashboard, LogOut, User as UserIcon } from "lucide-react"
import { useAuth } from "@/lib/auth"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuHighlight,
} from "@/components/animate-ui/primitives/radix/dropdown-menu"

export function NavUserMenu() {
  const { user, logout } = useAuth()
  if (!user) return null

  const initials = user.name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Open user menu"
        className="flex size-9 cursor-pointer items-center justify-center rounded-full ring-offset-background transition-opacity outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Avatar size="lg">
          <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
            {initials || <UserIcon className="size-4" />}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="z-50 w-56 rounded-xl border border-border bg-popover p-1.5 text-popover-foreground shadow-lg outline-none"
      >
        <DropdownMenuLabel className="px-3 py-2">
          <p className="truncate text-sm font-semibold text-foreground">
            {user.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">{user.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="-mx-1.5 my-1 bg-border" />
        <DropdownMenuHighlight className="absolute inset-x-1.5 rounded-lg bg-muted/80">
          <DropdownMenuItem className="cursor-pointer rounded-lg p-0">
            <Link
              href="/dashboard"
              className="flex w-full items-center gap-2.5 px-3 py-2 text-sm font-medium text-foreground"
            >
              <LayoutDashboard className="size-4 text-muted-foreground" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="-mx-1.5 my-1 bg-border" />
          <DropdownMenuItem
            onClick={logout}
            className="flex cursor-pointer items-center gap-2.5 px-3 py-2 text-sm font-medium text-destructive focus:bg-destructive/10 focus:text-destructive"
          >
            <LogOut className="size-4" />
            <span>Log Out</span>
          </DropdownMenuItem>
        </DropdownMenuHighlight>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
