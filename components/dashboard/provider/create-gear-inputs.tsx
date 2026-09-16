import { ApiCategory } from "@/types/api"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CreateGearInputs({
  categories,
}: {
  categories: ApiCategory[]
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="space-y-1.5 sm:col-span-2">
        <Label htmlFor="name">Gear Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="e.g. Sony A7 IV Camera"
          required
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="categoryId">Category</Label>
        <select
          id="categoryId"
          name="categoryId"
          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs outline-none"
          required
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="brand">Brand</Label>
        <Input
          id="brand"
          name="brand"
          placeholder="e.g. Sony, Nikon"
          required
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="price">Daily Rental Price (৳)</Label>
        <Input
          id="price"
          name="price"
          type="number"
          placeholder="2500"
          min="1"
          required
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="quantity">Available Quantity</Label>
        <Input
          id="quantity"
          name="quantity"
          type="number"
          placeholder="3"
          min="1"
          defaultValue="1"
          required
        />
      </div>
      <div className="space-y-1.5 sm:col-span-2">
        <Label htmlFor="imageUrl">Product Image URL</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          placeholder="https://images.unsplash.com/..."
          required
        />
      </div>
      <div className="space-y-1.5 sm:col-span-2">
        <Label htmlFor="description">Detailed Description</Label>
        <textarea
          id="description"
          name="description"
          rows={3}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none"
          placeholder="Describe equipment condition and deposit policy..."
          required
        />
      </div>
    </div>
  )
}
