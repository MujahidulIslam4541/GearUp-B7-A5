import Link from "next/link"
import { Compass, Sparkles } from "lucide-react"
import { getMe, getMyOrders, getMyPayments } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { UserStats } from "@/components/dashboard/user/user-stats"
import { UserRecentRentals } from "@/components/dashboard/user/user-recent-rentals"

export const metadata = {
  title: "User Dashboard | GearUp",
}

export default async function UserDashboardPage() {
  const [meRes, ordersRes, paymentsRes] = await Promise.all([
    getMe(),
    getMyOrders(),
    getMyPayments(),
  ])

  const user = meRes.data
  const orders = Array.isArray(ordersRes.data) ? ordersRes.data : []
  const payments = Array.isArray(paymentsRes.data) ? paymentsRes.data : []

  const activeRentals = orders.filter(
    (o) => o.status !== "RETURNED" && o.status !== "CANCELLED"
  ).length
  const completedRentals = orders.filter((o) => o.status === "RETURNED").length
  const totalSpent = payments
    .filter((p) => p.status === "COMPLETED")
    .reduce((sum, p) => sum + (p.amount || 0), 0)

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Welcome back, {user?.name || "Renter"}
            </h1>
            <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
              <Sparkles className="mr-1 size-3" /> Member
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Monitor real-time rental reservations, pick-up schedules, and
            payments.
          </p>
        </div>

        <Button
          render={<Link href="/gear" />}
          className="h-9 gap-1.5 self-start sm:self-auto"
        >
          <Compass className="size-4" />
          Rent New Gear
        </Button>
      </div>

      <UserStats
        totalBookings={orders.length}
        activeRentals={activeRentals}
        completedRentals={completedRentals}
        totalSpent={totalSpent}
      />

      <DashboardSection
        title="Active & Recent Bookings"
        description="Monitor order status and delivery dates for your gear."
        action={
          <Button
            render={<Link href="/dashboard/user/bookings" />}
            variant="outline"
            size="sm"
          >
            View All
          </Button>
        }
      >
        <UserRecentRentals orders={orders} />
      </DashboardSection>
    </div>
  )
}
