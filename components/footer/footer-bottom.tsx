import Link from "next/link"
import { ShieldCheck } from "lucide-react"

export function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-6 text-xs text-muted-foreground sm:flex-row">
      <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
        <p>© 2026 GearUp. All rights reserved.</p>
        <div className="hidden text-border sm:inline-block">•</div>
        <div className="flex items-center gap-1.5 text-primary">
          <ShieldCheck className="size-4" />
          <span>Verified Gear & Protected Rentals</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/terms" className="transition-colors hover:text-foreground">
          Terms & Conditions
        </Link>
        <Link
          href="/privacy"
          className="transition-colors hover:text-foreground"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}
