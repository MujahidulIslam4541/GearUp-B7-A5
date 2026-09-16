import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getGearById } from "@/lib/api"
import { getServerSession } from "@/lib/auth-server"
import { Button } from "@/components/ui/button"
import { GearBookingCard } from "@/components/gear/gear-booking-card"
import { GearReviewsList } from "@/components/gear/gear-reviews-list"
import { GearDetailsOverview } from "@/components/gear/gear-details-overview"

export const dynamic = "force-dynamic"

export default async function GearDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ rentalDate?: string; returnDate?: string }>
}) {
  const { id } = await params
  const query = await searchParams
  const gearRes = await getGearById(id)
  const gear = gearRes.data

  if (!gear) notFound()

  const session = await getServerSession()
  const isAuthenticated = Boolean(session)

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        <Button
          render={<Link href="/gear" />}
          variant="ghost"
          size="sm"
          className="-ml-2 gap-1.5 text-muted-foreground"
        >
          <ArrowLeft className="size-4" /> Back to Equipment Catalog
        </Button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <GearDetailsOverview gear={gear} />
            <GearReviewsList gearId={gear.id} />
          </div>

          <div>
            <div className="sticky top-24">
              <GearBookingCard
                gear={gear}
                isAuthenticated={isAuthenticated}
                initialRentalDate={query.rentalDate}
                initialReturnDate={query.returnDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
