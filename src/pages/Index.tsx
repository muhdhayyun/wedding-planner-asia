import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HotelsSection } from "@/components/HotelsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <HotelsSection />
      <HotelsSection bgHex="#d6909b" cardBgColorHex="#c47a89" />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
