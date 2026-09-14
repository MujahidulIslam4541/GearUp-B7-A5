"use client"

import { useGearFilters } from "@/hooks/use-gear-filters"
import { getFilteredGear } from "@/lib/gear-query"
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

export function GearListingContent() {
  const filters = useGearFilters()
  const result = getFilteredGear({
    search: filters.search,
    category: filters.category,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    page: filters.page,
    limit: 8,
  })

  return (
    <div className="space-y-8">
      <GearHeader />

      <GearFilters
        search={filters.searchInput}
        onSearchChange={filters.setSearchInput}
        category={filters.category}
        onCategoryToggle={filters.toggleCategory}
        minPrice={filters.minPrice}
        maxPrice={filters.maxPrice}
        onPriceChange={filters.setPrice}
        onClear={filters.clearFilters}
        activeCount={result.activeFilterCount}
      />

      <div className="flex items-start gap-8">
        <GearFilterSidebar
          category={filters.category}
          onCategoryToggle={filters.toggleCategory}
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          onPriceChange={filters.setPrice}
          onClear={filters.clearFilters}
          activeCount={result.activeFilterCount}
        />

        <div className="flex-1 space-y-6">
          <GearGrid
            items={result.items}
            totalItems={result.totalItems}
            search={filters.search}
            category={filters.category}
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice}
            onRemoveFilter={filters.removeFilter}
            onClearFilters={filters.clearFilters}
          />

          {result.totalPages > 1 && (
            <Pagination className="pt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      filters.setPage(Math.max(1, result.currentPage - 1))
                    }
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
                        onClick={() => filters.setPage(p)}
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
                      filters.setPage(
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
