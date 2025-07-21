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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6, 
        delay: delay * 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: hoverScale,
        y: hoverY,
        transition: { duration: 0.2 }
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
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.8, 
        delay: delay * 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
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
  return (
    <motion.div
      whileHover={{
        boxShadow: `0 0 20px ${glowColor}30, 0 0 40px ${glowColor}20, 0 0 60px ${glowColor}10`,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};