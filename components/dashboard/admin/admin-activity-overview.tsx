import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ApiOrder } from "@/types/api"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"
import { EmptyState } from "@/components/dashboard/shared/empty-state"
import {
  DataTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "@/components/dashboard/shared/data-table"
import { Button } from "@/components/ui/button"

export function AdminActivityOverview({ rentals }: { rentals: ApiOrder[] }) {
  if (rentals.length === 0) {
    return (
      <EmptyState
        title="No platform rental activity yet"
        description="Bookings placed across all providers will appear here in real time."
      />
    )
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Booking</TableHeaderCell>
          <TableHeaderCell>Customer</TableHeaderCell>
          <TableHeaderCell>Rental Period</TableHeaderCell>
          <TableHeaderCell>Gear</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Action</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {rentals.slice(0, 5).map((b) => (
          <TableRow key={b.id}>
            <TableCell className="font-mono text-xs font-semibold">
              {b.id.slice(0, 8)}
            </TableCell>
            <TableCell className="text-xs font-medium">
              {b.customer?.name || "Customer"}
            </TableCell>
            <TableCell className="text-xs">
              {b.rentalDate.slice(0, 10)} – {b.returnDate.slice(0, 10)}
            </TableCell>
            <TableCell className="text-xs font-medium">
              {b.gearItem?.name || "Equipment"}
            </TableCell>
            <TableCell>
              <StatusBadge status={b.status.toUpperCase()} />
            </TableCell>
            <TableCell className="text-right">
              <Button
                render={<Link href="/dashboard/admin/bookings" />}
                variant="ghost"
                size="xs"
                className="gap-1 text-xs"
              >
                Inspect <ArrowUpRight className="size-3" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  )
}
