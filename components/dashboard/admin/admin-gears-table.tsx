"use client"

import { useState } from "react"
import { toast } from "sonner"
import { deleteGear } from "@/lib/api"
import { GearItem } from "@/types/gear"
import { EmptyState } from "@/components/dashboard/shared/empty-state"
import {
  DataTable,
  TableHead,
  TableBody,
  TableHeaderCell,
} from "@/components/dashboard/shared/data-table"
import { AdminGearRow } from "./admin-gear-row"

export function AdminGearsTable({
  initialGears,
}: {
  initialGears: GearItem[]
}) {
  const [gears, setGears] = useState<GearItem[]>(initialGears)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleDelete = async (id: string, name: string) => {
    setDeletingId(id)
    const res = await deleteGear(id)
    setDeletingId(null)
    if (res.success) {
      setGears((prev) => prev.filter((g) => g.id !== id))
      toast.success(`Gear "${name}" removed from marketplace`)
    } else {
      toast.error(res.message || "Failed to remove gear")
    }
  }

  if (gears.length === 0) {
    return (
      <EmptyState
        title="No equipment in catalog"
        description="When providers list rental gear, items will appear here."
      />
    )
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Gear Name</TableHeaderCell>
          <TableHeaderCell>Brand</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Price/Day</TableHeaderCell>
          <TableHeaderCell>In Stock</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Actions</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {gears.map((g) => (
          <AdminGearRow
            key={g.id}
            gear={g}
            isDeleting={deletingId === g.id}
            onDelete={handleDelete}
          />
        ))}
      </TableBody>
    </DataTable>
  )
}
