import {
  ShieldCheck,
  CalendarRange,
  CreditCard,
  BadgeCheck,
  RotateCcw,
  type LucideIcon,
} from "lucide-react"

export interface WhyChooseItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "quality-gear",
    title: "Quality Gear",
    description: "Access reliable and quality sports & outdoor equipment.",
    icon: ShieldCheck,
  },
  {
    id: "flexible-rental",
    title: "Flexible Rental",
    description: "Choose rental dates that work best for your adventure.",
    icon: CalendarRange,
  },
  {
    id: "secure-payment",
    title: "Secure Payment",
    description: "Simple and secure payment experience.",
    icon: CreditCard,
  },
  {
    id: "trusted-providers",
    title: "Trusted Providers",
    description: "Rent equipment from reliable gear providers.",
    icon: BadgeCheck,
  },
  {
    id: "easy-pickup-return",
    title: "Easy Pickup & Return",
    description: "A simple and convenient rental and return process.",
    icon: RotateCcw,
  },
]

