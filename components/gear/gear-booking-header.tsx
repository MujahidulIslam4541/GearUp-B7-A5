import { ShieldCheck } from "lucide-react"

export function GearBookingHeader({ price }: { price: number | string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border pb-4">
      <div>
        <span className="font-heading text-3xl font-bold text-foreground">
          ৳ {price}
        </span>
        <span className="ml-1 text-xs text-muted-foreground">/ day</span>
      </div>
      <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
        <ShieldCheck className="size-4" /> Verified Rental
      </span>
    </div>
  )
}
