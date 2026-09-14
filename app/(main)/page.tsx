import { HeroSection } from "@/components/home/hero-section"
import { FeaturedGearSection } from "@/components/home/featured-gear-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { FaqSection } from "@/components/home/faq-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedGearSection />
      <WhyChooseSection />
      <FaqSection />
    </div>
  )
}
