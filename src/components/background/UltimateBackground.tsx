import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface UltimateBackgroundProps {
  children: React.ReactNode;
  variant?: string;
}

const UltimateBackground: React.FC<UltimateBackgroundProps> = ({ children, variant }) => {
  const location = useLocation();
  const [currentVariant, setCurrentVariant] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollY, scrollYProgress } = useScroll();
  
  // Determine variant
  useEffect(() => {
    if (variant) {
      setCurrentVariant(variant);
      return;
    }
    
    const path = location.pathname;
    if (path === '/') setCurrentVariant('home');
    else if (path === '/open-core') setCurrentVariant('opencore');
    else if (path === '/pro-edition') setCurrentVariant('pro');
    else if (path === '/docs') setCurrentVariant('docs');
    else setCurrentVariant('default');
  }, [location.pathname, variant]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Base Dark Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0F1419] to-[#0A0E1A]" />
      
      {/* Flowing Halftone Pattern */}
      <HalftoneFlow variant={currentVariant} mouseX={mouseX} mouseY={mouseY} scrollY={scrollY} />
      
      {/* Dynamic Grid System */}
      <QuantumGrid scrollYProgress={scrollYProgress} />
      
      {/* Energy Field */}
      <EnergyField variant={currentVariant} mouseX={mouseX} mouseY={mouseY} />
      
      {/* Flowing Particles */}
      <ParticleStream scrollY={scrollY} scrollYProgress={scrollYProgress} />
      
      {/* Neural Network Lines */}
      <NeuralNetwork variant={currentVariant} />
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

// Halftone Flow Component
const HalftoneFlow: React.FC<{
  variant: string;
  mouseX: any;
  mouseY: any;
  scrollY: any;
}> = ({ variant, mouseX, mouseY, scrollY }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const getColors = (variant: string) => {
      const themes = {
        home: ['#00FF66', '#00D4FF', '#FFFFFF'],
        pro: ['#00D4FF', '#9D4EDD', '#00FF66'],
        opencore: ['#00FF66', '#FFD700', '#FF4081'],
        docs: ['#00FF66', '#FFA500', '#00D4FF'],
        default: ['#00FF66', '#00D4FF', '#FFFFFF']
      };
      return themes[variant as keyof typeof themes] || themes.default;
    };

    const colors = getColors(variant);

    const animate = () => {
      time += 0.008;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dotSpacing = 15;
      const currentMouseX = mouseX.get() * canvas.width;
      const currentMouseY = mouseY.get() * canvas.height;

      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          // Multiple wave layers for complex flow
          const wave1 = Math.sin((x * 0.01) + (y * 0.008) + time * 3) * 40;
          const wave2 = Math.cos((x * 0.006) + (y * 0.01) + time * 2) * 30;
          const wave3 = Math.sin((x * 0.008) + (y * 0.006) + time * 4) * 25;
          const wave4 = Math.cos((x * 0.004) + (y * 0.004) + time * 1.5) * 35;
          
          const combinedWave = (wave1 + wave2 + wave3 + wave4) / 4;
          
          // Distance calculations
          const distanceFromMouse = Math.sqrt(
            Math.pow(x - currentMouseX, 2) + Math.pow(y - currentMouseY, 2)
          );
          
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          );

          // Dynamic size calculation
          const baseSize = 1 + Math.abs(combinedWave * 0.08);
          const mouseEffect = Math.max(0, 1 - (distanceFromMouse / 150));
          const centerEffect = 1 - (distanceFromCenter / (Math.max(canvas.width, canvas.height) * 0.7));
          
          const finalSize = baseSize + (mouseEffect * 6) + (centerEffect * 2);

          // Color selection with smooth transitions
          const colorPhase = (x + y + time * 80 + combinedWave) * 0.005;
          const colorIndex = Math.floor((Math.sin(colorPhase) + 1) * colors.length / 2) % colors.length;
          const color = colors[colorIndex];

          // Dynamic opacity
          const opacityWave = Math.sin((x + y) * 0.01 + time * 2 + combinedWave * 0.1) * 0.4 + 0.6;
          const finalOpacity = Math.max(0.1, Math.min(1, opacityWave * (0.3 + centerEffect * 0.7)));

          // Draw with enhanced glow
          ctx.save();
          ctx.globalAlpha = finalOpacity;
          
          // Multiple glow layers
          ctx.shadowColor = color;
          ctx.shadowBlur = finalSize * 3;
          ctx.fillStyle = color;
          
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.5, finalSize), 0, Math.PI * 2);
          ctx.fill();
          
          // Inner bright core
          ctx.shadowBlur = finalSize;
          ctx.globalAlpha = finalOpacity * 1.5;
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.2, finalSize * 0.3), 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [variant, mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-90"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

// Quantum Grid Component
const QuantumGrid: React.FC<{ scrollYProgress: any }> = ({ scrollYProgress }) => (
  <motion.div 
    className="absolute inset-0 opacity-15"
    style={{
      backgroundImage: `
        linear-gradient(rgba(0, 255, 102, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 102, 0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.2) 2px, transparent 2px)
      `,
      backgroundSize: '60px 60px, 60px 60px, 120px 120px',
      y: useTransform(scrollYProgress, [0, 1], [0, -200]),
      scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
    }}
  />
);

// Energy Field Component
const EnergyField: React.FC<{
  variant: string;
  mouseX: any;
  mouseY: any;
}> = ({ variant, mouseX, mouseY }) => {
  const color = variant === 'pro' ? '#00D4FF' : '#00FF66';
  
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            left: '50%',
            top: '50%',
            marginLeft: `${-(50 + i * 25)}px`,
            marginTop: `${-(50 + i * 25)}px`,
            border: `1px solid ${color}`,
            x: useTransform(mouseX, [0, 1], [-10 - i * 2, 10 + i * 2]),
            y: useTransform(mouseY, [0, 1], [-10 - i * 2, 10 + i * 2])
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

// Particle Stream Component
const ParticleStream: React.FC<{
  scrollY: any;
  scrollYProgress: any;
}> = ({ scrollY, scrollYProgress }) => (
  <div className="absolute inset-0">
    {Array.from({ length: window.innerWidth < 768 ? 20 : 40 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full"
        style={{
          backgroundColor: i % 2 === 0 ? '#00FF66' : '#00D4FF',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          boxShadow: '0 0 10px currentColor',
          y: useTransform(scrollY, [0, 1000], [0, -300 - i * 5]),
          scale: useTransform(scrollYProgress, [0, 1], [0.5, 2])
        }}
        animate={{
          y: [0, -window.innerHeight - 100],
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5]
        }}
        transition={{
          duration: 10 + Math.random() * 5,
          repeat: Infinity,
          delay: Math.random() * 10,
          ease: 'linear'
        }}
      />
    ))}
  </div>
);

// Neural Network Lines
const NeuralNetwork: React.FC<{ variant: string }> = ({ variant }) => {
  const color = variant === 'pro' ? '#00D4FF' : '#00FF66';
  
  return (
    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        
        return (
          <motion.line
            key={i}
            x1={`${startX}%`}
            y1={`${startY}%`}
            x2={`${endX}%`}
            y2={`${endY}%`}
            stroke={color}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.6, 0] 
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          />
        );
      })}
    </svg>
  );
};

export default UltimateBackground;