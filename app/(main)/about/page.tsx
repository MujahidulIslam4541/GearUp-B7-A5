import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { WhatWeOffer } from "@/components/about/what-we-offer"
import { HowItWorks } from "@/components/about/how-it-works"
import { AboutWhyChoose } from "@/components/about/about-why-choose"
import { OurMission } from "@/components/about/our-mission"
import { AboutStats } from "@/components/about/about-stats"
import { AboutCta } from "@/components/about/about-cta"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <OurStory />
      <WhatWeOffer />
      <HowItWorks />
      <AboutWhyChoose />
      <OurMission />
      <AboutStats />
      <AboutCta />
    </div>
  )
}
