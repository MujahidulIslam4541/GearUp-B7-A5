import { CheckCircle2 } from "lucide-react"
import { HOW_IT_WORKS_STEPS } from "@/lib/constants/about"

export function HowItWorks() {
  return (
    <section className="border-b border-border bg-muted/20 py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-foreground">
            <CheckCircle2 className="size-3.5 text-primary" />
            <span>Seamless Process</span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How GearUp Works
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Rent top-tier outdoor equipment in four straightforward steps and
            hit the trails with complete confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-heading text-2xl font-black tracking-tight text-primary">
                      {step.step}
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 h-0.5 w-8 rounded-full bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
