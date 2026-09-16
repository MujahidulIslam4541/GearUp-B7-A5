"use client"

import { useState } from "react"
import { CreditCard, Star, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { ApiOrder, ApiPayment } from "@/types/api"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"
import { Button } from "@/components/ui/button"
import { createPaymentSession } from "@/lib/api"
import { UserBookingDetails } from "./user-booking-details"
import { UserBookingReviewForm } from "./user-booking-review-form"

export function UserBookingItem({
  order,
  payment,
}: {
  order: ApiOrder
  payment?: ApiPayment
}) {
  const [paying, setPaying] = useState(false)
  const [showReviewBox, setShowReviewBox] = useState(false)
  const isPaid = payment?.status === "COMPLETED"

  const handlePay = async () => {
    setPaying(true)
    const res = await createPaymentSession(order.id)
    setPaying(false)
    if (res.success && res.data?.checkoutUrl) {
      window.location.href = res.data.checkoutUrl
    } else {
      toast.error(res.message || "Failed to initialize payment session.")
    }
  }

  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-xs transition-all hover:border-primary/30">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-muted-foreground">
            {order.id.slice(0, 8)}
          </span>
          <StatusBadge status={order.status} />
        </div>

        <UserBookingDetails order={order} />
      </div>

      <div className="mt-4 space-y-2 border-t border-border pt-3">
        {!isPaid && order.status !== "CANCELLED" && (
          <Button
            onClick={handlePay}
            disabled={paying}
            size="sm"
            className="w-full gap-1.5"
          >
            {paying ? (
              <Loader2 className="size-3.5 animate-spin" />
            ) : (
              <CreditCard className="size-3.5" />
            )}
            Pay Now (Stripe)
          </Button>
        )}

        {order.status === "RETURNED" && !showReviewBox && (
          <Button
            onClick={() => setShowReviewBox(true)}
            variant="outline"
            size="sm"
            className="w-full gap-1.5"
          >
            <Star className="size-3.5 text-amber-500" /> Leave Review
          </Button>
        )}

        {showReviewBox && (
          <UserBookingReviewForm
            orderId={order.id}
            onClose={() => setShowReviewBox(false)}
          />
        )}
      </div>
    </div>
  )
}
