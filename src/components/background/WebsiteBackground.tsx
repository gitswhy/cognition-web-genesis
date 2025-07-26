import React from 'react';
// Removed framer-motion import for performance
// import Wireframe3D from './Wireframe3D'; // Disabled for performance

interface WebsiteBackgroundProps {
  children: React.ReactNode;
}

const WebsiteBackground: React.FC<WebsiteBackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Multi-layer animated grid background */}
      <div className="absolute inset-0 terminal-grid opacity-20" />
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(0, 255, 102, 0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px)
             `,
             backgroundSize: '25px 25px'
           }} 
      />
      
      {/* Disabled 3D Wireframe for performance */}
      {/* <Wireframe3D /> */}

      {/* Simplified static gradient orbs - no animation for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-terminal-green/4 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-terminal-blue/4 rounded-full blur-3xl" />
      </div>

      {/* Static connection nodes - no animation for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[25%] left-8 w-1.5 h-1.5 bg-terminal-green/40 rounded-full" />
        <div className="absolute top-[65%] left-6 w-1.5 h-1.5 bg-terminal-blue/40 rounded-full" />
        <div className="absolute top-[45%] right-10 w-1.5 h-1.5 bg-terminal-green/40 rounded-full" />
      </div>


      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default WebsiteBackground;