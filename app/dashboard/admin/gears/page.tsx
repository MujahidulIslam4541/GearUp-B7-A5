import { getAdminGears } from "@/lib/api"
import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { AdminGearsTable } from "@/components/dashboard/admin/admin-gears-table"

export const metadata = {
  title: "Gears Catalog | GearUp Admin",
  description:
    "Monitor and moderate platform-wide sports and outdoor rental gear.",
}

export default async function AdminGearsPage() {
  const gearsRes = await getAdminGears()
  const gears = gearsRes.data || []

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Platform Equipment Catalog
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Audit listings, monitor equipment availability, and remove
          non-compliant gear.
        </p>
      </div>

      <DashboardSection
        title="Live Inventory"
        description="Public rental equipment catalog listed on GearUp."
      >
        <AdminGearsTable initialGears={gears} />
      </DashboardSection>
    </div>
  )
}
