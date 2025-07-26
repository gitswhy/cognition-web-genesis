import React from 'react';

const OpenCoreBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Green-themed gradient background - static for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-terminal-green/5 to-background" />
      
      {/* Floating code blocks */}
      <div className="absolute inset-0">
        {/* Large central code symbol - simplified for performance */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-80 h-80 border-2 border-terminal-green/10 rounded-lg" />
        </div>
        
        {/* Static code symbols - no animation for performance */}
        <div className="absolute top-1/4 left-1/5 text-6xl text-terminal-green/20 font-mono">{`{`}</div>
        <div className="absolute top-3/4 right-1/5 text-6xl text-terminal-green/20 font-mono">{`}`}</div>
        <div className="absolute top-1/3 right-1/3 text-4xl text-terminal-green/15 font-mono">&lt;/&gt;</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl text-terminal-green/15 font-mono">[]</div>
        
        {/* Static code particles - no animation for performance */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-terminal-green/15"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
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