import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Activity, Brain, Loader } from "lucide-react";
import { ParallaxGrid, StaggeredFadeIn } from "@/components/animations/AnimationComponents";

const Hero = () => {
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
  const [showDetection, setShowDetection] = useState(false);
  const [showPatch, setShowPatch] = useState(false);

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
          }, 500);
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
    }, 67); // ~90 WPM

    return () => clearInterval(timer);
  }, [currentLine]);

  // Terminal animation sequence
  useEffect(() => {
    if (terminalStep === 1) {
      setTimeout(() => setShowDetection(true), 2000);
    }
    if (terminalStep === 1 && showDetection) {
      setTimeout(() => setShowPatch(true), 1500);
    }
  }, [terminalStep, showDetection]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-terminal-bg via-terminal-surface to-terminal-bg">
        <ParallaxGrid 
          speed={0.3} 
          gridOpacity={0.3}
          gridColor="rgba(0, 255, 102, 0.05)"
          className="transform-gpu"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-terminal-green/5 via-transparent to-terminal-blue/5 animate-gradient"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Headlines */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground block">
                  {currentLine === 0 ? typedText : lines[0]}
                  {currentLine === 0 && <span className="terminal-cursor animate-glow-pulse"></span>}
                </span>
                <span className="text-terminal-green block mt-2">
                  {currentLine === 1 ? typedText : (currentLine > 1 ? lines[1] : "")}
                  {currentLine === 1 && <span className="terminal-cursor animate-glow-pulse"></span>}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 max-w-lg leading-relaxed">
                {typedSubhead}
                {typedSubhead.length < subhead.length && typedSubhead.length > 0 && (
                  <span className="terminal-cursor animate-glow-pulse"></span>
                )}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="terminal" size="xl" className="min-w-[200px]">
                Try Free Core
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button variant="terminal-outline-blue" size="xl" className="min-w-[200px]">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="text-sm text-foreground/60 pt-8">
              <p>Trusted by developers at 500+ companies worldwide</p>
            </div>
          </div>

          {/* Right Side - Live Terminal */}
          <StaggeredFadeIn delay={0.3} staggerDelay={0.4}>
            <div className="relative">
              <div className="bg-terminal-surface border border-terminal-green/20 rounded-lg code-matrix shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between bg-terminal-bg/50 px-6 py-3 border-b border-terminal-green/20">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm text-foreground/60 font-mono ml-4">gitswhy@cognition:~</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-terminal-green" />
                    <span className="text-xs text-terminal-green font-mono">Live</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-3 min-h-[300px]">
                  <div className="text-terminal-green">
                    $ gitswhy init --cognition-native
                  </div>
                  
                  {terminalStep >= 1 && (
                    <>
                      <div className="text-foreground/70">
                        ✓ Initializing cognition engine...
                      </div>
                      <div className="text-foreground/70">
                        ✓ Setting up self-healing pipelines...
                      </div>
                      <div className="text-foreground/70">
                        ✓ Configuring intent vault...
                      </div>
                    </>
                  )}

                  {showDetection && (
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded p-3 my-4">
                      <div className="flex items-center space-x-2 text-yellow-400">
                        <Brain className="h-4 w-4 animate-pulse" />
                        <span>Hesitation detected: 2.3s delay on commit</span>
                      </div>
                      <div className="text-yellow-300/80 text-xs mt-1">
                        Analyzing intent: potential security concern in auth.js:42
                      </div>
                    </div>
                  )}

                  {showPatch && (
                    <>
                      <div className="text-terminal-blue">
                        🔧 Auto-generating security patch...
                      </div>
                      <div className="text-terminal-green">
                        ✓ Applied JWT validation fix
                      </div>
                      <div className="text-terminal-green">
                        ✓ Updated test coverage
                      </div>
                      <div className="text-terminal-green">
                        ✓ Ready for deployment
                      </div>
                      <div className="text-foreground/70 mt-4">
                        <span className="text-terminal-green">Total time saved:</span> 47 minutes
                      </div>
                    </>
                  )}

                  {!showPatch && terminalStep >= 1 && (
                    <div className="flex items-center space-x-2 text-foreground/60">
                      <Loader className="h-4 w-4 animate-spin" />
                      <span>Monitoring development patterns...</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-terminal-green rounded-full animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-terminal-blue rounded-full animate-glow-pulse"></div>
            </div>
          </StaggeredFadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;