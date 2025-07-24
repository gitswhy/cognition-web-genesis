import React from 'react';

const DocsBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Documentation gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-500/3 via-terminal-blue/2 to-background animate-pulse" />
      
      {/* Documentation elements */}
      <div className="absolute inset-0">
        {/* Central document stack */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-40 bg-slate-100/5 border border-slate-400/20 rounded animate-pulse">
            <div className="w-full h-2 bg-slate-400/10 mt-4" />
            <div className="w-3/4 h-1 bg-slate-400/10 mt-2 ml-2" />
            <div className="w-5/6 h-1 bg-slate-400/10 mt-1 ml-2" />
            <div className="w-2/3 h-1 bg-slate-400/10 mt-1 ml-2" />
          </div>
        </div>
        
        {/* Floating document pages */}
        <div className="absolute top-1/4 left-1/5 w-24 h-32 bg-slate-100/3 border border-slate-400/15 rounded transform rotate-12 animate-bounce" 
             style={{ animationDelay: '0s', animationDuration: '4s' }}>
          <div className="w-3/4 h-1 bg-slate-400/10 mt-3 ml-2" />
          <div className="w-5/6 h-1 bg-slate-400/10 mt-1 ml-2" />
        </div>
        <div className="absolute top-2/3 right-1/5 w-28 h-36 bg-slate-100/3 border border-slate-400/15 rounded transform -rotate-6 animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
          <div className="w-4/5 h-1 bg-slate-400/10 mt-4 ml-2" />
          <div className="w-2/3 h-1 bg-slate-400/10 mt-1 ml-2" />
        </div>
        
        {/* Code snippets */}
        <div className="absolute top-1/3 left-2/3 w-20 h-16 bg-terminal-bg/20 border border-terminal-green/20 rounded font-mono text-xs animate-pulse" 
             style={{ animationDelay: '2s' }}>
          <div className="w-3/4 h-0.5 bg-terminal-green/20 mt-2 ml-1" />
          <div className="w-1/2 h-0.5 bg-terminal-green/20 mt-1 ml-2" />
          <div className="w-5/6 h-0.5 bg-terminal-green/20 mt-1 ml-1" />
        </div>
        
        {/* Text lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 bg-slate-400/10 animate-pulse"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 60}%`,
              width: `${20 + Math.random() * 40}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Documentation grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,153,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px]" />
      
      {/* Knowledge base effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(100,116,139,0.05),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(0,153,255,0.04),transparent_40%)]" />
    </div>
  );
};

export default DocsBackground;