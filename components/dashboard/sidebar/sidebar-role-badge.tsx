import { UserRole } from "@/types/dashboard"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SidebarRoleBadgeProps {
  role: UserRole
}

const ROLE_STYLES: Record<UserRole, { label: string; class: string }> = {
  USER: {
    label: "Demo User",
    class: "bg-emerald-500/10 text-emerald-600 border-emerald-300 dark:text-emerald-400 dark:border-emerald-800",
  },
  PROVIDER: {
    label: "Demo Provider",
    class: "bg-indigo-500/10 text-indigo-600 border-indigo-300 dark:text-indigo-400 dark:border-indigo-800",
  },
  ADMIN: {
    label: "Demo Admin",
    class: "bg-rose-500/10 text-rose-600 border-rose-300 dark:text-rose-400 dark:border-rose-800",
  },
}

export function SidebarRoleBadge({ role }: SidebarRoleBadgeProps) {
  const meta = ROLE_STYLES[role]

  return (
    <div className="px-2 py-1 group-data-[collapsible=icon]:hidden">
      <div className="flex items-center justify-between rounded-lg border border-border/80 bg-muted/40 p-2 text-xs">
        <span className="font-medium text-muted-foreground">Active Role</span>
        <Badge
          variant="outline"
          className={cn(
            "rounded-md px-1.5 py-0 text-[10px] font-bold uppercase tracking-wider",
            meta.class
          )}
        >
          {meta.label}
        </Badge>
      </div>
    </div>
  )
}

