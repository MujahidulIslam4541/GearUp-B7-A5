import Link from "next/link"
import { ArrowRight, Compass } from "lucide-react"
import { WHAT_WE_OFFER } from "@/lib/constants/about"

export function WhatWeOffer() {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-foreground">
            <Compass className="size-3.5 text-primary" />
            <span>Curated Inventory</span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need for Your Next Adventure
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            From alpine peaks to tranquil waterways, discover gear built to
            perform in the most demanding conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_WE_OFFER.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <span>Browse Category</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
