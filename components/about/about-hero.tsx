import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Compass, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/30 to-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-foreground">
              <Sparkles className="size-3.5 text-primary" />
              <span>About GearUp</span>
            </div>

            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Gear Up. <br />
              <span className="text-primary">Get Outside.</span> <br />
              Go Further.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              GearUp makes it easier for adventurers and athletes to rent
              premium sports and outdoor equipment without the heavy cost of
              purchasing, maintaining, and storing gear.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                render={<Link href="/gear" />}
                size="lg"
                className="gap-2 font-medium"
              >
                <span>Explore Gear</span>
                <ArrowRight className="size-4" />
              </Button>
              <Button
                render={<Link href="/auth/register" />}
                size="lg"
                variant="outline"
                className="gap-2 font-medium"
              >
                <Compass className="size-4" />
                <span>Get Started</span>
              </Button>
            </div>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-border shadow-2xl sm:aspect-16/10 lg:aspect-4/3">
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
              alt="Alpine outdoor mountain exploration"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-border/40 bg-background/85 p-4 shadow-lg backdrop-blur-md">
              <p className="text-sm font-semibold text-foreground">
                Adventure Unlocked
              </p>
              <p className="text-xs text-muted-foreground">
                Connecting adventurers with top-tier gear across Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
