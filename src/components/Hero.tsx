import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Zap, Shield, Cpu } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "$ gitswhy init --cognition-native";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-terminal-bg via-terminal-surface to-terminal-bg">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgMTAyLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Terminal Window */}
          <div className="mb-8 inline-block">
            <div className="bg-terminal-surface border border-terminal-green/20 rounded-lg p-6 code-matrix shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-foreground/60 font-mono">gitswhy@cognition:~</div>
              </div>
              <div className="font-mono text-lg text-terminal-green">
                {typedText}<span className="terminal-cursor animate-glow-pulse"></span>
              </div>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">The First</span>{" "}
            <span className="text-terminal-green">Cognition-Native</span>{" "}
            <span className="text-foreground">DevSecOps</span>{" "}
            <span className="text-terminal-blue">Operating System</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Transform how your team builds, secures, and deploys software with 
            AI-powered automation, terminal-first design, and cognitive workflows 
            that adapt to your development patterns.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in">
            <div className="flex items-center space-x-2 text-terminal-green">
              <Zap className="h-5 w-5" />
              <span className="font-medium">AI-Powered Automation</span>
            </div>
            <div className="flex items-center space-x-2 text-terminal-blue">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Zero-Trust Security</span>
            </div>
            <div className="flex items-center space-x-2 text-terminal-green">
              <Cpu className="h-5 w-5" />
              <span className="font-medium">Cognitive Workflows</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button variant="terminal" size="xl" className="min-w-[200px]">
              Try Free Core
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button variant="terminal-outline-blue" size="xl" className="min-w-[200px]">
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="text-sm text-foreground/60 animate-fade-in">
            <p>Trusted by developers at 500+ companies worldwide</p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-terminal-green rounded-full animate-glow-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-terminal-blue rounded-full animate-glow-pulse"></div>
      <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-terminal-green rounded-full animate-glow-pulse"></div>
      <div className="absolute bottom-40 right-10 w-2 h-2 bg-terminal-blue rounded-full animate-glow-pulse"></div>
    </section>
  );
};

export default Hero;