import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { getAdminUsers, getAdminGears, getAdminRentals } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { AdminStats } from "@/components/dashboard/admin/admin-stats"
import { AdminActivityOverview } from "@/components/dashboard/admin/admin-activity-overview"

export const metadata = {
  title: "Admin Dashboard | GearUp",
}

export default async function AdminDashboardPage() {
  const [usersRes, gearsRes, rentalsRes] = await Promise.all([
    getAdminUsers(),
    getAdminGears(),
    getAdminRentals(),
  ])

  const users = usersRes.data || []
  const gears = gearsRes.data || []
  const rentals = rentalsRes.data || []

  const stats = {
    totalUsers: users.length,
    totalProviders: users.filter((u) => u.role?.toUpperCase() === "PROVIDER")
      .length,
    totalGears: gears.length,
    totalBookings: rentals.length,
    activeRentals: rentals.filter((r) =>
      ["PAID", "CONFIRMED", "PICKED_UP"].includes(r.status?.toUpperCase() || "")
    ).length,
    totalRevenue: rentals
      .filter((r) =>
        ["PAID", "RETURNED"].includes(r.status?.toUpperCase() || "")
      )
      .reduce((acc, r) => acc + (r.totalAmount || 0), 0),
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              System Administration
            </h1>
            <span className="inline-flex items-center rounded-md bg-rose-500/10 px-2 py-0.5 text-xs font-semibold text-rose-600 dark:text-rose-400">
              <ShieldCheck className="mr-1 size-3" /> Master Control
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Platform governance, user verification, equipment catalog, and
            dispute moderation.
          </p>
        </div>

        <Button
          render={<Link href="/dashboard/admin/users" />}
          variant="outline"
          size="sm"
          className="gap-1.5 self-start sm:self-auto"
        >
          Manage Platform Users
        </Button>
      </div>

      <AdminStats stats={stats} />

      <DashboardSection
        title="Live Platform Activity"
        description="Real-time reservations and booking lifecycles across all providers."
        action={
          <Button
            render={<Link href="/dashboard/admin/bookings" />}
            variant="outline"
            size="sm"
          >
            View All Platform Bookings
          </Button>
        }
      >
        <AdminActivityOverview rentals={rentals} />
      </DashboardSection>
    </div>
  )
}
