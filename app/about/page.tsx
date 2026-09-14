import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { WhatWeOffer } from "@/components/about/what-we-offer"
import { HowItWorks } from "@/components/about/how-it-works"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <OurStory />
      <WhatWeOffer />
      <HowItWorks />
    </div>
  )
}

