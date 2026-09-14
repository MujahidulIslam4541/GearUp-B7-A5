"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { MAIN_NAV_LINKS } from "@/lib/constants/navigation"
import { NavMobileAuth } from "@/components/navbar/nav-mobile-auth"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuHighlight,
} from "@/components/animate-ui/primitives/radix/dropdown-menu"
import { cn } from "@/lib/utils"

interface NavMobileProps {
  className?: string
}

export function NavMobile({ className }: NavMobileProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className={cn(className)}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="flex size-9 cursor-pointer items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="z-50 w-64 rounded-xl border border-border bg-popover p-1.5 text-popover-foreground shadow-xl outline-none sm:w-72"
        >
          <DropdownMenuHighlight className="rounded-lg bg-accent/50">
            {MAIN_NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              return (
                <DropdownMenuItem
                  key={item.href}
                  className="cursor-pointer rounded-lg p-0"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex w-full items-center px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "font-semibold text-primary"
                        : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              )
            })}

            <DropdownMenuSeparator className="my-1.5 h-px bg-border" />

            <NavMobileAuth onClose={() => setOpen(false)} />
          </DropdownMenuHighlight>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
