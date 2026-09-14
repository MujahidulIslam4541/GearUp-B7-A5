import { ALL_GEAR } from "@/lib/constants/gear"
import { MOCK_BOOKINGS } from "@/lib/constants/dashboard-mock-data"
import { GearCard } from "@/components/gear/gear-card"
import { StatusBadge } from "@/components/dashboard/shared/status-badge"

export function UserBookingsList() {
  const bookingsWithGear = MOCK_BOOKINGS.map((booking) => {
    const gear = ALL_GEAR.find((g) => g.id === booking.gearId) ?? ALL_GEAR[0]
    return { booking, gear }
  })

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {bookingsWithGear.map(({ booking, gear }) => (
        <div key={booking.id} className="relative flex flex-col gap-2">
          <div className="flex items-center justify-between px-1 text-xs">
            <span className="font-mono font-medium text-muted-foreground">{booking.id}</span>
            <StatusBadge status={booking.status} />
          </div>
          <GearCard gear={gear} />
          <div className="rounded-xl border border-border bg-muted/30 p-3 text-xs text-muted-foreground">
            <div className="flex justify-between font-medium text-foreground">
              <span>Duration:</span>
              <span>{booking.days} days ({booking.startDate} - {booking.endDate})</span>
            </div>
            <div className="mt-1 flex justify-between">
              <span>Total Paid:</span>
              <span className="font-bold text-foreground">৳ {booking.totalAmount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

