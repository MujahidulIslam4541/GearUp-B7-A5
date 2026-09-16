import { Star } from "lucide-react"
import { getGearReviews } from "@/lib/api"

export async function GearReviewsList({ gearId }: { gearId: string }) {
  const reviewsRes = await getGearReviews(gearId)
  const reviews = Array.isArray(reviewsRes.data) ? reviewsRes.data : []

  if (reviews.length === 0) {
    return (
      <div className="rounded-xl border border-border/80 bg-muted/20 p-6 text-center text-xs text-muted-foreground">
        No customer reviews submitted yet for this gear. Be the first renter to
        review!
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h3 className="font-heading text-lg font-bold text-foreground">
        Customer Feedback ({reviews.length})
      </h3>
      <div className="space-y-3">
        {reviews.map((r) => {
          const rating = (r as { rating?: number }).rating || 5
          const comment =
            (r as { comment?: string }).comment || "Great rental condition!"
          const id = (r as { id?: string }).id || Math.random().toString()

          return (
            <div
              key={id}
              className="space-y-1.5 rounded-xl border border-border bg-card p-4 shadow-xs"
            >
              <div className="flex items-center gap-1 text-xs text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-3.5 ${i < rating ? "fill-current" : "text-muted"}`}
                  />
                ))}
                <span className="ml-1 font-medium text-muted-foreground">
                  ({rating}/5)
                </span>
              </div>
              <p className="text-xs leading-relaxed text-foreground">
                {comment}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
