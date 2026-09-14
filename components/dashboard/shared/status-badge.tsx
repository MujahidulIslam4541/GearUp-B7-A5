import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type StatusVariant =
  | "PLACED"
  | "CONFIRMED"
  | "PAID"
  | "PICKED_UP"
  | "RETURNED"
  | "CANCELLED"
  | "ACTIVE"
  | "SUSPENDED"
  | "PENDING"
  | "VERIFIED"
  | "RESOLVED"
  | "DISMISSED"

interface StatusBadgeProps {
  status: StatusVariant | string
  className?: string
}

const STATUS_CONFIG: Record<
  string,
  { label: string; className: string }
> = {
  PLACED: { label: "Placed", className: "bg-blue-500/10 text-blue-600 border-blue-200 dark:text-blue-400 dark:border-blue-900" },
  CONFIRMED: { label: "Confirmed", className: "bg-indigo-500/10 text-indigo-600 border-indigo-200 dark:text-indigo-400 dark:border-indigo-900" },
  PAID: { label: "Paid", className: "bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:text-emerald-400 dark:border-emerald-900" },
  PICKED_UP: { label: "Picked Up", className: "bg-amber-500/10 text-amber-600 border-amber-200 dark:text-amber-400 dark:border-amber-900" },
  RETURNED: { label: "Returned", className: "bg-teal-500/10 text-teal-600 border-teal-200 dark:text-teal-400 dark:border-teal-900" },
  CANCELLED: { label: "Cancelled", className: "bg-rose-500/10 text-rose-600 border-rose-200 dark:text-rose-400 dark:border-rose-900" },
  ACTIVE: { label: "Active", className: "bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:text-emerald-400 dark:border-emerald-900" },
  VERIFIED: { label: "Verified", className: "bg-sky-500/10 text-sky-600 border-sky-200 dark:text-sky-400 dark:border-sky-900" },
  PENDING: { label: "Pending", className: "bg-amber-500/10 text-amber-600 border-amber-200 dark:text-amber-400 dark:border-amber-900" },
  SUSPENDED: { label: "Suspended", className: "bg-rose-500/10 text-rose-600 border-rose-200 dark:text-rose-400 dark:border-rose-900" },
  RESOLVED: { label: "Resolved", className: "bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:text-emerald-400 dark:border-emerald-900" },
  DISMISSED: { label: "Dismissed", className: "bg-muted text-muted-foreground border-border" },
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status] ?? {
    label: status,
    className: "bg-muted text-muted-foreground border-border",
  }

  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider",
        config.className,
        className
      )}
    >
      {config.label}
    </Badge>
  )
}

