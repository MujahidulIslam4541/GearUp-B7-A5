import Link from "next/link"
import { AlertCircle, ArrowLeft, RefreshCw, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Payment Cancelled | GearUp",
  description: "Your equipment rental payment was cancelled.",
}

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg border-border text-center shadow-lg">
        <CardContent className="space-y-6 pt-8 pb-8">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <AlertCircle className="size-10" />
          </div>

          <div className="space-y-2">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Payment Cancelled
            </h1>
            <p className="text-sm text-muted-foreground">
              Your transaction was cancelled and no charges were made. Your
              reservation is pending payment.
            </p>
          </div>

          <div className="rounded-xl border border-border/60 bg-muted/40 p-3 text-xs text-muted-foreground">
            You can complete your rental checkout at any time from your bookings
            dashboard.
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              render={<Link href="/dashboard/user/bookings" />}
              className="gap-2"
            >
              <RefreshCw className="size-4" />
              Return to Bookings
            </Button>
            <Button
              render={<Link href="/gear" />}
              variant="outline"
              className="gap-2"
            >
              <Compass className="size-4" />
              Browse Gear Catalog
            </Button>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-1 size-3" /> Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
