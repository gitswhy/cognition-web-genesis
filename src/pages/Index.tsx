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

const Index = () => {
  const { i18n } = useTranslation();
  const { trackPageView } = useAnalytics();

  React.useEffect(() => {
    trackPageView('/');
  }, [trackPageView]);

  React.useEffect(() => {
    // Set document language
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return (
    <PageBackground variant="homepage">
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
