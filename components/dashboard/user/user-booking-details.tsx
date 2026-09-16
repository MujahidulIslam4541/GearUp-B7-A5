import { ApiOrder } from "@/types/api"
import { SafeImage } from "@/components/ui/safe-image"

export function UserBookingDetails({ order }: { order: ApiOrder }) {
  return (
    <>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
        <SafeImage
          src={order.gearItem?.imageUrl}
          alt={order.gearItem?.name || "Gear"}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="line-clamp-1 font-heading font-semibold text-foreground">
          {order.gearItem?.name || "Equipment"}
        </h3>
        <p className="text-xs text-muted-foreground">
          {order.gearItem?.brand || "GearUp Rental"}
        </p>
      </div>

      <div className="space-y-1 rounded-xl bg-muted/40 p-2.5 text-xs">
        <div className="flex justify-between text-muted-foreground">
          <span>Period:</span>
          <span className="font-medium text-foreground">
            {order.rentalDate.slice(0, 10)} to {order.returnDate.slice(0, 10)}
          </span>
        </div>
        <div className="flex justify-between font-semibold text-foreground">
          <span>Total:</span>
          <span>৳ {order.totalAmount}</span>
        </div>
      </div>
    </>
  )
}
