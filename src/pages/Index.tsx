import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustRibbon from "@/components/TrustRibbon";
import ValuePropositions from "@/components/ValuePropositions";
import FeatureTeasers from "@/components/FeatureTeasers";
import DemoPlayground from "@/components/DemoPlayground";
import TimelineSlider from "@/components/TimelineSlider";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTASection from "@/components/CTASection";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/components/analytics/PlausibleAnalytics";
import { useGeolocation } from '@/hooks/useGeolocation';
import WebsiteBackground from "@/components/background/WebsiteBackground";


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
    <div className="page-fade-in">
      <WebsiteBackground>
        <Header />
        <Hero />
        <TrustRibbon />
        <ValuePropositions />
        <FeatureTeasers />
        <DemoPlayground />
        <TimelineSlider />
        <TestimonialsCarousel />
        <CTASection />
        <BottomCTA />
        <Footer />
      </WebsiteBackground>
    </div>
  );
};

export default Index;
