import { ReactNode } from "react"
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/animate-ui/components/radix/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard/header/dashboard-header"

export const metadata = {
  title: "Dashboard | GearUp",
  description: "Manage your rentals, gears, and platform activity on GearUp.",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen w-full bg-background text-foreground">
        <DashboardSidebar />
        <SidebarInset className="flex flex-1 flex-col overflow-x-hidden">
          <DashboardHeader />
          <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-7xl space-y-8">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

