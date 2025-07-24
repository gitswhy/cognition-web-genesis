import React from 'react';
import { motion } from 'framer-motion';

interface DynamicBackgroundProps {
  children: React.ReactNode;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* 3D Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* 3D Cubes */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`cube-${i}`}
            className="absolute"
            style={{
              left: `${15 + i * 20}%`,
              top: `${10 + i * 15}%`,
              width: `${60 + i * 15}px`,
              height: `${60 + i * 15}px`,
              background: `linear-gradient(45deg, 
                hsl(var(--terminal-green) / 0.2), 
                hsl(var(--terminal-green) / 0.1))`,
              border: '1px solid hsl(var(--terminal-green) / 0.3)',
              transform: 'rotateX(45deg) rotateY(45deg)',
              boxShadow: `
                0 0 20px hsl(var(--terminal-green) / 0.2),
                inset 0 0 20px hsl(var(--terminal-green) / 0.1)
              `,
            }}
            animate={{
              rotateX: [45, 135, 45],
              rotateY: [45, 135, 45],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}

        {/* 3D Dodecahedrons */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`dodeca-${i}`}
            className="absolute"
            style={{
              right: `${10 + i * 15}%`,
              top: `${20 + i * 20}%`,
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              background: `conic-gradient(
                hsl(var(--terminal-blue) / 0.3), 
                hsl(var(--terminal-green) / 0.2), 
                hsl(var(--terminal-blue) / 0.3)
              )`,
              borderRadius: '30%',
              border: '2px solid hsl(var(--terminal-blue) / 0.4)',
              clipPath: 'polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)',
              boxShadow: `
                0 0 30px hsl(var(--terminal-blue) / 0.3),
                inset 0 0 15px hsl(var(--terminal-blue) / 0.2)
              `,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1.1, 1.4, 1],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2,
            }}
          />
        ))}

        {/* 3D Pyramids */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`pyramid-${i}`}
            className="absolute"
            style={{
              left: `${60 + (i % 2) * 25}%`,
              top: `${5 + i * 18}%`,
              width: 0,
              height: 0,
              borderLeft: `${30 + i * 8}px solid transparent`,
              borderRight: `${30 + i * 8}px solid transparent`,
              borderBottom: `${50 + i * 12}px solid hsl(var(--terminal-green) / 0.2)`,
              filter: `drop-shadow(0 0 15px hsl(var(--terminal-green) / 0.4))`,
              transform: 'rotateX(20deg) rotateZ(45deg)',
            }}
            animate={{
              rotateZ: [45, 225, 45],
              rotateX: [20, 80, 20],
              y: [0, -60, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.8,
            }}
          />
        ))}

        {/* 3D Torus/Rings */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`torus-${i}`}
            className="absolute rounded-full border-4"
            style={{
              left: `${25 + i * 30}%`,
              top: `${50 + i * 10}%`,
              width: `${100 + i * 25}px`,
              height: `${100 + i * 25}px`,
              borderColor: `hsl(var(--terminal-green) / 0.3)`,
              borderStyle: 'dashed',
              background: `radial-gradient(circle at 30% 30%, 
                hsl(var(--terminal-green) / 0.1), 
                transparent 70%)`,
              boxShadow: `
                0 0 25px hsl(var(--terminal-green) / 0.2),
                inset 0 0 25px hsl(var(--terminal-green) / 0.1)
              `,
              transform: 'rotateX(60deg)',
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [60, 120, 60],
              scale: [1, 1.2, 1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15 + i * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2.5,
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

      {/* Enhanced Energy Waves */}
      <svg className="absolute inset-0 w-full h-full opacity-25">
        {/* Top flowing lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.path
            key={`wave-${i}`}
            d={`M 0 ${15 + i * 8} Q ${15 + i * 3} ${10 + i * 6} ${30 + i * 4} ${20 + i * 5} T ${60 + i * 2} ${18 + i * 7} T 100 ${12 + i * 6}`}
            stroke={i % 3 === 0 ? "hsl(var(--terminal-green))" : i % 3 === 1 ? "hsl(var(--terminal-blue))" : "hsl(var(--terminal-green))"}
            strokeWidth={i % 2 === 0 ? "2" : "1"}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0.3, 1, 0], 
              opacity: [0, 0.8, 0.4, 0.9, 0] 
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
          />
        ))}
        
        {/* Side flowing lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.path
            key={`side-wave-${i}`}
            d={`M ${85 + i * 2} 0 Q ${80 + i * 3} ${25 + i * 8} ${90 + i} ${50 + i * 6} T ${95 - i} ${75 + i * 4} T ${88 + i * 2} 100`}
            stroke="hsl(var(--terminal-blue))"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,10"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1, 0.5, 1, 0],
              strokeDashoffset: [0, -20, -40]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.2,
            }}
          />
        ))}
      </svg>



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