import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { AdminUsersTable } from "@/components/dashboard/admin/admin-users-table"

export const metadata = {
  title: "Users Management | GearUp Admin",
  description: "View, moderate, and manage registered GearUp platform users.",
}

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Platform Users
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage member accounts, review booking activity, and govern account permissions.
        </p>
      </div>

      <DashboardSection
        title="Registered Members"
        description="All regular customer accounts active on GearUp."
      >
        <AdminUsersTable />
      </DashboardSection>
    </div>
  )
}

