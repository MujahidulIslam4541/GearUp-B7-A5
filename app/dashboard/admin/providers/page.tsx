import { getAdminUsers } from "@/lib/api"
import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { AdminProvidersTable } from "@/components/dashboard/admin/admin-providers-table"

export const metadata = {
  title: "Providers Management | GearUp Admin",
  description:
    "Review, verify, and monitor equipment rental providers on GearUp.",
}

export default async function AdminProvidersPage() {
  const usersRes = await getAdminUsers()
  const providers = (usersRes.data || []).filter(
    (u) => u.role?.toLowerCase() === "provider"
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Equipment Providers
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Review credentials, manage account status, and monitor provider
          accounts.
        </p>
      </div>

      <DashboardSection
        title="Partner Directory"
        description="All registered equipment providers active on the GearUp platform."
      >
        <AdminProvidersTable initialProviders={providers} />
      </DashboardSection>
    </div>
  )
}
