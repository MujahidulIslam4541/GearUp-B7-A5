import { Compass, MapPinOff, MountainSnow } from "lucide-react"

export function NotFoundVisual() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute -top-6 left-1/2 -z-10 size-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl sm:size-80" />

      <span className="font-heading text-8xl font-black tracking-tighter text-muted-foreground/15 select-none sm:text-9xl md:text-[11rem]">
        404
      </span>

      <div className="absolute flex flex-col items-center gap-2.5">
        <div className="relative flex size-20 items-center justify-center rounded-2xl border border-border bg-card/90 shadow-xl ring-8 ring-muted/60 backdrop-blur-md sm:size-24">
          <MountainSnow className="size-10 text-primary sm:size-12" />
          <div className="text-destructive-foreground absolute -right-2 -bottom-2 flex size-7 items-center justify-center rounded-full border border-border bg-destructive shadow-xs">
            <MapPinOff className="size-3.5" />
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/80 px-2.5 py-0.5 text-xs font-medium text-muted-foreground shadow-xs">
          <Compass className="size-3 animate-spin text-primary animation-duration-[8s]" />
          <span>Trail Marker 404</span>
        </div>
      </div>
    </div>
  )
}
