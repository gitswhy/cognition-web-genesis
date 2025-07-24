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
      
      {/* Floating wireframe 3D geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wireframe Cube 1 */}
        <motion.div
          className="absolute w-16 h-16 border border-terminal-green/40"
          style={{
            top: '20%',
            left: '10%',
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 border border-terminal-green/30 transform translate-z-8" />
          <div className="absolute w-full h-0 border-l border-terminal-green/30 transform rotate-45 origin-left" />
          <div className="absolute w-0 h-full border-t border-terminal-green/30 transform rotate-45 origin-top" />
        </motion.div>

        {/* Wireframe Pyramid */}
        <motion.div
          className="absolute"
          style={{
            top: '15%',
            right: '15%',
            width: '60px',
            height: '60px',
          }}
          animate={{
            rotateX: [0, 180, 360],
            rotateZ: [0, 180, 360],
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <path
              d="M30,10 L10,50 L50,50 Z"
              fill="none"
              stroke="hsl(var(--terminal-blue))"
              strokeWidth="1"
              opacity="0.6"
            />
            <path
              d="M30,10 L10,50 M30,10 L50,50 M30,10 L30,35"
              stroke="hsl(var(--terminal-blue))"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        {/* Wireframe Octahedron */}
        <motion.div
          className="absolute"
          style={{
            top: '45%',
            left: '20%',
            width: '50px',
            height: '50px',
          }}
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 180, 0],
            y: [0, -25, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <svg viewBox="0 0 50 50" className="w-full h-full">
            <path
              d="M25,5 L45,25 L25,45 L5,25 Z"
              fill="none"
              stroke="hsl(var(--terminal-green))"
              strokeWidth="1"
              opacity="0.7"
            />
            <path
              d="M25,5 L25,45 M5,25 L45,25"
              stroke="hsl(var(--terminal-green))"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        {/* Wireframe Dodecahedron-like shape */}
        <motion.div
          className="absolute"
          style={{
            top: '60%',
            right: '25%',
            width: '70px',
            height: '70px',
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [360, 0],
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <svg viewBox="0 0 70 70" className="w-full h-full">
            <polygon
              points="35,10 55,20 50,40 20,40 15,20"
              fill="none"
              stroke="hsl(var(--terminal-blue))"
              strokeWidth="1"
              opacity="0.6"
            />
            <polygon
              points="35,25 50,30 45,50 25,50 20,30"
              fill="none"
              stroke="hsl(var(--terminal-blue))"
              strokeWidth="1"
              opacity="0.4"
            />
            <path
              d="M35,10 L35,25 M55,20 L50,30 M50,40 L45,50 M20,40 L25,50 M15,20 L20,30"
              stroke="hsl(var(--terminal-blue))"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </motion.div>

        {/* Wireframe Tetrahedron */}
        <motion.div
          className="absolute"
          style={{
            top: '75%',
            left: '15%',
            width: '45px',
            height: '45px',
          }}
          animate={{
            rotateZ: [0, 360],
            rotateY: [0, 180, 360],
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <svg viewBox="0 0 45 45" className="w-full h-full">
            <path
              d="M22.5,5 L40,35 L5,35 Z"
              fill="none"
              stroke="hsl(var(--terminal-green))"
              strokeWidth="1"
              opacity="0.7"
            />
            <path
              d="M22.5,5 L12.5,35 M22.5,5 L32.5,35"
              stroke="hsl(var(--terminal-green))"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        {/* Complex Wireframe Cube */}
        <motion.div
          className="absolute w-20 h-20"
          style={{
            top: '30%',
            right: '10%',
          }}
          animate={{
            rotateX: [45, 405],
            rotateY: [45, 405],
            y: [0, 25, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
        >
          <div className="absolute inset-0 border border-terminal-green/50 transform-gpu" />
          <div className="absolute inset-1 border border-terminal-green/30 transform translate-x-2 translate-y-2" />
          <div className="absolute top-0 left-0 w-full border-b border-terminal-green/40 transform skew-x-12" />
          <div className="absolute top-0 left-0 h-full border-r border-terminal-green/40 transform skew-y-12" />
        </motion.div>

        {/* Floating Wireframe Hexagon */}
        <motion.div
          className="absolute"
          style={{
            top: '35%',
            left: '50%',
            width: '55px',
            height: '55px',
          }}
          animate={{
            rotateZ: [0, 360],
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <svg viewBox="0 0 55 55" className="w-full h-full">
            <polygon
              points="27.5,5 45,15 45,35 27.5,45 10,35 10,15"
              fill="none"
              stroke="hsl(var(--terminal-blue))"
              strokeWidth="1"
              opacity="0.6"
            />
            <path
              d="M27.5,5 L27.5,45 M45,15 L10,35 M45,35 L10,15"
              stroke="hsl(var(--terminal-blue))"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </motion.div>

        {/* Small floating cubes */}
        <motion.div
          className="absolute w-8 h-8 border border-terminal-green/30"
          style={{ top: '80%', right: '40%' }}
          animate={{
            rotateX: [0, 360],
            rotateY: [360, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute w-10 h-10 border border-terminal-blue/40"
          style={{ top: '10%', left: '60%' }}
          animate={{
            rotateZ: [0, 360],
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5,
          }}
        />

        <motion.div
          className="absolute w-6 h-6 border border-terminal-green/50"
          style={{ top: '50%', left: '80%' }}
          animate={{
            rotateX: [0, 180, 360],
            rotateY: [0, 360],
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
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