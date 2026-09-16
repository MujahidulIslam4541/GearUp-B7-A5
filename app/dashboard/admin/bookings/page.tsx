import { getAdminRentals } from "@/lib/api"
import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { AdminBookingsTable } from "@/components/dashboard/admin/admin-bookings-table"

export const metadata = {
  title: "All Bookings | GearUp Admin",
  description:
    "Monitor and audit all rental reservations across providers on GearUp.",
}

export default async function AdminBookingsPage() {
  const rentalsRes = await getAdminRentals()
  const rentals = rentalsRes.data || []

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Platform Bookings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Complete ledger of rental transactions, customer orders, and equipment
          return milestones.
        </p>
      </div>

      <DashboardSection
        title="Transactions & Reservations"
        description="Every order processed across customer accounts and provider equipment."
      >
        <AdminBookingsTable rentals={rentals} />
      </DashboardSection>
    </div>
  )
}
