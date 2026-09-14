import { Suspense } from "react"
import { GearListingContent } from "@/components/gear/gear-listing-content"
import { GearSkeletonGrid } from "@/components/gear/gear-skeleton-grid"

export const metadata = {
  title: "Explore Rental Gear | GearUp",
  description:
    "Browse, search, and rent high-quality outdoor and sports gear across Bangladesh.",
}

export default function GearPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<GearSkeletonGrid count={8} />}>
          <GearListingContent />
        </Suspense>
      </div>
    </div>
  )
}
