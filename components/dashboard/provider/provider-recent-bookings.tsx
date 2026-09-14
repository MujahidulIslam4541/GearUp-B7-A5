import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
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
import { Button } from "@/components/ui/button"

export function ProviderRecentBookings() {
  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Gear</TableHeaderCell>
          <TableHeaderCell>Customer</TableHeaderCell>
          <TableHeaderCell>Rental Period</TableHeaderCell>
          <TableHeaderCell>Earnings</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Action</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {MOCK_BOOKINGS.slice(0, 3).map((booking) => (
          <TableRow key={booking.id}>
            <TableCell>
              <div className="font-semibold text-foreground">{booking.gearName}</div>
              <div className="text-xs text-muted-foreground">{booking.id}</div>
            </TableCell>
            <TableCell>
              <div className="text-xs font-medium text-foreground">{booking.customerName}</div>
              <div className="text-[11px] text-muted-foreground">{booking.customerEmail}</div>
            </TableCell>
            <TableCell className="text-xs">
              {booking.startDate} – {booking.endDate} ({booking.days}d)
            </TableCell>
            <TableCell className="font-semibold text-emerald-600 dark:text-emerald-400">
              ৳ {booking.totalAmount}
            </TableCell>
            <TableCell>
              <StatusBadge status={booking.status} />
            </TableCell>
            <TableCell className="text-right">
              <Button
                render={<Link href="/dashboard/provider/bookings" />}
                variant="ghost"
                size="xs"
                className="gap-1 text-xs"
              >
                Manage <ArrowUpRight className="size-3" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  )
}

