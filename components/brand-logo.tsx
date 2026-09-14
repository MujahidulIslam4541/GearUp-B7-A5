import Link from "next/link"
import { Compass } from "lucide-react"

interface BrandLogoProps {
  className?: string
  showTagline?: boolean
}

export function BrandLogo({ className, showTagline = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring ${className ?? ""}`}
    >
      <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
        <Compass className="size-5 transition-transform group-hover:rotate-45" />
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-lg font-bold tracking-tight text-foreground">
          Gear<span className="text-primary">Up</span>
        </span>
        {showTagline && (
          <span className="text-xs text-muted-foreground">
            Sports & Outdoor Gear
          </span>
        )}
      </div>
    </Link>
  )
}
