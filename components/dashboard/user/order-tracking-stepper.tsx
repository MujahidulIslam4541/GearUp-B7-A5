import { Check, Clock, AlertTriangle } from "lucide-react"
import { BookingStatus } from "@/types/dashboard"
import { cn } from "@/lib/utils"

const STEPS: { status: BookingStatus; title: string; desc: string }[] = [
  { status: "PLACED", title: "Placed", desc: "Reservation submitted" },
  { status: "CONFIRMED", title: "Confirmed", desc: "Approved by provider" },
  { status: "PAID", title: "Paid", desc: "Payment processed" },
  { status: "PICKED_UP", title: "Picked Up", desc: "Gear handed over" },
  { status: "RETURNED", title: "Returned", desc: "Inspected & completed" },
]

export function OrderTrackingStepper({ currentStatus }: { currentStatus: BookingStatus }) {
  if (currentStatus === "CANCELLED") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-rose-200 bg-rose-500/10 p-4 text-rose-600 dark:border-rose-900 dark:text-rose-400">
        <AlertTriangle className="size-5 shrink-0" />
        <p className="text-sm font-medium">
          This rental reservation was cancelled. Deposit has been refunded per cancellation policy.
        </p>
      </div>
    )
  }

  const currentIndex = STEPS.findIndex((s) => s.status === currentStatus)

  return (
    <div className="relative flex flex-col gap-6 py-2 sm:flex-row sm:justify-between">
      {STEPS.map((step, idx) => {
        const isDone = idx <= currentIndex
        const isCurrent = idx === currentIndex

        return (
          <div key={step.status} className="flex flex-1 items-start gap-3 sm:flex-col sm:items-center sm:text-center">
            <div
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all",
                isDone
                  ? isCurrent
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-emerald-600 text-white"
                  : "border border-border bg-muted text-muted-foreground"
              )}
            >
              {isDone && !isCurrent ? <Check className="size-4" /> : isCurrent ? <Clock className="size-4" /> : idx + 1}
            </div>
            <div>
              <p className={cn("text-xs font-semibold", isDone ? "text-foreground" : "text-muted-foreground")}>
                {step.title}
              </p>
              <p className="text-[11px] text-muted-foreground">{step.desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

