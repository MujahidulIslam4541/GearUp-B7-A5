import Image from "next/image"
import { Compass, HeartHandshake, Leaf, ShieldCheck } from "lucide-react"

export function OurMission() {
  return (
    <section className="border-b border-border bg-muted/15 py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
            alt="Scenic mountain wilderness"
            fill
            unoptimized
            sizes="(max-width: 1920px) 100vw, 1920px"
            className="object-cover opacity-15 dark:opacity-20"
          />
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/80 px-3.5 py-1 text-xs font-medium text-foreground backdrop-blur-xs">
              <Compass className="size-3.5 text-primary" />
              <span>Our Purpose</span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Making Outdoor Adventures More Accessible.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              GearUp aims to make quality sports and outdoor equipment
              accessible to more people by providing a simple, convenient, and
              trustworthy rental experience. We believe everyone deserves the
              thrill of the great outdoors without financial or logistical
              hurdles.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              <div className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-background/80 px-4 py-3 shadow-xs backdrop-blur-md">
                <ShieldCheck className="size-4 shrink-0 text-primary" />
                <span className="text-xs font-semibold text-foreground">
                  Verified Safety
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-background/80 px-4 py-3 shadow-xs backdrop-blur-md">
                <HeartHandshake className="size-4 shrink-0 text-primary" />
                <span className="text-xs font-semibold text-foreground">
                  Community Trust
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-background/80 px-4 py-3 shadow-xs backdrop-blur-md">
                <Leaf className="size-4 shrink-0 text-primary" />
                <span className="text-xs font-semibold text-foreground">
                  Sustainable Gear
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
