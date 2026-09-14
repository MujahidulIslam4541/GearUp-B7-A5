import Image from "next/image"
import { BrandLogo } from "@/components/brand-logo"
import { ShieldCheck, Sparkles } from "lucide-react"

export function AuthVisual() {
  return (
    <div className="relative flex h-56 w-full flex-col justify-between overflow-hidden bg-muted sm:h-72 lg:h-auto lg:min-h-screen lg:flex-1">
      <Image
        src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1400&q=80"
        alt="Camping under mountain stars"
        fill
        priority
        unoptimized
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-background/20 lg:from-background/90 lg:via-background/40 lg:to-background/30" />

      <div className="relative z-10 p-6 sm:p-8 lg:p-12">
        <BrandLogo showTagline />
      </div>

      <div className="relative z-10 p-6 sm:p-8 lg:p-12">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
          <Sparkles className="size-3.5 text-primary" />
          <span>Adventure Simplified</span>
        </div>

        <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Your next adventure starts with the right gear.
        </h2>

        <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground sm:block lg:text-base">
          Rent premium, field-tested sports and outdoor equipment from verified
          local providers across Bangladesh.
        </p>

        <div className="mt-6 hidden items-center gap-4 text-xs font-medium text-foreground/80 sm:flex">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-primary" />
            <span>100% Quality Inspected</span>
          </div>
          <span className="text-border">•</span>
          <span>Flexible Rental Returns</span>
        </div>
      </div>
    </div>
  )
}
