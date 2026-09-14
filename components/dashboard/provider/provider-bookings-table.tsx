"use client"

import { useState } from "react"
import { toast } from "sonner"
import { MOCK_BOOKINGS } from "@/lib/constants/dashboard-mock-data"
import { BookingStatus, DashboardBooking } from "@/types/dashboard"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"
import {
  DataTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "@/components/dashboard/shared/data-table"

const STATUS_OPTIONS: BookingStatus[] = ["CONFIRMED", "PAID", "PICKED_UP", "RETURNED", "CANCELLED"]

export function ProviderBookingsTable() {
  const [bookings, setBookings] = useState<DashboardBooking[]>(MOCK_BOOKINGS)

  const handleStatusChange = (id: string, newStatus: BookingStatus) => {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b)))
    toast.success(`Booking #${id} updated to ${newStatus}`)
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Booking ID</TableHeaderCell>
          <TableHeaderCell>Gear</TableHeaderCell>
          <TableHeaderCell>Customer</TableHeaderCell>
          <TableHeaderCell>Dates</TableHeaderCell>
          <TableHeaderCell>Payment</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Update Status</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {bookings.map((b) => (
          <TableRow key={b.id}>
            <TableCell className="font-mono text-xs font-semibold">{b.id}</TableCell>
            <TableCell>
              <div className="font-semibold text-foreground">{b.gearName}</div>
              <div className="text-xs text-muted-foreground capitalize">{b.category}</div>
            </TableCell>
            <TableCell>
              <div className="text-xs font-medium text-foreground">{b.customerName}</div>
              <div className="text-[11px] text-muted-foreground">{b.customerEmail}</div>
            </TableCell>
            <TableCell className="text-xs">{b.startDate} – {b.endDate} ({b.days}d)</TableCell>
            <TableCell><StatusBadge status={b.paymentStatus} /></TableCell>
            <TableCell><StatusBadge status={b.status} /></TableCell>
            <TableCell className="text-right">
              <select
                value={b.status}
                onChange={(e) => handleStatusChange(b.id, e.target.value as BookingStatus)}
                className="h-7 rounded-md border border-input bg-background px-2 text-xs font-medium shadow-xs outline-none"
              >
                {STATUS_OPTIONS.map((st) => (
                  <option key={st} value={st}>{st.replace("_", " ")}</option>
                ))}
              </select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  )
}

