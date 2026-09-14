"use client"

import { Search, X, RotateCcw, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { GEAR_CATEGORIES } from "@/lib/constants/gear"
import * as S from "@/components/animate-ui/components/radix/sheet"

export interface GearFilterProps {
  search: string
  category: string
  minPrice: string
  maxPrice: string
  activeCount: number
  onSearchChange: (v: string) => void
  onCategoryToggle: (slug: string) => void
  onPriceChange: (min?: string, max?: string) => void
  onClear: () => void
}

function FilterFields({
  category,
  onCategoryToggle,
  minPrice,
  maxPrice,
  onPriceChange,
  onClear,
  activeCount,
}: Omit<GearFilterProps, "search" | "onSearchChange">) {
  const selected = category === "all" ? [] : category.split(",").filter(Boolean)

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <h3 className="text-sm font-bold text-foreground">Filters</h3>
        {activeCount > 0 && (
          <Button
            variant="ghost"
            size="xs"
            onClick={onClear}
            className="gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="size-3" /> Reset
          </Button>
        )}
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Category
        </p>
        <div className="space-y-2">
          {GEAR_CATEGORIES.map((cat) => {
            const checked =
              cat === "all" ? selected.length === 0 : selected.includes(cat)
            return (
              <label
                key={cat}
                className="flex cursor-pointer items-center justify-between rounded-md px-1.5 py-1 text-xs transition-colors hover:bg-muted/60"
              >
                <div className="flex items-center gap-2.5">
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => onCategoryToggle(cat)}
                  />
                  <span
                    className={
                      checked
                        ? "font-semibold text-primary capitalize"
                        : "text-muted-foreground capitalize"
                    }
                  >
                    {cat}
                  </span>
                </div>
              </label>
            )
          })}
        </div>
      </div>

      <div className="space-y-3 border-t border-border pt-4">
        <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Price Range (৳/day)
        </p>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => onPriceChange(e.target.value, undefined)}
            className="h-8 text-xs"
          />
          <span className="text-xs text-muted-foreground">-</span>
          <Input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => onPriceChange(undefined, e.target.value)}
            className="h-8 text-xs"
          />
        </div>
      </div>
    </div>
  )
}

export function GearFilters(props: GearFilterProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-1">
        <Search className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={props.search}
          onChange={(e) => props.onSearchChange(e.target.value)}
          placeholder="Search gear, brand, camping, hiking..."
          className="h-11 rounded-xl bg-card pr-9 pl-10 text-sm shadow-xs"
        />
        {props.search && (
          <button
            onClick={() => props.onSearchChange("")}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      <div className="lg:hidden">
        <S.Sheet>
          <S.SheetTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-11 gap-2 rounded-xl text-xs font-medium shadow-xs"
            >
              <SlidersHorizontal className="size-3.5 text-primary" />
              <span>Filter</span>
              {props.activeCount > 0 && (
                <span className="flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {props.activeCount}
                </span>
              )}
            </Button>
          </S.SheetTrigger>
          <S.SheetContent side="left" className="w-75 p-6">
            <S.SheetHeader className="p-0 text-left">
              <S.SheetTitle className="font-heading text-lg font-bold">
                Filters
              </S.SheetTitle>
            </S.SheetHeader>
            <div className="mt-5 overflow-y-auto">
              <FilterFields {...props} />
            </div>
          </S.SheetContent>
        </S.Sheet>
      </div>
    </div>
  )
}

export function GearFilterSidebar(
  props: Omit<GearFilterProps, "search" | "onSearchChange">
) {
  return (
    <aside className="sticky top-20 hidden max-h-[calc(100vh-6rem)] w-64 shrink-0 self-start overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-xs lg:block">
      <FilterFields {...props} />
    </aside>
  )
}
