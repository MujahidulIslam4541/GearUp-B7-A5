import { BrandLogo } from "@/components/brand-logo"
import { FooterColumn } from "@/components/footer/footer-column"
import { FooterSocials } from "@/components/footer/footer-socials"
import { FooterBottom } from "@/components/footer/footer-bottom"
import {
  FOOTER_QUICK_LINKS,
  FOOTER_CUSTOMER_LINKS,
  FOOTER_COMPANY_LINKS,
} from "@/lib/constants/navigation"

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-[1920px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="flex flex-col gap-4 pr-0 lg:col-span-2 lg:pr-8">
            <BrandLogo showTagline />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Your premier sports and outdoor equipment rental platform. Gear up
              for your next adventure with top-tier gear from verified
              providers.
            </p>
            <div className="pt-1">
              <FooterSocials />
            </div>
          </div>

          <FooterColumn section={FOOTER_QUICK_LINKS} />
          <FooterColumn section={FOOTER_CUSTOMER_LINKS} />
          <FooterColumn section={FOOTER_COMPANY_LINKS} />
        </div>

        <FooterBottom />
      </div>
    </footer>
  )
}
