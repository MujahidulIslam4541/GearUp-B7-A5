import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface GearBookingDateInputsProps {
  today: string
  rentalDate: string
  returnDate: string
  onRentalDateChange: (val: string) => void
  onReturnDateChange: (val: string) => void
  days: number
  total: number
}

export function GearBookingDateInputs({
  today,
  rentalDate,
  returnDate,
  onRentalDateChange,
  onReturnDateChange,
  days,
  total,
}: GearBookingDateInputsProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="start" className="text-xs">
            Pickup Date
          </Label>
          <Input
            id="start"
            type="date"
            min={today}
            value={rentalDate}
            onChange={(e) => onRentalDateChange(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="end" className="text-xs">
            Return Date
          </Label>
          <Input
            id="end"
            type="date"
            min={rentalDate}
            value={returnDate}
            onChange={(e) => onReturnDateChange(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-1 rounded-xl bg-muted/40 p-3 text-xs">
        <div className="flex justify-between text-muted-foreground">
          <span>Duration:</span>
          <span className="font-semibold text-foreground">
            {days} {days === 1 ? "day" : "days"}
          </span>
        </div>
        <div className="flex justify-between border-t border-border pt-1 text-base font-bold text-foreground">
          <span>Total Estimated:</span>
          <span>৳ {total}</span>
        </div>
      </div>
    </>
  )
}
