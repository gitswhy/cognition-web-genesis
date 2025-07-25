import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Shield, 
  Brain, 
  Zap, 
  Users, 
  Mic, 
  BarChart3, 
  GitBranch,
  Check, 
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  TrendingUp,
  Lock,
  Eye,
  Clock,
  Target
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WebsiteBackground from '@/components/background/WebsiteBackground';

const ProEdition = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currentAddon, setCurrentAddon] = useState(0);
  const [liveStats, setLiveStats] = useState({
    threatDetection: 99,
    avgFixTime: 2.3,
    autoPatches: 247,
    vulnBlocked: 1482
  });

  // Simulate live metrics updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        threatDetection: Math.min(99.9, prev.threatDetection + (Math.random() * 0.1)),
        avgFixTime: Math.max(1.8, prev.avgFixTime + (Math.random() - 0.5) * 0.1),
        autoPatches: prev.autoPatches + Math.floor(Math.random() * 3),
        vulnBlocked: prev.vulnBlocked + Math.floor(Math.random() * 5)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const pricingPlans = {
    monthly: { price: 49, period: "month" },
    annual: { price: 39, period: "month", savings: "20% off" }
  };

  const comparisonFeatures = [
    {
      category: "Core Security",
      features: [
        { name: "Basic vulnerability scanning", free: true, pro: true },
        { name: "Self-healing automation", free: true, pro: true },
        { name: "Intent detection", free: true, pro: true },
        { name: "AI scanning with 30,000+ rules", free: false, pro: true },
        { name: "Auto-patching engine", free: false, pro: true },
        { name: "Recursive security vault", free: false, pro: true }
      ]
    },
    {
      category: "Advanced Features",
      features: [
        { name: "Voice command interface", free: false, pro: true },
        { name: "Team collaboration dashboards", free: false, pro: true },
        { name: "Cross-repository dependency graphs", free: false, pro: true },
        { name: "Policy marketplace", free: false, pro: true },
        { name: "Custom compliance frameworks", free: false, pro: true },
        { name: "Enterprise SSO integration", free: false, pro: true }
      ]
    },
    {
      category: "Support & Scale",
      features: [
        { name: "Community support", free: true, pro: false },
        { name: "24/7 priority support", free: false, pro: true },
        { name: "Dedicated success manager", free: false, pro: true },
        { name: "SLA guarantees", free: false, pro: true },
        { name: "Custom deployment options", free: false, pro: true }
      ]
    }
  ];

  const addOns = [
    {
      name: "Fractal Memory",
      description: "Advanced pattern recognition using fractal algorithms for deeper code analysis",
      price: "$19/month",
      features: ["Fractal pattern analysis", "Deep memory optimization", "Predictive caching"],
      icon: Brain,
      color: "purple"
    },
    {
      name: "Emotional Sync",
      description: "Developer sentiment analysis and team emotional intelligence insights",
      price: "$29/month",
      features: ["Team sentiment tracking", "Burnout prediction", "Mood-based optimization"],
      icon: Users,
      color: "pink"
    },
    {
      name: "Neural Acceleration",
      description: "Hardware-accelerated AI processing for ultra-fast security analysis",
      price: "$39/month",
      features: ["GPU acceleration", "Real-time processing", "Edge deployment"],
      icon: Zap,
      color: "yellow"
    }
  ];

  const faqItems = [
    {
      question: "How does the self-healing automation work in Pro?",
      answer: "Pro's self-healing goes beyond ReflexCore's basic automation. It includes AI-powered root cause analysis, predictive failure prevention, and automated rollback strategies. The system learns from your team's patterns and can prevent issues before they occur."
    },
    {
      question: "What makes the 30,000+ scanning rules different?",
      answer: "Our AI-curated rule set includes industry-specific vulnerabilities, zero-day signatures, and custom threat intelligence. Rules are updated daily and automatically tuned based on your codebase patterns for maximum accuracy with minimal false positives."
    },
    {
      question: "Can I use voice commands for sensitive operations?",
      answer: "Yes, voice commands include multi-factor authentication and can be configured with custom security policies. Sensitive operations require voice biometric confirmation plus additional security factors."
    },
    {
      question: "How does the recursive security vault protect my data?",
      answer: "The vault uses a recursive encryption system where each layer of data is encrypted with different keys. Even if one layer is compromised, the recursive structure maintains data integrity and provides complete audit trails."
    },
    {
      question: "What's included in the policy marketplace?",
      answer: "Access to 500+ pre-built compliance policies, industry-specific templates (SOC 2, GDPR, HIPAA, PCI-DSS), and community-contributed policies. You can also publish and monetize your own policies."
    },
    {
      question: "How do cross-repo dependency graphs work?",
      answer: "Visual mapping of dependencies across all your repositories, including transitive dependencies, version conflicts, and security impact analysis. The system tracks how changes in one repo affect your entire ecosystem."
    }
  ];

  const nextAddon = () => {
    setCurrentAddon((prev) => (prev + 1) % addOns.length);
  };

  const prevAddon = () => {
    setCurrentAddon((prev) => (prev - 1 + addOns.length) % addOns.length);
  };

  const currentPlan = isAnnual ? pricingPlans.annual : pricingPlans.monthly;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Gitswhy OS Pro - AI-Driven Enterprise DevSecOps Platform</title>
        <meta name="description" content="Unlock advanced AI-driven DevSecOps with Gitswhy OS Pro. Features 30,000+ scanning rules, auto-patching, voice commands, and enterprise-grade security." />
        <meta name="keywords" content="enterprise devsecops, ai auto-patching, security scanning, voice commands, policy marketplace, team collaboration" />
        <meta property="og:title" content="Gitswhy OS Pro - Unlock AI-Driven DevSecOps" />
        <meta property="og:description" content="Enterprise features for professional teams: AI scanning, auto-patching, voice commands, and advanced security." />
        <meta property="og:type" content="website" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <WebsiteBackground>
        <Header />
        
        {/* Banner Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center space-y-6">
              <Badge className="bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30 px-4 py-2 text-sm font-medium">
                Enterprise DevSecOps
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                <span className="text-terminal-blue">Gitswhy OS Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto">
                Unlock AI-Driven DevSecOps
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Build on <span className="text-terminal-green">ReflexCore</span> with Enterprise Features
              </h2>
              
              <p className="text-lg text-foreground/70 leading-relaxed">
                Everything in ReflexCore plus advanced AI scanning with 30,000+ rules, 
                intelligent auto-patching, voice-activated controls, team collaboration dashboards, 
                and enterprise-grade security features for professional development teams.
              </p>
            </div>
          </div>
        </section>

        {/* Live Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-terminal-surface border-terminal-blue/30 hover:shadow-blue-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-terminal-blue">Live Security Metrics</CardTitle>
                  <p className="text-foreground/70">Real-time data from Pro users worldwide</p>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-terminal-green animate-pulse">
                        {liveStats.threatDetection.toFixed(1)}%
                      </div>
                      <div className="text-sm text-foreground/70">Threat Detection</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-terminal-blue animate-pulse">
                        {liveStats.avgFixTime.toFixed(1)}s
                      </div>
                      <div className="text-sm text-foreground/70">Avg Fix Time</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 animate-pulse">
                        {liveStats.autoPatches}
                      </div>
                      <div className="text-sm text-foreground/70">Auto Patches Today</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 animate-pulse">
                        {liveStats.vulnBlocked.toLocaleString()}
                      </div>
                      <div className="text-sm text-foreground/70">Vulnerabilities Blocked</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Toggle */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Choose Your <span className="text-terminal-blue">Edition</span>
              </h2>
              
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`text-lg ${!isAnnual ? 'text-foreground font-semibold' : 'text-foreground/60'}`}>
                  Monthly
                </span>
                <Switch 
                  checked={isAnnual} 
                  onCheckedChange={setIsAnnual}
                  className="data-[state=checked]:bg-terminal-blue"
                />
                <span className={`text-lg ${isAnnual ? 'text-foreground font-semibold' : 'text-foreground/60'}`}>
                  Annual
                </span>
                {isAnnual && (
                  <Badge className="bg-terminal-green/20 text-terminal-green border-terminal-green/30">
                    {pricingPlans.annual.savings}
                  </Badge>
                )}
              </div>

              <Card className="max-w-md mx-auto bg-gradient-to-br from-terminal-blue/10 to-purple-500/10 border-terminal-blue/30">
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <div>
                      <div className="text-4xl font-bold text-terminal-blue">
                        ${currentPlan.price}
                      </div>
                      <div className="text-foreground/70">per {currentPlan.period}</div>
                    </div>
                    
                    <div className="space-y-2">
                      <Button variant="terminal-blue" size="lg" className="w-full">
                        Start 30-Day Trial
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                      <Button variant="outline" size="lg" className="w-full border-terminal-blue/30">
                        Contact Sales
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Feature <span className="text-terminal-blue">Comparison</span>
              </h2>
              <p className="text-xl text-foreground/70">
                See what's included in each edition
              </p>
            </div>

            <div className="max-w-6xl mx-auto overflow-x-auto">
              <div className="min-w-[800px]">
                {comparisonFeatures.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4 px-4">
                      {category.category}
                    </h3>
                    
                    <Card className="bg-terminal-surface border-terminal-green/20">
                      <CardContent className="p-0">
                        {/* Header */}
                        {categoryIndex === 0 && (
                          <div className="grid grid-cols-3 gap-4 p-4 border-b border-terminal-green/20 bg-terminal-green/5">
                            <div className="font-semibold text-foreground">Feature</div>
                            <div className="font-semibold text-center text-foreground">ReflexCore Free</div>
                            <div className="font-semibold text-center text-terminal-blue">Gitswhy OS Pro</div>
                          </div>
                        )}
                        
                        {/* Feature Rows */}
                        {category.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex} 
                            className="grid grid-cols-3 gap-4 p-4 border-b border-terminal-green/10 hover:bg-terminal-green/5 transition-colors"
                          >
                            <div className="text-foreground">{feature.name}</div>
                            <div className="flex justify-center">
                              {feature.free ? (
                                <Check className="w-5 h-5 text-terminal-green" />
                              ) : (
                                <X className="w-5 h-5 text-foreground/40" />
                              )}
                            </div>
                            <div className="flex justify-center">
                              {feature.pro ? (
                                <Check className="w-5 h-5 text-terminal-blue" />
                              ) : (
                                <X className="w-5 h-5 text-foreground/40" />
                              )}
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Add-Ons Carousel */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Premium <span className="text-terminal-blue">Add-Ons</span>
              </h2>
              <p className="text-xl text-foreground/70">
                Enhance your Pro experience with specialized modules
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentAddon * 100}%)` }}
                >
                  {addOns.map((addon, index) => {
                    const Icon = addon.icon;
                    
                    return (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <Card className="bg-terminal-surface border-terminal-blue/20 hover:shadow-blue-glow transition-all duration-300">
                          <CardContent className="p-8 text-center">
                            <div className="space-y-6">
                              <div className={`p-4 rounded-xl bg-${addon.color}-500/10 w-fit mx-auto`}>
                                <Icon className={`w-12 h-12 text-${addon.color}-400`} />
                              </div>
                              
                              <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                  {addon.name}
                                </h3>
                                <p className="text-foreground/70 mb-4">
                                  {addon.description}
                                </p>
                                <div className="text-xl font-semibold text-terminal-blue">
                                  {addon.price}
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                {addon.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center justify-center space-x-2">
                                    <Check className="w-4 h-4 text-terminal-green" />
                                    <span className="text-foreground/80 text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                              
                              <Button variant="outline" className="border-terminal-blue/30 text-terminal-blue">
                                Add to Plan
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={prevAddon}
                  className="border-terminal-blue/20 hover:border-terminal-blue/40"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="flex space-x-2">
                  {addOns.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAddon(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentAddon ? 'bg-terminal-blue' : 'bg-foreground/20'
                      }`}
                    />
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  onClick={nextAddon}
                  className="border-terminal-blue/20 hover:border-terminal-blue/40"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Frequently Asked <span className="text-terminal-blue">Questions</span>
              </h2>
              <p className="text-xl text-foreground/70">
                Everything you need to know about Gitswhy OS Pro
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="multiple" className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="border border-terminal-blue/20 rounded-lg bg-terminal-surface/50 px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-terminal-blue transition-colors py-6">
                      <span className="text-lg font-medium">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-terminal-blue/10 to-purple-500/10 border-terminal-blue/30">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Ready to <span className="text-terminal-blue">Upgrade?</span>
                  </h2>
                  
                  <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                    Join thousands of teams using Gitswhy OS Pro to ship secure code faster
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button variant="terminal-blue" size="lg">
                      Start 30-Day Free Trial
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-terminal-blue/30">
                      Schedule Demo
                      <Play className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-6 text-sm text-foreground/60 pt-4">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-terminal-green" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-terminal-green" />
                      <span>Cancel anytime</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-terminal-green" />
                      <span>30-day money back</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </WebsiteBackground>
    </div>
  );
};

export default ProEdition;