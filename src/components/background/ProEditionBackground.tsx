import React from 'react';

const ProEditionBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-terminal-blue/5 to-background animate-pulse" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {/* Large central orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 rounded-full bg-gradient-to-r from-terminal-blue/10 to-transparent animate-spin" 
               style={{ animationDuration: '20s' }} />
        </div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-terminal-blue/5 animate-bounce" 
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-terminal-green/5 animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute top-1/2 right-1/6 w-20 h-20 rounded-full bg-terminal-blue/8 animate-bounce" 
             style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
        
        {/* Small particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-terminal-blue/20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Subtle radial gradients for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,102,0.05),transparent_50%)]" />
    </div>
  );
};

export default ProEditionBackground;