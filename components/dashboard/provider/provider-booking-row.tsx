"use client"

import { ApiOrder } from "@/types/api"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"
import { TableRow, TableCell } from "@/components/dashboard/shared/data-table"

const STATUS_OPTIONS = ["CONFIRMED", "PICKED_UP", "RETURNED", "CANCELLED"]

interface BookingRowProps {
  order: ApiOrder
  isUpdating: boolean
  onStatusChange: (id: string, newStatus: string) => void
}

export function ProviderBookingRow({
  order,
  isUpdating,
  onStatusChange,
}: BookingRowProps) {
  return (
    <TableRow>
      <TableCell className="font-mono text-xs font-semibold">
        {order.id.slice(0, 8)}
      </TableCell>
      <TableCell>
        <div className="font-semibold text-foreground">
          {order.gearItem?.name || "Gear Item"}
        </div>
        <div className="text-xs text-muted-foreground">
          {order.gearItem?.brand || ""}
        </div>
      </TableCell>
      <TableCell>
        <div className="text-xs font-medium text-foreground">
          {order.customer?.name || "Customer"}
        </div>
        <div className="text-[11px] text-muted-foreground">
          {order.customer?.email || ""}
        </div>
      </TableCell>
      <TableCell className="text-xs">
        {order.rentalDate.slice(0, 10)} – {order.returnDate.slice(0, 10)}
      </TableCell>
      <TableCell className="font-semibold text-emerald-600 dark:text-emerald-400">
        ৳ {order.totalAmount}
      </TableCell>
      <TableCell>
        <StatusBadge status={order.status.toUpperCase()} />
      </TableCell>
      <TableCell className="text-right">
        <select
          value={order.status.toUpperCase()}
          disabled={isUpdating}
          onChange={(e) => onStatusChange(order.id, e.target.value)}
          className="h-7 rounded-md border border-input bg-background px-2 text-xs font-medium shadow-xs outline-none"
        >
          {STATUS_OPTIONS.map((st) => (
            <option key={st} value={st}>
              {st.replace("_", " ")}
            </option>
          ))}
        </select>
      </TableCell>
    </TableRow>
  )
}
