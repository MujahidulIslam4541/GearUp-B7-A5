import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { GearItem } from "@/types/gear"
import { Button } from "@/components/ui/button"
import { GearCardImage } from "@/components/gear/gear-card-image"

interface GearCardProps {
  gear: GearItem
}

export function GearCard({ gear }: GearCardProps) {
  const isAvailable = gear.quantity > 0

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <GearCardImage
        imageUrl={gear.imageUrl}
        name={gear.name}
        categoryName={gear.category.name}
        isAvailable={isAvailable}
      />

      <div className="flex flex-1 flex-col justify-between gap-3 p-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium tracking-wide uppercase">
              {gear.brand}
            </span>
            <span className="flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="size-3.5" />
              Verified
            </span>
          </div>
          <h3 className="line-clamp-1 font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary">
            {gear.name}
          </h3>
          <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {gear.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-border/80 pt-2">
          <div>
            <span className="text-xs text-muted-foreground">Per Day</span>
            <p className="font-heading text-lg font-bold text-foreground">
              ৳ {gear.price}
            </p>
          </div>
          <Button
            render={<Link href="/gear" />}
            size="sm"
            disabled={!isAvailable}
            className="font-medium"
          >
            {isAvailable ? "Rent Now" : "Unavailable"}
          </Button>
        </div>
      </div>
    </div>
  )
}
