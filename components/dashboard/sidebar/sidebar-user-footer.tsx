"use client"

import { LogOut, User as UserIcon } from "lucide-react"
import { toast } from "sonner"
import { useAuth } from "@/lib/auth"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function SidebarUserFooter() {
  const { user } = useAuth()
  const name = user?.name ?? "Alex Morgan"
  const email = user?.email ?? "alex.morgan@gearup.io"
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  const handleLogout = () => {
    toast.success("Demo session ended. Redirecting...", {
      description: "In production, this clears your JWT auth tokens.",
    })
  }

  return (
    <div className="flex items-center justify-between gap-2 p-2 group-data-[collapsible=icon]:p-1">
      <div className="flex min-w-0 items-center gap-2.5">
        <Avatar size="sm" className="shrink-0">
          <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
            {initials || <UserIcon className="size-3.5" />}
          </AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col truncate group-data-[collapsible=icon]:hidden">
          <span className="truncate text-xs font-semibold text-foreground">
            {name}
          </span>
          <span className="truncate text-[11px] text-muted-foreground">
            {email}
          </span>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon-xs"
        onClick={handleLogout}
        title="Demo Logout"
        className="shrink-0 text-muted-foreground hover:text-destructive group-data-[collapsible=icon]:hidden"
      >
        <LogOut className="size-3.5" />
      </Button>
    </div>
  )
}

