"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { createReview } from "@/lib/api"

interface ReviewFormProps {
  orderId: string
  onClose: () => void
}

export function UserBookingReviewForm({ orderId, onClose }: ReviewFormProps) {
  const [reviewing, setReviewing] = useState(false)
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setReviewing(true)
    const res = await createReview(orderId, { rating, comment })
    setReviewing(false)
    if (res.success) {
      toast.success("Review submitted successfully!")
      onClose()
    } else {
      toast.error(res.message || "Failed to submit review.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2 pt-1">
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full rounded-md border border-input bg-background p-1.5 text-xs shadow-xs outline-none"
      >
        <option value={5}>⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
        <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
        <option value={3}>⭐⭐⭐ (3/5 Average)</option>
        <option value={2}>⭐⭐ (2/5 Poor)</option>
        <option value={1}>⭐ (1/5 Terrible)</option>
      </select>
      <input
        type="text"
        placeholder="Share your rental experience..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        className="w-full rounded-md border border-input bg-background px-2.5 py-1.5 text-xs shadow-xs outline-none"
      />
      <div className="flex gap-2">
        <Button type="submit" disabled={reviewing} size="xs" className="flex-1">
          {reviewing ? "Submitting..." : "Submit Review"}
        </Button>
        <Button type="button" variant="ghost" size="xs" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
