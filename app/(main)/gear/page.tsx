import { Suspense } from "react"
import { getGears } from "@/lib/api"
import { GearListingContent } from "@/components/gear/gear-listing-content"
import { GearSkeletonGrid } from "@/components/gear/gear-skeleton-grid"

export const metadata = {
  title: "Explore Rental Gear | GearUp",
  description:
    "Browse, search, and rent high-quality outdoor and sports gear across Bangladesh.",
}

export default async function GearPage() {
  const gearsRes = await getGears()
  const gears = gearsRes.data || []

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<GearSkeletonGrid count={8} />}>
          <GearListingContent initialGears={gears} />
        </Suspense>
      </div>
    </div>
  )
}
