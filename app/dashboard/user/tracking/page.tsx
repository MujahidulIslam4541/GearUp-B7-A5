import { TrackingInteractiveView } from "@/components/dashboard/user/tracking-interactive-view"

export const metadata = {
  title: "Booking Tracking | GearUp",
  description: "Live tracking milestones for your reserved and rented gear.",
}

export default function UserTrackingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Booking Tracking
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Track pickup schedule, security deposit releases, and return status in real-time.
        </p>
      </div>

      <TrackingInteractiveView />
    </div>
  )
}

