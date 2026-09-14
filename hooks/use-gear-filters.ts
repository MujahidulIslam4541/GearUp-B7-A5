"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

export function useGearFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const search = searchParams.get("search") || ""
  const category = searchParams.get("category") || "all"
  const minPrice = searchParams.get("minPrice") || ""
  const maxPrice = searchParams.get("maxPrice") || ""
  const page = Math.max(1, Number(searchParams.get("page")) || 1)

  const [searchInput, setSearchInput] = useState(search)

  useEffect(() => {
    setSearchInput(search)
  }, [search])

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

  const setCategory = (cat: string) => updateUrl({ category: cat, page: null })
  const toggleCategory = (slug: string) => {
    if (slug === "all") {
      updateUrl({ category: null, page: null })
      return
    }
    const current =
      category === "all" ? [] : category.split(",").filter(Boolean)
    const next = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug]
    updateUrl({ category: next.length > 0 ? next.join(",") : null, page: null })
  }
  const setPrice = (min?: string, max?: string) =>
    updateUrl({
      minPrice: min !== undefined ? min : minPrice,
      maxPrice: max !== undefined ? max : maxPrice,
      page: null,
    })
  const setPage = (p: number) => updateUrl({ page: p > 1 ? String(p) : null })
  const clearFilters = () => {
    setSearchInput("")
    router.push(pathname, { scroll: false })
  }
  const removeFilter = (key: string) => {
    if (key === "search") setSearchInput("")
    updateUrl({ [key]: null, page: null })
  }

  return {
    search,
    searchInput,
    setSearchInput,
    category,
    setCategory,
    toggleCategory,
    minPrice,
    maxPrice,
    setPrice,
    page,
    setPage,
    clearFilters,
    removeFilter,
  }
}
