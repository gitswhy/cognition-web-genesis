import React from 'react';
import { useLocation } from 'react-router-dom';
import Background3D from './Background3D';
import EnhancedParallaxBackground from './EnhancedParallaxBackground';
import { ParallaxGrid } from '../animations/AnimationComponents';

interface PageBackgroundProps {
  children: React.ReactNode;
  variant?: 'homepage' | 'docs' | 'pricing' | 'about' | 'features' | 'minimal';
}

const PageBackground: React.FC<PageBackgroundProps> = ({ children, variant }) => {
  const location = useLocation();
  
  // Auto-detect variant based on route if not specified
  const getVariant = () => {
    if (variant) return variant;
    
    const path = location.pathname;
    if (path === '/') return 'homepage';
    if (path.includes('/docs')) return 'docs';
    if (path.includes('/pricing')) return 'pricing';
    if (path.includes('/about')) return 'about';
    if (path.includes('/how-it-works') || path.includes('/integrations')) return 'features';
    return 'minimal';
  };

  const currentVariant = getVariant();

  const getBackgroundConfig = () => {
    switch (currentVariant) {
      case 'homepage':
        return {
          bgGradient: 'bg-gradient-to-br from-terminal-bg via-terminal-surface to-terminal-bg',
          parallaxIntensity: 'intense' as const,
          particleCount: 1200,
          showGeometry: true,
          gridOpacity: 0.2,
          gridColor: 'rgba(0, 255, 102, 0.08)',
          overlayGradient: 'bg-gradient-to-r from-terminal-green/5 via-transparent to-terminal-blue/5'
        };
      case 'docs':
        return {
          bgGradient: 'bg-gradient-to-b from-background to-terminal-surface/10',
          parallaxIntensity: 'subtle' as const,
          particleCount: 600,
          showGeometry: false,
          gridOpacity: 0.1,
          gridColor: 'rgba(0, 255, 255, 0.05)',
          overlayGradient: 'bg-gradient-to-br from-terminal-blue/3 via-transparent to-background'
        };
      case 'pricing':
        return {
          bgGradient: 'bg-gradient-to-b from-background to-terminal-blue/10',
          parallaxIntensity: 'medium' as const,
          particleCount: 800,
          showGeometry: true,
          gridOpacity: 0.15,
          gridColor: 'rgba(0, 150, 255, 0.06)',
          overlayGradient: 'bg-gradient-to-tr from-terminal-blue/4 via-transparent to-terminal-green/4'
        };
      case 'about':
        return {
          bgGradient: 'bg-gradient-to-br from-background to-terminal-green/10',
          parallaxIntensity: 'medium' as const,
          particleCount: 900,
          showGeometry: true,
          gridOpacity: 0.12,
          gridColor: 'rgba(0, 255, 102, 0.06)',
          overlayGradient: 'bg-gradient-to-bl from-terminal-green/4 via-transparent to-background'
        };
      case 'features':
        return {
          bgGradient: 'bg-gradient-to-b from-background via-terminal-surface/5 to-background',
          parallaxIntensity: 'medium' as const,
          particleCount: 700,
          showGeometry: true,
          gridOpacity: 0.08,
          gridColor: 'rgba(128, 128, 255, 0.04)',
          overlayGradient: 'bg-gradient-to-r from-primary/3 via-transparent to-secondary/3'
        };
      case 'minimal':
      default:
        return {
          bgGradient: 'bg-gradient-to-b from-background to-muted/20',
          parallaxIntensity: 'subtle' as const,
          particleCount: 400,
          showGeometry: false,
          gridOpacity: 0.05,
          gridColor: 'rgba(100, 100, 100, 0.03)',
          overlayGradient: 'bg-gradient-to-b from-transparent to-muted/10'
        };
    }
  };

  const config = getBackgroundConfig();

  return (
    <div className={`min-h-screen relative ${config.bgGradient}`}>
      {/* Multi-layered Background System */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Enhanced parallax background with floating elements */}
        <EnhancedParallaxBackground 
          intensity={config.parallaxIntensity} 
          className="z-0" 
        />
        
        {/* 3D particle field */}
        <Background3D 
          className="z-10 opacity-60" 
          particleCount={config.particleCount} 
          showGeometry={config.showGeometry} 
        />
        
        {/* Animated grid overlay */}
        <ParallaxGrid 
          speed={0.3} 
          gridOpacity={config.gridOpacity}
          gridColor={config.gridColor}
          className="transform-gpu z-20"
        />
        
        {/* Custom gradient animation overlay */}
        <div className={`absolute inset-0 ${config.overlayGradient} animate-gradient z-30`}></div>
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015] z-35"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Page Content */}
      <div className="relative z-40">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;