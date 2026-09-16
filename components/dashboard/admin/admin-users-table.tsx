"use client"

import { useState } from "react"
import { toast } from "sonner"
import { updateAdminUserStatus } from "@/lib/api"
import { ApiAdminUser } from "@/types/api"
import { EmptyState } from "@/components/dashboard/shared/empty-state"
import {
  DataTable,
  TableHead,
  TableBody,
  TableHeaderCell,
} from "@/components/dashboard/shared/data-table"
import { AdminUserRow } from "./admin-user-row"

export function AdminUsersTable({
  initialUsers,
}: {
  initialUsers: ApiAdminUser[]
}) {
  const [users, setUsers] = useState<ApiAdminUser[]>(initialUsers)
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  const toggleStatus = async (
    id: string,
    name: string,
    currentStatus: string
  ) => {
    const next =
      currentStatus.toUpperCase() === "ACTIVE" ? "SUSPENDED" : "ACTIVE"
    setUpdatingId(id)
    const res = await updateAdminUserStatus(id, next)
    setUpdatingId(null)
    if (res.success) {
      setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, status: next } : u))
      )
      toast.success(`User "${name}" status updated to ${next}`)
    } else {
      toast.error(res.message || "Failed to update user status")
    }
  }

  if (users.length === 0) {
    return (
      <EmptyState
        title="No users found"
        description="Registered member accounts will appear in this directory."
      />
    )
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>User</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Joined Date</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Action</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {users.map((u) => (
          <AdminUserRow
            key={u.id}
            user={u}
            isUpdating={updatingId === u.id}
            onToggleStatus={toggleStatus}
          />
        ))}
      </TableBody>
    </DataTable>
  )
}
