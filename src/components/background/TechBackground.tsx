import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TechBackgroundProps {
  children: React.ReactNode;
}

const TechBackground: React.FC<TechBackgroundProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 102, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 102, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            y: useTransform(scrollYProgress, [0, 1], [0, -100])
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-terminal-green/20"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M ${10 + i * 20} ${20 + i * 15} Q ${50} ${30 + i * 10} ${90 - i * 10} ${60 + i * 5}`}
            stroke="hsl(var(--terminal-green))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2,
            }}
          />
        ))}
      </svg>

      {/* Glowing Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-terminal-green rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px hsl(var(--terminal-green))',
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.6, 0.2],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Code Rain Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <CodeRainColumn key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-terminal-bg/80 via-transparent to-terminal-bg/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Code Rain Column Component
const CodeRainColumn: React.FC<{ delay: number }> = ({ delay }) => {
  const characters = ['0', '1', 'git', 'npm', 'cd', '>', '$', 'ls', 'cat'];
  const columnRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={columnRef}
      className="absolute top-0 w-8 h-full opacity-30"
      style={{ left: `${Math.random() * 100}%` }}
      initial={{ y: -100 }}
      animate={{ y: '100vh' }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        ease: 'linear',
        delay: delay,
      }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="text-terminal-green font-mono text-xs mb-2 opacity-60"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        >
          {characters[Math.floor(Math.random() * characters.length)]}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechBackground;