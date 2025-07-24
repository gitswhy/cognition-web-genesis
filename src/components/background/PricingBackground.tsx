import React from 'react';

const PricingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Value-focused gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-terminal-green/4 via-amber-500/2 to-background animate-pulse" />
      
      {/* Value elements */}
      <div className="absolute inset-0">
        {/* Central value indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-40 h-40 border-4 border-terminal-green/15 rounded-full animate-spin" 
               style={{ animationDuration: '30s' }}>
            <div className="w-full h-full rounded-full bg-gradient-to-br from-terminal-green/8 to-transparent" />
          </div>
        </div>
        
        {/* Price tier indicators */}
        <div className="absolute top-1/4 left-1/6 w-8 h-8 bg-terminal-green/10 rounded animate-bounce" 
             style={{ animationDelay: '0s', animationDuration: '2.5s' }} />
        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-terminal-green/15 rounded animate-bounce" 
             style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
        <div className="absolute top-1/4 left-1/2 w-16 h-16 bg-terminal-green/20 rounded animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '2.8s' }} />
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-terminal-blue/15 rounded animate-bounce" 
             style={{ animationDelay: '1.5s', animationDuration: '3.2s' }} />
        <div className="absolute top-1/4 right-1/6 w-8 h-8 bg-terminal-blue/10 rounded animate-bounce" 
             style={{ animationDelay: '2s', animationDuration: '2.7s' }} />
        
        {/* Value bars */}
        <div className="absolute bottom-1/3 left-1/4 w-2 h-16 bg-gradient-to-t from-terminal-green/20 to-transparent animate-pulse" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 left-2/4 w-2 h-24 bg-gradient-to-t from-terminal-green/25 to-transparent animate-pulse" 
             style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-20 bg-gradient-to-t from-terminal-blue/20 to-transparent animate-pulse" 
             style={{ animationDelay: '1s' }} />
        
      </div>
      
      {/* Pricing grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      {/* Value proposition effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(0,255,102,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_75%,rgba(245,158,11,0.04),transparent_45%)]" />
    </div>
  );
};

export default PricingBackground;