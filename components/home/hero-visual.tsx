import Image from "next/image"
import { Compass } from "lucide-react"

export function HeroVisual() {
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-border shadow-2xl sm:aspect-16/10 lg:aspect-4/3">
      <Image
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        alt="Outdoor adventure landscape"
        fill
        priority
        unoptimized
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-border/40 bg-background/85 p-4 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Compass className="size-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Ready for Adventure?
            </p>
            <p className="text-xs text-muted-foreground">
              Book today and pick up gear in minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
