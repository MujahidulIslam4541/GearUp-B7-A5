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

export function AdminBookingsTable({ rentals }: { rentals: ApiOrder[] }) {
  if (rentals.length === 0) {
    return (
      <EmptyState
        title="No platform bookings found"
        description="Customer equipment rentals will appear in this administrative ledger."
      />
    )
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Customer</TableHeaderCell>
          <TableHeaderCell>Gear</TableHeaderCell>
          <TableHeaderCell>Rental Dates</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {rentals.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell className="font-mono text-xs font-semibold">
              {booking.id.slice(0, 8)}
            </TableCell>
            <TableCell>
              <div className="text-xs font-semibold text-foreground">
                {booking.customer?.name || "Customer"}
              </div>
              <div className="text-[11px] text-muted-foreground">
                {booking.customer?.email || ""}
              </div>
            </TableCell>
            <TableCell>
              <div className="text-xs font-medium text-foreground">
                {booking.gearItem?.name || "Gear"}
              </div>
              <div className="text-[11px] text-muted-foreground">
                {booking.gearItem?.brand || ""}
              </div>
            </TableCell>
            <TableCell className="text-xs">
              {booking.rentalDate.slice(0, 10)} –{" "}
              {booking.returnDate.slice(0, 10)}
            </TableCell>
            <TableCell className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              ৳ {booking.totalAmount}
            </TableCell>
            <TableCell>
              <StatusBadge status={booking.status.toUpperCase()} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  )
}
