"use client"

import Link from "next/link"
import { Eye, Trash2 } from "lucide-react"
import { GearItem } from "@/types/gear"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"
import { TableRow, TableCell } from "@/components/dashboard/shared/data-table"
import { Button } from "@/components/ui/button"
import { SafeImage } from "@/components/ui/safe-image"

interface GearRowProps {
  gear: GearItem
  isDeleting: boolean
  onDelete: (id: string, name: string) => void
}

export function AdminGearRow({ gear, isDeleting, onDelete }: GearRowProps) {
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
          <div>
            <div className="font-semibold text-foreground">{gear.name}</div>
            <div className="font-mono text-xs text-muted-foreground">
              {gear.id.slice(0, 8)}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-xs">{gear.brand}</TableCell>
      <TableCell className="text-xs capitalize">
        {gear.category?.name || "Gear"}
      </TableCell>
      <TableCell className="font-semibold">৳ {gear.price}</TableCell>
      <TableCell className="text-xs font-medium">
        {inStock ? `${gear.quantity} units` : "Out of stock"}
      </TableCell>
      <TableCell>
        <StatusBadge status={inStock ? "ACTIVE" : "PENDING"} />
      </TableCell>
      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-1">
          <Button
            render={<Link href={`/gear/${gear.id}`} />}
            variant="ghost"
            size="icon-xs"
            title="View gear"
          >
            <Eye className="size-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon-xs"
            title="Remove gear"
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
