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
import { useGeolocation } from '@/hooks/useGeolocation';
import TechBackground from "@/components/background/TechBackground";

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
    <TechBackground>
      <Header />
      <Hero />
      <TrustRibbon />
      <EnhancedFeatures />
      <CoreFeaturesGrid />
      <DemoPlayground />
      <Testimonials />
      <CTASection />
      <Footer />
    </TechBackground>
  );
};

export default Index;
