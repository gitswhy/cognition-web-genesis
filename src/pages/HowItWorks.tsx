import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import OptimizedCard from '@/components/common/OptimizedCard';
import { Badge } from '@/components/ui/badge';
import { Download, Terminal, Scan, Wrench, Archive, Users, CheckCircle, ArrowRight, Play, Code, Shield } from 'lucide-react';
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
      let foundActiveSection = false;
      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          newActiveStep = index;
          foundActiveSection = true;
        }
      });

      // If we're past all sections, set activeStep to steps.length to show all as completed
      if (!foundActiveSection && scrollPosition > 0) {
        const lastSection = sections[sections.length - 1] as HTMLElement;
        if (lastSection && scrollPosition >= lastSection.offsetTop + lastSection.offsetHeight) {
          newActiveStep = sections.length;
        }
      }
      setActiveStep(newActiveStep);
    };

    // Call initially to set correct active step
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const steps = [{
    id: 'install-initiate',
    title: 'Install & Initiate',
    subtitle: 'Single command setup',
    description: 'Get started with a single command. Gitswhy OS quietly loads in your shell (like Bash or Zsh), ready to protect and optimize every coding session.',
    type: 'core',
    icon: Download,
    code: 'git clone https://github.com/gitswhy/reflexcore.git\ncd reflexcore\npip install -r requirements.txt\npython3 cli/gitswhy_cli.py init',
    features: ['Single command installation', 'Shell integration (Bash/Zsh)', 'Always-on background protection']
  }, {
    id: 'smart-monitoring',
    title: 'Smart Monitoring',
    subtitle: 'Zero interruption',
    description: 'As you code, Gitswhy OS runs in the background—no pop-ups or slowdowns. It continuously tracks system health, monitors typing patterns, and stays completely private.',
    type: 'core',
    icon: Scan,
    code: '# Monitoring active...\n# System health: ✓\n# Typing confidence: High\n# Privacy: Local only',
    features: ['Background system health tracking', 'Typing pattern analysis', 'Complete privacy - nothing sent anywhere']
  }, {
    id: 'intent-detection',
    title: 'Intent Detection & Tagging',
    subtitle: 'Understanding hesitation',
    description: 'When you pause (hesitation before a risky edit), Gitswhy OS recognizes it instantly, tags the moment, and adds context to your private encrypted Vault.',
    type: 'core',
    icon: Archive,
    code: '# Pause detected at line 47\n# Tagged as: "uncertain - exploring"\n# Saved to encrypted Vault\n# Reason: Complex refactor',
    features: ['Pause detection for uncertainty', 'Automatic tagging and context', 'Private encrypted Vault storage']
  }, {
    id: 'automated-cleanup',
    title: 'Automated Cleanup & Self-Healing',
    subtitle: 'System optimization',
    description: 'Whenever your system slows or gets cluttered, Gitswhy OS automatically flushes caches, kills zombie processes, and cleans temp files—keeping your shell fast.',
    type: 'core',
    icon: Wrench,
    code: '# Auto-cleanup triggered\n# Cache flushed: 2.3GB freed\n# Zombie processes killed: 7\n# Temp files cleaned: 1.1GB',
    features: ['Automatic cache flushing', 'Zombie process cleanup', 'Temp file management']
  }, {
    id: 'realtime-scanning',
    title: 'Real-Time Bug & Security Scanning',
    subtitle: 'Pro protection',
    description: 'With Gitswhy OS Pro, every file save or keystroke is scanned against 30,000+ rules for bugs & security threats. AI agent suggests fixes with one-click approval.',
    type: 'pro',
    icon: Shield,
    code: '# Real-time scan active\n# Scanned against 30,000+ rules\n# Critical security issue found!\n# AI fix suggested: Click to apply',
    features: ['30,000+ security & bug rules', 'Real-time keystroke scanning', 'AI-powered fix suggestions']
  }, {
    id: 'one-click-fixes',
    title: 'One-Click Fixes & Team Insights',
    subtitle: 'Pro collaboration',
    description: 'Approve fixes with one click or roll back as needed. Team dashboards show saved time, tracked bugs, and project health metrics with compliance packs.',
    type: 'pro',
    icon: Users,
    code: '# Team Dashboard\n# Bugs prevented: 47 this week\n# Time saved: 12.5 hours\n# Security score: 94%\n# Compliance: SOC2 ready',
    features: ['One-click fix approval/rollback', 'Team productivity dashboards', 'Voice commands & compliance packs']
  }, {
    id: 'review-secure',
    title: 'Review & Secure Everything',
    subtitle: 'Complete audit trail',
    description: 'All actions, hesitations, and fixes are logged in your encrypted Vault for personal review, auditing, or team insights—staying privacy-first at all times.',
    type: 'core',
    icon: Archive,
    code: '# Encrypted Vault\n# Sessions logged: 247\n# Hesitations tracked: 89\n# Fixes applied: 156\n# Export available for audit',
    features: ['Complete session logging', 'Encrypted audit trail', 'Privacy-first architecture']
  }];
  const scrollToStep = (index: number) => {
    const element = document.querySelector(`[data-step="${index}"]`);
    if (element) {
      element.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth'
      });
    }
  };
  return <div className="min-h-screen">
      <HowItWorksBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="container-responsive text-center relative z-10">
          <Badge variant="secondary" className="bg-terminal-green/20 text-terminal-green border-terminal-green/30 mb-3 sm:mb-6 text-xs sm:text-sm">
            Step-by-Step Guide
          </Badge>
          <h1 className="text-scale-hero font-bold font-mono mb-3 sm:mb-6">
            How <span className="text-terminal-green">Gitswhy</span> Works
          </h1>
          <p className="text-scale-subtitle text-muted-foreground max-w-3xl mx-auto mb-4 sm:mb-8">
            <strong>Gitswhy OS is always on your background assistant for clean, safe, ship-ready code.</strong><br />
            Discover how Gitswhy OS acts as your second-brain, monitoring, cleaning, scanning, and auto-healing your code.
          </p>
          
          <Button size="sm" className="bg-terminal-green hover:bg-terminal-green/90 text-background mobile-button" onClick={() => scrollToStep(0)}>
            Start Journey
            <ArrowRight className="ml-1 w-3 h-3" />
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
              return <button key={step.id} onClick={() => scrollToStep(index)} className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 w-full text-left ${isActive ? step.type === 'core' ? 'bg-terminal-green/20 text-terminal-green border border-terminal-green/30' : 'bg-terminal-blue/20 text-terminal-blue border border-terminal-blue/30' : 'hover:bg-muted/50'}`} aria-label={`Go to step ${index + 1}: ${step.title}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isCompleted ? 'bg-terminal-green text-background' : isActive ? step.type === 'core' ? 'bg-terminal-green/20' : 'bg-terminal-blue/20' : 'bg-muted'}`}>
                      {isCompleted ? <CheckCircle className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium truncate">{step.title}</div>
                      <div className="text-xs text-muted-foreground truncate">{step.subtitle}</div>
                    </div>
                  </button>;
            })}
            </div>
          </div>
        </nav>

        {/* Steps Content */}
        <div className="container-responsive lg:pl-80 lg:pr-16 padding-section">
          {steps.map((step, index) => {
          const Icon = step.icon;
          const isEven = index % 2 === 0;
          return <section key={step.id} data-step={index} className="relative min-h-screen flex items-center py-24">
                {/* Parallax Background Elements */}
                <div className={`absolute inset-0 pointer-events-none ${reducedMotion ? '' : 'transform'}`} style={{
              transform: reducedMotion ? 'none' : `translateY(${(activeStep - index) * 50}px)`,
              transition: reducedMotion ? 'none' : 'transform 0.6s ease-out'
            }}>
                  <div className={`absolute w-96 h-96 rounded-full blur-3xl opacity-10 ${step.type === 'core' ? 'bg-terminal-green' : 'bg-terminal-blue'} ${isEven ? 'left-0 top-0' : 'right-0 bottom-0'}`} />
                </div>

                <div className={`grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 items-center w-full ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Content Side */}
                  <div className={`space-y-2 sm:space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${step.type === 'core' ? 'bg-terminal-green/20 text-terminal-green' : 'bg-terminal-blue/20 text-terminal-blue'}`}>
                          <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <Badge variant="secondary" className={step.type === 'core' ? 'bg-terminal-green/20 text-terminal-green border-terminal-green/30' : 'bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30'}>
                            {step.type === 'core' ? 'Open Core' : 'Pro Edition'}
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-1">
                            Step {index + 1} of {steps.length}
                          </div>
                        </div>
                      </div>
                      
                      <h2 className="text-sm sm:text-lg lg:text-xl font-bold font-mono leading-tight">
                        {step.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm leading-tight">
                      {step.description}
                    </p>

                    {/* Code Block */}
                    <Card className="bg-terminal-bg border-terminal-surface hidden sm:block">
                      <CardContent className="card-responsive">
                        <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                          <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-terminal-green" />
                          <span className="text-xs sm:text-sm text-terminal-green font-mono">Terminal</span>
                        </div>
                        <pre className="text-terminal-green font-mono text-xs sm:text-sm whitespace-pre-wrap break-all">
                          {step.code}
                        </pre>
                      </CardContent>
                    </Card>

                    {/* Features List */}
                    <div className="space-y-1">
                      {step.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-1">
                          <CheckCircle className={`w-2 h-2 sm:w-3 sm:h-3 ${step.type === 'core' ? 'text-terminal-green' : 'text-terminal-blue'}`} />
                          <span className="text-xs sm:text-sm text-muted-foreground leading-tight">{feature}</span>
                        </div>)}
                    </div>

                    {step.type === 'pro' && <Button className="bg-terminal-blue hover:bg-terminal-blue/90 text-white" size="lg" asChild>
                        <Link to="/pro-edition">
                          Upgrade to Pro
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>}
                  </div>

                  {/* Animation Side */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <OptimizedCard variant="hover" className="bg-terminal-surface/50 backdrop-blur-sm border-terminal-surface">
                      <div className="p-8">
                        {/* Lottie Animation Container */}
                        <div className="aspect-square rounded-lg flex items-center justify-center relative overflow-hidden">
                          {/* Animated Background Grid */}
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                          
                          {/* Lottie Animation */}
                          <ModuleLottieAnimation moduleId={step.id} isActive={activeStep === index} reducedMotion={reducedMotion} />
                          
                          {/* Fallback Central Animation Element */}
                          <div className={`relative z-10 ${reducedMotion ? '' : 'animate-pulse'}`}>
                            <Icon className={`w-24 h-24 ${step.type === 'core' ? 'text-terminal-green' : 'text-terminal-blue'}`} />
                          </div>
                          
                          {/* Floating Elements */}
                          {!reducedMotion && <>
                              <div className="absolute top-4 right-4 w-3 h-3 bg-terminal-green rounded-full animate-bounce" style={{
                          animationDelay: '0s'
                        }} />
                              <div className="absolute bottom-4 left-4 w-2 h-2 bg-terminal-blue rounded-full animate-bounce" style={{
                          animationDelay: '0.5s'
                        }} />
                              <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{
                          animationDelay: '1s'
                        }} />
                            </>}
                        </div>
                        
                        <div className="mt-6 text-center">
                          <Button variant="outline" size="sm" className="border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10">
                            <Play className="w-4 h-4 mr-2" />
                            View Interactive Demo
                          </Button>
                        </div>
                      </div>
                    </OptimizedCard>
                  </div>
                </div>
              </section>;
        })}
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="padding-section">
        <div className="container-responsive text-center">
          <h2 className="text-scale-heading font-bold font-mono mb-3 sm:mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-scale-subtitle text-muted-foreground mb-4 sm:mb-8 max-w-2xl mx-auto">
            Start with our Open Core edition or unlock the full potential with Pro features.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-terminal-green hover:bg-terminal-green/90 text-background" asChild>
              <Link to="/open-core">
                <Code className="mr-2 w-4 h-4" />
                Try Open Core
              </Link>
            </Button>
            <Button size="lg" className="bg-terminal-blue hover:bg-terminal-blue/90 text-white" asChild>
              <Link to="/pro-edition">
                <Shield className="mr-2 w-4 h-4" />
                Start Pro Trial
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <SEOFAQSection />

      {/* SEO Schema */}
      <SoftwareApplicationSchema name="Gitswhy OS - How It Works" description="Learn how Gitswhy OS transforms development workflows with cognition-native DevSecOps. Step-by-step guide from installation to team collaboration." applicationCategory="DeveloperApplication" />

      <Footer />
    </div>;
};
export default HowItWorks;