"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

export function DashboardBreadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  return (
    <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 text-xs">
      <Link
        href="/dashboard"
        className="font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        Dashboard
      </Link>
      {segments.slice(1).map((seg, idx) => {
        const href = "/" + segments.slice(0, idx + 2).join("/")
        const isLast = idx === segments.length - 2
        const formatted = seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " ")

        return (
          <div key={href} className="flex items-center gap-1.5">
            <ChevronRight className="size-3 text-muted-foreground/60" />
            {isLast ? (
              <span className="font-semibold text-foreground">{formatted}</span>
            ) : (
              <Link
                href={href}
                className="font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {formatted}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

