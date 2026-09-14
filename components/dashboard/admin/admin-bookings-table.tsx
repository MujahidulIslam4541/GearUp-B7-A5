"use client"

import { MOCK_BOOKINGS } from "@/lib/constants/dashboard-mock-data"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"
import {
  DataTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "@/components/dashboard/shared/data-table"

export function AdminBookingsTable() {
  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Customer</TableHeaderCell>
          <TableHeaderCell>Gear</TableHeaderCell>
          <TableHeaderCell>Provider</TableHeaderCell>
          <TableHeaderCell>Rental Dates</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Payment</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {MOCK_BOOKINGS.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell className="font-mono text-xs font-semibold">{booking.id}</TableCell>
            <TableCell>
              <div className="text-xs font-semibold text-foreground">{booking.customerName}</div>
              <div className="text-[11px] text-muted-foreground">{booking.customerEmail}</div>
            </TableCell>
            <TableCell>
              <div className="text-xs font-medium text-foreground">{booking.gearName}</div>
              <div className="text-[11px] text-muted-foreground capitalize">{booking.category}</div>
            </TableCell>
            <TableCell className="text-xs text-muted-foreground">{booking.providerName}</TableCell>
            <TableCell className="text-xs">
              {booking.startDate} – {booking.endDate}
            </TableCell>
            <TableCell className="font-semibold text-xs">৳ {booking.totalAmount}</TableCell>
            <TableCell>
              <StatusBadge status={booking.paymentStatus} />
            </TableCell>
            <TableCell>
              <StatusBadge status={booking.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  )
}

