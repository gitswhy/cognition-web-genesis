import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustRibbon from "@/components/TrustRibbon";
import EnhancedFeatures from "@/components/EnhancedFeatures";
import CoreFeaturesGrid from "@/components/CoreFeaturesGrid";
import DemoPlayground from "@/components/DemoPlayground";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/components/analytics/PlausibleAnalytics";
import PageBackground from "@/components/background/PageBackground";
import { SoftwareApplicationSchema } from '@/components/SoftwareApplicationSchema';
import { useGeolocation } from '@/hooks/useGeolocation';

const Index = () => {
  const { i18n } = useTranslation();
  const { trackPageView } = useAnalytics();
  const { isEU } = useGeolocation();

  React.useEffect(() => {
    trackPageView('/');
  }, [trackPageView]);

  React.useEffect(() => {
    // Set document language
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return (
    <PageBackground variant="homepage">
      {/* SEO Schema */}
      <SoftwareApplicationSchema
        name="Gitswhy OS - Cognitive DevSecOps Platform"
        description="The world's first cognition-native DevSecOps platform. Real-time security scanning, automated code repair, and intent-driven development tools."
        offers={[
          { price: "0", priceCurrency: "USD", name: "Open Core Edition" },
          { price: "49", priceCurrency: "USD", name: "Pro Edition" }
        ]}
      />
      
      <Header />
      <Hero />
      <TrustRibbon />
      <EnhancedFeatures />
      <CoreFeaturesGrid />
      <DemoPlayground />
      <Testimonials />
      <CTASection />
      <Footer />
    </PageBackground>
  );
};

export default Index;
