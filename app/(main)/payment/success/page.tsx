import Link from "next/link"
import { CheckCircle2, ArrowRight, Package, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Payment Successful | GearUp",
  description: "Your equipment rental reservation payment has been confirmed.",
}

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg border-border text-center shadow-lg">
        <CardContent className="space-y-6 pt-8 pb-8">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="size-10" />
          </div>

          <div className="space-y-2">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Payment Successful!
            </h1>
            <p className="text-sm text-muted-foreground">
              Thank you for your payment. Your gear rental has been confirmed and the equipment provider has been notified.
            </p>
          </div>

          {session_id && (
            <div className="rounded-xl border border-border/60 bg-muted/40 p-3 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Stripe Session ID:</span>{" "}
              <code className="break-all font-mono text-[11px] text-foreground">{session_id}</code>
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button render={<Link href="/dashboard/user/bookings" />} className="gap-2">
              <Package className="size-4" />
              View My Bookings
            </Button>
            <Button render={<Link href="/gear" />} variant="outline" className="gap-2">
              <Compass className="size-4" />
              Explore More Gear
            </Button>
          </div>

          <div className="pt-2">
            <Link
              href="/dashboard/user/tracking"
              className="inline-flex items-center text-xs font-medium text-primary hover:underline"
            >
              Track your reservation milestones <ArrowRight className="ml-1 size-3" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

