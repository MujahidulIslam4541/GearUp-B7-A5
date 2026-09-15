"use client"

import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarSeparator,
} from "@/components/animate-ui/components/radix/sidebar"
import {
  getRoleFromPathname,
  getNavItemsForRole,
} from "@/lib/constants/dashboard-nav"
import { SidebarBrand } from "./sidebar-brand"
import { SidebarUserProfile } from "./sidebar-user-profile"
import { SidebarNav } from "./sidebar-nav"
import { SidebarUserFooter } from "./sidebar-user-footer"

export function DashboardSidebar() {
  const pathname = usePathname()
  const currentRole = getRoleFromPathname(pathname)
  const navItems = getNavItemsForRole(currentRole)

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-sidebar-border bg-sidebar"
    >
      <SidebarHeader />
      <SidebarHeader className="gap-3">
        <SidebarBrand />
        <SidebarUserProfile />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarNav items={navItems} />
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter>
        <SidebarUserFooter />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
