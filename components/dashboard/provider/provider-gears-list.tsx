"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { PROVIDER_GEARS } from "@/lib/constants/dashboard-mock-data"
import { GearItem } from "@/types/gear"
import {
  DataTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "@/components/dashboard/shared/data-table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProviderGearsList() {
  const [gears, setGears] = useState<GearItem[]>(PROVIDER_GEARS)

  const handleDelete = (id: string, name: string) => {
    setGears((prev) => prev.filter((g) => g.id !== id))
    toast.success(`Removed "${name}" from inventory`)
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
          <TableRow key={g.id}>
            <TableCell><span className="font-semibold">{g.name}</span></TableCell>
            <TableCell className="capitalize text-xs">{g.category.name}</TableCell>
            <TableCell className="text-xs">{g.brand}</TableCell>
            <TableCell className="font-semibold">৳ {g.price}</TableCell>
            <TableCell>
              <Badge variant={g.quantity > 0 ? "default" : "destructive"}>
                {g.quantity} units
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-1.5">
                <Button render={<Link href="/gear" />} variant="ghost" size="icon-xs" title="View Listing">
                  <Eye className="size-3.5" />
                </Button>
                <Button variant="ghost" size="icon-xs" title="Edit Gear" onClick={() => toast.info(`Editing "${g.name}"`)}>
                  <Pencil className="size-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  title="Delete Gear"
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

