import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { AdminBookingsTable } from "@/components/dashboard/admin/admin-bookings-table"

export const metadata = {
  title: "All Bookings | GearUp Admin",
  description: "Monitor and audit all rental reservations across providers on GearUp.",
}

export default function AdminBookingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Platform Bookings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Complete ledger of rental transactions, escrow statuses, and gear return milestones.
        </p>
      </div>

      <DashboardSection
        title="Transactions & Reservations"
        description="Every order processed across customer accounts and provider equipment."
      >
        <AdminBookingsTable />
      </DashboardSection>
    </div>
  )
}

