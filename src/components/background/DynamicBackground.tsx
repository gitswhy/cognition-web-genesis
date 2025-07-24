import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface DynamicBackgroundProps {
  children: React.ReactNode;
  variant?: string;
}

interface BackgroundVariant {
  name: string;
  baseColor: string;
  accentColor: string;
  motif: React.ReactNode;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ children, variant }) => {
  const location = useLocation();
  const [currentVariant, setCurrentVariant] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Scroll tracking for parallax effects
  const { scrollY, scrollYProgress } = useScroll();
  const scrollVelocity = useMotionValue(0);
  
  // Transform values for parallax layers
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);
  const midgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const foregroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  
  // Interactive mouse tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    }
  }, [mouseX, mouseY]);

  // Track scroll velocity for dynamic effects
  useEffect(() => {
    let lastScrollY = 0;
    let lastTime = Date.now();
    
    const updateScrollVelocity = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime > 0) {
        const velocity = Math.abs(deltaY / deltaTime);
        scrollVelocity.set(Math.min(velocity * 100, 10)); // Cap velocity
      }
      
      lastScrollY = currentScrollY;
      lastTime = currentTime;
    };

    const throttledUpdate = () => {
      requestAnimationFrame(updateScrollVelocity);
    };

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    return () => window.removeEventListener('scroll', throttledUpdate);
  }, [scrollVelocity]);

  // Mouse tracking setup
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Determine variant from route or prop
  useEffect(() => {
    if (variant) {
      setCurrentVariant(variant);
      return;
    }

    const path = location.pathname;
    if (path === '/') setCurrentVariant('home');
    else if (path === '/open-core') setCurrentVariant('opencore');
    else if (path === '/pro-edition') setCurrentVariant('pro');
    else if (path === '/how-it-works') setCurrentVariant('howitworks');
    else if (path === '/integrations') setCurrentVariant('integrations');
    else if (path === '/pricing') setCurrentVariant('pricing');
    else if (path === '/docs') setCurrentVariant('docs');
    else if (path.includes('/blog') || path.includes('/resources')) setCurrentVariant('blog');
    else if (path === '/community') setCurrentVariant('community');
    else if (path === '/about') setCurrentVariant('about');
    else setCurrentVariant('default');
  }, [location.pathname, variant]);

  const getBackgroundVariant = (variantName: string): BackgroundVariant => {
    const variants: Record<string, BackgroundVariant> = {
      home: {
        name: 'home',
        baseColor: '#0A0E1A',
        accentColor: '#00FF66',
        motif: <CognitionParticles />
      },
      opencore: {
        name: 'opencore',
        baseColor: '#0A0E1A',
        accentColor: '#00FF66',
        motif: <OpenSourceIcons />
      },
      pro: {
        name: 'pro',
        baseColor: '#0A0E1A',
        accentColor: '#00D4FF',
        motif: <VaultMotifs />
      },
      howitworks: {
        name: 'howitworks',
        baseColor: '#0A0E1A',
        accentColor: '#00FF66',
        motif: <WaveformLines />
      },
      integrations: {
        name: 'integrations',
        baseColor: '#0A0E1A',
        accentColor: '#00D4FF',
        motif: <NetworkNodes />
      },
      pricing: {
        name: 'pricing',
        baseColor: '#0A0E1A',
        accentColor: '#00FF66',
        motif: <MetricBars />
      },
      docs: {
        name: 'docs',
        baseColor: '#0A0E1A',
        accentColor: '#00FF66',
        motif: <CodeFragments />
      },
      blog: {
        name: 'blog',
        baseColor: '#0A0E1A',
        accentColor: '#00FF66',
        motif: <ClusteringOrbs />
      },
      community: {
        name: 'community',
        baseColor: '#0A0E1A',
        accentColor: '#00FF66',
        motif: <ClusteringOrbs />
      },
      about: {
        name: 'about',
        baseColor: '#0A0E1A',
        accentColor: '#00D4FF',
        motif: <ConnectedAvatars />
      },
      default: {
        name: 'default',
        baseColor: '#0A0E1A',
        accentColor: '#00FF66',
        motif: <TerminalGrid />
      }
    };

    return variants[variantName] || variants.default;
  };

  const bgVariant = getBackgroundVariant(currentVariant);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Enhanced Terminal Grid with Parallax */}
      <motion.div 
        className="absolute inset-0 terminal-grid" 
        style={{ y: backgroundY }}
      />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }} />
      
      {/* Waveform Undulations - Background Layer */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <WaveformUndulations scrollProgress={scrollYProgress} />
      </motion.div>
      
      {/* Dynamic Background Layer with Smooth Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgVariant.name}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${bgVariant.baseColor}ee 0%, ${bgVariant.baseColor} 100%)`,
            y: midgroundY
          }}
        >
          {/* Enhanced Motif with Mouse Interaction */}
          <motion.div
            style={{
              x: useTransform(mouseX, [0, 1], [-10, 10]),
              y: useTransform(mouseY, [0, 1], [-10, 10])
            }}
          >
            {React.cloneElement(bgVariant.motif as React.ReactElement, {
              mouseX,
              mouseY,
              scrollVelocity,
              scrollYProgress
            })}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles - Foreground Layer */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: foregroundY }}
      >
        <FloatingParticles 
          variant={currentVariant} 
          mouseX={mouseX} 
          mouseY={mouseY}
          scrollVelocity={scrollVelocity}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Enhanced Motif Components with Interactivity
interface MotifProps {
  mouseX?: any;
  mouseY?: any;
  scrollVelocity?: any;
  scrollYProgress?: any;
}

const CognitionParticles: React.FC<MotifProps> = ({ mouseX, mouseY, scrollVelocity }) => {
  const particleCount = window.innerWidth < 768 ? 12 : 25; // Responsive particle count
  
  return (
    <div className="absolute inset-0">
      {Array.from({ length: particleCount }).map((_, i) => {
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-terminal-green rounded-full"
            style={{
              left: `${initialX}%`,
              top: `${initialY}%`,
              boxShadow: '0 0 10px hsl(var(--terminal-green))',
              x: mouseX ? useTransform(mouseX, [0, 1], [-10, 10]) : 0,
              y: mouseY ? useTransform(mouseY, [0, 1], [-10, 10]) : 0,
              scale: scrollVelocity ? useTransform(scrollVelocity, [0, 5], [1, 1.5]) : 1,
              opacity: scrollVelocity ? useTransform(scrollVelocity, [0, 5], [0.3, 0.9]) : 0.3
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
          />
        );
      })}
      
      {/* Brainwave Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M ${10 + i * 20} 50 Q 50 ${30 + i * 10} ${90 - i * 15} 70`}
            stroke="hsl(var(--terminal-green))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const OpenSourceIcons: React.FC<MotifProps> = ({ mouseX, mouseY, scrollVelocity }) => (
  <div className="absolute inset-0">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-terminal-green opacity-20"
        style={{
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 90}%`,
          fontSize: '24px',
          x: mouseX ? useTransform(mouseX, [0, 1], [-5, 5]) : 0,
          scale: scrollVelocity ? useTransform(scrollVelocity, [0, 5], [1, 1.2]) : 1
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20 + Math.random() * 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        ⑂
      </motion.div>
    ))}
  </div>
);

const VaultMotifs: React.FC<MotifProps> = ({ scrollVelocity }) => (
  <div className="absolute inset-0">
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-blue-400 opacity-25"
        style={{
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 90}%`,
          fontSize: '32px',
          filter: 'drop-shadow(0 0 8px hsl(var(--terminal-blue)))',
          scale: scrollVelocity ? useTransform(scrollVelocity, [0, 5], [1, 1.3]) : 1
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.5, 0.25],
          rotateY: [0, 180, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      >
        🔒
      </motion.div>
    ))}
  </div>
);

const WaveformLines: React.FC<MotifProps> = ({ scrollYProgress }) => (
  <div className="absolute inset-0">
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-full h-0.5 bg-terminal-green opacity-20"
        style={{ 
          top: `${20 + i * 15}%`,
          scaleX: scrollYProgress ? useTransform(scrollYProgress, [0, 1], [0.5, 2]) : 1
        }}
        animate={{
          scaleX: [0.5, 1.5, 0.5],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.5,
        }}
      />
    ))}
  </div>
);

const NetworkNodes: React.FC<MotifProps> = ({ mouseX, mouseY }) => (
  <div className="absolute inset-0">
    {Array.from({ length: 12 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-blue-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          boxShadow: '0 0 6px hsl(var(--terminal-blue))',
          x: mouseX ? useTransform(mouseX, [0, 1], [-8, 8]) : 0,
          y: mouseY ? useTransform(mouseY, [0, 1], [-8, 8]) : 0
        }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const MetricBars: React.FC<MotifProps> = ({ scrollYProgress }) => (
  <div className="absolute inset-0 flex flex-col justify-center items-end pr-20 space-y-4 opacity-20">
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        className="h-2 bg-terminal-green"
        style={{
          width: scrollYProgress ? 
            useTransform(scrollYProgress, [0, 1], [`${30 + Math.random() * 20}%`, `${50 + Math.random() * 40}%`]) :
            `${30 + Math.random() * 40}%`
        }}
        animate={{ 
          opacity: [0.2, 0.6, 0.2],
          boxShadow: ['0 0 0px hsl(var(--terminal-green))', '0 0 10px hsl(var(--terminal-green))', '0 0 0px hsl(var(--terminal-green))']
        }}
        transition={{
          duration: 2,
          delay: i * 0.3,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
        }}
      />
    ))}
  </div>
);

const CodeFragments: React.FC<MotifProps> = ({ scrollVelocity }) => (
  <div className="absolute inset-0">
    {['git clone', 'npm install', 'yarn build', 'docker run', 'kubectl apply'].map((code, i) => (
      <motion.div
        key={i}
        className="absolute text-terminal-green font-mono text-sm opacity-20"
        style={{
          left: `${Math.random() * 80}%`,
          top: `${Math.random() * 80}%`,
          filter: 'drop-shadow(0 0 4px hsl(var(--terminal-green)))',
          scale: scrollVelocity ? useTransform(scrollVelocity, [0, 5], [1, 1.1]) : 1
        }}
        animate={{
          opacity: [0.2, 0.6, 0.2],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: Math.random() * 3,
        }}
      >
        {code}
      </motion.div>
    ))}
  </div>
);

const ClusteringOrbs: React.FC<MotifProps> = ({ mouseX, mouseY }) => (
  <div className="absolute inset-0">
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-terminal-green rounded-full opacity-25"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          boxShadow: '0 0 8px hsl(var(--terminal-green))',
          x: mouseX ? useTransform(mouseX, [0, 1], [0, 30]) : 0,
          y: mouseY ? useTransform(mouseY, [0, 1], [0, 30]) : 0
        }}
        animate={{
          x: [0, Math.random() * 100 - 50, 0],
          y: [0, Math.random() * 100 - 50, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 5 + Math.random() * 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

const ConnectedAvatars: React.FC<MotifProps> = ({ scrollVelocity }) => (
  <div className="absolute inset-0">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-30"
        style={{
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 90}%`,
          filter: 'drop-shadow(0 0 6px hsl(var(--terminal-blue)))',
          scale: scrollVelocity ? useTransform(scrollVelocity, [0, 5], [1, 1.4]) : 1
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const TerminalGrid: React.FC<MotifProps> = () => (
  <div className="absolute inset-0 opacity-10">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(#00FF66 1px, transparent 1px),
          linear-gradient(90deg, #00FF66 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
    />
  </div>
);

// New Enhanced Components
const WaveformUndulations: React.FC<{ scrollProgress: any }> = ({ scrollProgress }) => (
  <div className="absolute inset-0 opacity-10">
    <svg className="w-full h-full">
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.path
          key={i}
          d={`M 0 ${50 + i * 20} Q 25 ${30 + i * 15} 50 ${50 + i * 20} T 100 ${50 + i * 20}`}
          stroke="hsl(var(--terminal-green))"
          strokeWidth="2"
          fill="none"
          style={{
            pathLength: scrollProgress ? useTransform(scrollProgress, [0, 1], [0.2, 1]) : 0.5,
            opacity: scrollProgress ? useTransform(scrollProgress, [0, 1], [0.1, 0.3]) : 0.2
          }}
        />
      ))}
    </svg>
  </div>
);

const FloatingParticles: React.FC<{
  variant: string;
  mouseX: any;
  mouseY: any;
  scrollVelocity: any;
}> = ({ variant, mouseX, mouseY, scrollVelocity }) => {
  const particleCount = window.innerWidth < 768 ? 8 : 15; // Responsive
  const color = variant === 'pro' ? 'hsl(var(--terminal-blue))' : 'hsl(var(--terminal-green))';
  
  return (
    <div className="absolute inset-0">
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 6px ${color}`,
            x: mouseX ? useTransform(mouseX, [0, 1], [-20, 20]) : 0,
            y: mouseY ? useTransform(mouseY, [0, 1], [-20, 20]) : 0,
            scale: scrollVelocity ? useTransform(scrollVelocity, [0, 5], [1, 2]) : 1,
            opacity: scrollVelocity ? useTransform(scrollVelocity, [0, 5], [0.4, 0.9]) : 0.6
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

export default DynamicBackground;