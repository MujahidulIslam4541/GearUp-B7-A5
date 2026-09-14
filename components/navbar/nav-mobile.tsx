"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NavMobileMenu } from "@/components/navbar/nav-mobile-menu"
import { cn } from "@/lib/utils"

interface NavMobileProps {
  className?: string
}

export function NavMobile({ className }: NavMobileProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn(className)}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <NavMobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
