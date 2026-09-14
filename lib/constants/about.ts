import {
  Tent,
  Mountain,
  Bike,
  Waves,
  Search,
  CalendarRange,
  CreditCard,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react"

export interface OfferCategory {
  id: string
  name: string
  description: string
  icon: LucideIcon
  href: string
}

export interface StepItem {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export const WHAT_WE_OFFER: OfferCategory[] = [
  {
    id: "camping",
    name: "Camping Gear",
    description: "Weatherproof tents, sub-zero sleeping bags, cooking stoves, and portable lanterns.",
    icon: Tent,
    href: "/gear",
  },
  {
    id: "hiking",
    name: "Hiking & Trekking",
    description: "Expedition packs, ergonomic carbon poles, trail navigation, and outdoor footwear.",
    icon: Mountain,
    href: "/gear",
  },
  {
    id: "cycling",
    name: "Cycling Equipment",
    description: "Trail and gravel bikes, aerodynamic safety helmets, repair kits, and carriers.",
    icon: Bike,
    href: "/gear",
  },
  {
    id: "sports",
    name: "Sports & Adventure Gear",
    description: "Kayaks, inflatable paddleboards, climbing harnesses, ropes, and training sets.",
    icon: Waves,
    href: "/gear",
  },
]

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: "01",
    title: "Browse Gear",
    description: "Explore sports and outdoor equipment available for rental in your area.",
    icon: Search,
  },
  {
    step: "02",
    title: "Choose Your Dates",
    description: "Select the dates that work best for your upcoming adventure or trip.",
    icon: CalendarRange,
  },
  {
    step: "03",
    title: "Pay Securely",
    description: "Complete your rental using a simple, transparent, and secure payment process.",
    icon: CreditCard,
  },
  {
    step: "04",
    title: "Pick Up & Enjoy",
    description: "Collect your gear from verified providers and head out on your adventure.",
    icon: CheckCircle2,
  },
]

