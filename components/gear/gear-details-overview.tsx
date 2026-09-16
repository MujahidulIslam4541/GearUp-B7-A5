import { Badge } from "@/components/ui/badge"
import { GearItem } from "@/types/gear"
import { SafeImage } from "@/components/ui/safe-image"

export function GearDetailsOverview({ gear }: { gear: GearItem }) {
  const isAvailable = (gear.quantity ?? 0) > 0

  return (
    <div className="space-y-6">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted">
        <SafeImage
          src={gear.imageUrl}
          alt={gear.name}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="text-xs font-semibold uppercase">
            {gear.brand}
          </Badge>
          <Badge variant="secondary" className="text-xs capitalize">
            {gear.category?.name || "Gear"}
          </Badge>
          <Badge
            className={
              isAvailable
                ? "border-emerald-200 bg-emerald-500/10 text-emerald-600"
                : ""
            }
          >
            {isAvailable ? `${gear.quantity} Units Available` : "Out of Stock"}
          </Badge>
        </div>

        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {gear.name}
        </h1>

        <p className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
          {gear.description}
        </p>
      </div>
    </div>
  )
}
