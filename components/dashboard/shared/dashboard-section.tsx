import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface DashboardSectionProps {
  title: string
  description?: string
  action?: ReactNode
  children: ReactNode
  className?: string
}

export function DashboardSection({
  title,
  description,
  action,
  children,
  className,
}: DashboardSectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl">
            {title}
          </h2>
          {description && (
            <p className="text-xs text-muted-foreground sm:text-sm">
              {description}
            </p>
          )}
        </div>
        {action && <div className="flex items-center gap-2">{action}</div>}
      </div>
      <div>{children}</div>
    </section>
  )
}

