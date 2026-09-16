import { ReactNode } from "react"
import { getMe } from "@/lib/api"
import { getServerSession } from "@/lib/auth-server"
import { normalizeRole, AuthUser } from "@/lib/auth"
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/animate-ui/components/radix/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard/header/dashboard-header"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Dashboard | GearUp",
  description: "Manage your rentals, gears, and platform activity on GearUp.",
}

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const session = await getServerSession()
  const meRes = await getMe()
  const user: AuthUser | undefined =
    meRes.success && meRes.data?.name
      ? {
          id: meRes.data.id,
          name: meRes.data.name,
          email: meRes.data.email,
          role: normalizeRole(meRes.data.role),
        }
      : session?.user

  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen w-full bg-background text-foreground">
        <DashboardSidebar user={user} />
        <SidebarInset className="flex flex-1 flex-col overflow-x-hidden">
          <DashboardHeader user={user} />
          <main className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-7xl space-y-8">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
