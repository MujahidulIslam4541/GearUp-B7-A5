import { getServerSession } from "@/lib/auth-server"
import { BrandLogo } from "@/components/brand-logo"
import { NavLinks } from "@/components/navbar/nav-links"
import { NavAuth } from "@/components/navbar/nav-auth"
import { NavMobile } from "@/components/navbar/nav-mobile"

export async function Navbar() {
  const session = await getServerSession()
  const user = session?.user ?? null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-[1920px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />
        <NavLinks className="hidden md:flex" />
        <div className="flex items-center gap-3">
          <NavAuth user={user} className="hidden md:flex" />
          <NavMobile user={user} className="md:hidden" />
        </div>
      </div>
    </header>
  )
}
