import { CheckCircle2 } from "lucide-react"
import { ABOUT_BENEFITS } from "@/lib/constants/about-benefits"

export function AboutWhyChoose() {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-foreground">
            <CheckCircle2 className="size-3.5 text-primary" />
            <span>The Smart Way to Explore</span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose GearUp?
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Skip the heavy retail price tags and cluttered closets. Rent
            adventure-ready gear on your schedule with complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT_BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon
            const isLast = index === ABOUT_BENEFITS.length - 1
            return (
              <div
                key={benefit.id}
                className={`group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md ${
                  isLast ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
