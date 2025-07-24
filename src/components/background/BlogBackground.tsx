import React from 'react';

const BlogBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Content-focused gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-500/3 via-terminal-green/2 to-background animate-pulse" />
      
      {/* Blog content elements */}
      <div className="absolute inset-0">
        {/* Central article */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-48 h-64 bg-slate-100/3 border border-purple-400/20 rounded-lg animate-pulse shadow-lg">
            {/* Article header */}
            <div className="w-full h-16 bg-purple-500/5 rounded-t-lg" />
            {/* Article content lines */}
            <div className="p-4 space-y-2">
              <div className="w-4/5 h-1 bg-slate-400/10" />
              <div className="w-full h-1 bg-slate-400/10" />
              <div className="w-3/4 h-1 bg-slate-400/10" />
              <div className="w-5/6 h-1 bg-slate-400/10" />
              <div className="w-2/3 h-1 bg-slate-400/10" />
            </div>
          </div>
        </div>
        
        {/* Floating blog cards */}
        <div className="absolute top-1/4 left-1/6 w-32 h-40 bg-slate-100/2 border border-purple-400/15 rounded transform rotate-6 animate-bounce" 
             style={{ animationDelay: '0s', animationDuration: '4.5s' }}>
          <div className="w-full h-8 bg-purple-500/10 rounded-t" />
          <div className="p-2 space-y-1">
            <div className="w-3/4 h-0.5 bg-slate-400/10" />
            <div className="w-full h-0.5 bg-slate-400/10" />
            <div className="w-2/3 h-0.5 bg-slate-400/10" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/6 w-36 h-44 bg-slate-100/2 border border-purple-400/15 rounded transform -rotate-3 animate-bounce" 
             style={{ animationDelay: '1.5s', animationDuration: '3.8s' }}>
          <div className="w-full h-10 bg-purple-500/10 rounded-t" />
          <div className="p-2 space-y-1">
            <div className="w-4/5 h-0.5 bg-slate-400/10" />
            <div className="w-full h-0.5 bg-slate-400/10" />
          </div>
        </div>
        
        {/* Tags and categories */}
        <div className="absolute top-1/3 right-1/4 text-xs text-purple-400/30 animate-pulse" 
             style={{ animationDelay: '0.5s' }}>#DevSecOps</div>
        <div className="absolute bottom-1/3 left-1/4 text-xs text-terminal-green/30 animate-pulse" 
             style={{ animationDelay: '1s' }}>#Security</div>
        <div className="absolute top-2/3 left-1/3 text-xs text-purple-400/30 animate-pulse" 
             style={{ animationDelay: '2s' }}>#Tutorial</div>
        
        {/* Content particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/20 animate-ping"
            style={{
              top: `${25 + Math.random() * 50}%`,
              left: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Content grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.02)_1px,transparent_1px)] bg-[size:38px_38px]" />
      
      {/* Reading experience effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(168,85,247,0.06),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_60%,rgba(0,255,102,0.04),transparent_45%)]" />
    </div>
  );
};

export default BlogBackground;