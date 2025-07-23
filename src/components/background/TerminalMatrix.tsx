import React, { useEffect, useRef } from 'react';

interface TerminalMatrixProps {
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  className?: string;
}

const TerminalMatrix: React.FC<TerminalMatrixProps> = ({ 
  intensity = 'medium', 
  color = '#00FF66',
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix configuration based on intensity
    const configs = {
      low: { dropCount: 20, speed: 0.3, opacity: 0.15 },
      medium: { dropCount: 35, speed: 0.5, opacity: 0.25 },
      high: { dropCount: 50, speed: 0.8, opacity: 0.35 }
    };

    const config = configs[intensity];
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(0);

    // Terminal characters for authentic look
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    const draw = () => {
      // Fade effect
      ctx.fillStyle = `rgba(10, 14, 26, ${1 - config.opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += config.speed;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default TerminalMatrix;