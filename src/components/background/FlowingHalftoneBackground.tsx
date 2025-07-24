import React, { useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

interface FlowingHalftoneBackgroundProps {
  children: React.ReactNode;
  variant?: 'home' | 'pro' | 'docs' | 'opencore' | 'default';
}

const FlowingHalftoneBackground: React.FC<FlowingHalftoneBackgroundProps> = ({ 
  children, 
  variant = 'default' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY, scrollYProgress } = useScroll();
  
  // Color themes based on variant
  const getTheme = (variant: string) => {
    const themes = {
      home: { primary: '#00FF66', secondary: '#00D4FF', accent: '#FF6B6B' },
      pro: { primary: '#00D4FF', secondary: '#00FF66', accent: '#9D4EDD' },
      docs: { primary: '#00FF66', secondary: '#FFA500', accent: '#00D4FF' },
      opencore: { primary: '#00FF66', secondary: '#FFD700', accent: '#FF4081' },
      default: { primary: '#00FF66', secondary: '#00D4FF', accent: '#FFFFFF' }
    };
    return themes[variant as keyof typeof themes] || themes.default;
  };

  const theme = getTheme(variant);

  // Mouse tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    }
  }, [mouseX, mouseY]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Canvas animation
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

    const animate = () => {
      time += 0.01;
      
      ctx.fillStyle = '#0A0E1A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create flowing halftone pattern
      const dotSpacing = 12;
      const mouseInfluence = 100;
      const currentMouseX = mouseX.get() * canvas.width;
      const currentMouseY = mouseY.get() * canvas.height;

      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          // Distance from mouse
          const distanceFromMouse = Math.sqrt(
            Math.pow(x - currentMouseX, 2) + Math.pow(y - currentMouseY, 2)
          );

          // Wave calculations for flowing effect
          const wave1 = Math.sin((x * 0.01) + (y * 0.005) + time * 2) * 30;
          const wave2 = Math.cos((x * 0.008) + (y * 0.012) + time * 1.5) * 25;
          const wave3 = Math.sin((x * 0.006) + (y * 0.008) + time * 2.5) * 20;
          
          const combinedWave = wave1 + wave2 + wave3;
          
          // Base dot size with wave influence
          const baseSize = 1 + (combinedWave * 0.05);
          
          // Mouse interaction
          const mouseEffect = Math.max(0, 1 - (distanceFromMouse / mouseInfluence));
          const finalSize = baseSize + (mouseEffect * 4);
          
          // Scroll influence
          const scrollInfluence = Math.sin(time + (y * 0.002)) * 0.5;
          const scrollSize = finalSize + scrollInfluence;

          // Color selection based on position and time
          const colorPhase = (x + y + time * 50) * 0.01;
          const colorValue = (Math.sin(colorPhase) + 1) * 0.5;
          
          let color;
          if (colorValue < 0.3) {
            color = theme.primary;
          } else if (colorValue < 0.7) {
            color = theme.secondary;
          } else {
            color = theme.accent;
          }

          // Opacity based on position and movement
          const opacityWave = Math.sin((x + y) * 0.01 + time * 3) * 0.3 + 0.7;
          const finalOpacity = Math.max(0.1, Math.min(1, opacityWave));

          // Draw dot with glow effect
          ctx.save();
          ctx.globalAlpha = finalOpacity * 0.8;
          
          // Glow
          ctx.shadowColor = color;
          ctx.shadowBlur = scrollSize * 2;
          ctx.fillStyle = color;
          
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.5, scrollSize), 0, Math.PI * 2);
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
  }, [mouseX, mouseY, theme]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Flowing Halftone Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />

      {/* Enhanced Grid Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, ${theme.primary} 1px, transparent 0)
          `,
          backgroundSize: '40px 40px',
          y: useTransform(scrollY, [0, 1000], [0, -50])
        }}
      />

      {/* Flowing Energy Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px opacity-30"
            style={{
              left: '0%',
              top: `${15 + i * 15}%`,
              width: '100%',
              background: `linear-gradient(90deg, transparent, ${theme.primary}, ${theme.secondary}, transparent)`,
              scaleX: useTransform(scrollYProgress, [0, 1], [0.5, 2]),
              y: useTransform(scrollY, [0, 1000], [0, -100 - i * 10])
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scaleY: [1, 2, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Particle Field Enhancement */}
      <div className="absolute inset-0">
        {Array.from({ length: window.innerWidth < 768 ? 15 : 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? theme.primary : i % 3 === 1 ? theme.secondary : theme.accent,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px currentColor`,
              x: useTransform(mouseX, [0, 1], [-30, 30]),
              y: useTransform(mouseY, [0, 1], [-30, 30]),
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
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

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(10, 14, 26, 0.3) 70%, rgba(10, 14, 26, 0.8) 100%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FlowingHalftoneBackground;