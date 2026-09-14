import { MapPin, Shield, Calendar, Phone } from "lucide-react"

export function TrackingOrderSummary() {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <MapPin className="size-4.5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Pickup Hub</p>
          <p className="text-xs font-semibold text-foreground">Dhanmondi Adventure Hub</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Calendar className="size-4.5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Rental Window</p>
          <p className="text-xs font-semibold text-foreground">Sep 18 – Sep 22, 2026</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Shield className="size-4.5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Security Deposit</p>
          <p className="text-xs font-semibold text-foreground">৳ 2,000 (Refundable)</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Phone className="size-4.5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Provider Contact</p>
          <p className="text-xs font-semibold text-foreground">+880 1712-345678</p>
        </div>
      </div>
    </div>
  )
}

