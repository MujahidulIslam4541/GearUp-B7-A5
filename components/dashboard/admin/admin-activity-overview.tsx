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

export function AdminActivityOverview() {
  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Booking</TableHeaderCell>
          <TableHeaderCell>Customer</TableHeaderCell>
          <TableHeaderCell>Provider</TableHeaderCell>
          <TableHeaderCell>Gear</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Action</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {MOCK_BOOKINGS.slice(0, 3).map((b) => (
          <TableRow key={b.id}>
            <TableCell className="font-mono text-xs font-semibold">{b.id}</TableCell>
            <TableCell className="text-xs font-medium">{b.customerName}</TableCell>
            <TableCell className="text-xs">{b.providerName}</TableCell>
            <TableCell className="text-xs font-medium">{b.gearName}</TableCell>
            <TableCell>
              <StatusBadge status={b.status} />
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

