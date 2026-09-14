import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { AdminProvidersTable } from "@/components/dashboard/admin/admin-providers-table"

export const metadata = {
  title: "Providers Management | GearUp Admin",
  description: "Review, verify, and monitor equipment rental providers on GearUp.",
}

export default function AdminProvidersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Equipment Providers
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Review business credentials, manage verified provider badges, and monitor order volume.
        </p>
      </div>

      <DashboardSection
        title="Partner Directory"
        description="All registered equipment stores and independent rental hubs."
      >
        <AdminProvidersTable />
      </DashboardSection>
    </div>
  )
}

