import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { GearItem } from "@/types/gear"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SafeImage } from "@/components/ui/safe-image"

interface GearCardProps {
  gear: GearItem
}

export function GearCard({ gear }: GearCardProps) {
  const isAvailable = gear.quantity > 0

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
        <SafeImage
          src={gear.imageUrl}
          alt={gear.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <Badge
            variant="secondary"
            className="bg-background/80 text-xs font-medium capitalize backdrop-blur-md"
          >
            {gear.category?.name || "Gear"}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge
            variant={isAvailable ? "default" : "destructive"}
            className="text-[11px] font-semibold tracking-wide uppercase"
          >
            {isAvailable ? "Available" : "Booked"}
          </Badge>
        </div>
      </div>

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
          <Link href={`/gear/${gear.id}`} className="block">
            <h3 className="line-clamp-1 font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary">
              {gear.name}
            </h3>
          </Link>
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
            render={<Link href={`/gear/${gear.id}`} />}
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
