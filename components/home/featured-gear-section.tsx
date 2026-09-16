import Link from "next/link"
import { ArrowRight, Flame } from "lucide-react"
import { getGears } from "@/lib/api"
import { FEATURED_GEAR } from "@/lib/constants/gear"
import { GearCard } from "@/components/gear/gear-card"
import { Button } from "@/components/ui/button"

export async function FeaturedGearSection() {
  const gearsRes = await getGears()
  const items =
    gearsRes.data && gearsRes.data.length > 0
      ? gearsRes.data.slice(0, 8)
      : FEATURED_GEAR

  return (
    <section className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-foreground">
            <Flame className="size-3.5 text-primary" />
            <span>Top Picks for the Season</span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Rental Gear
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Hand-selected, thoroughly inspected outdoor and sports equipment
            available right now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <GearCard key={item.id} gear={item} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            render={<Link href="/gear" />}
            size="lg"
            variant="outline"
            className="gap-2 border-border px-8 font-medium shadow-xs transition-colors hover:bg-accent"
          >
            <span>See All Gear</span>
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
