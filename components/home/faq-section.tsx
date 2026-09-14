import { HelpCircle } from "lucide-react"
import { FAQ_ITEMS } from "@/lib/constants/faq"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-foreground">
            <HelpCircle className="size-3.5 text-primary" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Everything you need to know about renting gear, booking protection,
            and listing equipment on GearUp.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8">
          <Accordion
            defaultValue={["faq-1"]}
            multiple
            className="divide-y divide-border"
          >
            {FAQ_ITEMS.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none py-1"
              >
                <AccordionTrigger className="text-base font-semibold text-foreground transition-colors hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
