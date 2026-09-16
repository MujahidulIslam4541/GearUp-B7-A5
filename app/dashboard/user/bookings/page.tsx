import Link from "next/link"
import { Compass } from "lucide-react"
import { getMyOrders, getMyPayments } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { UserBookingsList } from "@/components/dashboard/user/user-bookings-list"

export const metadata = {
  title: "My Bookings | GearUp",
}

export default async function UserBookingsPage() {
  const [ordersRes, paymentsRes] = await Promise.all([
    getMyOrders(),
    getMyPayments(),
  ])

  const orders = Array.isArray(ordersRes.data) ? ordersRes.data : []
  const payments = Array.isArray(paymentsRes.data) ? paymentsRes.data : []

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            My Bookings
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            View reserved gear, complete Stripe checkout, and track rental
            milestones.
          </p>
        </div>

        <Button
          render={<Link href="/gear" />}
          size="sm"
          className="gap-1.5 self-start sm:self-auto"
        >
          <Compass className="size-4" />
          Rent More Gear
        </Button>
      </div>

      <DashboardSection
        title="Live Bookings & History"
        description="All equipment rental contracts linked to your account."
      >
        <UserBookingsList orders={orders} payments={payments} />
      </DashboardSection>
    </div>
  )
}
