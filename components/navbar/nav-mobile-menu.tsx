"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MAIN_NAV_LINKS } from "@/lib/constants/navigation"
import { NavMobileAuth } from "@/components/navbar/nav-mobile-auth"
import { cn } from "@/lib/utils"

interface NavMobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function NavMobileMenu({ isOpen, onClose }: NavMobileMenuProps) {
  const pathname = usePathname()

  if (!isOpen) return null

  return (
    <div className="absolute inset-x-0 top-16 w-full animate-in border-b border-border bg-background/95 px-4 pt-3 pb-6 shadow-lg backdrop-blur-md duration-200 slide-in-from-top-2 md:hidden">
      <nav className="flex flex-col gap-1">
        {MAIN_NAV_LINKS.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center rounded-lg px-4 py-2.5 text-base font-medium transition-colors",
                isActive
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-4 border-t border-border pt-4">
        <NavMobileAuth onClose={onClose} />
      </div>
    </div>
  )
}
