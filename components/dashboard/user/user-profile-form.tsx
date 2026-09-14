"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function UserProfileForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success("Profile saved successfully", {
        description: "Your contact and rental preferences have been updated.",
      })
    }, 600)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-xs">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" defaultValue="Alex Morgan" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" defaultValue="alex.morgan@gearup.io" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" defaultValue="+880 1812-987654" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City / Region</Label>
          <Input id="city" defaultValue="Dhaka, Bangladesh" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="address">Delivery / Pickup Address</Label>
          <Input id="address" defaultValue="House 42, Road 9/A, Dhanmondi, Dhaka" />
        </div>
      </div>

      <div className="flex justify-end border-t border-border pt-4">
        <Button type="submit" disabled={loading} className="min-w-32">
          {loading ? "Saving Changes..." : "Save Profile"}
        </Button>
      </div>
    </form>
  )
}

