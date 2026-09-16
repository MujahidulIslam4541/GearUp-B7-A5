import {
  LayoutDashboard,
  CalendarDays,
  Activity,
  User,
  PlusCircle,
  Tent,
  ClipboardList,
  Users,
  Building2,
  PackageCheck,
  ShoppingBag,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react"
import { UserRole } from "@/types/dashboard"

export interface DashboardNavItem {
  title: string
  href: string
  icon: LucideIcon
  badge?: string
}

export const USER_NAV_ITEMS: DashboardNavItem[] = [
  { title: "Dashboard", href: "/dashboard/user", icon: LayoutDashboard },
  { title: "My Bookings", href: "/dashboard/user/bookings", icon: CalendarDays },
  { title: "Booking Tracking", href: "/dashboard/user/tracking", icon: Activity },
  { title: "Profile", href: "/dashboard/user/profile", icon: User },
]

export const PROVIDER_NAV_ITEMS: DashboardNavItem[] = [
  { title: "Dashboard", href: "/dashboard/provider", icon: LayoutDashboard },
  { title: "Create Gear", href: "/dashboard/provider/gear/new", icon: PlusCircle },
  { title: "My Gears", href: "/dashboard/provider/gear", icon: Tent },
  { title: "Gear Bookings", href: "/dashboard/provider/bookings", icon: ClipboardList },
]

export const ADMIN_NAV_ITEMS: DashboardNavItem[] = [
  { title: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
  { title: "Users", href: "/dashboard/admin/users", icon: Users },
  { title: "Providers", href: "/dashboard/admin/providers", icon: Building2 },
  { title: "Gears", href: "/dashboard/admin/gears", icon: PackageCheck },
  { title: "Bookings", href: "/dashboard/admin/bookings", icon: ShoppingBag },
  { title: "Reviews / Reports", href: "/dashboard/admin/reviews", icon: ShieldAlert },
]

export function getRoleFromPathname(pathname: string): UserRole {
  if (pathname.startsWith("/dashboard/admin")) return "ADMIN"
  if (pathname.startsWith("/dashboard/provider")) return "PROVIDER"
  return "USER"
}

export function getNavItemsForRole(role: UserRole): DashboardNavItem[] {
  switch (role) {
    case "ADMIN":
      return ADMIN_NAV_ITEMS
    case "PROVIDER":
      return PROVIDER_NAV_ITEMS
    case "USER":
    default:
      return USER_NAV_ITEMS
  }
}
