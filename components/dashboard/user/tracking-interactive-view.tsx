"use client"

import { useState } from "react"
import Link from "next/link"
import { ApiOrder } from "@/types/api"
import { BookingStatus } from "@/types/dashboard"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"
import { EmptyState } from "@/components/dashboard/shared/empty-state"
import { Button } from "@/components/ui/button"
import { OrderTrackingStepper } from "./order-tracking-stepper"

export function TrackingInteractiveView({ orders }: { orders: ApiOrder[] }) {
  const [selectedId, setSelectedId] = useState<string>(orders[0]?.id || "")

  if (orders.length === 0) {
    return (
      <EmptyState
        title="No active tracking orders"
        description="Book gear from the marketplace to track delivery and pickup milestones."
        action={
          <Button render={<Link href="/gear" />} size="sm">
            Rent Gear
          </Button>
        }
      />
    )
  }

  const selectedOrder = orders.find((o) => o.id === selectedId) || orders[0]
  const status = (selectedOrder.status?.toUpperCase() ||
    "PLACED") as BookingStatus

  return (
    <div className="space-y-6">
      <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-xs">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-foreground">
                {selectedOrder.id.slice(0, 8)}...
              </span>
              <StatusBadge status={status} />
            </div>
            <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
              {selectedOrder.gearItem?.name || "Equipment Rental"} ·{" "}
              {selectedOrder.gearItem?.brand || "GearUp"}
            </h3>
            <p className="text-xs text-muted-foreground">
              Period: {selectedOrder.rentalDate.slice(0, 10)} to{" "}
              {selectedOrder.returnDate.slice(0, 10)} · Total: ৳
              {selectedOrder.totalAmount}
            </p>
          </div>

          {orders.length > 1 && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                Select Order:
              </span>
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="h-8 rounded-md border border-input bg-background px-2 text-xs font-medium"
              >
                {orders.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.gearItem?.name || o.id.slice(0, 8)} ({o.status})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="rounded-xl border border-border/80 bg-muted/20 p-4 sm:p-6">
          <OrderTrackingStepper currentStatus={status} />
        </div>
      </div>
    </div>
  )
}
