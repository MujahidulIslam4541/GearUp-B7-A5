"use client"

import { LogOut } from "lucide-react"
import { toast } from "sonner"
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/animate-ui/components/radix/sidebar"

export function SidebarUserFooter() {
  const handleLogout = () => {
    toast.success("Demo session ended. Redirecting...", {
      description: "In production, this clears your JWT auth tokens.",
    })
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          onClick={handleLogout}
          tooltip="Log Out"
          className="text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive active:bg-destructive/20"
        >
          <LogOut className="size-4" />
          <span>Log Out</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
