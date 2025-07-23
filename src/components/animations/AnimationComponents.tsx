import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  delay = 0,
  className = '',
  hoverScale = 1.02,
  hoverY = -4
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      transition={{ 
        duration: prefersReducedMotion ? 0.1 : 0.8, 
        delay: delay * 0.3,
        ease: "easeOut" // Enhanced easing curve
      }}
      whileHover={prefersReducedMotion ? {} : { 
        scale: hoverScale,
        y: hoverY,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                ease: "easeOut" // Enhanced spring-like easing
              }
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    if (!inView) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const element = ref as any;
      if (element.current) {
        element.current.style.transform = `translateY(${scrolled * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView, speed, ref]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

interface ParallaxGridProps {
  className?: string;
  speed?: number;
  gridOpacity?: number;
  gridColor?: string;
}

export const ParallaxGrid: React.FC<ParallaxGridProps> = ({
  className = '',
  speed = 0.3,
  gridOpacity = 0.3,
  gridColor = 'rgba(0, 255, 102, 0.05)'
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (!inView) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const element = ref as any;
          if (element.current) {
            element.current.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView, speed, ref]);

  // Create animated grid SVG pattern for beautiful visuals
  const gridSvg = `data:image/svg+xml;base64,${btoa(`
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${gridColor}" stroke-width="1" opacity="0.8"/>
          <circle cx="20" cy="20" r="1" fill="${gridColor}" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
          </circle>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  `)}`;

  return (
    <div 
      ref={ref} 
      className={`absolute inset-0 bg-[url('${gridSvg}')] transform-gpu parallax-container ${className}`}
      style={{ opacity: gridOpacity }}
    />
  );
};

interface StaggeredFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
}

export const StaggeredFadeIn: React.FC<StaggeredFadeInProps> = ({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.4, // 400ms
  duration = 0.6
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20 
    },
    visible: {
      opacity: 1,
      y: 0
    },
  };

  const transition = {
    duration: prefersReducedMotion ? 0.1 : duration,
    ease: "easeOut" as const
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={childVariants} transition={transition}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  delay = 0,
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
      transition={{ 
        duration: prefersReducedMotion ? 0.1 : 1.0, 
        delay: delay * 0.3,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const TerminalCursor: React.FC = () => {
  return (
    <span className="terminal-cursor">|</span>
  );
};

interface HoverGlowProps {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
}

export const HoverGlow: React.FC<HoverGlowProps> = ({
  children,
  glowColor = 'hsl(var(--primary))',
  className = ''
}) => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.div
      whileHover={prefersReducedMotion ? {} : {
        boxShadow: `0 0 20px ${glowColor}30, 0 0 40px ${glowColor}20, 0 0 60px ${glowColor}10`,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};