import {
  ShieldCheck,
  BadgeCheck,
  CalendarRange,
  LockKeyhole,
  RotateCcw,
  type LucideIcon,
} from "lucide-react"

export interface BenefitItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface StatItem {
  id: string
  value: string
  label: string
  description: string
}

export const ABOUT_BENEFITS: BenefitItem[] = [
  {
    id: "quality-equipment",
    title: "Quality Equipment",
    description: "Access reliable and quality gear for your adventures.",
    icon: ShieldCheck,
  },
  {
    id: "trusted-providers",
    title: "Trusted Providers",
    description: "Rent equipment from reliable providers.",
    icon: BadgeCheck,
  },
  {
    id: "flexible-rentals",
    title: "Flexible Rentals",
    description: "Choose rental dates that work for you.",
    icon: CalendarRange,
  },
  {
    id: "secure-payments",
    title: "Secure Payments",
    description: "Simple and secure payment experience.",
    icon: LockKeyhole,
  },
  {
    id: "easy-pickup-returns",
    title: "Easy Pickup & Returns",
    description: "A convenient rental and return process.",
    icon: RotateCcw,
  },
]

export const ABOUT_STATS: StatItem[] = [
  {
    id: "stat-gear",
    value: "500+",
    label: "Gear Available",
    description: "Inspected sports & outdoor equipment",
  },
  {
    id: "stat-providers",
    value: "50+",
    label: "Trusted Providers",
    description: "Certified equipment owners",
  },
  {
    id: "stat-rentals",
    value: "1,200+",
    label: "Successful Rentals",
    description: "Adventures completed nationwide",
  },
  {
    id: "stat-rating",
    value: "4.8/5",
    label: "Customer Rating",
    description: "From verified outdoor athletes",
  },
]
