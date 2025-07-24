import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Base Terminal Grid */}
      <div className="absolute inset-0 terminal-grid" />
      
      {/* Dynamic Background Layer */}
      <motion.div
        key={bgVariant.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${bgVariant.baseColor}ee 0%, ${bgVariant.baseColor} 100%)`
        }}
      >
        {bgVariant.motif}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Motif Components
const CognitionParticles: React.FC = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-terminal-green rounded-full opacity-30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const OpenSourceIcons: React.FC = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-terminal-green opacity-20"
        style={{
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 90}%`,
          fontSize: '24px',
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

const VaultMotifs: React.FC = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-blue-400 opacity-25"
        style={{
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 90}%`,
          fontSize: '32px',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.5, 0.25],
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

const WaveformLines: React.FC = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-full h-0.5 bg-terminal-green opacity-20"
        style={{ top: `${20 + i * 15}%` }}
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

const NetworkNodes: React.FC = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 12 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-blue-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
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

const MetricBars: React.FC = () => (
  <div className="absolute inset-0 flex flex-col justify-center items-end pr-20 space-y-4 opacity-20">
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        className="h-2 bg-terminal-green"
        initial={{ width: 0 }}
        animate={{ width: `${30 + Math.random() * 40}%` }}
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

const CodeFragments: React.FC = () => (
  <div className="absolute inset-0">
    {['git clone', 'npm install', 'yarn build', 'docker run', 'kubectl apply'].map((code, i) => (
      <motion.div
        key={i}
        className="absolute text-terminal-green font-mono text-sm opacity-20"
        style={{
          left: `${Math.random() * 80}%`,
          top: `${Math.random() * 80}%`,
        }}
        animate={{
          opacity: [0.2, 0.6, 0.2],
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

const ClusteringOrbs: React.FC = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-terminal-green rounded-full opacity-25"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
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

const ConnectedAvatars: React.FC = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-30"
        style={{
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 90}%`,
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

const TerminalGrid: React.FC = () => (
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

export default DynamicBackground;