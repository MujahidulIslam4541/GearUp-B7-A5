export interface NavItem {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: NavItem[]
}

export const MAIN_NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gear", href: "/gear" },
]

export const FOOTER_QUICK_LINKS: FooterSection = {
  title: "Quick Links",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Gear", href: "/gear" },
  ],
}

export const FOOTER_CUSTOMER_LINKS: FooterSection = {
  title: "Customer",
  links: [
    { label: "Browse Gear", href: "/gear" },
    { label: "My Orders", href: "/orders" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Contact Support", href: "/support" },
  ],
}

export const FOOTER_COMPANY_LINKS: FooterSection = {
  title: "Company",
  links: [
    { label: "About GearUp", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
}
