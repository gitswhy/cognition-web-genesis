import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, ArrowRight, Shield } from 'lucide-react';

const ResponsiveOptimizations = () => {
  return (
    <div className="w-full">
      {/* Global responsive utilities applied to body */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Enhanced mobile scrolling */
        body {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }
        
        /* Improved focus management for mobile */
        @media (max-width: 768px) {
          .focus-trap:focus {
            scroll-margin-top: 80px;
            scroll-behavior: smooth;
          }
        }
        
        /* Card hover optimizations */
        @media (hover: hover) {
          .card-hover:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 20px 40px -12px rgba(0, 255, 102, 0.15);
          }
        }
        
        /* Touch-friendly minimum sizes */
        .mobile-touch {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Responsive font loading */
        @font-face {
          font-family: 'Inter';
          font-display: swap;
          src: local('Inter');
        }
        
        @font-face {
          font-family: 'JetBrains Mono';
          font-display: swap;
          src: local('JetBrains Mono');
        }
        
        /* PWA viewport optimization */
        @supports (display-mode: standalone) {
          .pwa-optimized {
            padding-top: env(safe-area-inset-top);
            padding-bottom: env(safe-area-inset-bottom);
          }
        }

        /* Mobile-specific overflow fixes */
        @media (max-width: 640px) {
          .mobile-scroll-fix {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .mobile-text-wrap {
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: auto;
          }
          
          .mobile-stack {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          
          .mobile-full-width {
            width: 100% !important;
            min-width: unset !important;
          }
        }

        /* Prevent horizontal scroll on mobile */
        @media (max-width: 640px) {
          * {
            max-width: 100%;
          }
          
          .container,
          .container-responsive {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          .grid-cols-3,
          .grid-cols-2 {
            display: flex !important;
            flex-direction: column !important;
            gap: 1rem !important;
          }
          
          .text-5xl,
          .text-6xl,
          .text-7xl {
            font-size: 2rem !important;
            line-height: 2.5rem !important;
          }
        }
        `
      }} />
      
      {/* Enhanced responsive component structure */}
      <section className="padding-responsive safe-area-padding">
        <div className="container-responsive">
          {/* Mobile-optimized grid system */}
          <div className="grid-responsive-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="card-hover mobile-focus-ring gpu-accelerated">
                <CardHeader className="card-responsive-sm">
                  <CardTitle className="text-scale-heading mobile-text-wrap">Feature {item}</CardTitle>
                </CardHeader>
                <CardContent className="space-responsive-sm">
                  <p className="text-scale-mobile mobile-text-wrap">Responsive content with proper scaling and mobile optimization</p>
                  <Button className="w-full mobile-button mobile-touch">
                    Action Button
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsiveOptimizations;