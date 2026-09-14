import { CalendarDays, Activity, CheckCircle2, Clock } from "lucide-react"
import { StatCard } from "@/components/dashboard/shared/stat-card"
import { USER_STATS } from "@/lib/constants/dashboard-mock-data"

export function UserStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Bookings"
        value={USER_STATS.totalBookings}
        description="All-time gear reservations"
        icon={CalendarDays}
      />
      <StatCard
        title="Active Rentals"
        value={USER_STATS.activeRentals}
        description="Currently checked out"
        icon={Activity}
        trend={{ value: "In hand", isPositive: true }}
      />
      <StatCard
        title="Completed Rentals"
        value={USER_STATS.completedRentals}
        description="Returned in good shape"
        icon={CheckCircle2}
      />
      <StatCard
        title="Upcoming Booking"
        value={USER_STATS.upcomingBooking}
        description="Next rental start date"
        icon={Clock}
      />
    </div>
  )
}

