import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface OrbitalBackgroundProps {
  children: React.ReactNode;
}

const OrbitalBackground: React.FC<OrbitalBackgroundProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  
  // Orbital rotation values
  const sphereRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const orbitalX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const orbitalY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Central Sphere */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
        style={{
          rotate: sphereRotation,
          x: orbitalX,
          y: orbitalY,
        }}
      >
        {/* Sphere Core */}
        <div className="relative w-full h-full rounded-full border-2 border-terminal-green/20 bg-gradient-radial from-terminal-green/5 to-transparent">
          
          {/* Orbital Rings */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 border border-terminal-green/15 rounded-full"
              style={{
                width: `${120 + i * 40}%`,
                height: `${120 + i * 40}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                rotate: [(i % 2 === 0 ? 0 : 180), (i % 2 === 0 ? 360 : -180)],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}

          {/* Orbital Particles */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180); // Convert to radians
            const radius = 80 + (i % 3) * 30;
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-terminal-green rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  boxShadow: '0 0 10px hsl(var(--terminal-green))',
                }}
                animate={{
                  x: [
                    Math.cos(angle) * radius,
                    Math.cos(angle + Math.PI) * radius,
                    Math.cos(angle) * radius
                  ],
                  y: [
                    Math.sin(angle) * radius,
                    Math.sin(angle + Math.PI) * radius,
                    Math.sin(angle) * radius
                  ],
                  scale: [0.5, 1, 0.5],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 8 + (i % 3) * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              />
            );
          })}

          {/* Inner Glow Pulses */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 rounded-full border border-terminal-blue/20"
              style={{
                width: `${60 + i * 30}%`,
                height: `${60 + i * 30}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Constellation Points */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-terminal-green rounded-full opacity-60"
            style={{
              left: `${10 + (i * 67) % 80}%`,
              top: `${15 + (i * 43) % 70}%`,
              boxShadow: '0 0 6px hsl(var(--terminal-green))',
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Grid Lines that Follow Orbital Motion */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 102, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 102, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          x: useTransform(scrollYProgress, [0, 1], [0, -30]),
          y: useTransform(scrollYProgress, [0, 1], [0, -20]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 5]),
        }}
      />

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.circle
            key={i}
            cx="50%"
            cy="50%"
            r={`${30 + i * 15}%`}
            stroke="hsl(var(--terminal-green))"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2,
            }}
          />
        ))}
      </svg>

      {/* Subtle Radial Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            transparent 0%, 
            hsl(var(--terminal-bg) / 0.3) 70%, 
            hsl(var(--terminal-bg) / 0.8) 100%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default OrbitalBackground;