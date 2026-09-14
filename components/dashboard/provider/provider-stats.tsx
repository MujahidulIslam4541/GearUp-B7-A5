import { Tent, CheckCircle2, Activity, Banknote } from "lucide-react"
import { StatCard } from "@/components/dashboard/shared/stat-card"
import { PROVIDER_STATS } from "@/lib/constants/dashboard-mock-data"

export function ProviderStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Gears"
        value={PROVIDER_STATS.totalGears}
        description="Listed items in inventory"
        icon={Tent}
      />
      <StatCard
        title="Available Gears"
        value={PROVIDER_STATS.availableGears}
        description="Ready for immediate rent"
        icon={CheckCircle2}
        trend={{ value: "78% active", isPositive: true }}
      />
      <StatCard
        title="Active Bookings"
        value={PROVIDER_STATS.activeBookings}
        description="Currently out with customers"
        icon={Activity}
      />
      <StatCard
        title="Total Revenue"
        value={PROVIDER_STATS.totalRevenue}
        description="Earnings across all rentals"
        icon={Banknote}
        trend={{ value: "+18.4% this mo", isPositive: true }}
      />
    </div>
  )
}

