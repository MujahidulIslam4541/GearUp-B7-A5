import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  description?: string
  icon: LucideIcon
  trend?: {
    value: string
    isPositive?: boolean
  }
  className?: string
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-primary/30 hover:shadow-md",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="line-clamp-1 text-sm font-medium text-muted-foreground">
          {title}
        </p>
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-4.5" />
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <div className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {value}
        </div>
        {(description || trend) && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {trend && (
              <span
                className={cn(
                  "font-medium",
                  trend.isPositive
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-amber-600 dark:text-amber-400"
                )}
              >
                {trend.value}
              </span>
            )}
            {description && <span className="truncate">{description}</span>}
          </div>
        )}
      </div>
    </div>
  )
}

