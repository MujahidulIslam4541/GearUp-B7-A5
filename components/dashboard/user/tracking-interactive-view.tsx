"use client"

import { useState } from "react"
import { BookingStatus } from "@/types/dashboard"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"
import { Button } from "@/components/ui/button"
import { OrderTrackingStepper } from "./order-tracking-stepper"
import { TrackingOrderSummary } from "./tracking-order-summary"

const STATUS_LIST: BookingStatus[] = [
  "PLACED",
  "CONFIRMED",
  "PAID",
  "PICKED_UP",
  "RETURNED",
  "CANCELLED",
]

export function TrackingInteractiveView() {
  const [currentStatus, setCurrentStatus] = useState<BookingStatus>("PICKED_UP")

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-foreground">BK-8921</span>
              <StatusBadge status={currentStatus} />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mt-1">
              Camping Tent (4-Person) · Peak Adventures
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 pt-2 sm:pt-0">
            <span className="text-xs text-muted-foreground mr-1">Demo status:</span>
            {STATUS_LIST.map((st) => (
              <Button
                key={st}
                variant={currentStatus === st ? "default" : "outline"}
                size="xs"
                onClick={() => setCurrentStatus(st)}
                className="text-[11px]"
              >
                {st.replace("_", " ")}
              </Button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border/80 bg-muted/20 p-4 sm:p-6">
          <OrderTrackingStepper currentStatus={currentStatus} />
        </div>
      </div>

      <TrackingOrderSummary />
    </div>
  )
}

