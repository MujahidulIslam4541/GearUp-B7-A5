"use client"

import Link from "next/link"
import { Eye, Trash2 } from "lucide-react"
import { GearItem } from "@/types/gear"
import { TableRow, TableCell } from "@/components/dashboard/shared/data-table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SafeImage } from "@/components/ui/safe-image"

interface ProviderGearRowProps {
  gear: GearItem
  isDeleting: boolean
  onDelete: (id: string, name: string) => void
}

export function ProviderGearRow({
  gear,
  isDeleting,
  onDelete,
}: ProviderGearRowProps) {
  const inStock = (gear.quantity ?? 0) > 0

  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
            <SafeImage
              src={gear.imageUrl}
              alt={gear.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="font-semibold">{gear.name}</span>
        </div>
      </TableCell>
      <TableCell className="text-xs capitalize">
        {gear.category?.name || "Gear"}
      </TableCell>
      <TableCell className="text-xs">{gear.brand}</TableCell>
      <TableCell className="font-semibold">৳ {gear.price}</TableCell>
      <TableCell>
        <Badge variant={inStock ? "default" : "destructive"}>
          {gear.quantity ?? 0} units
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-1.5">
          <Button
            render={<Link href={`/gear/${gear.id}`} />}
            variant="ghost"
            size="icon-xs"
            title="View Listing"
          >
            <Eye className="size-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon-xs"
            title="Delete Gear"
            disabled={isDeleting}
            onClick={() => onDelete(gear.id, gear.name)}
            className="text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="size-3.5" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}
