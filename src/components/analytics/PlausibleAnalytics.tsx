import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface PlausibleAnalyticsProps {
  domain?: string;
  trackLocalhost?: boolean;
}

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
  }
}

export const PlausibleAnalytics: React.FC<PlausibleAnalyticsProps> = ({
  domain = 'gitswhy.com',
  trackLocalhost = false
}) => {
  useEffect(() => {
    // Only load in production or if trackLocalhost is true
    if (process.env.NODE_ENV !== 'production' && !trackLocalhost) {
      return;
    }

    // Load Plausible script
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = domain;
    script.src = 'https://plausible.io/js/script.js';
    
    // Add Core Web Vitals tracking
    script.dataset.api = 'https://plausible.io/api/event';
    
    document.head.appendChild(script);

    // Track Core Web Vitals
    const trackWebVital = (metric: any) => {
      if (window.plausible) {
        window.plausible('Core Web Vital', {
          props: {
            metric_name: metric.name,
            metric_value: metric.value,
            metric_rating: metric.rating,
            page: window.location.pathname
          }
        });
      }
    };

    // Import and track web vitals
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(trackWebVital);
      onFCP(trackWebVital);
      onINP(trackWebVital); // INP replaced FID in newer versions
      onLCP(trackWebVital);
      onTTFB(trackWebVital);
    }).catch(() => {
      // Fallback if web-vitals is not available - silent fail
    });

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[data-domain="${domain}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [domain, trackLocalhost]);

  return null;
};

// Custom hook for tracking events
export const useAnalytics = () => {
  const trackEvent = (eventName: string, props?: Record<string, any>) => {
    if (window.plausible) {
      window.plausible(eventName, { props });
    }
  };

  const trackPageView = (page?: string) => {
    if (window.plausible) {
      window.plausible('pageview', {
        props: {
          page: page || window.location.pathname
        }
      });
    }
  };

  const trackDownload = (fileName: string, fileType: string) => {
    trackEvent('Download', {
      file_name: fileName,
      file_type: fileType
    });
  };

  const trackCTAClick = (ctaName: string, location: string) => {
    trackEvent('CTA Click', {
      cta_name: ctaName,
      location: location
    });
  };

  const trackFeatureUsage = (featureName: string) => {
    trackEvent('Feature Usage', {
      feature: featureName
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackDownload,
    trackCTAClick,
    trackFeatureUsage
  };
};

// Language detection and analytics integration
export const LanguageAnalytics: React.FC = () => {
  const { i18n } = useTranslation();
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Track language changes
    const handleLanguageChange = (lng: string) => {
      trackEvent('Language Change', {
        language: lng,
        previous_language: i18n.language
      });
    };

    i18n.on('languageChanged', handleLanguageChange);

    // Track initial language
    trackEvent('Language Set', {
      language: i18n.language,
      is_default: i18n.language === 'en'
    });

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n, trackEvent]);

  return null;
};