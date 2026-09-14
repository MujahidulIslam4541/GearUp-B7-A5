import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { AdminReviewsTable } from "@/components/dashboard/admin/admin-reviews-table"

export const metadata = {
  title: "Reviews & Reports | GearUp Admin",
  description: "Moderation queue for reported gears, users, and provider service disputes.",
}

export default function AdminReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Dispute & Review Moderation
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Investigate reported gear conditions, delivery disputes, and customer feedback flags.
        </p>
      </div>

      <DashboardSection
        title="Flagged Incidents & Claims"
        description="Review reports submitted by renters and providers requiring staff intervention."
      >
        <AdminReviewsTable />
      </DashboardSection>
    </div>
  )
}

