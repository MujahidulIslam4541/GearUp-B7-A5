import { getProviderOrders } from "@/lib/api"
import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { ProviderBookingsTable } from "@/components/dashboard/provider/provider-bookings-table"

export const metadata = {
  title: "Gear Bookings | GearUp Provider",
  description:
    "Customer bookings received for your equipment with tracking controls.",
}

export default async function ProviderBookingsPage() {
  const ordersRes = await getProviderOrders()
  const orders = ordersRes.data || []

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Gear Bookings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage rental reservations, approve pickups, and verify equipment
          returns.
        </p>
      </div>

      <DashboardSection
        title="Reservations & Orders"
        description="View and update order fulfillment lifecycle in real-time."
      >
        <ProviderBookingsTable initialOrders={orders} />
      </DashboardSection>
    </div>
  )
}
