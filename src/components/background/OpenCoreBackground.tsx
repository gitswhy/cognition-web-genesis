import React from 'react';
import { motion } from 'framer-motion';

const OpenCoreBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced multi-layer gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-terminal-green/8 to-background"
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-terminal-green/3 via-transparent to-terminal-blue/2"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Flowing matrix-style code rain */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-terminal-green/20 font-mono text-sm leading-tight"
            style={{
              left: `${(i * 8.33) + Math.random() * 5}%`,
              width: '20px',
            }}
            animate={{
              y: ['-100vh', '100vh']
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 8
            }}
          >
            {Array.from({ length: 15 }).map((_, j) => (
              <div key={j} style={{ opacity: Math.random() * 0.8 + 0.2 }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      
      {/* Enhanced floating code blocks with glow effects */}
      <div className="absolute inset-0">
        {/* Large central pulsating code symbol with glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.08, 1],
            rotate: [0, 2, 0]
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
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &lt;/&gt;
          </motion.div>
        </motion.div>
        
        {/* Enhanced animated code symbols with better positioning */}
        <motion.div 
          className="absolute top-[20%] left-[15%] text-7xl text-terminal-green/25 font-mono drop-shadow-[0_0_10px_rgba(0,255,102,0.3)]"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.25, 0.5, 0.25],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {`{`}
        </motion.div>
        
        <motion.div 
          className="absolute top-[75%] right-[15%] text-7xl text-terminal-green/25 font-mono drop-shadow-[0_0_10px_rgba(0,255,102,0.3)]"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.25, 0.5, 0.25],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2.5
          }}
        >
          {`}`}
        </motion.div>
        
        <motion.div 
          className="absolute top-[35%] right-[25%] text-5xl text-terminal-green/20 font-mono drop-shadow-[0_0_8px_rgba(0,255,102,0.2)]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          &lt;/&gt;
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[25%] left-[30%] text-6xl text-terminal-green/20 font-mono drop-shadow-[0_0_8px_rgba(0,255,102,0.2)]"
          animate={{ 
            x: [0, 8, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          []
        </motion.div>

        {/* Additional code symbols */}
        <motion.div 
          className="absolute top-[60%] left-[20%] text-4xl text-terminal-green/15 font-mono"
          animate={{ 
            rotate: [0, 360],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        >
          ()
        </motion.div>

        <motion.div 
          className="absolute top-[40%] left-[80%] text-3xl text-terminal-green/15 font-mono"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        >
          ;;
        </motion.div>
        
        {/* Enhanced animated code particles with trails */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-terminal-green/20 shadow-[0_0_6px_rgba(0,255,102,0.4)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0, 0.4, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Enhanced animated terminal grid with depth */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.06)_1px,transparent_1px)] bg-[size:40px_40px]"
        animate={{ 
          opacity: [0.4, 1, 0.4],
          backgroundPosition: ['0px 0px', '40px 40px', '0px 0px']
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Additional grid layer for depth */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          backgroundPosition: ['0px 0px', '-80px -80px', '0px 0px']
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Enhanced animated open source radial patterns with glow */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(0,255,102,0.12),transparent_50%)]"
        animate={{ 
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(0,255,102,0.08),transparent_50%)]"
        animate={{ 
          opacity: [0.4, 0.9, 0.4],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Floating connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="rgba(0,255,102,0.1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default OpenCoreBackground;