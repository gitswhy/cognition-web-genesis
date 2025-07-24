import React from 'react';

const HowItWorksBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Process flow gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-terminal-blue/3 via-terminal-green/3 to-background animate-pulse" />
      
      {/* Flowing elements */}
      <div className="absolute inset-0">
        {/* Central flow line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terminal-green/30 to-transparent">
          <div className="absolute top-0 left-0 w-8 h-1 bg-terminal-green animate-pulse" 
               style={{ animation: 'flow 4s linear infinite' }} />
        </div>
        
        {/* Process nodes */}
        <div className="absolute top-1/3 left-1/6 w-16 h-16 rounded-full border-2 border-terminal-green/30 bg-terminal-green/5 animate-pulse" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/2 left-2/6 w-20 h-20 rounded-full border-2 border-terminal-blue/30 bg-terminal-blue/5 animate-pulse" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-3/6 w-18 h-18 rounded-full border-2 border-terminal-green/30 bg-terminal-green/5 animate-pulse" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 left-4/6 w-16 h-16 rounded-full border-2 border-terminal-blue/30 bg-terminal-blue/5 animate-pulse" 
             style={{ animationDelay: '3s' }} />
        
        {/* Workflow arrows */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-1 bg-terminal-green/15 animate-pulse"
            style={{
              top: `${40 + Math.random() * 20}%`,
              left: `${10 + i * 10}%`,
              transform: 'rotate(45deg)',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
      
      {/* Step indicators */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.02)_2px,transparent_2px),linear-gradient(90deg,rgba(0,153,255,0.02)_2px,transparent_2px)] bg-[size:60px_60px]" />
      
      {/* Process flow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,102,0.06),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,153,255,0.06),transparent_30%)]" />
    </div>
  );
};

export default HowItWorksBackground;