
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Gravitational lensing effect during transitions */}
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div 
              className="absolute inset-0 bg-gradient-radial from-transparent via-blue-500/5 to-transparent"
              style={{
                background: 'radial-gradient(circle at center, transparent 0%, rgba(74, 144, 226, 0.1) 50%, transparent 100%)',
                filter: 'blur(2px)'
              }}
            />
          </motion.div>
        )}
        
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
