import { AuthUser } from "@/lib/auth"
import { SidebarTrigger } from "@/components/animate-ui/components/radix/sidebar"
import { Separator } from "@/components/ui/separator"
import { DashboardBreadcrumbs } from "./dashboard-breadcrumbs"
import { SidebarUserProfile } from "../sidebar/sidebar-user-profile"

export function DashboardHeader({ user }: { user?: AuthUser | null }) {
  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between border-b border-border/70 bg-background/80 px-4 backdrop-blur-md transition-all sm:px-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="hidden h-4 sm:block" />
        <DashboardBreadcrumbs />
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <SidebarUserProfile user={user} />
      </div>
    </header>
  )
}
