import React from 'react';
import { motion } from 'framer-motion';
import Wireframe3D from './Wireframe3D';

interface WebsiteBackgroundProps {
  children: React.ReactNode;
}

const WebsiteBackground: React.FC<WebsiteBackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Multi-layer animated grid background */}
      <motion.div 
        className="absolute inset-0 terminal-grid opacity-20"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 102, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px'
        }} 
      />
      
      {/* Enhanced 3D Wireframe background */}
      <Wireframe3D />

      {/* Simple 3D wireframe shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating wireframe cube */}
        <div className="absolute top-20 left-10 w-16 h-16 opacity-30">
          <div className="relative w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
            <div className="absolute inset-0 border border-terminal-green/40 transform rotate-12" 
                 style={{ transformStyle: 'preserve-3d' }}></div>
            <div className="absolute inset-0 border border-terminal-green/40 transform rotate-12 translate-x-2 translate-y-2" 
                 style={{ transformStyle: 'preserve-3d' }}></div>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-terminal-green/30 transform rotate-12"></div>
            <div className="absolute top-0 left-0 h-full w-0.5 bg-terminal-green/30 transform rotate-12"></div>
          </div>
        </div>

        {/* Wireframe pyramid */}
        <div className="absolute top-40 right-20 w-12 h-12 opacity-25">
          <div className="relative w-full h-full" style={{ 
            animation: 'float 15s ease-in-out infinite',
            transformStyle: 'preserve-3d' 
          }}>
            <svg width="48" height="48" className="animate-spin" style={{ animationDuration: '25s' }}>
              <polygon points="24,4 44,40 4,40" fill="none" stroke="hsl(var(--terminal-blue))" strokeWidth="1" opacity="0.6"/>
              <line x1="24" y1="4" x2="24" y2="40" stroke="hsl(var(--terminal-blue))" strokeWidth="0.5" opacity="0.4"/>
              <line x1="24" y1="4" x2="34" y2="40" stroke="hsl(var(--terminal-blue))" strokeWidth="0.5" opacity="0.4"/>
              <line x1="24" y1="4" x2="14" y2="40" stroke="hsl(var(--terminal-blue))" strokeWidth="0.5" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* Wireframe hexagon */}
        <div className="absolute bottom-32 left-1/4 w-14 h-14 opacity-20">
          <div className="relative w-full h-full" style={{ 
            animation: 'pulse 12s ease-in-out infinite',
            transformStyle: 'preserve-3d' 
          }}>
            <svg width="56" height="56" className="animate-spin" style={{ animationDuration: '30s' }}>
              <polygon points="28,4 49,16 49,40 28,52 7,40 7,16" fill="none" stroke="hsl(var(--terminal-green))" strokeWidth="1" opacity="0.5"/>
              <line x1="28" y1="4" x2="28" y2="52" stroke="hsl(var(--terminal-green))" strokeWidth="0.5" opacity="0.3"/>
              <line x1="7" y1="16" x2="49" y2="40" stroke="hsl(var(--terminal-green))" strokeWidth="0.5" opacity="0.3"/>
              <line x1="7" y1="40" x2="49" y2="16" stroke="hsl(var(--terminal-green))" strokeWidth="0.5" opacity="0.3"/>
            </svg>
          </div>
        </div>

        {/* Wireframe diamond */}
        <div className="absolute top-60 right-1/3 w-10 h-10 opacity-25">
          <div className="relative w-full h-full" style={{ 
            animation: 'bounce 18s ease-in-out infinite',
            transformStyle: 'preserve-3d' 
          }}>
            <svg width="40" height="40" className="animate-spin" style={{ animationDuration: '35s' }}>
              <polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="hsl(var(--terminal-blue))" strokeWidth="1" opacity="0.4"/>
              <line x1="20" y1="2" x2="20" y2="38" stroke="hsl(var(--terminal-blue))" strokeWidth="0.5" opacity="0.3"/>
              <line x1="2" y1="20" x2="38" y2="20" stroke="hsl(var(--terminal-blue))" strokeWidth="0.5" opacity="0.3"/>
            </svg>
          </div>
        </div>

        {/* Small floating wireframe dots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 border border-terminal-green/30 opacity-40"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              transform: 'rotate3d(1, 1, 1, 45deg)',
            }}
          />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-60 h-60 bg-terminal-green/4 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-terminal-blue/4 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Animated connection nodes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-[25%] left-8 w-1.5 h-1.5 bg-terminal-green/40 rounded-full"
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-[65%] left-6 w-1.5 h-1.5 bg-terminal-blue/40 rounded-full"
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-[45%] right-10 w-1.5 h-1.5 bg-terminal-green/40 rounded-full"
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-terminal-green/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default WebsiteBackground;