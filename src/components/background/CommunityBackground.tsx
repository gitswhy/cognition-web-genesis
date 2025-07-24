import React from 'react';

const CommunityBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Social connection gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-indigo-500/3 via-terminal-green/3 to-background animate-pulse" />
      
      {/* Community elements */}
      <div className="absolute inset-0">
        {/* Central community hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500/15 to-terminal-green/15 animate-pulse border-2 border-indigo-400/30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500/5 to-transparent" />
          </div>
        </div>
        
        {/* Community member nodes */}
        <div className="absolute top-1/4 left-1/5 w-8 h-8 rounded-full bg-indigo-400/15 border border-indigo-400/30 animate-bounce" 
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-terminal-green/15 border border-terminal-green/30 animate-bounce" 
             style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
        <div className="absolute top-1/5 right-1/5 w-10 h-10 rounded-full bg-indigo-400/15 border border-indigo-400/30 animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '2.8s' }} />
        <div className="absolute top-2/3 left-1/3 w-7 h-7 rounded-full bg-terminal-green/15 border border-terminal-green/30 animate-bounce" 
             style={{ animationDelay: '1.5s', animationDuration: '3.2s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-9 h-9 rounded-full bg-indigo-400/15 border border-indigo-400/30 animate-bounce" 
             style={{ animationDelay: '2s', animationDuration: '2.5s' }} />
        
        {/* Connection lines */}
        <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-indigo-400/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-30 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-terminal-green/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-30 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-indigo-400/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-75 animate-pulse" />
        
        {/* Chat bubbles */}
        <div className="absolute top-1/6 left-2/3 w-12 h-8 bg-indigo-400/10 rounded-lg animate-pulse" 
             style={{ animationDelay: '1s' }}>
          <div className="w-2/3 h-0.5 bg-indigo-400/20 mt-2 ml-1" />
          <div className="w-1/2 h-0.5 bg-indigo-400/20 mt-1 ml-1" />
        </div>
        <div className="absolute bottom-1/5 left-1/6 w-10 h-6 bg-terminal-green/10 rounded-lg animate-pulse" 
             style={{ animationDelay: '2.5s' }}>
          <div className="w-3/4 h-0.5 bg-terminal-green/20 mt-1.5 ml-1" />
        </div>
        
        {/* Social particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400/25 animate-ping"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Community grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.02)_1px,transparent_1px)] bg-[size:44px_44px]" />
      
      {/* Social connection effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_65%,rgba(0,255,102,0.06),transparent_40%)]" />
    </div>
  );
};

export default CommunityBackground;