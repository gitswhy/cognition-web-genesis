import React from 'react';
import { motion } from 'framer-motion';

const OpenCoreBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Optimized gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-terminal-green/8 to-background"
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-terminal-green/3 via-transparent to-terminal-blue/2"
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Reduced matrix-style code rain for performance */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-terminal-green/15 font-mono text-sm leading-tight"
            style={{
              left: `${(i * 16.66) + Math.random() * 8}%`,
              width: '20px',
              willChange: 'transform'
            }}
            animate={{
              y: ['-100vh', '100vh']
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 12
            }}
          >
            {Array.from({ length: 12 }).map((_, j) => (
              <div key={j} style={{ opacity: Math.random() * 0.6 + 0.2 }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      
      {/* Optimized floating code blocks */}
      <div className="absolute inset-0">
        {/* Large central code symbol - simplified animation */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ willChange: 'transform' }}
          animate={{ 
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="w-96 h-96 border-2 border-terminal-green/20 rounded-2xl shadow-[0_0_50px_rgba(0,255,102,0.1)]" />
          <div className="absolute inset-4 border border-terminal-green/10 rounded-xl" />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-terminal-green/30 font-mono"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            &lt;/&gt;
          </motion.div>
        </motion.div>
        
        {/* Simplified code symbols - reduced complexity */}
        <motion.div 
          className="absolute top-[20%] left-[15%] text-7xl text-terminal-green/25 font-mono"
          style={{ willChange: 'transform' }}
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {`{`}
        </motion.div>
        
        <motion.div 
          className="absolute top-[75%] right-[15%] text-7xl text-terminal-green/25 font-mono"
          style={{ willChange: 'transform' }}
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          {`}`}
        </motion.div>
        
        <motion.div 
          className="absolute top-[35%] right-[25%] text-5xl text-terminal-green/20 font-mono"
          style={{ willChange: 'transform' }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          &lt;/&gt;
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[25%] left-[30%] text-6xl text-terminal-green/20 font-mono"
          style={{ willChange: 'transform' }}
          animate={{ 
            x: [0, 5, 0],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        >
          []
        </motion.div>
        
        {/* Reduced animated particles for better performance */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-terminal-green/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              willChange: 'transform'
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0, 0.3, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Simplified terminal grid - single layer */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.06)_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{ willChange: 'opacity' }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Simplified radial patterns */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(0,255,102,0.12),transparent_50%)]"
        style={{ willChange: 'opacity' }}
        animate={{ 
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(0,255,102,0.08),transparent_50%)]"
        style={{ willChange: 'opacity' }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Simplified connection lines - reduced count */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + (i * 30)}%`}
            y1={`${20 + (i * 20)}%`}
            x2={`${40 + (i * 20)}%`}
            y2={`${60 + (i * 15)}%`}
            stroke="rgba(0,255,102,0.1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default OpenCoreBackground;