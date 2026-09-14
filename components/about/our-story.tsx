import Image from "next/image"
import { BookOpen } from "lucide-react"

export function OurStory() {
  return (
    <section className="border-b border-border bg-muted/15 py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-border shadow-xl sm:aspect-16/10 lg:aspect-4/3">
            <Image
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1000&q=80"
              alt="Outdoor adventurers preparing camping gear"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-border/40 bg-background/85 p-4 shadow-lg backdrop-blur-md">
              <p className="text-sm font-semibold text-foreground">
                Born on the Trails
              </p>
              <p className="text-xs text-muted-foreground">
                Built by outdoor lovers for weekend hikers and extreme athletes.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-foreground">
              <BookOpen className="size-3.5 text-primary" />
              <span>Our Mission</span>
            </div>

            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Story
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Outdoor expeditions and sports adventures are some of
                life&apos;s most thrilling experiences. Yet for most people, the
                barrier to entry has always been steep. High-grade tents,
                kayaks, carbon trekking poles, and mountaineering kits often
                cost a fortune—only to sit tucked away in a closet for most of
                the year.
              </p>
              <p>
                We founded GearUp with a simple conviction: you shouldn&apos;t
                need to buy expensive equipment just to enjoy the outdoors. By
                connecting passionate adventurers with certified local gear
                providers, we make premium, field-tested equipment accessible on
                demand.
              </p>
              <p>
                Whether you&apos;re embarking on your first summit hike or
                paddling a scenic river for the weekend, GearUp gives you the
                freedom to explore without the commitment of gear ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
