import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  ArrowRight, 
  Zap, 
  Shield, 
  Brain, 
  Mic, 
  Database,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';

interface RoadmapItem {
  id: string;
  date: string;
  quarter: string;
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
  features: string[];
  icon: React.ElementType;
  color: string;
}

const roadmapData: RoadmapItem[] = [
  {
    id: 'reflexcore-v1',
    date: 'July 2025',
    quarter: 'Q3 2025',
    title: 'ReflexCore v1.0 Public Launch',
    status: 'completed',
    description: 'Open source, cognition-native agent—always-on background for self-healing secure coding.',
    features: [
      'Smart performance optimization: overclock, entropy flush, auto-clean',
      'Keystroke-latency "intent" detection for understanding hesitation',
      'Private, encrypted local vault (secure by default)',
      '100% test coverage; community guides and easy install'
    ],
    icon: Zap,
    color: 'text-green-500'
  },
  {
    id: 'enterprise-beta',
    date: 'September 2025',
    quarter: 'Q3 2025',
    title: 'Enterprise Beta',
    status: 'in-progress',
    description: 'Advanced compliance reporting & rules with enterprise-level secure vault.',
    features: [
      'Advanced compliance reporting & rules',
      'Enterprise-level secure vault with organization/team separation',
      'Multi-team collaboration (role management, shared insights)',
      'Custom rule development and enforcement'
    ],
    icon: Shield,
    color: 'text-blue-500'
  },
  {
    id: 'auto-patching-ga',
    date: 'October 2025',
    quarter: 'Q4 2025',
    title: 'AI Auto-Patching GA',
    status: 'planned',
    description: 'AI agents to scan for vulnerabilities and apply validated patches automatically.',
    features: [
      'AI agents scan for vulnerabilities and apply validated patches',
      'Safe rollback support and patch impact explanations',
      'Auto-deploy with zero downtime',
      'Automated vulnerability validation and testing'
    ],
    icon: Brain,
    color: 'text-purple-500'
  },
  {
    id: 'voice-commands',
    date: 'December 2025',
    quarter: 'Q4 2025',
    title: 'Voice Commands & Natural Language',
    status: 'planned',
    description: 'Voice-activated scan, patch, audit, and help with conversational security reports.',
    features: [
      'Voice-activated security operations ("Gitswhy, scan project for risks")',
      'Conversational security and code health reports',
      'Natural language remediation commands',
      'Voice guided vulnerability explanations'
    ],
    icon: Mic,
    color: 'text-orange-500'
  },
  {
    id: 'team-dashboards',
    date: 'Q1 2026',
    quarter: 'Q1 2026',
    title: 'Team Dashboards & Metrics',
    status: 'planned',
    description: 'Real-time dashboards with AI-driven intent insights for personal and team retrospectives.',
    features: [
      'Real-time dashboards: time saved, issue rates, auto-patch frequency',
      'AI-driven intent insights for personal and team retrospectives',
      'Project health and ROI analytics per team or org',
      'Automated compliance reporting'
    ],
    icon: Database,
    color: 'text-cyan-500'
  },
  {
    id: 'policy-marketplace',
    date: 'Q1 2026',
    quarter: 'Q1 2026',
    title: 'Policy Marketplace Launch',
    status: 'planned',
    description: 'One-click policy packs with automated, auditable compliance enforcement.',
    features: [
      'One-click policy packs (PCI, SOC 2, GDPR, custom rules)',
      'Automated, auditable compliance enforcement',
      'Community-driven policy sharing',
      'Custom policy creation and deployment'
    ],
    icon: Target,
    color: 'text-pink-500'
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    case 'in-progress':
      return <Clock className="w-4 h-4 text-blue-500" />;
    default:
      return <Calendar className="w-4 h-4 text-muted-foreground" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
    case 'in-progress':
      return <Badge className="bg-blue-100 text-blue-800 border-blue-200">In Progress</Badge>;
    default:
      return <Badge variant="outline">Planned</Badge>;
  }
};

export default function Roadmap() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'timeline' | 'cards'>('timeline');

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, roadmapData.length - 1));
  };

  const goToPrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const currentItem = roadmapData[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 border-b">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center space-responsive">
            <div className="space-y-4 animate-slide-up">
              <Badge variant="outline" className="mb-4 animate-stagger-1">
                <Calendar className="w-4 h-4 mr-2" />
                Product Roadmap
              </Badge>
              <h1 className="text-scale-hero font-bold animate-stagger-2">
                Gitswhy OS <span className="text-primary">Roadmap</span>
              </h1>
              <p className="text-scale-subtitle text-muted-foreground animate-stagger-3">
                Creating your "second brain" for self-healing, secure code—built in public, 
                shaped by real developer needs, and committed to continuous innovation.
              </p>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex justify-center gap-2 animate-stagger-4">
              <Button
                variant={viewMode === 'timeline' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('timeline')}
                className="mobile-button hover-lift"
              >
                Timeline View
              </Button>
              <Button
                variant={viewMode === 'cards' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('cards')}
                className="mobile-button hover-lift"
              >
                Cards View
              </Button>
            </div>
          </div>
        </div>
      </section>

      {viewMode === 'timeline' ? (
        /* Timeline View */
        <section className="padding-section">
          <div className="container-responsive">
            <div className="max-width-content">
              {/* Timeline Navigation */}
              <div className="flex items-center justify-between mb-8 animate-slide-down">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPrev}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 mobile-button hover-lift"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </Button>
                
                <div className="text-center animate-zoom-in">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {currentIndex + 1} of {roadmapData.length}
                  </p>
                  <p className="font-semibold text-sm sm:text-base">{currentItem.quarter}</p>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNext}
                  disabled={currentIndex === roadmapData.length - 1}
                  className="flex items-center gap-2 mobile-button hover-lift"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Timeline Slider */}
              <div className="relative overflow-hidden mb-8">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {roadmapData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.id} className="w-full flex-shrink-0 px-4">
                        <Card className="h-full animate-scale-in">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-background border ${item.color}`}>
                                  <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                  <CardTitle className="text-xl">{item.title}</CardTitle>
                                  <div className="flex items-center gap-2 mt-1">
                                    {getStatusIcon(item.status)}
                                    <span className="text-sm text-muted-foreground">{item.date}</span>
                                  </div>
                                </div>
                              </div>
                              {getStatusBadge(item.status)}
                            </div>
                          </CardHeader>
                          
                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground">{item.description}</p>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Key Features:</h4>
                              <div className="grid gap-2">
                                {item.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Timeline Dots */}
              <div className="flex justify-center gap-2">
                {roadmapData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Cards View */
        <section className="padding-section">
          <div className="container-responsive">
            <div className="max-width-content">
              <div className="grid-responsive-3">
                {roadmapData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card 
                      key={item.id} 
                      className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in hover-lift gpu-accelerated"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-background border ${item.color}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{item.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                {getStatusIcon(item.status)}
                                <span className="text-xs text-muted-foreground">{item.date}</span>
                              </div>
                            </div>
                          </div>
                          {getStatusBadge(item.status)}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        
                        <div>
                          <h4 className="font-medium mb-2 text-sm">Features:</h4>
                          <div className="space-y-1">
                            {item.features.slice(0, 3).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-xs">{feature}</span>
                              </div>
                            ))}
                            {item.features.length > 3 && (
                              <p className="text-xs text-muted-foreground">
                                +{item.features.length - 3} more features
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="padding-section bg-primary/5">
        <div className="container-responsive">
          <div className="max-w-3xl mx-auto text-center space-responsive animate-slide-up">
            <h2 className="text-scale-heading font-bold animate-stagger-1">
              Why We're Different
            </h2>
            <p className="text-scale-subtitle text-muted-foreground animate-stagger-2">
              User-Led: Everything shipping is based on real dev/ops/user feedback. 
              AI-First: Leveraging advances in intent modeling and cognition-aware self-healing. 
              Open & Secure: Core always open source, local first and privacy centric.
            </p>
            <div className="flex-responsive justify-center animate-stagger-3">
              <Button size="lg" asChild className="mobile-button hover-lift">
                <a href="https://github.com/gitswhy" target="_blank" rel="noopener noreferrer">
                  Follow on GitHub
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="mobile-button hover-lift">
                <a href="/pro-edition">
                  Start Enterprise Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}