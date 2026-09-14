"use client"

import { useState } from "react"
import { Ban, CheckCircle, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { MOCK_USERS } from "@/lib/constants/dashboard-mock-data"
import { DashboardUser } from "@/types/dashboard"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"
import {
  DataTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "@/components/dashboard/shared/data-table"
import { Button } from "@/components/ui/button"

export function AdminUsersTable() {
  const [users, setUsers] = useState<DashboardUser[]>(MOCK_USERS)

  const toggleStatus = (id: string, name: string) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id !== id) return u
        const next = u.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE"
        toast.info(`User "${name}" status changed to ${next}`)
        return { ...u, status: next }
      })
    )
  }

  const handleDelete = (id: string, name: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== id))
    toast.success(`User "${name}" removed`)
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>User</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Bookings</TableHeaderCell>
          <TableHeaderCell>Joined</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Actions</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {users.map((u) => (
          <TableRow key={u.id}>
            <TableCell>
              <div className="font-semibold">{u.name}</div>
              <div className="font-mono text-xs text-muted-foreground">{u.id}</div>
            </TableCell>
            <TableCell className="text-xs text-muted-foreground">{u.email}</TableCell>
            <TableCell className="text-xs font-medium">{u.totalBookings}</TableCell>
            <TableCell className="text-xs">{u.joinedDate}</TableCell>
            <TableCell><StatusBadge status={u.status} /></TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-1">
                <Button
                  variant="ghost"
                  size="icon-xs"
                  title={u.status === "ACTIVE" ? "Suspend user" : "Activate user"}
                  onClick={() => toggleStatus(u.id, u.name)}
                >
                  {u.status === "ACTIVE" ? <Ban className="size-3.5 text-amber-500" /> : <CheckCircle className="size-3.5 text-emerald-500" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  title="Delete user"
                  onClick={() => handleDelete(u.id, u.name)}
                  className="text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="size-3.5" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  )
}

