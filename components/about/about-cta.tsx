import Link from "next/link"
import { ArrowRight, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutCta() {
  return (
    <section className="border-b border-border bg-muted/20 py-16 sm:py-24">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-card via-card to-muted/40 p-8 shadow-xl sm:p-12 lg:p-16">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Your Next Adventure Starts Here.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Find the right gear, choose your dates, and get ready for your
              next adventure. Join thousands of outdoor enthusiasts gearing up
              today.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                render={<Link href="/gear" />}
                size="lg"
                className="w-full gap-2 font-medium sm:w-auto"
              >
                <span>Explore Gear</span>
                <ArrowRight className="size-4" />
              </Button>
              <Button
                render={<Link href="/auth/register" />}
                size="lg"
                variant="outline"
                className="w-full gap-2 font-medium sm:w-auto"
              >
                <UserPlus className="size-4" />
                <span>Create Account</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
