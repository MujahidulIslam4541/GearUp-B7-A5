import { AlertCircle } from "lucide-react"
import { EmptyState } from "@/components/dashboard/shared/empty-state"

export function AdminReviewsTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-500/10 p-4 text-amber-800 dark:border-amber-900 dark:text-amber-300">
        <AlertCircle className="size-5 shrink-0" />
        <div className="text-xs">
          <p className="font-semibold">Review Moderation Endpoint Pending</p>
          <p className="mt-0.5 text-muted-foreground">
            The GearUp backend API does not currently expose administrative
            dispute resolution or review moderation endpoints.
          </p>
        </div>
      </div>
      <EmptyState
        title="No moderation reports pending"
        description="User disputes and flagged content queues will be displayed here once backend moderation APIs are available."
      />
    </div>
  )
}
