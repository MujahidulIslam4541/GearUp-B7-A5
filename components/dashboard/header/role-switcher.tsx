"use client"

import { usePathname, useRouter } from "next/navigation"
import { ChevronsUpDown, ShieldCheck, Store, UserCheck } from "lucide-react"
import { getRoleFromPathname } from "@/lib/constants/dashboard-nav"
import { UserRole } from "@/types/dashboard"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuHighlight,
} from "@/components/animate-ui/primitives/radix/dropdown-menu"

const ROLES: { role: UserRole; label: string; href: string; icon: typeof UserCheck }[] = [
  { role: "USER", label: "Customer / User", href: "/dashboard/user", icon: UserCheck },
  { role: "PROVIDER", label: "Gear Provider", href: "/dashboard/provider", icon: Store },
  { role: "ADMIN", label: "System Admin", href: "/dashboard/admin", icon: ShieldCheck },
]

export function RoleSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const currentRole = getRoleFromPathname(pathname)
  const currentMeta = ROLES.find((r) => r.role === currentRole) ?? ROLES[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-2 border-border/80 bg-background/50 px-2.5 text-xs font-medium backdrop-blur-sm"
        >
          <currentMeta.icon className="size-3.5 text-primary" />
          <span className="font-semibold text-foreground">{currentMeta.label}</span>
          <ChevronsUpDown className="size-3 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="z-50 w-52 rounded-xl border border-border bg-popover p-1.5 shadow-lg outline-none"
      >
        <DropdownMenuLabel className="px-2.5 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          Demo Role Switcher
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="-mx-1.5 my-1 bg-border" />
        <DropdownMenuHighlight className="absolute inset-x-1.5 rounded-lg bg-muted/80">
          {ROLES.map((item) => (
            <DropdownMenuItem
              key={item.role}
              onClick={() => router.push(item.href)}
              className="flex cursor-pointer items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground"
            >
              <div className="flex items-center gap-2">
                <item.icon className="size-3.5 text-muted-foreground" />
                <span>{item.label}</span>
              </div>
              {item.role === currentRole && (
                <span className="size-1.5 rounded-full bg-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuHighlight>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
