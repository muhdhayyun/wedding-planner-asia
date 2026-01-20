import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { OurStorySection } from "@/components/OurStorySection";
import { EventDetailsSection } from "@/components/EventDetailsSection";
import { GallerySection } from "@/components/GallerySection";
import { RSVPSection } from "@/components/RSVPSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <EventDetailsSection />
      <GallerySection />
      <RSVPSection />
      <Footer />
    </div>
  );
};

export default Index;
