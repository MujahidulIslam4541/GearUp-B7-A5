"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, ShieldBan, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { ALL_GEAR } from "@/lib/constants/gear"
import { GearItem } from "@/types/gear"
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

export function AdminGearsTable() {
  const [gears, setGears] = useState<GearItem[]>(ALL_GEAR.slice(0, 8))

  const handleDelete = (id: string, name: string) => {
    setGears((prev) => prev.filter((g) => g.id !== id))
    toast.success(`Gear "${name}" removed from marketplace`)
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Gear Name</TableHeaderCell>
          <TableHeaderCell>Provider</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>Price/Day</TableHeaderCell>
          <TableHeaderCell>Availability</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Actions</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {gears.map((g) => (
          <TableRow key={g.id}>
            <TableCell>
              <div className="font-semibold text-foreground">{g.name}</div>
              <div className="text-xs text-muted-foreground">{g.brand}</div>
            </TableCell>
            <TableCell className="text-xs">{g.provider.name}</TableCell>
            <TableCell className="capitalize text-xs">{g.category.name}</TableCell>
            <TableCell className="font-semibold">৳ {g.price}</TableCell>
            <TableCell className="text-xs font-medium">
              {g.quantity > 0 ? `${g.quantity} in stock` : "Out of stock"}
            </TableCell>
            <TableCell><StatusBadge status={g.quantity > 0 ? "ACTIVE" : "PENDING"} /></TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-1">
                <Button render={<Link href="/gear" />} variant="ghost" size="icon-xs" title="View gear">
                  <Eye className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs" title="Delist / Flag" onClick={() => toast.info(`Listing "${g.name}" flagged`)}>
                  <ShieldBan className="size-3.5 text-amber-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  title="Remove gear"
                  onClick={() => handleDelete(g.id, g.name)}
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

