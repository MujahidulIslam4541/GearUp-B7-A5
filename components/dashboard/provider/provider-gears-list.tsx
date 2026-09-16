"use client"

import { useState } from "react"
import Link from "next/link"
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
import { Button } from "@/components/ui/button"
import { ProviderGearRow } from "./provider-gear-row"

export function ProviderGearsList({
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
      toast.success(`Removed "${name}" from inventory`)
    } else {
      toast.error(res.message || "Failed to delete gear")
    }
  }

  if (gears.length === 0) {
    return (
      <EmptyState
        title="No equipment listed yet"
        description="Add your gear to start offering rentals to customers on GearUp."
        action={
          <Button
            render={<Link href="/dashboard/provider/gear/new" />}
            size="sm"
          >
            List First Gear
          </Button>
        }
      />
    )
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Gear Name</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Brand</TableHeaderCell>
          <TableHeaderCell>Price/Day</TableHeaderCell>
          <TableHeaderCell>In Stock</TableHeaderCell>
          <TableHeaderCell className="text-right">Actions</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {gears.map((g) => (
          <ProviderGearRow
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
