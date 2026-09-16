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

export function AdminProvidersTable({
  initialProviders,
}: {
  initialProviders: ApiAdminUser[]
}) {
  const [providers, setProviders] = useState<ApiAdminUser[]>(initialProviders)
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
      setProviders((prev) =>
        prev.map((p) => (p.id === id ? { ...p, status: next } : p))
      )
      toast.success(`Provider "${name}" status updated to ${next}`)
    } else {
      toast.error(res.message || "Failed to update provider status")
    }
  }

  if (providers.length === 0) {
    return (
      <EmptyState
        title="No equipment providers registered"
        description="When users register with provider role, their accounts will appear here."
      />
    )
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Provider</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Joined Date</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Action</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {providers.map((p) => (
          <AdminUserRow
            key={p.id}
            user={p}
            isUpdating={updatingId === p.id}
            onToggleStatus={toggleStatus}
          />
        ))}
      </TableBody>
    </DataTable>
  )
}
