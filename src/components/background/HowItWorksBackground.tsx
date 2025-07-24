import React from 'react';

const HowItWorksBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Process flow gradient with smoother transitions */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-terminal-blue/4 via-terminal-green/4 to-background" 
           style={{ animation: 'gradient-shift 8s ease-in-out infinite' }} />
      
      {/* Flowing elements */}
      <div className="absolute inset-0">
        {/* Central flow line with enhanced animation */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-terminal-green/20 to-transparent rounded-full">
          <div className="absolute top-0 left-0 w-12 h-2 bg-gradient-to-r from-terminal-green to-terminal-blue rounded-full animate-pulse" 
               style={{ animation: 'flow 6s ease-in-out infinite' }} />
        </div>
        
        {/* Enhanced process nodes with better positioning */}
        <div className="absolute top-1/4 left-1/5 w-20 h-20 rounded-full border-2 border-terminal-green/40 bg-terminal-green/8 animate-pulse" 
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-2/5 w-24 h-24 rounded-full border-2 border-terminal-blue/40 bg-terminal-blue/8 animate-pulse" 
             style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute top-3/4 left-3/5 w-22 h-22 rounded-full border-2 border-terminal-green/40 bg-terminal-green/8 animate-pulse" 
             style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
        <div className="absolute top-1/3 left-4/5 w-18 h-18 rounded-full border-2 border-terminal-blue/40 bg-terminal-blue/8 animate-pulse" 
             style={{ animationDelay: '3s', animationDuration: '3s' }} />
        
        {/* Enhanced workflow arrows with varied angles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-1.5 bg-gradient-to-r from-terminal-green/20 to-terminal-blue/20 animate-pulse rounded-full"
            style={{
              top: `${35 + Math.random() * 30}%`,
              left: `${8 + i * 8}%`,
              transform: `rotate(${30 + Math.random() * 30}deg)`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2.5 + Math.random() * 1.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Enhanced step indicators with better opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,153,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-80" />
      
      {/* Enhanced process flow effects with smoother gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_40%,rgba(0,255,102,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_60%,rgba(0,153,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,204,153,0.04),transparent_50%)]" />
    </div>
  );
};

export default HowItWorksBackground;