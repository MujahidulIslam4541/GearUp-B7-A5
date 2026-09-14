import Link from "next/link"
import Image from "next/image"
import { ArrowDown, Compass } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative border-b border-border bg-linear-to-b from-muted/25 via-background to-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
              ABOUT GEARUP
            </span>
            <h1 className="font-heading text-4xl leading-[1.1] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              More Than Gear. <br />
              It&apos;s About the Adventure.
            </h1>
          </div>

          <div className="space-y-4 lg:col-span-5 lg:pb-2">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              GearUp makes quality sports and outdoor equipment more accessible
              through a simple, convenient, and trusted rental experience.
            </p>
            <p className="text-sm leading-relaxed font-medium text-foreground/85">
              Built for explorers, adventurers, and everyone who wants to
              experience more without owning it all.
            </p>
            <div className="pt-1">
              <Link
                href="#our-story"
                className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-primary uppercase underline-offset-4 hover:underline"
              >
                <span>Our Story</span>
                <ArrowDown className="size-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border shadow-2xl sm:aspect-21/9">
          <Image
            src="https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1800&q=80"
            alt="Outdoor explorers with camping gear in the mountains at sunrise"
            fill
            priority
            unoptimized
            sizes="(max-width: 1920px) 100vw, 1920px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/15 to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-sm rounded-2xl border border-border/50 bg-background/85 p-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Compass className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  The GearUp Philosophy
                </p>
                <p className="text-xs text-muted-foreground">
                  Access over ownership. Freedom over clutter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
