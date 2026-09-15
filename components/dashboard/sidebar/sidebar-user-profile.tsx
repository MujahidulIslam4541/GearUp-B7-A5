"use client"

import { User as UserIcon } from "lucide-react"
import { useAuth } from "@/lib/auth"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function SidebarUserProfile() {
  const { user } = useAuth()
  const name = user?.name ?? "Alex Morgan"
  const email = user?.email ?? "alex.morgan@gearup.io"
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className="flex items-center gap-2.5  p-2 transition-all group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:border-transparent group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:p-0.5">
      <Avatar size="default" className="shrink-0 ring-1 ring-border">
        <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
          {initials || <UserIcon className="size-3.5" />}
        </AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-1 flex-col truncate group-data-[collapsible=icon]:hidden">
        <span className="truncate text-xs font-semibold text-foreground">
          {name}
        </span>
        <span className="truncate text-[11px] text-muted-foreground">
          {email}
        </span>
      </div>
    </div>
  )
}
