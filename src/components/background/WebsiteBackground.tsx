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
      
      {/* Smooth wavy flowing lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="wavyGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--terminal-green))" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(var(--terminal-green))" stopOpacity="0.8" />
            <stop offset="70%" stopColor="hsl(var(--terminal-green))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--terminal-green))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wavyGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0.7" />
            <stop offset="70%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--terminal-blue))" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Wavy line 1 */}
        <motion.path
          d="M-400,120 Q-200,100 0,120 T400,120 T800,120 T1200,120 T1600,120"
          stroke="url(#wavyGradient1)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ x: -400, opacity: 0 }}
          animate={{ 
            x: [0, 400],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1]
          }}
        />

        {/* Wavy line 2 */}
        <motion.path
          d="M-400,200 Q-200,180 0,200 T400,200 T800,200 T1200,200 T1600,200"
          stroke="url(#wavyGradient2)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
          initial={{ x: -400, opacity: 0 }}
          animate={{ 
            x: [0, 400],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
            times: [0, 0.2, 0.8, 1]
          }}
        />

        {/* Wavy line 3 */}
        <motion.path
          d="M-400,280 Q-300,260 -100,280 Q100,300 300,280 Q500,260 700,280 Q900,300 1100,280 Q1300,260 1500,280"
          stroke="url(#wavyGradient1)"
          strokeWidth="1.8"
          fill="none"
          filter="url(#glow)"
          initial={{ x: -400, opacity: 0 }}
          animate={{ 
            x: [0, 400],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
            times: [0, 0.2, 0.8, 1]
          }}
        />

        {/* Wavy line 4 */}
        <motion.path
          d="M-400,360 Q-250,340 -50,360 Q150,380 350,360 Q550,340 750,360 Q950,380 1150,360 Q1350,340 1550,360"
          stroke="url(#wavyGradient2)"
          strokeWidth="2.2"
          fill="none"
          filter="url(#glow)"
          initial={{ x: -400, opacity: 0 }}
          animate={{ 
            x: [0, 400],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
            times: [0, 0.2, 0.8, 1]
          }}
        />

        {/* Wavy line 5 */}
        <motion.path
          d="M-400,440 Q-200,420 0,440 T400,440 T800,440 T1200,440 T1600,440"
          stroke="url(#wavyGradient1)"
          strokeWidth="1.6"
          fill="none"
          filter="url(#glow)"
          initial={{ x: -400, opacity: 0 }}
          animate={{ 
            x: [0, 400],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
            times: [0, 0.2, 0.8, 1]
          }}
        />

        {/* Wavy line 6 */}
        <motion.path
          d="M-400,520 Q-300,500 -100,520 Q100,540 300,520 Q500,500 700,520 Q900,540 1100,520 Q1300,500 1500,520"
          stroke="url(#wavyGradient2)"
          strokeWidth="1.4"
          fill="none"
          filter="url(#glow)"
          initial={{ x: -400, opacity: 0 }}
          animate={{ 
            x: [0, 400],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
            times: [0, 0.2, 0.8, 1]
          }}
        />

        {/* Wavy line 7 */}
        <motion.path
          d="M-400,600 Q-250,580 -50,600 Q150,620 350,600 Q550,580 750,600 Q950,620 1150,600 Q1350,580 1550,600"
          stroke="url(#wavyGradient1)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ x: -400, opacity: 0 }}
          animate={{ 
            x: [0, 400],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
            times: [0, 0.2, 0.8, 1]
          }}
        />

        {/* Wavy line 8 */}
        <motion.path
          d="M-400,680 Q-200,660 0,680 T400,680 T800,680 T1200,680 T1600,680"
          stroke="url(#wavyGradient2)"
          strokeWidth="1.7"
          fill="none"
          filter="url(#glow)"
          initial={{ x: -400, opacity: 0 }}
          animate={{ 
            x: [0, 400],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
            times: [0, 0.2, 0.8, 1]
          }}
        />
      </svg>

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