import React from 'react';

const OpenCoreBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Green-themed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-terminal-green/5 to-background animate-pulse" />
      
      {/* Floating code blocks */}
      <div className="absolute inset-0">
        {/* Large central code symbol */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-80 h-80 border-2 border-terminal-green/10 rounded-lg animate-spin" 
               style={{ animationDuration: '25s' }}>
            <div className="w-full h-full bg-gradient-to-br from-terminal-green/5 to-transparent" />
          </div>
        </div>
        
        {/* Floating brackets and symbols */}
        <div className="absolute top-1/4 left-1/5 text-6xl text-terminal-green/20 animate-bounce font-mono" 
             style={{ animationDelay: '0s', animationDuration: '3s' }}>{`{`}</div>
        <div className="absolute top-3/4 right-1/5 text-6xl text-terminal-green/20 animate-bounce font-mono" 
             style={{ animationDelay: '1.5s', animationDuration: '3s' }}>{`}`}</div>
        <div className="absolute top-1/3 right-1/3 text-4xl text-terminal-green/15 animate-bounce font-mono" 
             style={{ animationDelay: '0.5s', animationDuration: '4s' }}>&lt;/&gt;</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl text-terminal-green/15 animate-bounce font-mono" 
             style={{ animationDelay: '2s', animationDuration: '3.5s' }}>[]</div>
        
        {/* Code particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-terminal-green/20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        ))}
      </div>
      
      {/* Terminal grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Open source radial patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(0,255,102,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(0,255,102,0.05),transparent_40%)]" />
    </div>
  );
};

export default OpenCoreBackground;