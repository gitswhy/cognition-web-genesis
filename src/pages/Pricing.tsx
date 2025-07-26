import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OptimizedCard from '@/components/common/OptimizedCard';
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
import ROICalculator from '@/components/ROICalculator';
import Footer from '@/components/Footer';
import PricingBackground from '@/components/background/PricingBackground';

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
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const navigate = useNavigate();

  const pricingTiers: PricingTier[] = [
    {
      id: 'free',
      name: 'Free Core',
      description: 'Perfect for individual developers and open source projects',
      price: { monthly: 0, annual: 0 },
      type: 'core',
      features: [
        {
          category: 'Core Features',
          items: [
            { name: 'Real-Time Security Scanning', included: 'limited', description: 'Basic rules' },
            { name: 'AI Auto-Patching', included: false, description: 'Manual only' },
            { name: 'Self-Healing Remediation', included: false, description: 'Not available' },
            { name: 'Encrypted Vault Logging', included: 'limited', description: 'Basic logs' },
            { name: 'Voice Commands', included: false, description: 'Not available' },
            { name: 'Policy Compliance', included: 'limited', description: 'Basic policies' },
            { name: 'Cross-Repo Risk Graphs', included: 'limited', description: 'Single repo' },
            { name: 'Team Dashboards', included: 'limited', description: 'Individual only' }
          ]
        }
      ],
      cta: 'Start Free',
      ctaVariant: 'outline'
    },
    {
      id: 'team',
      name: 'Pro',
      description: 'Advanced features for growing development teams',
      price: { monthly: 29, annual: 24 },
      type: 'pro',
      features: [
        {
          category: 'Core Features',
          items: [
            { name: 'Real-Time Security Scanning', included: true, description: '30,000+ rules' },
            { name: 'AI Auto-Patching', included: true, description: 'Full LLM fixes' },
            { name: 'Self-Healing Remediation', included: true, description: 'Self Healing' },
            { name: 'Encrypted Vault Logging', included: true, description: 'Encrypted vault' },
            { name: 'Voice Commands', included: 'limited', description: 'Coming soon' },
            { name: 'Policy Compliance', included: true, description: 'Custom templates' },
            { name: 'Cross-Repo Risk Graphs', included: true, description: 'Multi-repo' },
            { name: 'Team Dashboards', included: true, description: 'Team insights' }
          ]
        }
      ],
      cta: 'Start Pro Trial',
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
      answer: 'Free Core users get community support. Pro plan includes priority email support with 24-hour response time. Enterprise customers get dedicated success managers and 24/7 phone support.'
    }
  ];


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
    <div className="min-h-screen">
      <PricingBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative padding-responsive overflow-hidden safe-area-padding">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="secondary" className="bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30 mb-6">
            Transparent Pricing
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-mono mb-4 sm:mb-6 optimize-legibility break-words">
            Choose Your <span className="text-terminal-green">Plan</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4 break-words">
            Start free with our Open Core edition or unlock advanced features 
            with Team and Enterprise plans. No hidden fees, cancel anytime.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 bg-terminal-surface/50 backdrop-blur-sm rounded-lg p-2 max-w-sm mx-auto transition-all duration-300 hover:bg-terminal-surface/70">
            <span className={`text-xs sm:text-sm transition-all duration-300 break-words ${!isAnnual ? 'text-foreground font-medium scale-105' : 'text-muted-foreground scale-100'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-terminal-blue transition-all duration-300 hover:scale-110"
            />
            <span className={`text-xs sm:text-sm transition-all duration-300 break-words ${isAnnual ? 'text-foreground font-medium scale-105' : 'text-muted-foreground scale-100'}`}>
              Annual
              <Badge variant="secondary" className="ml-1 sm:ml-2 bg-terminal-green/20 text-terminal-green border-terminal-green/30 text-xs transition-all duration-300">
                20% off
              </Badge>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 px-4">
        <div className="container mx-auto safe-area-padding">
          <div className="grid-responsive-2 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <OptimizedCard 
                key={tier.id}
                variant="hover" 
                delay={index * 100}
                className={`relative overflow-hidden mobile-focus-ring flex flex-col h-full ${
                  tier.popular 
                    ? 'border-terminal-blue shadow-lg shadow-terminal-blue/20 lg:scale-105 hover:shadow-terminal-blue/30' 
                    : 'border-terminal-surface hover:border-terminal-blue/30 hover:shadow-terminal-blue/10'
                } ${tier.type === 'core' ? 'hover:border-terminal-green/30 hover:shadow-terminal-green/10' : ''} gpu-accelerated`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-terminal-blue text-white text-center py-2 text-sm font-medium">
                    <Star className="inline w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={`${tier.popular ? 'pt-12' : 'pt-4 sm:pt-6'} p-4 sm:p-6`}>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold break-words">{tier.name}</CardTitle>
                      <p className="text-muted-foreground mt-2 text-sm sm:text-base break-words">{tier.description}</p>
                    </div>
                    
                    <div className="space-y-2 min-h-[80px] flex flex-col justify-center">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-mono break-all">
                          ${isAnnual ? tier.price.annual : tier.price.monthly}
                        </span>
                        {tier.price.monthly > 0 && (
                          <span className="text-muted-foreground text-xs sm:text-sm lg:text-base break-words">
                            /user/month
                          </span>
                        )}
                      </div>
                      {tier.price.monthly > 0 && isAnnual && (
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">
                          Billed annually (${tier.price.annual * 12}/user/year)
                        </p>
                      )}
                      {tier.price.monthly === 0 && (
                        <p className="text-xs sm:text-sm text-muted-foreground opacity-0">
                          &nbsp;
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  {/* Features */}
                  <div className="space-y-6 flex-1">
                    {tier.features.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          {category.category}
                        </h4>
                        <div className="space-y-2">
                          {category.items.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                              {getFeatureIcon(feature.included)}
                              <div className="min-w-0 flex-1">
                                <span className={`text-xs sm:text-sm break-words ${
                                  feature.included ? 'text-foreground' : 'text-muted-foreground'
                                }`}>
                                  {feature.name}
                                </span>
                                {feature.description && (
                                  <p className="text-xs text-muted-foreground mt-1 break-words">
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
                  <div className="mt-auto pt-6">
                    <Button 
                      onClick={() => {
                        if (tier.type === 'core') {
                          navigate('/open-core');
                        } else {
                          navigate('/pro-edition');
                        }
                      }}
                      className={`w-full transition-all duration-300 hover:scale-105 hover:shadow-lg group ${
                        tier.ctaVariant === 'default'
                          ? tier.type === 'core'
                            ? 'bg-terminal-green hover:bg-terminal-green/90 text-background shadow-terminal-green/20'
                            : 'bg-terminal-blue hover:bg-terminal-blue/90 text-white shadow-terminal-blue/20'
                          : tier.type === 'core'
                            ? 'border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green/50'
                            : 'border-terminal-blue/30 text-terminal-blue hover:bg-terminal-blue/10 hover:border-terminal-blue/50'
                      }`}
                      variant={tier.ctaVariant}
                      size="lg"
                    >
                      {tier.cta}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </OptimizedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 bg-terminal-surface/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-terminal-blue/10 to-terminal-green/10 backdrop-blur-sm border-terminal-blue/30">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-3">Enterprise: Custom DevSecOps at Scale</h3>
                      <p className="text-muted-foreground text-lg">
                        Tailored enterprise-grade security platform designed for large organizations requiring 
                        custom integrations, dedicated support, and advanced compliance features.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-terminal-green mt-0.5" />
                        <span className="text-sm">Tailored onboarding with dedicated success manager</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-terminal-green mt-0.5" />
                        <span className="text-sm">Scalable infrastructure with 99.99% SLA guarantee</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-terminal-green mt-0.5" />
                        <span className="text-sm">Custom policy frameworks and compliance reporting</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-terminal-green mt-0.5" />
                        <span className="text-sm">White-label solutions and API customization</span>
                      </div>
                    </div>
                    
                    <div className="bg-terminal-surface/20 rounded-lg p-4">
                      <div className="text-2xl font-bold font-mono mb-1">Custom Quote</div>
                      <p className="text-sm text-muted-foreground">Based on team size and requirements</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Button 
                        size="lg" 
                        className="bg-terminal-blue hover:bg-terminal-blue/90 text-white w-full"
                      >
                        Request Demo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="border-terminal-blue/30 text-terminal-blue hover:bg-terminal-blue/10 w-full"
                      >
                        Contact Sales
                        <Users className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

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
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-mono mb-6">
            Ready to Secure Your Code?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with our free Core edition or begin a 30-day trial of our Pro plan. 
            No credit card required for either option.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-terminal-green hover:bg-terminal-green/90 text-background"
              onClick={() => navigate('/open-core')}
            >
              <Shield className="mr-2 w-4 h-4" />
              Try Free Core
            </Button>
            <Button 
              size="lg" 
              className="bg-terminal-blue hover:bg-terminal-blue/90 text-white"
              onClick={() => navigate('/pro-edition')}
            >
              <Users className="mr-2 w-4 h-4" />
              Start Pro Trial
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
    </div>
  );
};

export default Pricing;