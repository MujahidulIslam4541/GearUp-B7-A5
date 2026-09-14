import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroStats } from "@/components/home/hero-stats"
import { HeroVisual } from "@/components/home/hero-visual"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-linear-to-b from-background via-muted/20 to-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-medium text-foreground">
              <Sparkles className="size-3.5 text-primary" />
              <span>Next-Gen Sports & Outdoor Equipment Rentals</span>
            </div>

            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Rent Premium Gear. <br />
              <span className="text-primary">Conquer Every Trail.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Skip costly equipment purchases. Access top-tier camping, cycling,
              water sports, and climbing gear on demand from verified local
              providers at transparent daily rates.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                render={<Link href="/gear" />}
                size="lg"
                className="gap-2 font-medium shadow-md transition-transform hover:scale-105"
              >
                <span>Explore Gear</span>
                <ArrowRight className="size-4" />
              </Button>
              <Button
                render={<Link href="/about" />}
                variant="outline"
                size="lg"
                className="font-medium"
              >
                How It Works
              </Button>
            </div>

            <HeroStats />
          </div>

          <div className="relative lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
