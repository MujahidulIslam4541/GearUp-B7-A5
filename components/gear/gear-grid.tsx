import { Sparkles, X, PackageOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GearCard } from "@/components/gear/gear-card"
import { GearItem } from "@/types/gear"

interface Props {
  items: GearItem[]
  totalItems: number
  search?: string
  category?: string
  minPrice?: string
  maxPrice?: string
  onRemoveFilter?: (key: string) => void
  onClearFilters?: () => void
}

export function GearHeader() {
  return (
    <div className="space-y-3 text-center">
      <Badge
        variant="outline"
        className="gap-1.5 border-primary/30 bg-primary/5 text-primary"
      >
        <Sparkles className="size-3" />
        Explore Equipment
      </Badge>
      <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        Rent Premium Outdoor Gear
      </h1>
      <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
        Find, compare, and reserve authentic outdoor and sports gear from
        verified local providers.
      </p>
    </div>
  )
}

export function GearGrid({
  items,
  totalItems,
  search,
  category,
  minPrice,
  maxPrice,
  onRemoveFilter,
  onClearFilters,
}: Props) {
  const hasFilters = Boolean(
    search || (category && category !== "all") || minPrice || maxPrice
  )

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
        <p className="text-sm font-medium text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">{totalItems}</span>{" "}
          {totalItems === 1 ? "gear item" : "gear items"}
        </p>

        {hasFilters && onClearFilters && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {search && (
              <Badge variant="secondary" className="gap-1 pr-1 text-xs">
                Search: &quot;{search}&quot;
                <X
                  className="size-3 cursor-pointer hover:text-foreground"
                  onClick={() => onRemoveFilter?.("search")}
                />
              </Badge>
            )}
            {category && category !== "all" && (
              <Badge
                variant="secondary"
                className="gap-1 pr-1 text-xs capitalize"
              >
                Category: {category}
                <X
                  className="size-3 cursor-pointer hover:text-foreground"
                  onClick={() => onRemoveFilter?.("category")}
                />
              </Badge>
            )}
            {(minPrice || maxPrice) && (
              <Badge variant="secondary" className="gap-1 pr-1 text-xs">
                ৳{minPrice || "0"} - ৳{maxPrice || "Any"}
                <X
                  className="size-3 cursor-pointer hover:text-foreground"
                  onClick={() => {
                    onRemoveFilter?.("minPrice")
                    onRemoveFilter?.("maxPrice")
                  }}
                />
              </Badge>
            )}
            <Button
              variant="ghost"
              size="xs"
              onClick={onClearFilters}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Clear all
            </Button>
          </div>
        )}
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-muted/60 text-muted-foreground">
            <PackageOpen className="size-7" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-bold">No gear found</h3>
          <p className="mt-1 max-w-sm text-xs text-muted-foreground">
            Try adjusting your search terms, categories, or price filters to
            find what you need.
          </p>
          {onClearFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              className="mt-5 rounded-xl text-xs"
            >
              Clear all filters
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((gear) => (
            <GearCard key={gear.id} gear={gear} />
          ))}
        </div>
      )}
    </div>
  )
}
