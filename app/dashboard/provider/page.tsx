import Link from "next/link"
import { PlusCircle, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { ProviderStats } from "@/components/dashboard/provider/provider-stats"
import { ProviderRecentBookings } from "@/components/dashboard/provider/provider-recent-bookings"

export const metadata = {
  title: "Provider Dashboard | GearUp",
}

export default function ProviderDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Provider Hub
            </h1>
            <span className="inline-flex items-center rounded-md bg-indigo-500/10 px-2 py-0.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <Store className="mr-1 size-3" /> Peak Adventures
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your gear listings, track active bookings, and review rental earnings.
          </p>
        </div>

        <Button render={<Link href="/dashboard/provider/gear/new" />} className="h-9 gap-1.5 self-start sm:self-auto">
          <PlusCircle className="size-4" />
          List New Gear
        </Button>
      </div>

      <ProviderStats />

      <DashboardSection
        title="Incoming & Active Bookings"
        description="Customer orders received for your rental equipment."
        action={
          <Button render={<Link href="/dashboard/provider/bookings" />} variant="outline" size="sm">
            View All Bookings
          </Button>
        }
      >
        <ProviderRecentBookings />
      </DashboardSection>
    </div>
  )
}

