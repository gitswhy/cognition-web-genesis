import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import TrustRibbon from "@/components/TrustRibbon";
import CoreFeaturesGrid from "@/components/CoreFeaturesGrid";
import FeatureTeasersGrid from "@/components/FeatureTeasersGrid";
import DemoPlayground from "@/components/DemoPlayground";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/components/analytics/PlausibleAnalytics";
import { useGeolocation } from '@/hooks/useGeolocation';
import WebsiteBackground from "@/components/background/WebsiteBackground";

// Ultimate Components
import UltimateHero from "@/components/ultimate/UltimateHero";
import UltimateFeatures from "@/components/ultimate/UltimateFeatures";
import UltimateCTA from "@/components/ultimate/UltimateCTA";

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
        <div className="page-content">
          <UltimateHero />
          <TrustRibbon />
          <UltimateFeatures />
          <FeatureTeasersGrid />
          <CoreFeaturesGrid />
          <DemoPlayground />
          <UltimateCTA />
          <BottomCTA />
          <Footer />
        </div>
      </WebsiteBackground>
    </div>
  );
};

export default Index;
