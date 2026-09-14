"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MAIN_NAV_LINKS } from "@/lib/constants/navigation"
import { cn } from "@/lib/utils"

interface NavLinksProps {
  className?: string
  onNavigate?: () => void
}

export function NavLinks({ className, onNavigate }: NavLinksProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {MAIN_NAV_LINKS.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary/10 font-semibold text-primary"
                : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
