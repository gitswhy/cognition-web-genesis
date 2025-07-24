import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Activity, Brain, Loader, Check } from "lucide-react";
import { StaggeredFadeIn } from "@/components/animations/AnimationComponents";
import { useGeolocation } from '@/hooks/useGeolocation';

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
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-20 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side - Headlines */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-terminal-green/10 border border-terminal-green/20 rounded-full px-4 py-2">
              <Brain className="h-4 w-4 text-terminal-green" />
              <span className="text-sm font-medium text-terminal-green">Cognition-Native Technology</span>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="text-foreground block">
                  {currentLine === 0 ? typedText : lines[0]}
                  {currentLine === 0 && typedText.length < lines[0].length && <span className="animate-pulse text-terminal-green">|</span>}
                </span>
                <span className="text-terminal-green block mt-1 lg:mt-2">
                  {currentLine === 1 ? typedText : (currentLine > 1 ? lines[1] : "")}
                  {currentLine === 1 && typedText.length < lines[1].length && <span className="animate-pulse text-terminal-green">|</span>}
                </span>
              </h1>
              
              <p className="text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl leading-relaxed">
                {typedSubhead}
                {typedSubhead.length < subhead.length && typedSubhead.length > 0 && (
                  <span className="animate-pulse text-terminal-green">|</span>
                )}
              </p>
            </div>

            {/* CTAs - Enhanced with better hover effects */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 lg:pt-6">
              <Button variant="terminal" size="lg" className="min-w-[160px] lg:min-w-[180px] hover-lift terminal-glow neon-button">
                Start Free Trial
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="terminal-outline-blue" size="lg" className="min-w-[160px] lg:min-w-[180px] hover-lift blue-glow neon-button">
                <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-4 lg:pt-6 text-xs md:text-sm text-foreground/70">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-terminal-green flex items-center justify-center">
                  <Check className="w-2 h-2 text-terminal-bg" />
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-terminal-green flex items-center justify-center">
                  <Check className="w-2 h-2 text-terminal-bg" />
                </div>
                <span>Open source core</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-terminal-green flex items-center justify-center">
                  <Check className="w-2 h-2 text-terminal-bg" />
                </div>
                <span>Enterprise ready</span>
              </div>
            </div>
          </div>

          {/* Right Side - Live Terminal - Enhanced with better animations */}
          <StaggeredFadeIn delay={0.3} staggerDelay={0.4}>
            <div className="relative hover-lift max-w-full">
              <div className="bg-terminal-surface border border-terminal-green/20 rounded-lg code-matrix shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 max-w-full">
                {/* Terminal Header */}
                <div className="flex items-center justify-between bg-terminal-bg/50 px-4 py-2 border-b border-terminal-green/20">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-foreground/60 font-mono ml-3">gitswhy@production:~</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity className="h-3 w-3 text-terminal-green" />
                    <span className="text-xs text-terminal-green font-mono">Live</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-xs md:text-sm space-y-2 min-h-[240px] md:min-h-[280px]">
                  <div className="text-terminal-green">
                    $ gitswhy init --production
                  </div>
                  
                  {terminalStep >= 1 && (
                    <>
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
                    </>
                  )}

                  {!terminalStep && (
                    <div className="flex items-center space-x-2 text-foreground/60">
                      <Loader className="h-3 w-3 animate-spin" />
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
        
        {/* Tagline positioned at bottom of hero section */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-foreground">
            Your second brain for secure, <span className="text-terminal-green">self‑healing</span> code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;