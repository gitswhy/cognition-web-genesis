import React from 'react';

const AboutBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Professional gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-600/3 via-terminal-blue/2 to-background animate-pulse" />
      
      {/* Corporate elements */}
      <div className="absolute inset-0">
        {/* Central company logo area */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-36 h-36 border-4 border-slate-400/15 rounded-full animate-pulse">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-400/5 to-transparent" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-terminal-blue/20 rounded-full" />
          </div>
        </div>
        
        {/* Team member representations */}
        <div className="absolute top-1/4 left-1/6 w-12 h-16 bg-slate-400/8 rounded-t-full animate-bounce" 
             style={{ animationDelay: '0s', animationDuration: '4s' }}>
          <div className="w-8 h-8 bg-slate-400/15 rounded-full mx-auto mt-2" />
        </div>
        <div className="absolute top-1/3 right-1/6 w-10 h-14 bg-slate-400/8 rounded-t-full animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
          <div className="w-6 h-6 bg-slate-400/15 rounded-full mx-auto mt-2" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-14 h-18 bg-slate-400/8 rounded-t-full animate-bounce" 
             style={{ animationDelay: '2s', animationDuration: '4.2s' }}>
          <div className="w-10 h-10 bg-slate-400/15 rounded-full mx-auto mt-2" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-11 h-15 bg-slate-400/8 rounded-t-full animate-bounce" 
             style={{ animationDelay: '1.5s', animationDuration: '3.8s' }}>
          <div className="w-7 h-7 bg-slate-400/15 rounded-full mx-auto mt-2" />
        </div>
        
        {/* Mission/Vision elements */}
        <div className="absolute top-1/5 left-1/3 w-20 h-12 bg-terminal-blue/5 rounded animate-pulse" 
             style={{ animationDelay: '0.5s' }}>
          <div className="w-3/4 h-1 bg-terminal-blue/15 mt-3 mx-auto" />
          <div className="w-1/2 h-1 bg-terminal-blue/15 mt-1 mx-auto" />
        </div>
        <div className="absolute bottom-1/5 right-1/3 w-24 h-14 bg-slate-400/5 rounded animate-pulse" 
             style={{ animationDelay: '2.5s' }}>
          <div className="w-4/5 h-1 bg-slate-400/15 mt-4 mx-auto" />
          <div className="w-2/3 h-1 bg-slate-400/15 mt-1 mx-auto" />
        </div>
        
        {/* Achievement stars */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-lg text-terminal-blue/15 animate-pulse"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2.5 + Math.random() * 2}s`
            }}
          >
            ★
          </div>
        ))}
      </div>
      
      {/* Professional grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,153,255,0.02)_1px,transparent_1px)] bg-[size:46px_46px]" />
      
      {/* Corporate identity effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_40%,rgba(100,116,139,0.06),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_60%,rgba(0,153,255,0.05),transparent_45%)]" />
    </div>
  );
};

export default AboutBackground;