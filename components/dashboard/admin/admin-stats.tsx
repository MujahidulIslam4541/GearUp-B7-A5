import { Users, Building2, Tent, ShoppingBag, Activity, ShieldAlert } from "lucide-react"
import { StatCard } from "@/components/dashboard/shared/stat-card"
import { ADMIN_STATS } from "@/lib/constants/dashboard-mock-data"

export function AdminStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <StatCard
        title="Total Users"
        value={ADMIN_STATS.totalUsers.toLocaleString()}
        description="Registered sports enthusiasts"
        icon={Users}
        trend={{ value: "+12% this mo", isPositive: true }}
      />
      <StatCard
        title="Total Providers"
        value={ADMIN_STATS.totalProviders}
        description="Verified equipment vendors"
        icon={Building2}
      />
      <StatCard
        title="Total Gears"
        value={ADMIN_STATS.totalGears}
        description="Listed items platform-wide"
        icon={Tent}
      />
      <StatCard
        title="Total Bookings"
        value={ADMIN_STATS.totalBookings.toLocaleString()}
        description="All completed & active orders"
        icon={ShoppingBag}
        trend={{ value: "+24% QoQ", isPositive: true }}
      />
      <StatCard
        title="Active Rentals"
        value={ADMIN_STATS.activeRentals}
        description="Current equipment in use"
        icon={Activity}
      />
      <StatCard
        title="Pending Reports"
        value={ADMIN_STATS.reportedItems}
        description="Awaiting moderation review"
        icon={ShieldAlert}
      />
    </div>
  )
}

