"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { GearItem } from "@/types/gear"
import { createOrder } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { GearBookingHeader } from "./gear-booking-header"
import { GearBookingDateInputs } from "./gear-booking-date-inputs"

interface Props {
  gear: GearItem
  isAuthenticated?: boolean
  initialRentalDate?: string
  initialReturnDate?: string
}

export function GearBookingCard({
  gear,
  isAuthenticated = false,
  initialRentalDate,
  initialReturnDate,
}: Props) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const today = new Date().toISOString().slice(0, 10)
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10)
  const [rentalDate, setRentalDate] = useState(initialRentalDate || today)
  const [returnDate, setReturnDate] = useState(initialReturnDate || tomorrow)

  const diff = new Date(returnDate).getTime() - new Date(rentalDate).getTime()
  const days = Math.max(1, Math.round(diff / 86400000))
  const total = days * Number(gear.price)

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault()
    const redirectUrl = `/gear/${gear.id}?rentalDate=${rentalDate}&returnDate=${returnDate}`
    if (!isAuthenticated) {
      toast.error("Please sign in to rent equipment.")
      return router.push(
        `/auth/login?redirect=${encodeURIComponent(redirectUrl)}`
      )
    }

    setSubmitting(true)
    const res = await createOrder({
      rentalDate,
      returnDate,
      gearItemId: gear.id,
    })
    setSubmitting(false)

    if (res.success) {
      toast.success("Equipment reserved! Proceeding to checkout...")
      router.push("/dashboard/user/bookings")
    } else {
      toast.error(res.message || "Failed to reserve gear.")
      if (res.statusCode === 401)
        router.push(`/auth/login?redirect=${encodeURIComponent(redirectUrl)}`)
    }
  }

  return (
    <div className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <GearBookingHeader price={gear.price} />
      <form onSubmit={handleBook} className="space-y-4">
        <GearBookingDateInputs
          today={today}
          rentalDate={rentalDate}
          returnDate={returnDate}
          onRentalDateChange={setRentalDate}
          onReturnDateChange={setReturnDate}
          days={days}
          total={total}
        />
        <Button
          type="submit"
          disabled={submitting || (gear.quantity ?? 0) <= 0}
          className="w-full gap-2"
        >
          {submitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Calendar className="size-4" />
          )}
          {(gear.quantity ?? 0) > 0
            ? "Reserve Equipment"
            : "Currently Unavailable"}
        </Button>
      </form>
    </div>
  )
}
