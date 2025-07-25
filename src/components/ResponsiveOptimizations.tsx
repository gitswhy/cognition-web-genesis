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
        `
      }} />
      
      {/* Example responsive component structure */}
      <section className="padding-responsive safe-area-padding">
        <div className="container mx-auto">
          {/* Responsive grid system */}
          <div className="grid-responsive-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="card-hover mobile-focus-ring gpu-accelerated">
                <CardHeader className="card-responsive">
                  <CardTitle className="text-scale-heading">Feature {item}</CardTitle>
                </CardHeader>
                <CardContent className="space-responsive">
                  <p className="text-scale-mobile">Responsive content with proper scaling</p>
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