import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, Shield, Zap, Users, AlertTriangle, FileCode, TrendingUp, BarChart3, PieChart, Activity, ArrowRight, Star, Check, Mic, Play, X, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import EditionComparisonTable from '@/components/EditionComparisonTable';
import { SoftwareApplicationSchema } from '@/components/SoftwareApplicationSchema';
import { DynamicHeadline } from '@/components/DynamicHeadline';
import ProEditionBackground from '@/components/background/ProEditionBackground';
import PremiumAddOnsCarousel from '@/components/PremiumAddOnsCarousel';
const ProEdition = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const premiumFeatures = [{
    id: 'ai-risk-engine',
    title: 'AI Risk Engine',
    subtitle: 'Advanced Rules Pack',
    description: 'Machine learning-powered risk detection with 50,000+ security rules and real-time threat intelligence.',
    icon: Shield,
    gradient: 'from-red-500/20 to-orange-500/20',
    stats: '99.8% accuracy'
  }, {
    id: 'auto-fix-patch',
    title: 'Auto-Fix & Patch Suggestions',
    subtitle: 'Intelligent Remediation',
    description: 'AI-generated patches and fixes applied automatically or suggested with one-click approval workflows.',
    icon: Zap,
    gradient: 'from-yellow-500/20 to-amber-500/20',
    stats: '10x faster fixes'
  }, {
    id: 'team-dashboards',
    title: 'Team Dashboards & Drift Alerts',
    subtitle: 'Enterprise Monitoring',
    description: 'Real-time team performance metrics, configuration drift detection, and customizable alert systems.',
    icon: Users,
    gradient: 'from-green-500/20 to-emerald-500/20',
    stats: 'Real-time alerts'
  }, {
    id: 'policy-editor',
    title: 'Policy-as-Code Editor',
    subtitle: 'Governance Automation',
    description: 'Visual policy editor with GitOps integration, compliance templates, and automated enforcement.',
    icon: FileCode,
    gradient: 'from-purple-500/20 to-violet-500/20',
    stats: '100+ templates'
  }];
  const faqItems = [{
    question: 'What makes Gitswhy OS Pro different from Open Core?',
    answer: 'Pro Edition includes AI-powered risk detection, automatic patching, team collaboration tools, and enterprise-grade governance features.'
  }, {
    question: 'How does the AI Risk Engine work?',
    answer: 'Our ML models analyze code patterns, security vulnerabilities, and historical data to predict and prevent issues before deployment.'
  }, {
    question: 'Can I migrate from Open Core to Pro seamlessly?',
    answer: 'Yes, Pro Edition is fully compatible with Open Core configurations and provides a smooth upgrade path with zero downtime.'
  }, {
    question: 'What kind of support is included?',
    answer: 'Pro Edition includes 24/7 priority support, dedicated success manager, and access to our enterprise security team.'
  }];
  return <div className="relative">
      {/* SEO Schema */}
      <SoftwareApplicationSchema
        name="Gitswhy OS Pro Edition"
        description="Enterprise-grade cognition engine with AI-powered risk detection, automatic patching, and team collaboration tools for professional development teams."
        offers={[
          { price: "49", priceCurrency: "USD", name: "Pro Edition Monthly" },
          { price: "39", priceCurrency: "USD", name: "Pro Edition Annual" }
        ]}
      />
      
      {/* Pro Edition Background */}
      <ProEditionBackground />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30">
                Enterprise DevSecOps
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold font-mono tracking-tight">
                <span className="text-terminal-blue">Gitswhy</span>{' '}
                <span className="text-foreground">Pro</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Enterprise-grade cognition engine with AI-powered risk detection, 
                automatic patching, and team collaboration tools.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-terminal-blue hover:bg-terminal-blue/90 text-white">
                Start Pro Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-terminal-blue/30 text-terminal-blue hover:bg-terminal-blue/10">
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-terminal-green" />
                <span>SOC 2 Compliant</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Animated Analytics Dashboard */}
          <div className="relative">
            <Card className="bg-terminal-surface/50 backdrop-blur-sm border-terminal-blue/20">
              <CardHeader>
                <CardTitle className="text-terminal-blue font-mono">Live Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-mono text-terminal-green animate-pulse">99.8%</div>
                    <div className="text-xs text-muted-foreground">Threat Detection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-mono text-terminal-blue animate-pulse">2.3s</div>
                    <div className="text-xs text-muted-foreground">Avg Fix Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-mono text-yellow-400 animate-pulse">247</div>
                    <div className="text-xs text-muted-foreground">Auto Patches</div>
                  </div>
                </div>
                
                {/* Chart Visualization */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Security Score</span>
                    <span className="text-sm text-terminal-green">+23%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-terminal-green to-terminal-blue rounded-full animate-pulse" style={{
                    width: '87%'
                  }} />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Deploy Confidence</span>
                    <span className="text-sm text-terminal-blue">94%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-terminal-blue rounded-full animate-pulse" style={{
                    width: '94%'
                  }} />
                  </div>
                </div>
                
                {/* Activity Feed */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground">Recent Activity</div>
                  <div className="space-y-1 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse" />
                      <span>SQL injection blocked in user-auth.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-terminal-blue rounded-full animate-pulse" />
                      <span>Auto-patched dependency vulnerability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                      <span>Team drift alert: config changes detected</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Edition Comparison Table */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-mono mb-4">
              Choose Your Edition
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compare features across Free Core, Pro, and Enterprise editions
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-xl border border-terminal-blue/20 bg-terminal-surface/30 backdrop-blur-sm">
              <table className="w-full" role="table" aria-label="Edition comparison table">
                <thead>
                  <tr className="border-b border-terminal-blue/20">
                    <th className="p-6 text-left font-mono text-lg">Features</th>
                    <th className="p-6 text-center font-mono text-lg">
                      <div className="space-y-2">
                        <div className="text-terminal-green">Free Core</div>
                        <Badge variant="secondary" className="bg-terminal-green/20 text-terminal-green">
                          Open Source
                        </Badge>
                      </div>
                    </th>
                    <th className="p-6 text-center font-mono text-lg">
                      <div className="space-y-2">
                        <div className="text-terminal-blue">Pro Edition</div>
                        <Badge variant="secondary" className="bg-terminal-blue/20 text-terminal-blue">
                          $49/month
                        </Badge>
                      </div>
                    </th>
                    <th className="p-6 text-center font-mono text-lg">
                      <div className="space-y-2">
                        <div className="text-yellow-400">Enterprise</div>
                        <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                          Custom Pricing
                        </Badge>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: 'Real-Time Security Scanning',
                      description: 'Continuous monitoring for vulnerabilities and threats',
                      free: 'Basic rules',
                      pro: '30,000+ rules',
                      enterprise: '50,000+ rules + Custom',
                      freeIcon: 'check',
                      proIcon: 'check',
                      enterpriseIcon: 'check'
                    },
                    {
                      feature: 'AI Auto-Patching',
                      description: 'AI-powered automatic fixes and suggestions',
                      free: 'Manual only',
                      pro: 'Full LLM fixes',
                      enterprise: 'Advanced ML + Custom',
                      freeIcon: 'lock',
                      proIcon: 'check',
                      enterpriseIcon: 'check'
                    },
                    {
                      feature: 'Self-Healing Remediation',
                      description: 'Automatic code healing and recovery',
                      free: 'Not available',
                      pro: 'Basic healing',
                      enterprise: 'Advanced + Predictive',
                      freeIcon: 'lock',
                      proIcon: 'check',
                      enterpriseIcon: 'check'
                    },
                    {
                      feature: 'Encrypted Vault Logging',
                      description: 'Secure encrypted audit logs and compliance',
                      free: 'Basic logs',
                      pro: 'Encrypted vault',
                      enterprise: 'Advanced encryption',
                      freeIcon: 'check',
                      proIcon: 'check',
                      enterpriseIcon: 'check'
                    },
                    {
                      feature: 'Voice Commands',
                      description: 'Hands-free DevSecOps workflow control',
                      free: 'Not available',
                      pro: 'Coming soon',
                      enterprise: 'Beta access',
                      freeIcon: 'lock',
                      proIcon: 'info',
                      enterpriseIcon: 'check'
                    },
                    {
                      feature: 'Policy Compliance',
                      description: 'Automated compliance and governance',
                      free: 'Basic policies',
                      pro: '100+ templates',
                      enterprise: 'Custom policies',
                      freeIcon: 'check',
                      proIcon: 'check',
                      enterpriseIcon: 'check'
                    },
                    {
                      feature: 'Cross-Repo Risk Graphs',
                      description: 'Visual risk analysis across repositories',
                      free: 'Single repo',
                      pro: 'Multi-repo',
                      enterprise: 'Organization-wide',
                      freeIcon: 'check',
                      proIcon: 'check',
                      enterpriseIcon: 'check'
                    },
                    {
                      feature: 'Team Dashboards',
                      description: 'Real-time team performance metrics',
                      free: 'Individual only',
                      pro: 'Team insights',
                      enterprise: 'Enterprise analytics',
                      freeIcon: 'check',
                      proIcon: 'check',
                      enterpriseIcon: 'check'
                    }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-terminal-blue/10 hover:bg-terminal-blue/5 transition-colors">
                      <td className="p-6">
                        <div className="space-y-1">
                          <div className="font-medium">{row.feature}</div>
                          <div className="text-sm text-muted-foreground">{row.description}</div>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.freeIcon === 'check' && <Check className="w-5 h-5 text-terminal-green" />}
                          {row.freeIcon === 'lock' && <Lock className="w-5 h-5 text-muted-foreground" />}
                          {row.freeIcon === 'info' && <Info className="w-5 h-5 text-muted-foreground" />}
                          <span className="text-sm">{row.free}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.proIcon === 'check' && <Check className="w-5 h-5 text-terminal-blue" />}
                          {row.proIcon === 'lock' && <Lock className="w-5 h-5 text-muted-foreground" />}
                          {row.proIcon === 'info' && <Info className="w-5 h-5 text-terminal-blue" />}
                          <span className="text-sm">{row.pro}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.enterpriseIcon === 'check' && <Check className="w-5 h-5 text-yellow-400" />}
                          {row.enterpriseIcon === 'lock' && <Lock className="w-5 h-5 text-muted-foreground" />}
                          {row.enterpriseIcon === 'info' && <Info className="w-5 h-5 text-yellow-400" />}
                          <span className="text-sm">{row.enterprise}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile Cards */}
            <div className="lg:hidden space-y-6">
              {[
                {
                  title: 'Free Core',
                  price: 'Open Source',
                  accent: 'terminal-green',
                  features: [
                    { name: 'Real-Time Security Scanning', value: 'Basic rules', available: true },
                    { name: 'AI Auto-Patching', value: 'Manual only', available: false },
                    { name: 'Self-Healing Remediation', value: 'Not available', available: false },
                    { name: 'Encrypted Vault Logging', value: 'Basic logs', available: true },
                    { name: 'Voice Commands', value: 'Not available', available: false },
                    { name: 'Policy Compliance', value: 'Basic policies', available: true },
                    { name: 'Cross-Repo Risk Graphs', value: 'Single repo', available: true },
                    { name: 'Team Dashboards', value: 'Individual only', available: true }
                  ]
                },
                {
                  title: 'Pro Edition',
                  price: '$49/month',
                  accent: 'terminal-blue',
                  features: [
                    { name: 'Real-Time Security Scanning', value: '30,000+ rules', available: true },
                    { name: 'AI Auto-Patching', value: 'Full LLM fixes', available: true },
                    { name: 'Self-Healing Remediation', value: 'Basic healing', available: true },
                    { name: 'Encrypted Vault Logging', value: 'Encrypted vault', available: true },
                    { name: 'Voice Commands', value: 'Coming soon', available: 'coming' },
                    { name: 'Policy Compliance', value: '100+ templates', available: true },
                    { name: 'Cross-Repo Risk Graphs', value: 'Multi-repo', available: true },
                    { name: 'Team Dashboards', value: 'Team insights', available: true }
                  ]
                },
                {
                  title: 'Enterprise',
                  price: 'Custom Pricing',
                  accent: 'yellow-400',
                  features: [
                    { name: 'Real-Time Security Scanning', value: '50,000+ rules + Custom', available: true },
                    { name: 'AI Auto-Patching', value: 'Advanced ML + Custom', available: true },
                    { name: 'Self-Healing Remediation', value: 'Advanced + Predictive', available: true },
                    { name: 'Encrypted Vault Logging', value: 'Advanced encryption', available: true },
                    { name: 'Voice Commands', value: 'Beta access', available: true },
                    { name: 'Policy Compliance', value: 'Custom policies', available: true },
                    { name: 'Cross-Repo Risk Graphs', value: 'Organization-wide', available: true },
                    { name: 'Team Dashboards', value: 'Enterprise analytics', available: true }
                  ]
                }
              ].map((edition, index) => (
                <Card key={index} className="border-terminal-blue/20 backdrop-blur-sm">
                  <CardHeader>
                    <div className="text-center space-y-2">
                      <CardTitle className={`text-xl font-mono text-${edition.accent}`}>
                        {edition.title}
                      </CardTitle>
                      <Badge variant="secondary" className={`bg-${edition.accent}/20 text-${edition.accent}`}>
                        {edition.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {edition.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {feature.available === true && <Check className={`w-4 h-4 text-${edition.accent}`} />}
                          {feature.available === false && <X className="w-4 h-4 text-muted-foreground" />}
                          {feature.available === 'coming' && <Info className={`w-4 h-4 text-${edition.accent}`} />}
                          <span className="text-sm font-medium">{feature.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{feature.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Add-Ons Carousel */}
      <PremiumAddOnsCarousel />

      {/* Premium Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-mono mb-4">
              Enterprise Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced capabilities designed for teams that ship mission-critical software
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {premiumFeatures.map(feature => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === feature.id;
            return <Card key={feature.id} className={`relative group cursor-pointer transition-all duration-300 hover:scale-105 border-terminal-blue/20 backdrop-blur-sm overflow-hidden`} onMouseEnter={() => setHoveredCard(feature.id)} onMouseLeave={() => setHoveredCard(null)}>
                  {/* Lock Overlay */}
                  <div className={`absolute inset-0 bg-terminal-blue/10 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} z-10`}>
                    <div className="text-center space-y-4">
                      <Lock className="w-12 h-12 text-terminal-blue mx-auto animate-bounce" />
                      <Button className="bg-terminal-blue hover:bg-terminal-blue/90 text-white">
                        Upgrade to Unlock
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Icon className={`w-8 h-8 text-terminal-blue transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} />
                          <div>
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                            <p className="text-sm text-terminal-blue">{feature.subtitle}</p>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-terminal-blue/20 text-terminal-blue">
                        {feature.stats}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Voice Integration Teaser */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="relative group cursor-pointer transition-all duration-500 hover:scale-105 border-terminal-blue/30 backdrop-blur-sm overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(0,212,255,0.05)_50%,transparent_65%)] bg-[length:20px_20px] animate-pulse" />
              
              <CardContent className="p-8 lg:p-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Badge variant="secondary" className="bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30">
                        Coming Soon
                      </Badge>
                      <h3 className="text-3xl lg:text-4xl font-bold font-mono text-terminal-blue">
                        Voice-Activated Healing
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Say "Gitswhy, scan this" for hands-free ops. Control your entire DevSecOps workflow with natural voice commands.
                      </p>
                    </div>
                    
                    <div className="flex justify-start">
                      <Button variant="outline" className="border-terminal-blue/30 text-terminal-blue hover:bg-terminal-blue/10">
                        Join Waitlist
                      </Button>
                    </div>
                  </div>
                  
                  {/* Right Visual */}
                  <div className="relative">
                    <div className="bg-terminal-surface/50 rounded-xl p-8 border border-terminal-blue/20">
                      {/* Microphone Icon */}
                      <div className="text-center space-y-6">
                        <div className="relative inline-block">
                          <Mic className="w-16 h-16 text-terminal-blue mx-auto" />
                          
                          {/* Animated Waveform */}
                          <div className="flex items-end justify-center gap-1 mt-4 group-hover:animate-pulse">
                            {[...Array(7)].map((_, i) => (
                              <div
                                key={i}
                                className="bg-terminal-blue rounded-full transition-all duration-300 group-hover:bg-terminal-blue/80"
                                style={{
                                  width: '3px',
                                  height: `${12 + (i % 3) * 8}px`,
                                  animationDelay: `${i * 0.1}s`,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Command Example */}
                        <div className="bg-terminal-bg/80 rounded-lg p-4 border border-terminal-blue/20">
                          <div className="font-mono text-sm text-terminal-blue">
                            <div className="text-terminal-green mb-2">$ listening...</div>
                            <div className="text-terminal-blue">"Gitswhy, scan this file"</div>
                            <div className="text-muted-foreground text-xs mt-2">
                              ✓ Voice command recognized
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-terminal-blue/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-terminal-blue/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-mono mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Gitswhy OS Pro Edition
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-terminal-blue/20 rounded-lg bg-terminal-surface/30 backdrop-blur-sm px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-terminal-blue transition-colors">
                    <span className="text-lg font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-mono mb-6">
            Ready to Ship Code That Heals Itself?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of enterprises already using Gitswhy OS Pro to secure their development lifecycle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-terminal-blue hover:bg-terminal-blue/90 text-white">
              Start 30-Day Pro Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-terminal-blue/30 text-terminal-blue hover:bg-terminal-blue/10">
              Talk to Sales
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Full feature access • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ProEdition;