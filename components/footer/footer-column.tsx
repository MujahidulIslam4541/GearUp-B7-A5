import Link from "next/link"
import { FooterSection } from "@/lib/constants/navigation"

interface FooterColumnProps {
  section: FooterSection
}

export function FooterColumn({ section }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-3.5">
      <h3 className="font-heading text-sm font-semibold tracking-wider text-foreground uppercase">
        {section.title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {section.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
