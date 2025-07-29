import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  loadTime: number;
  renderCount: number;
  memoryUsage: number;
  interactions: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderCount: 0,
    memoryUsage: 0,
    interactions: 0
  });

  useEffect(() => {
    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, loadTime: entry.startTime }));
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'measure'] });

    // Memory usage monitoring
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 
        }));
      }
    };

    const interval = setInterval(updateMemoryUsage, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50 bg-terminal-bg/90 backdrop-blur-sm border border-terminal-green/20 rounded-lg p-3 text-xs font-mono"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4 text-terminal-green/60">
        <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
        <div>Mem: {metrics.memoryUsage.toFixed(1)}MB</div>
        <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;