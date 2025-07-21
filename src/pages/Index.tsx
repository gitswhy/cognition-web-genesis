import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustRibbon from "@/components/TrustRibbon";
import CoreFeaturesGrid from "@/components/CoreFeaturesGrid";
import DemoPlayground from "@/components/DemoPlayground";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-bg text-foreground">
      <Header />
      <Hero />
      <TrustRibbon />
      <CoreFeaturesGrid />
      <DemoPlayground />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
