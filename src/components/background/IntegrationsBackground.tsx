import React from 'react';

const IntegrationsBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Network connection gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-terminal-blue/4 via-terminal-green/2 to-background animate-pulse" />
      
      {/* Connection network */}
      <div className="absolute inset-0">
        {/* Central hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-terminal-blue/20 to-terminal-green/20 animate-pulse border-2 border-terminal-blue/30" />
        </div>
        
        {/* Connection nodes */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-terminal-green/10 border border-terminal-green/30 animate-bounce" 
             style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="absolute top-1/4 right-1/4 w-10 h-10 rounded-full bg-terminal-blue/10 border border-terminal-blue/30 animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-14 h-14 rounded-full bg-terminal-green/10 border border-terminal-green/30 animate-bounce" 
             style={{ animationDelay: '2s', animationDuration: '4.5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-11 h-11 rounded-full bg-terminal-blue/10 border border-terminal-blue/30 animate-bounce" 
             style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
        
        {/* Connection lines */}
        <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-terminal-blue/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-terminal-green/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-45 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-terminal-blue/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-12 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-terminal-green/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-12 animate-pulse" />
        
        {/* Data packets */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-terminal-blue/30 animate-ping"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Network grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,153,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.02)_1px,transparent_1px)] bg-[size:45px_45px]" />
      
      {/* Integration hubs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,153,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,255,102,0.06),transparent_40%)]" />
    </div>
  );
};

export default IntegrationsBackground;