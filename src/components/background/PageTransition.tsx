
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
      setIsTransitioning(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Page content */}
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="relative w-full h-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
