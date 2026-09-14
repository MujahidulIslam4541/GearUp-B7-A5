import { TrendingUp } from "lucide-react"
import { ABOUT_STATS } from "@/lib/constants/about-benefits"

export function AboutStats() {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-foreground">
            <TrendingUp className="size-3.5 text-primary" />
            <span>Platform Growth</span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Adventurers Nationwide
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Real impact from our growing community of outdoor equipment renters
            and verified local providers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {ABOUT_STATS.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:p-8"
            >
              <span className="font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                {stat.value}
              </span>
              <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
