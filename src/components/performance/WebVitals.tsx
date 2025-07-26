import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (event: string, action: string, params: any) => void;
  }
}

export const useWebVitals = () => {
  useEffect(() => {
    // Only in production
    if (process.env.NODE_ENV !== 'production') return;

    // Dynamic import to avoid bundling in development
    import('web-vitals').then((webVitals) => {
      const trackWebVital = (metric: any) => {
        // Track Core Web Vitals with analytics if available
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: metric.name,
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      };

      // Use available metrics
      if (webVitals.onCLS) webVitals.onCLS(trackWebVital);
      if (webVitals.onINP) webVitals.onINP(trackWebVital); // INP replaces FID
      if (webVitals.onFCP) webVitals.onFCP(trackWebVital);
      if (webVitals.onLCP) webVitals.onLCP(trackWebVital);
      if (webVitals.onTTFB) webVitals.onTTFB(trackWebVital);
    }).catch(() => {
      // Silent fail if web-vitals is not available
    });
  }, []);
};

export default useWebVitals;