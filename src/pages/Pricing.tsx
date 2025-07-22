import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  Check, 
  Lock, 
  Star, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap,
  Calculator,
  DollarSign,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBackground from '@/components/background/PageBackground';

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    annual: number;
  };
  popular?: boolean;
  type: 'core' | 'pro';
  features: {
    category: string;
    items: {
      name: string;
      included: boolean | 'limited';
      description?: string;
    }[];
  }[];
  cta: string;
  ctaVariant: 'default' | 'outline';
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [teamSize, setTeamSize] = useState([10]);
  const [avgSalary, setAvgSalary] = useState(100000);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const pricingTiers: PricingTier[] = [
    {
      id: 'free',
      name: 'Free Core',
      description: 'Perfect for individual developers and open source projects',
      price: { monthly: 0, annual: 0 },
      type: 'core',
      features: [
        {
          category: 'Core Security',
          items: [
            { name: 'Real-time vulnerability scanning', included: true },
            { name: 'Secret detection', included: true },
            { name: 'Code quality analysis', included: true },
            { name: 'Basic security alerts', included: true }
          ]
        },
        {
          category: 'Development Tools',
          items: [
            { name: 'IDE integrations', included: true },
            { name: 'Git hooks', included: true },
            { name: 'CLI tools', included: true },
            { name: 'Basic reporting', included: 'limited', description: 'Up to 10 scans/month' }
          ]
        },
        {
          category: 'Support & Community',
          items: [
            { name: 'Community support', included: true },
            { name: 'Documentation access', included: true },
            { name: 'Open source updates', included: true },
            { name: 'Priority support', included: false }
          ]
        }
      ],
      cta: 'Start Free',
      ctaVariant: 'outline'
    },
    {
      id: 'team',
      name: 'Team',
      description: 'Advanced features for growing development teams',
      price: { monthly: 29, annual: 24 },
      popular: true,
      type: 'pro',
      features: [
        {
          category: 'Core Security',
          items: [
            { name: 'Real-time vulnerability scanning', included: true },
            { name: 'Secret detection', included: true },
            { name: 'Code quality analysis', included: true },
            { name: 'Advanced threat intelligence', included: true }
          ]
        },
        {
          category: 'AI-Powered Features',
          items: [
            { name: 'Auto-fix suggestions', included: true },
            { name: 'Intent logging', included: true },
            { name: 'Pattern recognition', included: true },
            { name: 'Smart notifications', included: true }
          ]
        },
        {
          category: 'Team Collaboration',
          items: [
            { name: 'Team dashboards', included: true },
            { name: 'Slack/Discord integration', included: true },
            { name: 'Pull request checks', included: true },
            { name: 'Unlimited team members', included: true }
          ]
        },
        {
          category: 'Support & SLA',
          items: [
            { name: 'Priority email support', included: true },
            { name: '99.9% uptime SLA', included: true },
            { name: 'Onboarding assistance', included: true },
            { name: 'Dedicated success manager', included: false }
          ]
        }
      ],
      cta: 'Start Team Trial',
      ctaVariant: 'default'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete DevSecOps platform for large organizations',
      price: { monthly: 99, annual: 79 },
      type: 'pro',
      features: [
        {
          category: 'Enterprise Security',
          items: [
            { name: 'All Team features', included: true },
            { name: 'Advanced compliance reporting', included: true },
            { name: 'Custom security policies', included: true },
            { name: 'SAML/SSO integration', included: true }
          ]
        },
        {
          category: 'AI Risk Engine',
          items: [
            { name: 'ML-powered risk assessment', included: true },
            { name: 'Predictive security insights', included: true },
            { name: 'Custom rule engine', included: true },
            { name: 'Automated patch deployment', included: true }
          ]
        },
        {
          category: 'Enterprise Management',
          items: [
            { name: 'Multi-org management', included: true },
            { name: 'Advanced analytics', included: true },
            { name: 'API access & webhooks', included: true },
            { name: 'Custom integrations', included: true }
          ]
        },
        {
          category: 'Premium Support',
          items: [
            { name: 'Dedicated success manager', included: true },
            { name: '24/7 phone support', included: true },
            { name: '99.99% uptime SLA', included: true },
            { name: 'Custom training & onboarding', included: true }
          ]
        }
      ],
      cta: 'Contact Sales',
      ctaVariant: 'default'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      category: 'General',
      question: 'What is Gitswhy OS and how does it work?',
      answer: 'Gitswhy OS is a cognition-native DevSecOps platform that monitors your development workflow in real-time, understands your coding intentions, and automatically detects and fixes security vulnerabilities before they reach production.'
    },
    {
      category: 'Pricing',
      question: 'Can I switch between plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you get immediate access to new features. When downgrading, changes take effect at your next billing cycle.'
    },
    {
      category: 'Pricing',
      question: 'Do you offer discounts for annual payments?',
      answer: 'Yes, we offer a 20% discount for annual subscriptions. This applies to both Team and Enterprise plans, making them more cost-effective for long-term commitments.'
    },
    {
      category: 'Technical',
      question: 'Which programming languages are supported?',
      answer: 'Gitswhy OS supports all major programming languages including JavaScript, TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby, and more. Our language detection is automatic and continuously expanding.'
    },
    {
      category: 'Security',
      question: 'How do you ensure the security of my code?',
      answer: 'We process code analysis locally on your infrastructure when possible, use end-to-end encryption for all data transmission, and are SOC 2 Type II compliant. We never store your source code on our servers without explicit permission.'
    },
    {
      category: 'Support',
      question: 'What kind of support do you provide?',
      answer: 'Free Core users get community support. Team plan includes priority email support with 24-hour response time. Enterprise customers get dedicated success managers and 24/7 phone support.'
    }
  ];

  // ROI Calculation
  const hoursPerDeveloper = 40;
  const weeksPerYear = 50;
  const vulnerabilitiesPreventedPerDev = 25; // per year
  const avgTimeToFixVuln = 4; // hours
  const totalDevelopers = teamSize[0];
  const totalHoursSaved = totalDevelopers * vulnerabilitiesPreventedPerDev * avgTimeToFixVuln;
  const hourlyRate = avgSalary / (hoursPerDeveloper * weeksPerYear);
  const totalCostSaved = totalHoursSaved * hourlyRate;
  const annualTeamCost = totalDevelopers * (isAnnual ? 24 : 29) * 12;
  const netSavings = totalCostSaved - annualTeamCost;
  const roi = ((netSavings / annualTeamCost) * 100);

  const toggleFAQ = (question: string) => {
    setOpenFAQ(openFAQ === question ? null : question);
  };

  const getFeatureIcon = (included: boolean | 'limited') => {
    if (included === true) {
      return <Check className="w-5 h-5 text-terminal-green" />;
    } else if (included === 'limited') {
      return <Check className="w-5 h-5 text-yellow-500" />;
    } else {
      return <Lock className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <PageBackground variant="pricing">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-background to-terminal-surface/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30 mb-6">
            Transparent Pricing
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold font-mono mb-6">
            Choose Your <span className="text-terminal-green">Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start free with our Open Core edition or unlock advanced features 
            with Team and Enterprise plans. No hidden fees, cancel anytime.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 bg-terminal-surface/50 backdrop-blur-sm rounded-lg p-2 max-w-xs mx-auto">
            <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-terminal-blue"
            />
            <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Annual
              <Badge variant="secondary" className="ml-2 bg-terminal-green/20 text-terminal-green border-terminal-green/30 text-xs">
                20% off
              </Badge>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={tier.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-terminal-blue shadow-lg shadow-terminal-blue/20 scale-105' 
                    : 'border-terminal-surface'
                } ${tier.type === 'core' ? 'bg-gradient-to-br from-card to-terminal-green/5' : 'bg-gradient-to-br from-card to-terminal-blue/5'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-terminal-blue text-white text-center py-2 text-sm font-medium">
                    <Star className="inline w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={tier.popular ? 'pt-12' : 'pt-6'}>
                  <div className="space-y-4">
                    <div>
                      <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                      <p className="text-muted-foreground mt-2">{tier.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold font-mono">
                          ${isAnnual ? tier.price.annual : tier.price.monthly}
                        </span>
                        {tier.price.monthly > 0 && (
                          <span className="text-muted-foreground">
                            /user/month
                          </span>
                        )}
                      </div>
                      {tier.price.monthly > 0 && isAnnual && (
                        <p className="text-sm text-muted-foreground">
                          Billed annually (${tier.price.annual * 12}/user/year)
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-6">
                    {tier.features.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          {category.category}
                        </h4>
                        <div className="space-y-2">
                          {category.items.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              {getFeatureIcon(feature.included)}
                              <div className="min-w-0 flex-1">
                                <span className={`text-sm ${
                                  feature.included ? 'text-foreground' : 'text-muted-foreground'
                                }`}>
                                  {feature.name}
                                </span>
                                {feature.description && (
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {feature.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${
                      tier.ctaVariant === 'default'
                        ? tier.type === 'core'
                          ? 'bg-terminal-green hover:bg-terminal-green/90 text-background'
                          : 'bg-terminal-blue hover:bg-terminal-blue/90 text-white'
                        : tier.type === 'core'
                          ? 'border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10'
                          : 'border-terminal-blue/30 text-terminal-blue hover:bg-terminal-blue/10'
                    }`}
                    variant={tier.ctaVariant}
                    size="lg"
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-terminal-surface/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-mono mb-4 flex items-center justify-center gap-3">
                <Calculator className="w-8 h-8 text-terminal-blue" />
                ROI Calculator
              </h2>
              <p className="text-xl text-muted-foreground">
                See how much time and money Gitswhy OS can save your team
              </p>
            </div>
            
            <Card className="bg-terminal-surface/50 backdrop-blur-sm border-terminal-blue/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Your Team</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="team-size" className="text-base font-medium">
                          Team Size: {teamSize[0]} developers
                        </Label>
                        <Slider
                          id="team-size"
                          min={1}
                          max={100}
                          step={1}
                          value={teamSize}
                          onValueChange={setTeamSize}
                          className="mt-3"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                          <span>1</span>
                          <span>100</span>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="avg-salary" className="text-base font-medium">
                          Average Developer Salary
                        </Label>
                        <Input
                          id="avg-salary"
                          type="number"
                          value={avgSalary}
                          onChange={(e) => setAvgSalary(Number(e.target.value))}
                          className="mt-2"
                          min={50000}
                          max={300000}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Results Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Annual Savings</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-terminal-surface/50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-terminal-green" />
                          <span>Hours Saved</span>
                        </div>
                        <span className="text-xl font-bold font-mono text-terminal-green">
                          {totalHoursSaved.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-terminal-surface/50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-terminal-blue" />
                          <span>Cost Avoided</span>
                        </div>
                        <span className="text-xl font-bold font-mono text-terminal-blue">
                          ${Math.round(totalCostSaved).toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-terminal-green/10 rounded-lg border border-terminal-green/20">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-terminal-green" />
                          <span className="font-medium">Net Savings</span>
                        </div>
                        <span className="text-2xl font-bold font-mono text-terminal-green">
                          ${Math.round(netSavings).toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="text-center p-4 bg-terminal-blue/10 rounded-lg border border-terminal-blue/20">
                        <div className="text-3xl font-bold font-mono text-terminal-blue">
                          {roi > 0 ? '+' : ''}{Math.round(roi)}% ROI
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Return on Investment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    *Calculations based on industry averages: 25 vulnerabilities prevented per developer per year, 
                    4 hours average fix time per vulnerability
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-mono mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about Gitswhy OS pricing and features
              </p>
            </div>
            
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Card key={index} className="border-terminal-surface">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(faq.question)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-terminal-surface/20 transition-colors"
                    >
                      <span className="font-medium pr-4">{faq.question}</span>
                      {openFAQ === faq.question ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === faq.question && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-terminal-green/20 via-terminal-green/10 to-terminal-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-mono mb-6">
            Ready to Secure Your Code?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with our free Core edition or begin a 30-day trial of our Team plan. 
            No credit card required for either option.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-terminal-green hover:bg-terminal-green/90 text-background">
              <Shield className="mr-2 w-4 h-4" />
              Try Free Core
            </Button>
            <Button size="lg" className="bg-terminal-blue hover:bg-terminal-blue/90 text-white">
              <Users className="mr-2 w-4 h-4" />
              Start Team Trial
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Need Enterprise features? <button className="text-terminal-blue hover:underline">Contact our sales team</button>
          </p>
        </div>
      </section>

      <Footer />

      {/* JSON-LD Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* JSON-LD Structured Data for SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Gitswhy OS",
            "description": "Cognition-native DevSecOps platform with real-time security scanning and auto-healing capabilities",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Cross-platform",
            "offers": pricingTiers.map(tier => ({
              "@type": "Offer",
              "name": `Gitswhy OS ${tier.name}`,
              "description": tier.description,
              "price": isAnnual ? tier.price.annual : tier.price.monthly,
              "priceCurrency": "USD",
              "billingIncrement": isAnnual ? "P1Y" : "P1M"
            }))
          })
        }}
      />
    </PageBackground>
  );
};

export default Pricing;