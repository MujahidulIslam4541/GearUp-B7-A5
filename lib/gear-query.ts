import { ALL_GEAR } from "@/lib/constants/gear"
import { GearItem } from "@/types/gear"

export interface GearFilterParams {
  search?: string
  category?: string
  minPrice?: string | number
  maxPrice?: string | number
  page?: string | number
  limit?: number
}

export interface GearQueryResult {
  items: GearItem[]
  totalItems: number
  totalPages: number
  currentPage: number
  limit: number
  activeFilterCount: number
}

export function getFilteredGear(params: GearFilterParams): GearQueryResult {
  const { search = "", category = "all", minPrice, maxPrice } = params
  const limit = params.limit || 8
  const requestedPage = Math.max(1, Number(params.page) || 1)

  const normalizedSearch = search.toLowerCase().trim()
  const min =
    minPrice !== undefined && minPrice !== "" ? Number(minPrice) : null
  const max =
    maxPrice !== undefined && maxPrice !== "" ? Number(maxPrice) : null

  const filtered = ALL_GEAR.filter((gear) => {
    if (normalizedSearch) {
      const haystack =
        `${gear.name} ${gear.description} ${gear.brand} ${gear.category.name}`.toLowerCase()
      if (!haystack.includes(normalizedSearch)) return false
    }

    if (category && category !== "all") {
      const selectedCats = category
        .toLowerCase()
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean)
      if (selectedCats.length > 0) {
        const itemName = gear.category.name.toLowerCase()
        if (!selectedCats.includes(itemName)) return false
      }
    }

    const price = Number(gear.price)
    if (min !== null && !isNaN(min) && price < min) return false
    if (max !== null && !isNaN(max) && price > max) return false

    return true
  })

  let activeCount = 0
  if (normalizedSearch) activeCount++
  if (category && category !== "all") activeCount++
  if (min !== null && !isNaN(min)) activeCount++
  if (max !== null && !isNaN(max)) activeCount++

  const totalPages = Math.max(1, Math.ceil(filtered.length / limit))
  const currentPage = Math.min(requestedPage, totalPages)
  const startIndex = (currentPage - 1) * limit
  const items = filtered.slice(startIndex, startIndex + limit)

  return {
    items,
    totalItems: filtered.length,
    totalPages,
    currentPage,
    limit,
    activeFilterCount: activeCount,
  }
}
