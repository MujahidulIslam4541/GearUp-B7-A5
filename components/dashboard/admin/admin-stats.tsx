import {
  Users,
  Building2,
  Tent,
  ShoppingBag,
  Activity,
  Banknote,
} from "lucide-react"
import { StatCard } from "@/components/dashboard/shared/stat-card"

interface AdminStatsProps {
  stats: {
    totalUsers: number
    totalProviders: number
    totalGears: number
    totalBookings: number
    activeRentals: number
    totalRevenue: number
  }
}

export function AdminStats({ stats }: AdminStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <StatCard
        title="Total Users"
        value={stats.totalUsers.toLocaleString()}
        description="Registered platform accounts"
        icon={Users}
      />
      <StatCard
        title="Total Providers"
        value={stats.totalProviders.toLocaleString()}
        description="Equipment vendors"
        icon={Building2}
      />
      <StatCard
        title="Catalog Gears"
        value={stats.totalGears.toLocaleString()}
        description="Listed items platform-wide"
        icon={Tent}
      />
      <StatCard
        title="Total Bookings"
        value={stats.totalBookings.toLocaleString()}
        description="All customer rental orders"
        icon={ShoppingBag}
      />
      <StatCard
        title="Active Rentals"
        value={stats.activeRentals.toLocaleString()}
        description="Current equipment in use"
        icon={Activity}
      />
      <StatCard
        title="Gross Volume"
        value={`৳${stats.totalRevenue.toLocaleString()}`}
        description="Paid rental transactions"
        icon={Banknote}
      />
    </div>
  )
}
