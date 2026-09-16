"use client"

import { Ban, CheckCircle } from "lucide-react"
import { ApiAdminUser } from "@/types/api"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"
import { TableRow, TableCell } from "@/components/dashboard/shared/data-table"
import { Button } from "@/components/ui/button"

interface UserRowProps {
  user: ApiAdminUser
  isUpdating: boolean
  onToggleStatus: (id: string, name: string, status: string) => void
}

export function AdminUserRow({
  user,
  isUpdating,
  onToggleStatus,
}: UserRowProps) {
  const isActive = user.status.toUpperCase() === "ACTIVE"

  return (
    <TableRow>
      <TableCell>
        <div className="font-semibold">{user.name}</div>
        <div className="font-mono text-xs text-muted-foreground">
          {user.id.slice(0, 8)}
        </div>
      </TableCell>
      <TableCell className="text-xs text-muted-foreground">
        {user.email}
      </TableCell>
      <TableCell className="text-xs font-medium uppercase">
        {user.role}
      </TableCell>
      <TableCell className="text-xs">
        {user.createdAt?.slice(0, 10) || "—"}
      </TableCell>
      <TableCell>
        <StatusBadge status={user.status.toUpperCase()} />
      </TableCell>
      <TableCell className="text-right">
        <Button
          variant="ghost"
          size="icon-xs"
          title={
            isActive
              ? `Suspend ${user.role.toLowerCase()}`
              : `Activate ${user.role.toLowerCase()}`
          }
          disabled={isUpdating}
          onClick={() => onToggleStatus(user.id, user.name, user.status)}
        >
          {isActive ? (
            <Ban className="size-3.5 text-amber-500" />
          ) : (
            <CheckCircle className="size-3.5 text-emerald-500" />
          )}
        </Button>
      </TableCell>
    </TableRow>
  )
}
