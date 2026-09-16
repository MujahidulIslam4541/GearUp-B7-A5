"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { createGear } from "@/lib/api"
import { ApiCategory } from "@/types/api"
import { Button } from "@/components/ui/button"
import { CreateGearInputs } from "./create-gear-inputs"

export function CreateGearForm({ categories }: { categories: ApiCategory[] }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)

    const res = await createGear({
      name: String(form.get("name")),
      description: String(form.get("description")),
      price: Number(form.get("price")),
      imageUrl: String(form.get("imageUrl")),
      brand: String(form.get("brand")),
      quantity: Number(form.get("quantity")),
      categoryId: String(form.get("categoryId")),
    })

    setLoading(false)
    if (res.success) {
      toast.success("Gear listed successfully!")
      router.push("/dashboard/provider/gear")
      router.refresh()
    } else {
      toast.error(res.message || "Failed to list gear")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-xs"
    >
      <CreateGearInputs categories={categories} />
      <div className="flex justify-end gap-3 border-t border-border pt-4">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Publishing..." : "Publish Gear"}
        </Button>
      </div>
    </form>
  )
}
