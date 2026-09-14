import Link from "next/link"
import { Compass } from "lucide-react"
import { SidebarTrigger } from "@/components/animate-ui/components/radix/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { DashboardBreadcrumbs } from "./dashboard-breadcrumbs"
import { RoleSwitcher } from "./role-switcher"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between border-b border-border/70 bg-background/80 px-4 backdrop-blur-md transition-all sm:px-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="hidden h-4 sm:block" />
        <DashboardBreadcrumbs />
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          render={<Link href="/gear" />}
          variant="ghost"
          size="sm"
          className="hidden md:inline-flex h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
        >
          <Compass className="size-3.5" />
          <span>Explore Rentals</span>
        </Button>

        <RoleSwitcher />
      </div>
    </header>
  )
}

