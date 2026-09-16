import Link from "next/link"
import { ApiOrder, ApiPayment } from "@/types/api"
import { EmptyState } from "@/components/dashboard/shared/empty-state"
import { Button } from "@/components/ui/button"
import { UserBookingItem } from "./user-booking-item"

export function UserBookingsList({
  orders,
  payments,
}: {
  orders: ApiOrder[]
  payments: ApiPayment[]
}) {
  if (orders.length === 0) {
    return (
      <EmptyState
        title="No equipment bookings"
        description="You have not booked any rental equipment yet."
        action={
          <Button render={<Link href="/gear" />} size="sm">
            Explore Rentals
          </Button>
        }
      />
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {orders.map((order) => {
        const payment = payments.find((p) => p.rentalOrderId === order.id)
        return (
          <UserBookingItem key={order.id} order={order} payment={payment} />
        )
      })}
    </div>
  )
}
