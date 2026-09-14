import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface DataTableProps {
  children: ReactNode
  className?: string
}

export function DataTable({ children, className }: DataTableProps) {
  return (
    <div className={cn("w-full overflow-hidden rounded-2xl border border-border bg-card shadow-xs", className)}>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left text-sm">{children}</table>
      </div>
    </div>
  )
}

export function TableHead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <thead className={cn("border-b border-border bg-muted/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground", className)}>
      {children}
    </thead>
  )
}

export function TableBody({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <tbody className={cn("divide-y divide-border", className)}>
      {children}
    </tbody>
  )
}

export function TableRow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <tr className={cn("transition-colors hover:bg-muted/40", className)}>
      {children}
    </tr>
  )
}

export function TableCell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <td className={cn("px-4 py-3.5 align-middle text-foreground", className)}>
      {children}
    </td>
  )
}

export function TableHeaderCell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <th className={cn("px-4 py-3 align-middle font-medium", className)}>
      {children}
    </th>
  )
}

