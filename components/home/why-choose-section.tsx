import { Sparkles } from "lucide-react"
import { WHY_CHOOSE_ITEMS } from "@/lib/constants/why-choose-us"
import { WhyChooseCard } from "@/components/home/why-choose-card"

export function WhyChooseSection() {
  return (
    <section className="border-b border-border bg-muted/20 py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-foreground">
            <Sparkles className="size-3.5 text-primary" />
            <span>Built for Adventurers</span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose GearUp
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Everything you need for seamless sports and outdoor equipment
            rentals, backed by trust, quality, and complete flexibility.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <WhyChooseCard
              key={item.id}
              item={item}
              isLast={index === WHY_CHOOSE_ITEMS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

