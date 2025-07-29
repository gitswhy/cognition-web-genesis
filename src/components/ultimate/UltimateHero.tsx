import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Zap, Shield, Terminal } from 'lucide-react';
import { ButtonUltimate } from '@/components/ui/button-ultimate';

const UltimateHero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
      style={{ y, opacity }}
    >
      {/* Ultimate Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%2300FF66%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-terminal-green/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-terminal-blue/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-terminal-green/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 text-terminal-green/20"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Terminal size={32} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-terminal-blue/20"
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -5, 5, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield size={28} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 text-terminal-green/15"
          animate={{ 
            y: [-8, 8, -8],
            rotate: [0, 10, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap size={24} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3 text-terminal-blue/15"
          animate={{ 
            y: [5, -15, 5],
            rotate: [0, -8, 8, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={20} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-fluid-5xl font-display font-bold mb-6 text-gradient-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            The First Cognition Native
            <br />
            <span className="text-gradient-primary animate-pulse">
              DevSecOps Platform
            </span>
          </motion.h1>

          <motion.p 
            className="text-fluid-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future of development with self healing systems, 
            AI powered security, and cognitive automation that thinks ahead.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ButtonUltimate 
              size="xl" 
              variant="ultimate"
              className="group transition-ultra hover-ultra text-lg font-semibold px-8 py-4"
            >
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              Start Free Trial
            </ButtonUltimate>
            
            <ButtonUltimate 
              size="xl" 
              variant="glassmorphism"
              className="text-lg font-medium px-8 py-4"
            >
              <Terminal className="w-5 h-5" />
              Watch Demo
            </ButtonUltimate>
          </motion.div>

          {/* Terminal Preview */}
          <motion.div 
            className="mt-16 mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="bg-terminal-bg/80 backdrop-blur-xl rounded-xl border border-terminal-green/20 shadow-ultra p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-terminal-green/60 text-sm font-mono">
                  Gitswhy Terminal
                </span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-terminal-green">
                  $ gitswhy init --cognition-native
                </div>
                <div className="text-muted-foreground">
                  🧠 Initializing cognitive awareness...
                </div>
                <div className="text-terminal-blue">
                  ✨ Self healing protocols activated
                </div>
                <div className="text-terminal-green">
                  🛡️ Zero trust security enabled
                </div>
                <div className="text-muted-foreground">
                  Ready for ultimate DevSecOps experience.
                </div>
                <div className="flex items-center">
                  <span className="text-terminal-green mr-2">$</span>
                  <div className="w-2 h-4 bg-terminal-green animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-terminal-green/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-terminal-green/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default UltimateHero;