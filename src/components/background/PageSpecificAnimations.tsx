import React from 'react';
import { motion } from 'framer-motion';

interface PageSpecificAnimationsProps {
  variant: 'homepage' | 'docs' | 'pricing' | 'about' | 'features' | 'minimal' | 'opencore' | 'pro' | 'community' | 'blog';
  className?: string;
}

const PageSpecificAnimations: React.FC<PageSpecificAnimationsProps> = ({ variant, className = '' }) => {
  const getAnimationElements = () => {
    switch (variant) {
      case 'homepage':
        return <CognitionParticles />;
      case 'opencore':
        return <OpenSourceIcons />;
      case 'pro':
        return <VaultMotifs />;
      case 'features':
        return <WaveformLines />;
      case 'pricing':
        return <MetricBars />;
      case 'docs':
        return <CodeFragments />;
      case 'community':
      case 'blog':
        return <CommunityBubbles />;
      case 'about':
        return <NetworkNodes />;
      default:
        return null;
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {getAnimationElements()}
    </div>
  );
};

// Cognition Particles for Homepage
const CognitionParticles = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 12 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-terminal-green/40 rounded-full"
        initial={{ 
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: 0 
        }}
        animate={{ 
          y: [null, -20, 20, -10],
          x: [null, Math.random() * 50 - 25],
          scale: [0, 1, 0.8, 1],
          opacity: [0.4, 0.8, 0.4, 0.6]
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3
        }}
        style={{
          boxShadow: '0 0 10px rgba(0, 255, 102, 0.5)'
        }}
      />
    ))}
  </div>
);

// Open Source Icons for Open Core
const OpenSourceIcons = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-terminal-green/20 text-xl"
        initial={{ 
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotate: 0
        }}
        animate={{ 
          rotate: 360,
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear",
          delay: i * 2
        }}
      >
        ⌘
      </motion.div>
    ))}
  </div>
);

// Vault Motifs for Pro Edition
const VaultMotifs = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-terminal-blue/30 text-2xl"
        initial={{ 
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: 0.8
        }}
        animate={{ 
          scale: [0.8, 1.1, 0.8],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.5
        }}
      >
        🔒
      </motion.div>
    ))}
  </div>
);

// Waveform Lines for Features
const WaveformLines = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20">
    {Array.from({ length: 4 }).map((_, i) => (
      <motion.path
        key={i}
        d={`M0,${200 + i * 150} Q${window.innerWidth/4},${180 + i * 150} ${window.innerWidth/2},${200 + i * 150} T${window.innerWidth},${200 + i * 150}`}
        stroke="rgba(0, 255, 102, 0.3)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: [0, 1, 0],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 2
        }}
      />
    ))}
  </svg>
);

// Metric Bars for Pricing
const MetricBars = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-terminal-green/20 h-1"
        style={{
          left: '20%',
          top: `${30 + i * 15}%`,
          width: '60%'
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 0.7 + Math.random() * 0.3, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.8
        }}
      />
    ))}
  </div>
);

// Code Fragments for Docs
const CodeFragments = () => (
  <div className="absolute inset-0 font-mono text-xs">
    {['const git = new Git()', 'npm install @gitswhy/core', 'git commit --secure', 'export default pipeline'].map((code, i) => (
      <motion.div
        key={i}
        className="absolute text-terminal-green/15"
        style={{
          left: Math.random() * 70 + '%',
          top: Math.random() * 80 + '%'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 0.4, 0],
          y: [20, 0, -20]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 2
        }}
      >
        {code}
      </motion.div>
    ))}
  </div>
);

// Community Bubbles for Blog/Community
const CommunityBubbles = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 10 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-terminal-green/20 rounded-full"
        style={{
          width: Math.random() * 30 + 10,
          height: Math.random() * 30 + 10,
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%'
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1, 0.8, 1],
          opacity: [0, 0.6, 0.3, 0.6],
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50]
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5
        }}
      />
    ))}
  </div>
);

// Network Nodes for About
const NetworkNodes = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20">
    {Array.from({ length: 6 }).map((_, i) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      return (
        <g key={i}>
          <motion.circle
            cx={x}
            cy={y}
            r="3"
            fill="rgba(0, 212, 255, 0.6)"
            initial={{ r: 0 }}
            animate={{ r: [0, 6, 3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
          {i > 0 && (
            <motion.line
              x1={x}
              y1={y}
              x2={Math.random() * window.innerWidth}
              y2={Math.random() * window.innerHeight}
              stroke="rgba(0, 212, 255, 0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0.5] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.2
              }}
            />
          )}
        </g>
      );
    })}
  </svg>
);

export default PageSpecificAnimations;