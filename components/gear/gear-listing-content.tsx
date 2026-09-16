"use client"

import { useCallback, useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { getFilteredGear } from "@/lib/gear-query"
import { GearItem } from "@/types/gear"
import { GearFilters, GearFilterSidebar } from "@/components/gear/gear-filters"
import { GearHeader, GearGrid } from "@/components/gear/gear-grid"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"

export function GearListingContent({
  initialGears,
}: {
  initialGears?: GearItem[]
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const search = searchParams.get("search") || ""
  const category = searchParams.get("category") || "all"
  const minPrice = searchParams.get("minPrice") || ""
  const maxPrice = searchParams.get("maxPrice") || ""
  const page = Math.max(1, Number(searchParams.get("page")) || 1)

  const [searchInput, setSearchInput] = useState(search)
  useEffect(() => setSearchInput(search), [search])

  const updateUrl = useCallback(
    (newParams: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString())
      Object.entries(newParams).forEach(([k, v]) => {
        if (!v || v === "all") params.delete(k)
        else params.set(k, v)
      })
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [router, pathname, searchParams]
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== search) {
        updateUrl({ search: searchInput || null, page: null })
      }
    }, 400)
    return () => clearTimeout(timer)
  }, [searchInput, search, updateUrl])

  const toggleCategory = (cat: string) => {
    if (cat === "all") {
      updateUrl({ category: null, page: null })
      return
    }
    const current =
      category === "all" ? [] : category.split(",").filter(Boolean)
    const next = current.includes(cat)
      ? current.filter((s) => s !== cat)
      : [...current, cat]
    updateUrl({ category: next.length > 0 ? next.join(",") : null, page: null })
  }

  const setPrice = (min?: string, max?: string) =>
    updateUrl({
      minPrice: min !== undefined ? min : minPrice,
      maxPrice: max !== undefined ? max : maxPrice,
      page: null,
    })

  const removeFilter = (key: string) => {
    if (key === "search") setSearchInput("")
    updateUrl({ [key]: null, page: null })
  }

  const clearFilters = () => {
    setSearchInput("")
    router.push(pathname, { scroll: false })
  }

  const setPage = (p: number) => {
    updateUrl({ page: p > 1 ? String(p) : null })
  }

  const result = getFilteredGear(
    {
      search,
      category,
      minPrice,
      maxPrice,
      page,
      limit: 8,
    },
    initialGears
  )

  return (
    <div className="space-y-8">
      <GearHeader />

      <GearFilters
        search={searchInput}
        onSearchChange={setSearchInput}
        category={category}
        onCategoryToggle={toggleCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onPriceChange={setPrice}
        onClear={clearFilters}
        activeCount={result.activeFilterCount}
      />

      <div className="flex items-start gap-8">
        <GearFilterSidebar
          category={category}
          onCategoryToggle={toggleCategory}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onPriceChange={setPrice}
          onClear={clearFilters}
          activeCount={result.activeFilterCount}
        />

        <div className="flex-1 space-y-6">
          <GearGrid
            items={result.items}
            totalItems={result.totalItems}
            search={search}
            category={category}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onRemoveFilter={removeFilter}
            onClearFilters={clearFilters}
          />

          {result.totalPages > 1 && (
            <Pagination className="pt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setPage(Math.max(1, result.currentPage - 1))}
                    className={
                      result.currentPage <= 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
                {Array.from({ length: result.totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <PaginationItem key={p}>
                      <PaginationLink
                        isActive={p === result.currentPage}
                        onClick={() => setPage(p)}
                        className="cursor-pointer"
                      >
                        {p}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setPage(
                        Math.min(result.totalPages, result.currentPage + 1)
                      )
                    }
                    className={
                      result.currentPage >= result.totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  )
}
