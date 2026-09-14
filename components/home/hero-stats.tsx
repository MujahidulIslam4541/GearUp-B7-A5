export function HeroStats() {
  return (
    <div className="grid max-w-lg grid-cols-3 gap-4 border-t border-border/70 pt-6">
      <div>
        <p className="font-heading text-xl font-bold text-foreground sm:text-2xl">
          500+
        </p>
        <p className="text-xs text-muted-foreground">Active Gear Items</p>
      </div>
      <div>
        <p className="font-heading text-xl font-bold text-foreground sm:text-2xl">
          100%
        </p>
        <p className="text-xs text-muted-foreground">Quality Inspected</p>
      </div>
      <div>
        <p className="font-heading text-xl font-bold text-foreground sm:text-2xl">
          24/7
        </p>
        <p className="text-xs text-muted-foreground">Renter Support</p>
      </div>
    </div>
  )
}
