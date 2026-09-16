import { CalendarDays, Activity, CheckCircle2, Banknote } from "lucide-react"
import { StatCard } from "@/components/dashboard/shared/stat-card"

interface UserStatsProps {
  totalBookings: number
  activeRentals: number
  completedRentals: number
  totalSpent: number
}

export function UserStats({
  totalBookings,
  activeRentals,
  completedRentals,
  totalSpent,
}: UserStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Bookings"
        value={totalBookings}
        description="All-time gear reservations"
        icon={CalendarDays}
      />
      <StatCard
        title="Active Rentals"
        value={activeRentals}
        description="Currently reserved or picked up"
        icon={Activity}
        trend={{ value: `${activeRentals} in progress`, isPositive: true }}
      />
      <StatCard
        title="Completed Rentals"
        value={completedRentals}
        description="Returned successfully"
        icon={CheckCircle2}
      />
      <StatCard
        title="Total Amount Spent"
        value={`৳ ${totalSpent.toLocaleString()}`}
        description="Paid rental fees"
        icon={Banknote}
      />
    </div>
  )
}
