import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Activity, FileText, Loader, Check } from "lucide-react";
import { StaggeredFadeIn } from "@/components/animations/AnimationComponents";
import { useGeolocation } from '@/hooks/useGeolocation';
import { motion } from "framer-motion";

const Hero = () => {
  const { isEU, loading } = useGeolocation();
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  
  const lines = [
    "The First Cognition-Native",
    "DevSecOps OS"
  ];
  
  const subhead = "Monitors every keystroke. Understands why. Self-heals before deploy.";
  const [typedSubhead, setTypedSubhead] = useState("");

  // Terminal animation states
  const [terminalStep, setTerminalStep] = useState(0);

  useEffect(() => {
    const fullText = lines[currentLine] || "";
    let index = 0;
    
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        if (currentLine < lines.length - 1) {
          setTimeout(() => {
            setCurrentLine(currentLine + 1);
            setTypedText("");
          }, 100);
        } else {
          // Start subhead typing
          setTimeout(() => {
            let subIndex = 0;
            const subTimer = setInterval(() => {
              if (subIndex <= subhead.length) {
                setTypedSubhead(subhead.slice(0, subIndex));
                subIndex++;
              } else {
                clearInterval(subTimer);
                // Start terminal animation
                setTimeout(() => setTerminalStep(1), 1000);
              }
            }, 50);
          }, 500);
        }
      }
    }, 35); // Even smoother typing speed

    return () => clearInterval(timer);
  }, [currentLine]);

  return (
    <section className="relative padding-responsive overflow-hidden hero-landscape safe-area-padding">
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div 
            className="space-responsive order-1 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-terminal-green/10 border border-terminal-green/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 hover-scale"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FileText className="h-4 w-4 text-terminal-green flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-terminal-green font-mono">Apache licensed</span>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-scale-hero font-bold leading-tight optimize-legibility">
                <span className="text-foreground block">
                  {currentLine === 0 ? typedText : lines[0]}
                  {currentLine === 0 && typedText.length < lines[0].length && <span className="text-terminal-green">|</span>}
                </span>
                <span className="text-terminal-green block mt-2">
                  {currentLine === 1 ? typedText : (currentLine > 1 ? lines[1] : "")}
                  {currentLine === 1 && typedText.length < lines[1].length && <span className="text-terminal-green">|</span>}
                </span>
              </h1>
              
              <p className="text-scale-subtitle text-foreground/80 max-w-xl leading-relaxed">
                {typedSubhead}
                {typedSubhead.length < subhead.length && typedSubhead.length > 0 && (
                  <span className="text-terminal-green">|</span>
                )}
              </p>
            </div>

            {/* CTAs - Enhanced with better mobile support */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  variant="terminal" 
                  size="default" 
                  className="w-full sm:w-auto sm:min-w-[160px] mobile-button mobile-touch hover-desktop terminal-glow neon-button text-scale-body gpu-accelerated"
                >
                  Start Free Trial
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  variant="terminal-outline-blue" 
                  size="default" 
                  className="w-full sm:w-auto sm:min-w-[140px] md:min-w-[160px] text-scale-body px-4 sm:px-6 py-2 sm:py-3 gpu-accelerated break-words mobile-touch"
                >
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 transition-transform group-hover:scale-110 flex-shrink-0" />
                  <span className="truncate">Watch Demo</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6 pt-3 sm:pt-4 lg:pt-6 text-mobile-sm text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                "No credit card required",
                "Open source core", 
                "Enterprise ready"
              ].map((text, index) => (
                <motion.div 
                  key={text}
                  className="flex items-center space-x-1.5 sm:space-x-2 break-words"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-terminal-green flex items-center justify-center flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.8 + index * 0.1 }}
                  >
                    <Check className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 text-terminal-bg" />
                  </motion.div>
                  <span className="break-words">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Live Terminal - Enhanced with better animations */}
          <div className="order-2 lg:order-2">
            <StaggeredFadeIn delay={0.3} staggerDelay={0.4}>
              <div className="relative hover-lift max-w-full mt-6 lg:mt-0">
              <div className="bg-terminal-surface border border-terminal-green/20 rounded-lg code-matrix shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 max-w-full">
                {/* Terminal Header */}
                <div className="flex items-center justify-between bg-terminal-bg/50 px-3 sm:px-4 py-2 border-b border-terminal-green/20">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-foreground/60 font-mono ml-2 sm:ml-3 hidden sm:inline">gitswhy@production:~</span>
                  </div>
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <Activity className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-terminal-green" />
                    <span className="text-xs text-terminal-green font-mono">Live</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm space-y-1.5 sm:space-y-2 min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
                  <div className="text-terminal-green break-all">
                    $ gitswhy init --production
                  </div>
                  
                  {terminalStep >= 1 && (
                    <div className="space-y-1 sm:space-y-1.5 break-words">
                      <div className="text-terminal-blue">
                        🧠 Cognition engine initializing...
                      </div>
                      <div className="text-terminal-green">
                        ⚡ Detecting developer patterns...
                      </div>
                      <div className="text-yellow-400">
                        ⚠️ Hesitation detected in auth.js:42
                      </div>
                      <div className="text-terminal-blue">
                        🔧 Auto-patching potential vulnerability...
                      </div>
                      <div className="text-terminal-green">
                        ✅ Security patch applied automatically
                      </div>
                      <div className="text-terminal-green">
                        📋 Intent vault updated with new pattern
                      </div>
                      <div className="text-terminal-green">
                        ✅ Deploy-ready! Confidence: 99.7%
                      </div>
                    </div>
                  )}

                  {!terminalStep && (
                    <div className="flex items-center space-x-2 text-foreground/60 break-words">
                      <Loader className="h-2.5 w-2.5 sm:h-3 sm:w-3 animate-spin flex-shrink-0" />
                      <span>Waiting for initialization...</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-terminal-green rounded-full animate-glow-pulse animate-subtle-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-terminal-blue rounded-full animate-glow-pulse animate-subtle-bounce" style={{animationDelay: '1s'}}></div>
            </div>
            </StaggeredFadeIn>
          </div>
        </div>
        
        {/* Tagline positioned at bottom of hero section */}
        <motion.div 
          className="text-center mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p 
            className="text-scale-subtitle font-medium text-foreground px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Your second brain for secure, <motion.span 
              className="text-terminal-green"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
            >self‑healing</motion.span> code.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;