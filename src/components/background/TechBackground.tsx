import React from 'react';
import { motion } from 'framer-motion';

interface DynamicBackgroundProps {
  children: React.ReactNode;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large Floating Circles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-terminal-green/20 bg-terminal-green/5"
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              left: `${10 + i * 15}%`,
              top: `${5 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Floating Squares */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`square-${i}`}
            className="absolute border border-terminal-blue/20 bg-terminal-blue/5"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              right: `${10 + i * 10}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              rotate: [0, 45, 0],
              y: [0, -25, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2,
            }}
          />
        ))}

        {/* Floating Triangles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`triangle-${i}`}
            className="absolute border-terminal-green/20"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${25 + i * 10}px solid transparent`,
              borderRight: `${25 + i * 10}px solid transparent`,
              borderBottom: `${40 + i * 15}px solid hsl(var(--terminal-green) / 0.1)`,
              left: `${70 + (i % 2) * 10}%`,
              top: `${10 + i * 18}%`,
            }}
            animate={{
              rotate: [0, 120, 240, 360],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.8,
            }}
          />
        ))}
      </div>

      {/* Flowing Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-terminal-green rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px hsl(var(--terminal-green))',
            }}
            animate={{
              y: [0, -100, -200, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              scale: [0.5, 1.2, 0.8, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.5, 0.9, 0.3],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-terminal-blue/20"
            style={{
              width: `${40 + i * 15}px`,
              height: `${40 + i * 15}px`,
              left: `${5 + i * 12}%`,
              top: `${60 + (i % 3) * 10}%`,
              boxShadow: '0 0 20px hsl(var(--terminal-blue))',
            }}
            animate={{
              scale: [1, 1.4, 1.2, 1.6, 1],
              opacity: [0.2, 0.7, 0.4, 0.8, 0.2],
              y: [0, -30, -60, -30, 0],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2.5,
            }}
          />
        ))}
      </div>

      {/* Energy Waves */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.path
            key={`wave-${i}`}
            d={`M 0 ${30 + i * 12} Q ${25 + i * 5} ${20 + i * 8} ${50 + i * 3} ${35 + i * 6} T 100 ${25 + i * 8}`}
            stroke="hsl(var(--terminal-green))"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0.5, 1, 0], 
              opacity: [0, 0.7, 0.3, 0.8, 0] 
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.8,
            }}
          />
        ))}
      </svg>

      {/* Dancing Duck with Hat */}
      <motion.div
        className="absolute bottom-8 left-8 text-6xl z-20"
        animate={{
          rotate: [-5, 5, -5],
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🦆
        </motion.div>
        <motion.div
          className="absolute -top-4 left-3 text-4xl"
          animate={{
            rotate: [-10, 10, -10],
            y: [0, -2, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🎩
        </motion.div>
      </motion.div>

      {/* Floating Text Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['✨', '💫', '⭐', '🌟', '💎'].map((emoji, i) => (
          <motion.div
            key={`emoji-${i}`}
            className="absolute text-2xl opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 12}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.2,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Terminal Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 102, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 102, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 70%, 
            hsl(var(--terminal-green) / 0.05) 0%, 
            transparent 50%),
            radial-gradient(circle at 70% 30%, 
            hsl(var(--terminal-blue) / 0.05) 0%, 
            transparent 50%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DynamicBackground;