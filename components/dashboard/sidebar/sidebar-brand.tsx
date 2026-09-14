import Link from "next/link"
import { Compass } from "lucide-react"

export function SidebarBrand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 px-2 py-1.5 transition-opacity hover:opacity-90 outline-none"
    >
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
        <Compass className="size-4.5" />
      </div>
      <div className="flex flex-col truncate group-data-[collapsible=icon]:hidden">
        <span className="font-heading text-base font-bold tracking-tight text-foreground">
          Gear<span className="text-primary">Up</span>
        </span>
        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
          Console
        </span>
      </div>
    </Link>
  )
}

