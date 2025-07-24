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
      
      {/* Smooth flowing horizontal line animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Flowing energy streams with moving gradients */}
        <div className="absolute top-[15%] left-0 w-full h-px bg-terminal-green/20">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-green to-transparent"
            style={{ width: '30%' }}
            animate={{
              x: ['-30%', '130%']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0
            }}
          />
        </div>
        
        <div className="absolute top-[25%] left-0 w-full h-px bg-terminal-blue/15">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-blue to-transparent"
            style={{ width: '25%' }}
            animate={{
              x: ['-25%', '125%']
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </div>

        <div className="absolute top-[35%] left-0 w-full h-px bg-terminal-green/18">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-green/80 to-transparent"
            style={{ width: '35%' }}
            animate={{
              x: ['-35%', '135%']
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        <div className="absolute top-[45%] left-0 w-full h-px bg-terminal-blue/12">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-blue/70 to-transparent"
            style={{ width: '28%' }}
            animate={{
              x: ['-28%', '128%']
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="absolute top-[55%] left-0 w-full h-px bg-terminal-green/16">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-green/90 to-transparent"
            style={{ width: '40%' }}
            animate={{
              x: ['-40%', '140%']
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
          />
        </div>

        <div className="absolute top-[65%] left-0 w-full h-px bg-terminal-blue/20">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-blue/85 to-transparent"
            style={{ width: '32%' }}
            animate={{
              x: ['-32%', '132%']
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4.2
            }}
          />
        </div>

        <div className="absolute top-[75%] left-0 w-full h-px bg-terminal-green/14">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-green/75 to-transparent"
            style={{ width: '26%' }}
            animate={{
              x: ['-26%', '126%']
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8
            }}
          />
        </div>

        <div className="absolute top-[85%] left-0 w-full h-px bg-terminal-blue/18">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-blue/60 to-transparent"
            style={{ width: '38%' }}
            animate={{
              x: ['-38%', '138%']
            }}
            transition={{
              duration: 6.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.5
            }}
          />
        </div>

        {/* Additional thinner streams */}
        <div className="absolute top-[20%] left-0 w-full h-0.5 bg-terminal-green/8">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-green/50 to-transparent"
            style={{ width: '20%' }}
            animate={{
              x: ['-20%', '120%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          />
        </div>

        <div className="absolute top-[40%] left-0 w-full h-0.5 bg-terminal-blue/10">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-blue/45 to-transparent"
            style={{ width: '22%' }}
            animate={{
              x: ['-22%', '122%']
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4.8
            }}
          />
        </div>

        <div className="absolute top-[60%] left-0 w-full h-0.5 bg-terminal-green/12">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-green/55 to-transparent"
            style={{ width: '24%' }}
            animate={{
              x: ['-24%', '124%']
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
          />
        </div>

        <div className="absolute top-[80%] left-0 w-full h-0.5 bg-terminal-blue/8">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-terminal-blue/40 to-transparent"
            style={{ width: '18%' }}
            animate={{
              x: ['-18%', '118%']
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6
            }}
          />
        </div>
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