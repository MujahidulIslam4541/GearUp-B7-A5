import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { AdminGearsTable } from "@/components/dashboard/admin/admin-gears-table"

export const metadata = {
  title: "Gears Catalog | GearUp Admin",
  description: "Monitor and moderate platform-wide sports and outdoor rental gear.",
}

export default function AdminGearsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Platform Equipment Catalog
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Audit listings, ensure quality compliance, and moderate vendor products across Bangladesh.
        </p>
      </div>

      <DashboardSection
        title="Live Inventory"
        description="Public rental equipment actively listed by verified providers."
      >
        <AdminGearsTable />
      </DashboardSection>
    </div>
  )
}

