import React from 'react';
import { motion } from 'framer-motion';

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
      
      {/* Dynamic wave patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, hsl(var(--terminal-green) / 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, hsl(var(--terminal-blue) / 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, hsl(var(--terminal-green) / 0.1) 0%, transparent 50%)
            `
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 30%, hsl(var(--terminal-green) / 0.15) 0%, transparent 50%),
               radial-gradient(circle at 80% 70%, hsl(var(--terminal-blue) / 0.15) 0%, transparent 50%),
               radial-gradient(circle at 40% 80%, hsl(var(--terminal-green) / 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at 60% 20%, hsl(var(--terminal-green) / 0.15) 0%, transparent 50%),
               radial-gradient(circle at 30% 60%, hsl(var(--terminal-blue) / 0.15) 0%, transparent 50%),
               radial-gradient(circle at 70% 90%, hsl(var(--terminal-green) / 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 30%, hsl(var(--terminal-green) / 0.15) 0%, transparent 50%),
               radial-gradient(circle at 80% 70%, hsl(var(--terminal-blue) / 0.15) 0%, transparent 50%),
               radial-gradient(circle at 40% 80%, hsl(var(--terminal-green) / 0.1) 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Animated circuit-like lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-terminal-green/30 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        />
        <motion.div
          className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-terminal-blue/30 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-terminal-green/25 to-transparent"
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Enhanced gradient orbs with more complexity */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-terminal-green/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 0.9, 1.1, 1],
            opacity: [0.2, 0.5, 0.3, 0.4, 0.2],
            x: [0, 20, -10, 15, 0],
            y: [0, -15, 10, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-60 h-60 bg-terminal-blue/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.4, 1, 1.2],
            opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
            x: [0, -25, 15, -10, 0],
            y: [0, 20, -15, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-40 h-40 bg-terminal-green/6 rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.5, 1, 1.2, 0.8],
            opacity: [0.4, 0.1, 0.6, 0.2, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Enhanced flowing energy lines with data streams */}
      <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="energyGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--terminal-green))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--terminal-green))" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="energyGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0.7" />
            <stop offset="50%" stopColor="hsl(var(--terminal-green))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main data flow line */}
        <motion.path
          d="M0,400 Q300,200 600,400 T1200,400"
          stroke="url(#energyGradient1)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary flow */}
        <motion.path
          d="M0,300 Q400,100 800,300 T1200,300"
          stroke="url(#energyGradient2)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Complex network path */}
        <motion.path
          d="M0,500 Q200,350 400,500 Q600,650 800,500 Q1000,350 1200,500"
          stroke="url(#energyGradient1)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </svg>

      {/* Dynamic geometric shapes with complex animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/6 w-8 h-8 border-2 border-terminal-green/40"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
            borderRadius: ["0%", "50%", "0%"]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-2/3 right-1/5 w-12 h-12 bg-terminal-blue/10 rounded-full border border-terminal-blue/30"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.7, 0.3],
            y: [0, -40, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        <motion.div
          className="absolute top-1/5 right-1/3 w-6 h-16 bg-gradient-to-b from-terminal-green/20 to-transparent rounded-full"
          animate={{
            rotate: [0, 360],
            opacity: [0.5, 1, 0.5],
            scaleY: [1, 1.5, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />

        {/* Pulsing nodes */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-terminal-green/60 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.8, 0.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/4 right-1/2 w-3 h-3 bg-terminal-blue/60 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.7, 0.1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1.5,
          }}
        />
      </div>

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default WebsiteBackground;