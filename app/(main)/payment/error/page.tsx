import Link from "next/link"
import { XCircle, ArrowLeft, RefreshCw, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Payment Error | GearUp",
  description: "An error occurred during the checkout process.",
}

export default async function PaymentErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>
}) {
  const { message } = await searchParams

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg border-border text-center shadow-lg">
        <CardContent className="space-y-6 pt-8 pb-8">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <XCircle className="size-10" />
          </div>

          <div className="space-y-2">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Payment Failed
            </h1>
            <p className="text-sm text-muted-foreground">
              {message ||
                "We were unable to process your payment. Please try again or use another payment method."}
            </p>
          </div>

          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-3 text-xs text-destructive">
            No money was deducted from your account. If you believe this is an error, please contact support.
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button render={<Link href="/dashboard/user/bookings" />} className="gap-2">
              <RefreshCw className="size-4" />
              Try Again from Bookings
            </Button>
            <Button render={<Link href="/about" />} variant="outline" className="gap-2">
              <HelpCircle className="size-4" />
              Get Support
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

