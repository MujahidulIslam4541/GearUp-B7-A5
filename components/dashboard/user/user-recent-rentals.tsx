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

export function UserRecentRentals({ orders }: { orders: ApiOrder[] }) {
  if (orders.length === 0) {
    return (
      <EmptyState
        title="No rental bookings yet"
        description="Browse available outdoor equipment and submit your first rental reservation."
        action={
          <Button render={<Link href="/gear" />} size="sm">
            Browse Gear
          </Button>
        }
      />
    )
  }

  return (
    <DataTable>
      <TableHead>
        <tr>
          <TableHeaderCell>Gear</TableHeaderCell>
          <TableHeaderCell>Order ID</TableHeaderCell>
          <TableHeaderCell>Rental Dates</TableHeaderCell>
          <TableHeaderCell>Total</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Action</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {orders.slice(0, 5).map((order) => (
          <TableRow key={order.id}>
            <TableCell>
              <div className="font-semibold text-foreground">
                {order.gearItem?.name || "Equipment Rental"}
              </div>
              <div className="text-xs text-muted-foreground">
                {order.gearItem?.brand || "GearUp"}
              </div>
            </TableCell>
            <TableCell className="font-mono text-xs text-muted-foreground">
              {order.id.slice(0, 8)}...
            </TableCell>
            <TableCell className="text-xs">
              {order.rentalDate
                ? new Date(order.rentalDate).toLocaleDateString()
                : "N/A"}{" "}
              –{" "}
              {order.returnDate
                ? new Date(order.returnDate).toLocaleDateString()
                : "N/A"}
            </TableCell>
            <TableCell className="font-semibold">
              ৳ {order.totalAmount}
            </TableCell>
            <TableCell>
              <StatusBadge status={order.status} />
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
