"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GEAR_CATEGORIES } from "@/lib/constants/gear"

export function CreateGearForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success("Gear listed successfully!", {
        description: "Your item is now live and available for customer reservations.",
      })
      router.push("/dashboard/provider/gear")
    }, 600)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-xs">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="name">Gear Name</Label>
          <Input id="name" placeholder="e.g. Deuter Aircontact Core 65+10 Backpack" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="category">Category</Label>
          <select id="category" defaultValue="camping" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs outline-none">
            {GEAR_CATEGORIES.filter((c) => c !== "all").map((cat) => (
              <option key={cat} value={cat} className="capitalize">{cat}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="brand">Brand</Label>
          <Input id="brand" placeholder="e.g. Coleman, Trek" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="price">Daily Rental Price (৳)</Label>
          <Input id="price" type="number" placeholder="1500" min="50" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="quantity">Available Quantity</Label>
          <Input id="quantity" type="number" placeholder="5" min="1" required />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="imageUrl">Product Image URL</Label>
          <Input id="imageUrl" placeholder="https://images.unsplash.com/..." required />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="description">Detailed Description</Label>
          <textarea id="description" rows={3} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none" placeholder="Describe equipment condition and deposit policy..." required />
        </div>
      </div>
      <div className="flex justify-end gap-3 border-t border-border pt-4">
        <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
        <Button type="submit" disabled={loading}>{loading ? "Publishing..." : "Publish Gear"}</Button>
      </div>
    </form>
  )
}

