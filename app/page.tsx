import { BookingSection } from "@/components/sections/BookingSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ItinerarySection } from "@/components/sections/ItinerarySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TrustSection } from "@/components/sections/TrustSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <GallerySection />
      <ItinerarySection />
      <PricingSection />
      <BookingSection />
      <TrustSection />
      <FinalCTASection />
    </main>
  );
}
