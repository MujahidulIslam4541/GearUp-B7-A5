"use client"

import { useState } from "react"
import { toast } from "sonner"
import { updateProviderOrderStatus } from "@/lib/api"
import { ApiOrder } from "@/types/api"
import { EmptyState } from "@/components/dashboard/shared/empty-state"
import {
  DataTable,
  TableHead,
  TableBody,
  TableHeaderCell,
} from "@/components/dashboard/shared/data-table"
import { ProviderBookingRow } from "./provider-booking-row"

export function ProviderBookingsTable({
  initialOrders,
}: {
  initialOrders: ApiOrder[]
}) {
  const [orders, setOrders] = useState<ApiOrder[]>(initialOrders)
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id)
    const res = await updateProviderOrderStatus(id, newStatus)
    setUpdatingId(null)
    if (res.success) {
      setOrders((prev) =>
        prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
      )
      toast.success(`Booking status updated to ${newStatus}`)
    } else {
      toast.error(res.message || "Failed to update booking status")
    }
  }

  if (orders.length === 0) {
    return (
      <EmptyState
        title="No rental bookings yet"
        description="Incoming customer bookings for your equipment will appear here."
      />
    )
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Booking ID</TableHeaderCell>
          <TableHeaderCell>Gear</TableHeaderCell>
          <TableHeaderCell>Customer</TableHeaderCell>
          <TableHeaderCell>Rental Period</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">
            Update Status
          </TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {orders.map((b) => (
          <ProviderBookingRow
            key={b.id}
            order={b}
            isUpdating={updatingId === b.id}
            onStatusChange={handleStatusChange}
          />
        ))}
      </TableBody>
    </DataTable>
  )
}
