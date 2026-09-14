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

export function UserRecentRentals() {
  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Gear</TableHeaderCell>
          <TableHeaderCell>Provider</TableHeaderCell>
          <TableHeaderCell>Dates</TableHeaderCell>
          <TableHeaderCell>Total</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Action</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {MOCK_BOOKINGS.slice(0, 3).map((booking) => (
          <TableRow key={booking.id}>
            <TableCell>
              <div className="font-semibold text-foreground">{booking.gearName}</div>
              <div className="text-xs text-muted-foreground capitalize">{booking.category}</div>
            </TableCell>
            <TableCell className="text-xs">{booking.providerName}</TableCell>
            <TableCell className="text-xs">
              {booking.startDate} to {booking.endDate}
            </TableCell>
            <TableCell className="font-semibold">৳ {booking.totalAmount}</TableCell>
            <TableCell>
              <StatusBadge status={booking.status} />
            </TableCell>
            <TableCell className="text-right">
              <Button
                render={<Link href="/dashboard/user/tracking" />}
                variant="ghost"
                size="xs"
                className="gap-1 text-xs"
              >
                Track <ArrowUpRight className="size-3" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </DataTable>
  )
}

