import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Shield, 
  Zap, 
  GitBranch, 
  Terminal, 
  Cpu, 
  Lock, 
  Workflow,
  ChevronRight 
} from "lucide-react";
import { ParallaxGrid, StaggeredFadeIn } from "@/components/animations/AnimationComponents";
import EnhancedParallaxBackground from "@/components/background/EnhancedParallaxBackground";

const Features = () => {
  const coreFeatures = [
    {
      icon: Brain,
      title: "Cognition Engine",
      description: "AI-powered code analysis and intelligent automation that learns from your patterns",
      color: "terminal-green"
    },
    {
      icon: Shield,
      title: "Zero-Trust Security",
      description: "Built-in security scanning, vulnerability detection, and compliance automation",
      color: "terminal-blue"
    },
    {
      icon: Zap,
      title: "Lightning Deployment",
      description: "Deploy to any environment in seconds with intelligent rollback capabilities",
      color: "terminal-green"
    },
    {
      icon: GitBranch,
      title: "GitOps Native",
      description: "Everything as code with declarative infrastructure and policy management",
      color: "terminal-blue"
    }
  ];

  const proFeatures = [
    {
      icon: Terminal,
      title: "Advanced Terminal",
      description: "Enhanced terminal with AI completions, smart suggestions, and workflow automation",
      color: "terminal-blue"
    },
    {
      icon: Cpu,
      title: "Cognitive Pipelines",
      description: "Self-optimizing CI/CD pipelines that adapt based on code changes and team patterns",
      color: "terminal-blue"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Advanced threat detection, policy enforcement, and compliance reporting",
      color: "terminal-blue"
    },
    {
      icon: Workflow,
      title: "Team Intelligence",
      description: "Cross-team insights, collaboration tools, and intelligent resource allocation",
      color: "terminal-blue"
    }
  ];

  const FeatureCard = ({ feature, isPro = false }: { feature: any, isPro?: boolean }) => (
    <div className={`group relative p-4 sm:p-5 lg:p-6 rounded-lg border transition-all duration-300 hover:scale-105 ${
      isPro 
        ? 'border-terminal-blue/20 bg-terminal-surface/50 hover:border-terminal-blue/40 blue-glow' 
        : 'border-terminal-green/20 bg-terminal-surface/50 hover:border-terminal-green/40 terminal-glow'
    }`}>
      <div className={`inline-flex p-2 sm:p-2.5 lg:p-3 rounded-lg mb-3 sm:mb-4 ${
        feature.color === 'terminal-blue' 
          ? 'bg-terminal-blue/10 text-terminal-blue' 
          : 'bg-terminal-green/10 text-terminal-green'
      }`}>
        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-terminal-green transition-colors">
        {feature.title}
      </h3>
      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
        {feature.description}
      </p>
      {isPro && (
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium bg-terminal-blue/20 text-terminal-blue rounded-full">
            PRO
          </span>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Simplified background for better performance */}
      <div className="absolute inset-0 opacity-20">
        <ParallaxGrid 
          speed={0.05} 
          gridOpacity={0.04}
          gridColor="rgba(0, 255, 255, 0.03)"
          className="transform-gpu z-10"
        />
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-20 relative z-20">
        {/* Core Features */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground px-4">
            Open Core <span className="text-terminal-green">Features</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
            Start with powerful core features that revolutionize your development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {coreFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        <div className="text-center mb-8">
          <Button variant="terminal" size="lg">
            Get Open Core Free
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Pro Features */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 mt-16 sm:mt-24 lg:mt-32">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground px-4">
            Pro Edition <span className="text-terminal-blue">Features</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
            Unlock advanced capabilities for enterprise teams and complex workflows
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {proFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} isPro />
          ))}
        </div>

        <div className="text-center">
          <Button variant="terminal-blue" size="lg">
            Start Pro Trial
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Code Example */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              See It In <span className="text-terminal-green">Action</span>
            </h3>
            <p className="text-lg text-foreground/70">
              Experience the power of cognition-native DevSecOps
            </p>
          </div>

          <StaggeredFadeIn delay={0.2} staggerDelay={0.4} className="max-w-4xl mx-auto">
            <div className="bg-terminal-surface border border-terminal-green/20 rounded-lg overflow-hidden code-matrix shadow-2xl">
              <div className="flex items-center justify-between bg-terminal-bg/50 px-6 py-3 border-b border-terminal-green/20">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-foreground/60 font-mono ml-4">deploy.gwy</span>
                </div>
                <div className="text-xs text-terminal-green font-mono">● Live</div>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <div className="text-terminal-green">
                  <span className="text-foreground/60">1</span>  # Deploy with cognition-native automation
                </div>
                <div className="text-foreground">
                  <span className="text-foreground/60">2</span>  <span className="text-terminal-blue">gitswhy</span> deploy --env production \
                </div>
                <div className="text-foreground">
                  <span className="text-foreground/60">3</span>    --security-scan --auto-rollback \
                </div>
                <div className="text-foreground">
                  <span className="text-foreground/60">4</span>    --cognition-optimize
                </div>
                <div className="text-terminal-green mt-4">
                  <span className="text-foreground/60">5</span>  
                </div>
                <div className="text-terminal-green">
                  <span className="text-foreground/60">6</span>  ✓ Security scan passed (0 vulnerabilities)
                </div>
                <div className="text-terminal-green">
                  <span className="text-foreground/60">7</span>  ✓ Performance optimized (+23% faster)
                </div>
                <div className="text-terminal-green">
                  <span className="text-foreground/60">8</span>  ✓ Deployed to production in 12s
                </div>
              </div>
            </div>
          </StaggeredFadeIn>
        </div>
      </div>
    </section>
  );
};

export default Features;