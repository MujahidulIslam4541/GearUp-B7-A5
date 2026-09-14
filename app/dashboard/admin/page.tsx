import Link from "next/link"
import { ShieldAlert, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { AdminStats } from "@/components/dashboard/admin/admin-stats"
import { AdminActivityOverview } from "@/components/dashboard/admin/admin-activity-overview"

export const metadata = {
  title: "Admin Dashboard | GearUp",
}

export default function AdminDashboardPage() {
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
            Platform governance, user verification, equipment catalog, and dispute moderation.
          </p>
        </div>

        <Button
          render={<Link href="/dashboard/admin/reviews" />}
          variant="outline"
          size="sm"
          className="gap-1.5 self-start sm:self-auto"
        >
          <ShieldAlert className="size-4 text-amber-500" />
          Review Reports (3)
        </Button>
      </div>

      <AdminStats />

      <DashboardSection
        title="Live Platform Activity"
        description="Real-time reservations and booking lifecycles across all providers."
        action={
          <Button render={<Link href="/dashboard/admin/bookings" />} variant="outline" size="sm">
            View All Platform Bookings
          </Button>
        }
      >
        <AdminActivityOverview />
      </DashboardSection>
    </div>
  )
}

