import React from 'react';
import { motion } from 'framer-motion';

const OpenCoreBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Green-themed gradient background with subtle animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-terminal-green/5 to-background"
        animate={{ opacity: [1, 0.8, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating code blocks */}
      <div className="absolute inset-0">
        {/* Large central code symbol with breathing animation */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="w-80 h-80 border-2 border-terminal-green/10 rounded-lg" />
        </motion.div>
        
        {/* Animated code symbols */}
        <motion.div 
          className="absolute top-1/4 left-1/5 text-6xl text-terminal-green/20 font-mono"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {`{`}
        </motion.div>
        
        <motion.div 
          className="absolute top-3/4 right-1/5 text-6xl text-terminal-green/20 font-mono"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          {`}`}
        </motion.div>
        
        <motion.div 
          className="absolute top-1/3 right-1/3 text-4xl text-terminal-green/15 font-mono"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          &lt;/&gt;
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-1/3 text-5xl text-terminal-green/15 font-mono"
          animate={{ 
            x: [0, 5, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          []
        </motion.div>
        
        {/* Animated code particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-terminal-green/15"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.3, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Animated terminal grid */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated open source radial patterns */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(0,255,102,0.08),transparent_40%)]"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(0,255,102,0.05),transparent_40%)]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
};

export default OpenCoreBackground;