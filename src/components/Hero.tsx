import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Activity, Brain, Loader } from "lucide-react";
import { StaggeredFadeIn } from "@/components/animations/AnimationComponents";

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
    }, 45); // Smoother typing speed

    return () => clearInterval(timer);
  }, [currentLine]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-6 pb-12 lg:pt-8 lg:pb-20">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-20 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Side - Headlines */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-terminal-green/10 border border-terminal-green/20 rounded-full px-4 py-2">
              <Brain className="h-4 w-4 text-terminal-green" />
              <span className="text-sm font-medium text-terminal-green">Cognition-Native Technology</span>
            </div>

            <div className="space-y-4 lg:space-y-6 -ml-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-foreground block">
                  {currentLine === 0 ? typedText : lines[0]}
                  {currentLine === 0 && typedText.length < lines[0].length && <span className="animate-pulse text-terminal-green">|</span>}
                </span>
                <span className="text-terminal-green block mt-1 lg:mt-2">
                  {currentLine === 1 ? typedText : (currentLine > 1 ? lines[1] : "")}
                  {currentLine === 1 && typedText.length < lines[1].length && <span className="animate-pulse text-terminal-green">|</span>}
                </span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-foreground/80 max-w-xl leading-relaxed">
                {typedSubhead}
                {typedSubhead.length < subhead.length && typedSubhead.length > 0 && (
                  <span className="animate-pulse text-terminal-green">|</span>
                )}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:pt-6">
              <Button variant="terminal" size="xl" className="min-w-[180px] lg:min-w-[200px]">
                Start Free Trial
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button variant="terminal-outline-blue" size="xl" className="min-w-[180px] lg:min-w-[200px]">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6 lg:pt-8 text-sm text-foreground/70">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-terminal-green flex items-center justify-center">
                  <div className="w-2 h-2 text-terminal-bg">✓</div>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-terminal-green flex items-center justify-center">
                  <div className="w-2 h-2 text-terminal-bg">✓</div>
                </div>
                <span>Open source core</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-terminal-green flex items-center justify-center">
                  <div className="w-2 h-2 text-terminal-bg">✓</div>
                </div>
                <span>Enterprise ready</span>
              </div>
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
                    <span className="text-sm text-foreground/60 font-mono ml-4">gitswhy@production:~</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-terminal-green" />
                    <span className="text-xs text-terminal-green font-mono">Live</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-3 min-h-[300px]">
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
                      <Loader className="h-4 w-4 animate-spin" />
                      <span>Waiting for initialization...</span>
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