import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Rocket, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Ship code that</span>{" "}
            <span className="text-terminal-green animate-[glow-pulse_4s_ease-in-out_infinite] opacity-90">heals itself.</span>
          </h2>

          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers building the future with cognition-native DevSecOps. 
            Start free, scale with confidence.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="terminal" size="xl" className="min-w-[220px] group" asChild>
              <Link to="/pro-edition">
                <Rocket className="h-5 w-5 group-hover:animate-bounce" />
                Start Free Trial
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="terminal-outline-blue" size="xl" className="min-w-[220px] group" asChild>
              <Link to="/how-it-works">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-terminal-green/20 flex items-center justify-center">
                <Shield className="h-6 w-6 text-terminal-green" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground mb-1">Always Free Core</div>
                <div className="text-sm text-foreground/85">Essential features forever free</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-terminal-blue/20 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-terminal-blue" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground mb-1">30-Day Pro Trial</div>
                <div className="text-sm text-foreground/85">Full features, no commitment</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-terminal-green/20 flex items-center justify-center">
                <div className="text-xl">⚡</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground mb-1">5-Minute Setup</div>
                <div className="text-sm text-foreground/85">Deploy in minutes, not hours</div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-foreground/80 mb-4">Trusted by development teams at</p>
            <div className="flex justify-center items-center space-x-8 text-foreground/60">
              <span className="font-semibold">TechFlow</span>
              <span className="font-semibold">CloudScale</span>
              <span className="font-semibold">InnovateLabs</span>
              <span className="font-semibold">NextGen</span>
              <span className="font-semibold">EfficientOps</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-terminal-green rounded-full animate-glow-pulse"></div>
      <div className="absolute top-20 right-20 w-2 h-2 bg-terminal-blue rounded-full animate-glow-pulse"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-terminal-green rounded-full animate-glow-pulse"></div>
      <div className="absolute bottom-10 right-10 w-3 h-3 bg-terminal-blue rounded-full animate-glow-pulse"></div>
    </section>
  );
};

export default CTASection;
