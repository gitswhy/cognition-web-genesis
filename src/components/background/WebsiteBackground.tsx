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
      
      {/* Multiple animated horizontal data streams */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary data streams */}
        <motion.div
          className="absolute top-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-terminal-green/40 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        />
        <motion.div
          className="absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-terminal-blue/35 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-[35%] left-0 w-full h-px bg-gradient-to-r from-transparent via-terminal-green/30 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />
        <motion.div
          className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-terminal-blue/25 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div
          className="absolute top-[55%] left-0 w-full h-px bg-gradient-to-r from-transparent via-terminal-green/35 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.9, 0]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute top-[65%] left-0 w-full h-px bg-gradient-to-r from-transparent via-terminal-blue/40 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute top-[75%] left-0 w-full h-px bg-gradient-to-r from-transparent via-terminal-green/25 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-[85%] left-0 w-full h-px bg-gradient-to-r from-transparent via-terminal-blue/30 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Secondary thinner streams for density */}
        <motion.div
          className="absolute top-[20%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-terminal-green/20 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        />
        <motion.div
          className="absolute top-[40%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-terminal-blue/15 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.7
          }}
        />
        <motion.div
          className="absolute top-[60%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-terminal-green/18 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.45, 0]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.8
          }}
        />
        <motion.div
          className="absolute top-[80%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-terminal-blue/12 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5.2
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

      {/* Simplified energy flows to complement the data streams */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--terminal-green))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--terminal-green))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--terminal-green))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="streamGradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Moving data packets along the streams */}
        <motion.circle
          cx="0"
          cy="120"
          r="2"
          fill="hsl(var(--terminal-green))"
          opacity="0.8"
          animate={{
            cx: [0, 1200, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="0"
          cy="200"
          r="1.5"
          fill="hsl(var(--terminal-blue))"
          opacity="0.6"
          animate={{
            cx: [0, 1200, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.circle
          cx="0"
          cy="440"
          r="2.5"
          fill="hsl(var(--terminal-green))"
          opacity="0.7"
          animate={{
            cx: [0, 1200, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.circle
          cx="0"
          cy="520"
          r="1.8"
          fill="hsl(var(--terminal-blue))"
          opacity="0.5"
          animate={{
            cx: [0, 1200, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </svg>

      {/* Connection nodes and intersections */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side connection nodes */}
        <motion.div
          className="absolute top-[25%] left-8 w-2 h-2 bg-terminal-green/70 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[45%] left-12 w-1.5 h-1.5 bg-terminal-blue/60 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-[65%] left-6 w-1.8 h-1.8 bg-terminal-green/60 rounded-full"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />

        {/* Right side connection nodes */}
        <motion.div
          className="absolute top-[35%] right-10 w-2 h-2 bg-terminal-blue/70 rounded-full"
          animate={{
            scale: [1, 1.7, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-[55%] right-8 w-1.5 h-1.5 bg-terminal-green/65 rounded-full"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-[75%] right-12 w-1.8 h-1.8 bg-terminal-blue/55 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
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