import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Check, X, Info, Zap, Shield, Database, Brain, Heart, Layers, ArrowRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const EditionComparisonTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    {
      category: 'Core Features',
      items: [
        {
          name: 'Cognition Monitoring',
          description: 'Real-time cognitive load tracking and performance optimization',
          tooltip: 'Monitors developer cognitive state and suggests optimal work patterns',
          free: true,
          pro: true,
          icon: Brain
        },
        {
          name: 'Entropy Flush',
          description: 'Intelligent cache management and system cleanup',
          tooltip: 'Advanced entropy detection with predictive cleanup algorithms',
          free: 'Basic',
          pro: true,
          icon: Database
        },
        {
          name: 'Vault Sync',
          description: 'Secure environment synchronization',
          tooltip: 'Quantum-safe encryption for multi-environment data sync',
          free: false,
          pro: true,
          icon: Shield
        }
      ]
    },
    {
      category: 'Premium Add-ons',
      items: [
        {
          name: 'Fractal Memory',
          description: 'Advanced memory pattern recognition and optimization',
          tooltip: 'Machine learning-powered memory management with fractal compression',
          free: false,
          pro: true,
          icon: Layers
        },
        {
          name: 'Emotional Sync',
          description: 'Emotion-aware UX adaptation',
          tooltip: 'Emotion sync adjusts UX based on cognitive state and stress levels',
          free: false,
          pro: true,
          icon: Heart
        },
        {
          name: 'Neural Acceleration',
          description: 'AI-powered development speed enhancement',
          tooltip: 'Neural networks optimize code completion and debugging workflows',
          free: false,
          pro: true,
          icon: Zap
        }
      ]
    },
    {
      category: 'Enterprise Features',
      items: [
        {
          name: 'Team Dashboards',
          description: 'Collaborative analytics and insights',
          tooltip: 'Real-time team performance metrics and collaboration tools',
          free: false,
          pro: true,
          icon: Brain
        },
        {
          name: 'Advanced Security',
          description: 'SOC 2 compliance and enterprise security',
          tooltip: 'Enterprise-grade security with audit trails and compliance reporting',
          free: false,
          pro: true,
          icon: Shield
        },
        {
          name: 'Priority Support',
          description: '24/7 dedicated technical support',
          tooltip: 'Direct access to ReflexCore engineers and priority issue resolution',
          free: false,
          pro: true,
          icon: Heart
        }
      ]
    }
  ];

  const pricing = {
    free: {
      monthly: 0,
      annual: 0
    },
    pro: {
      monthly: 49,
      annual: 39 // $39/month when billed annually ($468/year)
    }
  };

  const renderFeatureValue = (value: boolean | string, isPro: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className={`h-5 w-5 ${isPro ? 'text-terminal-blue' : 'text-terminal-green'}`} />
      ) : (
        <X className="h-5 w-5 text-muted-foreground" />
      );
    }
    return (
      <Badge 
        variant="secondary" 
        className={`${isPro ? 'bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30' : 'bg-terminal-green/20 text-terminal-green border-terminal-green/30'}`}
      >
        {value}
      </Badge>
    );
  };

  return (
    <TooltipProvider>
      <section className="py-16 bg-gradient-to-b from-terminal-surface/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-mono mb-3">
              Choose Your Edition
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
              Compare features and find the perfect plan for your development workflow
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                aria-label="Toggle between monthly and annual pricing"
              />
              <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annual
                <Badge variant="secondary" className="ml-2 bg-terminal-green/20 text-terminal-green text-xs">
                  Save 20%
                </Badge>
              </span>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-terminal-green/20 bg-gradient-to-br from-terminal-surface/40 to-terminal-surface/20">
              <CardContent className="p-0">
                {/* Header Row */}
                <div className="grid grid-cols-3 border-b border-border">
                  {/* Feature Column Header */}
                  <div className="p-4 bg-terminal-surface/20 flex items-end">
                    <h3 className="font-mono font-bold text-base">Features</h3>
                  </div>
                  
                  {/* Free Edition Header */}
                  <div className="p-4 text-center border-l border-border bg-gradient-to-br from-terminal-green/10 to-terminal-green/5">
                    <div className="space-y-2">
                      <h3 className="font-mono font-bold text-lg text-terminal-green">Free</h3>
                      <div className="space-y-1">
                        <div className="text-2xl font-mono font-bold text-terminal-green">
                          ${pricing.free.monthly}
                        </div>
                        <div className="text-xs text-muted-foreground">Forever free</div>
                      </div>
                      <Button 
                        size="sm"
                        variant="outline" 
                        className="w-full border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10 text-xs"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                  
                  {/* Pro Edition Header */}
                  <div className="p-4 text-center border-l border-border bg-gradient-to-br from-terminal-blue/10 to-terminal-blue/5">
                    <div className="space-y-2">
                      <h3 className="font-mono font-bold text-lg text-terminal-blue">Pro</h3>
                      <div className="space-y-1">
                        <div className="text-2xl font-mono font-bold text-terminal-blue">
                          ${isAnnual ? pricing.pro.annual : pricing.pro.monthly}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          per month{isAnnual ? ' (annual)' : ''}
                        </div>
                        {isAnnual && (
                          <div className="text-xs text-terminal-green">
                            Save ${(pricing.pro.monthly - pricing.pro.annual) * 12}/year
                          </div>
                        )}
                      </div>
                      <Button size="sm" className="w-full bg-terminal-blue hover:bg-terminal-blue/90 text-white text-xs">
                        Start Trial
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Feature Rows */}
                {features.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    {/* Category Header */}
                    <div className="grid grid-cols-3 border-b border-border bg-terminal-surface/10">
                      <div className="p-3 font-mono font-semibold text-xs uppercase tracking-wider text-muted-foreground col-span-3">
                        {category.category}
                      </div>
                    </div>
                    
                    {/* Feature Items */}
                    {category.items.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={featureIndex} className="grid grid-cols-3 border-b border-border hover:bg-terminal-surface/5 transition-colors">
                          {/* Feature Name & Description */}
                          <div className="p-4 space-y-1">
                            <div className="flex items-start gap-3">
                              <FeatureIcon className="h-4 w-4 text-terminal-green mt-0.5 flex-shrink-0" />
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-mono font-medium text-sm">{feature.name}</h4>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-3 w-3 text-muted-foreground hover:text-foreground cursor-help flex-shrink-0" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs text-xs">{feature.tooltip}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </div>
                                <p className="text-xs text-muted-foreground leading-snug">{feature.description}</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Free Edition Value */}
                          <div className="p-4 border-l border-border flex items-center justify-center">
                            {renderFeatureValue(feature.free)}
                          </div>
                          
                          {/* Pro Edition Value */}
                          <div className="p-4 border-l border-border flex items-center justify-center">
                            {renderFeatureValue(feature.pro, true)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <Card className="border-terminal-green/20 bg-gradient-to-br from-terminal-green/5 to-terminal-surface/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-terminal-green font-mono text-base">Free Edition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="h-3 w-3 text-terminal-green" />
                    <span>Core cognitive monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="h-3 w-3 text-terminal-green" />
                    <span>Basic entropy management</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="h-3 w-3 text-terminal-green" />
                    <span>Community support</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="h-3 w-3 text-terminal-green" />
                    <span>Open source modules</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-terminal-blue/20 bg-gradient-to-br from-terminal-blue/5 to-terminal-surface/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-terminal-blue font-mono text-base">Pro Edition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="h-3 w-3 text-terminal-blue" />
                    <span>Everything in Free Edition</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="h-3 w-3 text-terminal-blue" />
                    <span>Advanced AI-powered features</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="h-3 w-3 text-terminal-blue" />
                    <span>Enterprise security & compliance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="h-3 w-3 text-terminal-blue" />
                    <span>24/7 priority support</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default EditionComparisonTable;