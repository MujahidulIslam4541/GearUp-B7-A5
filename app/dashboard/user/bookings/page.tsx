import Link from "next/link"
import { Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DashboardSection } from "@/components/dashboard/shared/dashboard-section"
import { UserBookingsList } from "@/components/dashboard/user/user-bookings-list"

export const metadata = {
  title: "My Bookings | GearUp",
  description: "View and manage your current and previous outdoor equipment rentals.",
}

export default function UserBookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            My Bookings
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            All your reserved and rented equipment with real-time status updates.
          </p>
        </div>

        <Button render={<Link href="/gear" />} size="sm" className="gap-1.5 self-start sm:self-auto">
          <Compass className="size-4" />
          Rent More Gear
        </Button>
      </div>

      <DashboardSection
        title="Active & Past Rentals"
        description="Gear rented from verified local providers."
      >
        <UserBookingsList />
      </DashboardSection>
    </div>
  )
}

