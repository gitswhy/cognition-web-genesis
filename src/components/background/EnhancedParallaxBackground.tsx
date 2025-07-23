import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GradientOrbProps {
  size: number;
  color: string;
  position: { x: string; y: string };
  delay?: number;
  duration?: number;
}

const GradientOrb: React.FC<GradientOrbProps> = ({
  size,
  color,
  position,
  delay = 0,
  duration = 8
}) => {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        left: position.x,
        top: position.y,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
        x: [0, 20, -10, 0],
        y: [0, -15, 25, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );
};

interface FloatingShapeProps {
  shape: 'circle' | 'square' | 'triangle';
  size: number;
  color: string;
  position: { x: string; y: string };
  delay?: number;
  speed?: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({
  shape,
  size,
  color,
  position,
  delay = 0,
  speed = 1
}) => {
  const getShapeStyles = () => {
    const baseStyles = {
      width: `${size}px`,
      height: `${size}px`,
      background: color,
      opacity: 0.1,
    };

    switch (shape) {
      case 'circle':
        return { ...baseStyles, borderRadius: '50%' };
      case 'triangle':
        return {
          width: 0,
          height: 0,
          background: 'transparent',
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
          opacity: 0.1,
        };
      default:
        return baseStyles;
    }
  };

  return (
    <motion.div
      className="absolute"
      style={{
        left: position.x,
        top: position.y,
      }}
      animate={{
        rotate: [0, 360],
        y: [0, -30, 0],
        x: [0, 15, -15, 0],
      }}
      transition={{
        duration: 12 / speed,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    >
      <div style={getShapeStyles()} />
    </motion.div>
  );
};

interface ScrollParallaxLayerProps {
  children: React.ReactNode;
  speed: number;
  className?: string;
}

const ScrollParallaxLayer: React.FC<ScrollParallaxLayerProps> = ({
  children,
  speed,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * speed;
          element.style.transform = `translate3d(0, ${rate}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`absolute inset-0 ${className}`}>
      {children}
    </div>
  );
};

interface EnhancedParallaxBackgroundProps {
  className?: string;
  intensity?: 'subtle' | 'medium' | 'intense';
}

const EnhancedParallaxBackground: React.FC<EnhancedParallaxBackgroundProps> = ({
  className = '',
  intensity = 'medium'
}) => {
  const intensitySettings = {
    subtle: { orbCount: 3, shapeCount: 5, maxSize: 200 },
    medium: { orbCount: 5, shapeCount: 8, maxSize: 300 },
    intense: { orbCount: 7, shapeCount: 12, maxSize: 400 }
  };

  const settings = intensitySettings[intensity];

  const gradientOrbs = Array.from({ length: settings.orbCount }, (_, i) => ({
    id: i,
    size: Math.random() * settings.maxSize + 100,
    color: Math.random() > 0.5 ? '#00ff66' : '#0099ff',
    position: {
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`
    },
    delay: Math.random() * 4,
    duration: Math.random() * 6 + 6
  }));

  const floatingShapes = Array.from({ length: settings.shapeCount }, (_, i) => ({
    id: i,
    shape: (['circle', 'square', 'triangle'] as const)[Math.floor(Math.random() * 3)],
    size: Math.random() * 20 + 10,
    color: Math.random() > 0.5 ? 'rgba(0, 255, 102, 0.1)' : 'rgba(0, 153, 255, 0.1)',
    position: {
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`
    },
    delay: Math.random() * 8,
    speed: Math.random() * 0.5 + 0.5
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradient Orbs - Slowest layer */}
      <ScrollParallaxLayer speed={-0.1} className="z-0">
        {gradientOrbs.map((orb) => (
          <GradientOrb
            key={`orb-${orb.id}`}
            size={orb.size}
            color={orb.color}
            position={orb.position}
            delay={orb.delay}
            duration={orb.duration}
          />
        ))}
      </ScrollParallaxLayer>

      {/* Floating Shapes - Medium speed layer */}
      <ScrollParallaxLayer speed={-0.2} className="z-10">
        {floatingShapes.map((shape) => (
          <FloatingShape
            key={`shape-${shape.id}`}
            shape={shape.shape}
            size={shape.size}
            color={shape.color}
            position={shape.position}
            delay={shape.delay}
            speed={shape.speed}
          />
        ))}
      </ScrollParallaxLayer>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          background: 'linear-gradient(45deg, rgba(0,255,102,0.02), rgba(0,153,255,0.02), rgba(0,255,102,0.02))',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default EnhancedParallaxBackground;