import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Terminal, 
  Scan, 
  Wrench, 
  Archive, 
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Code,
  Shield
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOFAQSection from '@/components/SEOFAQSection';
import { SoftwareApplicationSchema } from '@/components/SoftwareApplicationSchema';
import { DynamicHeadline } from '@/components/DynamicHeadline';
import ModuleLottieAnimation from '@/components/ModuleLottieAnimation';
import HowItWorksBackground from '@/components/background/HowItWorksBackground';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-step]');
      const scrollPosition = window.scrollY + window.innerHeight * 0.3; // Adjusted threshold

      let newActiveStep = 0;
      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          newActiveStep = index;
        }
      });
      
      setActiveStep(newActiveStep);
    };

    // Call initially to set correct active step
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      id: 'install-core',
      title: 'Install Core',
      subtitle: 'One-line setup',
      description: 'Get started with Gitswhy OS in seconds. Our installer automatically detects your environment and configures the optimal settings.',
      type: 'core',
      icon: Download,
      code: 'curl -fsSL https://install.gitswhy.io | bash',
      features: ['Auto-detection of git workflows', 'Zero configuration required', 'Cross-platform support']
    },
    {
      id: 'shell-hooks',
      title: 'Shell Hooks',
      subtitle: 'Seamless integration',
      description: 'Gitswhy hooks into your shell commands, monitoring every keystroke and git operation without interrupting your workflow.',
      type: 'core',
      icon: Terminal,
      code: 'gitswhy hook --install\n# Automatically added to .zshrc/.bashrc',
      features: ['Real-time command monitoring', 'Invisible operation', 'Compatible with all shells']
    },
    {
      id: 'on-the-fly-scans',
      title: 'On-the-fly Scans',
      subtitle: 'Instant security',
      description: 'Every code change is scanned in real-time. Our engine detects vulnerabilities, secrets, and quality issues as you type.',
      type: 'core',
      icon: Scan,
      code: 'git add .\n# → Scanning 47 files...\n# → Found 2 potential issues',
      features: ['Real-time vulnerability detection', 'Secret scanning', 'Code quality analysis']
    },
    {
      id: 'auto-repair',
      title: 'Auto-Repair',
      subtitle: 'Self-healing code',
      description: 'When issues are detected, Gitswhy can automatically apply fixes or provide one-click solutions with full transparency.',
      type: 'pro',
      icon: Wrench,
      code: 'gitswhy auto-fix\n# → Applied 3 security patches\n# → Suggested 2 optimizations',
      features: ['Automatic vulnerability patching', 'Code optimization', 'Rollback protection']
    },
    {
      id: 'intent-logging',
      title: 'Intent Logging',
      subtitle: 'Understanding context',
      description: 'Gitswhy learns from your coding patterns and intentions, building a knowledge base that improves over time.',
      type: 'pro',
      icon: Archive,
      code: '# Detected intent: "Adding user authentication"\n# Suggested security best practices',
      features: ['Pattern recognition', 'Intent prediction', 'Contextual suggestions']
    },
    {
      id: 'team-insights',
      title: 'Team Insights',
      subtitle: 'Collaborative intelligence',
      description: 'Share insights across your team. Track security posture, code quality trends, and deployment confidence metrics.',
      type: 'pro',
      icon: Users,
      code: 'gitswhy dashboard\n# Team security score: 94%\n# 127 issues prevented this week',
      features: ['Team dashboards', 'Security metrics', 'Collaborative learning']
    }
  ];

  const scrollToStep = (index: number) => {
    const element = document.querySelector(`[data-step="${index}"]`);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <HowItWorksBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="bg-terminal-green/20 text-terminal-green border-terminal-green/30 mb-6">
            Step-by-Step Guide
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold font-mono mb-6">
            How <span className="text-terminal-green">Gitswhy</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From installation to team insights, discover how Gitswhy OS transforms 
            your development workflow with cognition-native DevSecOps.
          </p>
          
          <Button 
            size="lg" 
            className="bg-terminal-green hover:bg-terminal-green/90 text-background"
            onClick={() => scrollToStep(0)}
          >
            Start the Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative">
        {/* Sticky Progress Navigation */}
        <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <div className="bg-terminal-surface/80 backdrop-blur-sm rounded-lg border border-terminal-green/20 p-4 shadow-lg">
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Progress</h3>
            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                const isCompleted = activeStep > index;
                
                return (
                  <button
                    key={step.id}
                    onClick={() => scrollToStep(index)}
                    className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 w-full text-left ${
                      isActive 
                        ? step.type === 'core' 
                          ? 'bg-terminal-green/20 text-terminal-green border border-terminal-green/30' 
                          : 'bg-terminal-blue/20 text-terminal-blue border border-terminal-blue/30'
                        : 'hover:bg-muted/50'
                    }`}
                    aria-label={`Go to step ${index + 1}: ${step.title}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isCompleted 
                        ? 'bg-terminal-green text-background' 
                        : isActive
                          ? step.type === 'core' ? 'bg-terminal-green/20' : 'bg-terminal-blue/20'
                          : 'bg-muted'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Icon className="w-4 h-4" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium truncate">{step.title}</div>
                      <div className="text-xs text-muted-foreground truncate">{step.subtitle}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Steps Content */}
        <div className="container mx-auto px-4 lg:pl-80 lg:pr-16 py-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <section 
                key={step.id}
                data-step={index}
                className="relative min-h-screen flex items-center py-24"
              >
                {/* Parallax Background Elements */}
                <div 
                  className={`absolute inset-0 ${reducedMotion ? '' : 'transform'}`}
                  style={{
                    transform: reducedMotion ? 'none' : `translateY(${(activeStep - index) * 50}px)`,
                    transition: reducedMotion ? 'none' : 'transform 0.6s ease-out'
                  }}
                >
                  <div className={`absolute w-96 h-96 rounded-full blur-3xl opacity-10 ${
                    step.type === 'core' ? 'bg-terminal-green' : 'bg-terminal-blue'
                  } ${isEven ? 'left-0 top-0' : 'right-0 bottom-0'}`} />
                </div>

                <div className={`grid lg:grid-cols-2 gap-16 items-center w-full ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Content Side */}
                  <div className={`space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          step.type === 'core' 
                            ? 'bg-terminal-green/20 text-terminal-green' 
                            : 'bg-terminal-blue/20 text-terminal-blue'
                        }`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <Badge 
                            variant="secondary" 
                            className={step.type === 'core' 
                              ? 'bg-terminal-green/20 text-terminal-green border-terminal-green/30' 
                              : 'bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30'
                            }
                          >
                            {step.type === 'core' ? 'Open Core' : 'Pro Edition'}
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-1">
                            Step {index + 1} of {steps.length}
                          </div>
                        </div>
                      </div>
                      
                      <h2 className="text-4xl lg:text-5xl font-bold font-mono">
                        {step.title}
                      </h2>
                      <p className="text-xl text-muted-foreground">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Code Block */}
                    <Card className="bg-terminal-bg border-terminal-surface">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Terminal className="w-4 h-4 text-terminal-green" />
                          <span className="text-sm text-terminal-green font-mono">Terminal</span>
                        </div>
                        <pre className="text-terminal-green font-mono text-sm whitespace-pre-wrap">
                          {step.code}
                        </pre>
                      </CardContent>
                    </Card>

                    {/* Features List */}
                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className={`w-5 h-5 ${
                            step.type === 'core' ? 'text-terminal-green' : 'text-terminal-blue'
                          }`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {step.type === 'pro' && (
                      <Button 
                        className="bg-terminal-blue hover:bg-terminal-blue/90 text-white"
                        size="lg"
                      >
                        Upgrade to Pro
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  {/* Animation Side */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Card className="bg-terminal-surface/50 backdrop-blur-sm border-terminal-surface">
                      <CardContent className="p-8">
                        {/* Lottie Animation Container */}
                        <div className="aspect-square rounded-lg flex items-center justify-center relative overflow-hidden">
                          {/* Animated Background Grid */}
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                          
                          {/* Lottie Animation */}
                          <ModuleLottieAnimation 
                            moduleId={step.id}
                            isActive={activeStep === index}
                            reducedMotion={reducedMotion}
                          />
                          
                          {/* Fallback Central Animation Element */}
                          <div className={`relative z-10 ${reducedMotion ? '' : 'animate-pulse'}`}>
                            <Icon className={`w-24 h-24 ${
                              step.type === 'core' ? 'text-terminal-green' : 'text-terminal-blue'
                            }`} />
                          </div>
                          
                          {/* Floating Elements */}
                          {!reducedMotion && (
                            <>
                              <div className="absolute top-4 right-4 w-3 h-3 bg-terminal-green rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                              <div className="absolute bottom-4 left-4 w-2 h-2 bg-terminal-blue rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                              <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                            </>
                          )}
                        </div>
                        
                        <div className="mt-6 text-center">
                          <Button variant="outline" size="sm" className="border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10">
                            <Play className="w-4 h-4 mr-2" />
                            View Interactive Demo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-mono mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with our Open Core edition or unlock the full potential with Pro features.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-terminal-green hover:bg-terminal-green/90 text-background">
              <Code className="mr-2 w-4 h-4" />
              Try Open Core
            </Button>
            <Button size="lg" className="bg-terminal-blue hover:bg-terminal-blue/90 text-white">
              <Shield className="mr-2 w-4 h-4" />
              Start Pro Trial
            </Button>
          </div>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <SEOFAQSection />

      {/* SEO Schema */}
      <SoftwareApplicationSchema
        name="Gitswhy OS - How It Works"
        description="Learn how Gitswhy OS transforms development workflows with cognition-native DevSecOps. Step-by-step guide from installation to team collaboration."
        applicationCategory="DeveloperApplication"
      />

      <Footer />
    </div>
  );
};

export default HowItWorks;