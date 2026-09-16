import { Tent, CheckCircle2, Activity, Banknote } from "lucide-react"
import { StatCard } from "@/components/dashboard/shared/stat-card"

interface ProviderStatsProps {
  stats: {
    totalGears: number
    availableGears: number
    activeBookings: number
    totalRevenue: number
  }
}

export function ProviderStats({ stats }: ProviderStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Gears"
        value={stats.totalGears}
        description="Listed items in inventory"
        icon={Tent}
      />
      <StatCard
        title="Available Gears"
        value={stats.availableGears}
        description="Ready for immediate rent"
        icon={CheckCircle2}
      />
      <StatCard
        title="Active Bookings"
        value={stats.activeBookings}
        description="Currently rented or confirmed"
        icon={Activity}
      />
      <StatCard
        title="Total Revenue"
        value={`৳${stats.totalRevenue.toLocaleString()}`}
        description="Earnings across completed rentals"
        icon={Banknote}
      />
    </div>
  )
}
