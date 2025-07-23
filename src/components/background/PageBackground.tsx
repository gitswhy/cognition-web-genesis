
import React from 'react';
import { useLocation } from 'react-router-dom';
import EnhancedParallaxBackground from './EnhancedParallaxBackground';
import { ParallaxGrid } from '../animations/AnimationComponents';
import TerminalMatrix from './TerminalMatrix';
import PageSpecificAnimations from './PageSpecificAnimations';

interface PageBackgroundProps {
  children: React.ReactNode;
  variant?: 'homepage' | 'docs' | 'pricing' | 'about' | 'features' | 'minimal' | 'opencore' | 'pro' | 'community';
}

const PageBackground: React.FC<PageBackgroundProps> = ({ children, variant }) => {
  const location = useLocation();
  
  // Auto-detect variant based on route if not specified
  const getVariant = () => {
    if (variant) return variant;
    
    const path = location.pathname;
    if (path === '/') return 'homepage';
    if (path.includes('/open-core')) return 'opencore';
    if (path.includes('/pro-edition')) return 'pro';
    if (path.includes('/docs')) return 'docs';
    if (path.includes('/pricing')) return 'pricing';
    if (path.includes('/about')) return 'about';
    if (path.includes('/blog') || path.includes('/community')) return 'community';
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
          gridOpacity: 0.08,
          gridColor: 'rgba(0, 255, 102, 0.04)',
          overlayGradient: 'bg-gradient-to-r from-terminal-green/2 via-transparent to-terminal-blue/2'
        };
      case 'docs':
        return {
          bgGradient: 'bg-gradient-to-b from-background to-terminal-surface/8',
          parallaxIntensity: 'subtle' as const,
          gridOpacity: 0.05,
          gridColor: 'rgba(0, 255, 255, 0.03)',
          overlayGradient: 'bg-gradient-to-br from-terminal-blue/1 via-transparent to-background'
        };
      case 'pricing':
        return {
          bgGradient: 'bg-gradient-to-b from-background to-terminal-blue/8',
          parallaxIntensity: 'medium' as const,
          gridOpacity: 0.06,
          gridColor: 'rgba(0, 150, 255, 0.04)',
          overlayGradient: 'bg-gradient-to-tr from-terminal-blue/2 via-transparent to-terminal-green/2'
        };
      case 'about':
        return {
          bgGradient: 'bg-gradient-to-br from-background to-terminal-green/8',
          parallaxIntensity: 'medium' as const,
          gridOpacity: 0.05,
          gridColor: 'rgba(0, 255, 102, 0.04)',
          overlayGradient: 'bg-gradient-to-bl from-terminal-green/2 via-transparent to-background'
        };
      case 'opencore':
        return {
          bgGradient: 'bg-gradient-to-br from-terminal-bg to-terminal-surface/6',
          parallaxIntensity: 'medium' as const,
          gridOpacity: 0.06,
          gridColor: 'rgba(0, 255, 102, 0.05)',
          overlayGradient: 'bg-gradient-to-r from-terminal-green/2 via-transparent to-terminal-green/1'
        };
      case 'pro':
        return {
          bgGradient: 'bg-gradient-to-br from-terminal-bg to-terminal-blue/8',
          parallaxIntensity: 'medium' as const,
          gridOpacity: 0.07,
          gridColor: 'rgba(0, 212, 255, 0.04)',
          overlayGradient: 'bg-gradient-to-tr from-terminal-blue/2 via-transparent to-terminal-blue/1'
        };
      case 'community':
        return {
          bgGradient: 'bg-gradient-to-b from-terminal-bg via-terminal-surface/6 to-terminal-bg',
          parallaxIntensity: 'medium' as const,
          gridOpacity: 0.05,
          gridColor: 'rgba(0, 255, 102, 0.04)',
          overlayGradient: 'bg-gradient-to-bl from-terminal-green/2 via-transparent to-terminal-green/1'
        };
      case 'features':
        return {
          bgGradient: 'bg-gradient-to-b from-background via-terminal-surface/4 to-background',
          parallaxIntensity: 'medium' as const,
          gridOpacity: 0.04,
          gridColor: 'rgba(128, 128, 255, 0.03)',
          overlayGradient: 'bg-gradient-to-r from-primary/1 via-transparent to-secondary/1'
        };
      case 'minimal':
      default:
        return {
          bgGradient: 'bg-gradient-to-b from-background to-muted/15',
          parallaxIntensity: 'subtle' as const,
          gridOpacity: 0.03,
          gridColor: 'rgba(100, 100, 100, 0.02)',
          overlayGradient: 'bg-gradient-to-b from-transparent to-muted/5'
        };
    }
  };

  const config = getBackgroundConfig();

  return (
    <div className={`min-h-screen relative ${config.bgGradient}`}>
      {/* Multi-layered Background System */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Enhanced parallax background for additional depth */}
        <EnhancedParallaxBackground 
          intensity={config.parallaxIntensity} 
          className="z-20 opacity-30" 
        />
        
        {/* Animated grid overlay */}
        <ParallaxGrid 
          speed={0.4}
          gridOpacity={config.gridOpacity}
          gridColor={config.gridColor}
          className="transform-gpu z-30"
        />
        
        {/* Terminal Matrix Background */}
        <TerminalMatrix 
          intensity={config.parallaxIntensity === 'intense' ? 'high' : config.parallaxIntensity === 'medium' ? 'medium' : 'low'}
          color={config.gridColor.includes('255, 102') ? '#00FF66' : config.gridColor.includes('212, 255') ? '#00D4FF' : '#00FF66'}
          className="z-35"
        />
        
        {/* Page-specific animations */}
        <PageSpecificAnimations 
          variant={currentVariant as any}
          className="z-36"
        />
        
        {/* Custom gradient animation overlay */}
        <div className={`absolute inset-0 ${config.overlayGradient} animate-gradient z-40`}></div>
        
        {/* Cosmic noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.01] z-45"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='80' cy='20' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='20' cy='80' r='1'/%3E%3Ccircle cx='80' cy='80' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Page Content */}
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;
