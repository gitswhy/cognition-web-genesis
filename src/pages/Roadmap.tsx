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
    id: 'reflexcore-release',
    date: 'July 30, 2024',
    quarter: 'Q3 2024',
    title: 'ReflexCore Release',
    status: 'completed',
    description: 'Launch of our open-source security scanning engine with intent detection capabilities.',
    features: [
      'Intent-aware vulnerability scanning',
      'Self-healing code suggestions',
      'Basic recursive vault logging',
      'Community-driven rule engine'
    ],
    icon: Zap,
    color: 'text-green-500'
  },
  {
    id: 'enterprise-beta',
    date: 'September 15, 2024',
    quarter: 'Q3 2024',
    title: 'Enterprise Beta Launch',
    status: 'in-progress',
    description: 'Private beta for enterprise customers with advanced compliance and security features.',
    features: [
      'Advanced compliance reporting',
      'Enterprise-grade security vault',
      'Multi-team collaboration tools',
      'Custom rule development'
    ],
    icon: Shield,
    color: 'text-blue-500'
  },
  {
    id: 'auto-patching-ga',
    date: 'October 2024',
    quarter: 'Q4 2024',
    title: 'AI Auto-Patching GA',
    status: 'planned',
    description: 'General availability of AI-powered automatic vulnerability patching with zero downtime.',
    features: [
      'Automated vulnerability patching',
      'Zero-downtime deployment',
      'Rollback capabilities',
      'Impact analysis and testing'
    ],
    icon: Brain,
    color: 'text-purple-500'
  },
  {
    id: 'voice-commands',
    date: 'Q4 2024',
    quarter: 'Q4 2024',
    title: 'Voice Commands & Natural Language',
    status: 'planned',
    description: 'Revolutionary voice-controlled security operations and natural language query interface.',
    features: [
      'Voice-activated security scans',
      'Natural language vulnerability queries',
      'Conversational security reports',
      'Voice-guided remediation'
    ],
    icon: Mic,
    color: 'text-orange-500'
  },
  {
    id: 'distributed-vault',
    date: 'Q1 2025',
    quarter: 'Q1 2025',
    title: 'Distributed Security Vault',
    status: 'planned',
    description: 'Launch of distributed security vault with global replication and edge computing.',
    features: [
      'Global security state replication',
      'Edge computing integration',
      'Real-time cross-region sync',
      'Decentralized security logging'
    ],
    icon: Database,
    color: 'text-cyan-500'
  },
  {
    id: 'ai-security-advisor',
    date: 'Q2 2025',
    quarter: 'Q2 2025',
    title: 'AI Security Advisor',
    status: 'planned',
    description: 'Advanced AI advisor that provides proactive security recommendations and strategic guidance.',
    features: [
      'Proactive threat intelligence',
      'Security strategy recommendations',
      'Risk assessment automation',
      'Compliance optimization'
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
      <section className="relative pt-24 pb-16 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-fade-in">
              <Badge variant="outline" className="mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Product Roadmap
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                The Future of <span className="text-primary">Security</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Discover what's coming next in autonomous security and how we're 
                revolutionizing DevSecOps for developers worldwide.
              </p>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex justify-center gap-2">
              <Button
                variant={viewMode === 'timeline' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('timeline')}
              >
                Timeline View
              </Button>
              <Button
                variant={viewMode === 'cards' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('cards')}
              >
                Cards View
              </Button>
            </div>
          </div>
        </div>
      </section>

      {viewMode === 'timeline' ? (
        /* Timeline View */
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Timeline Navigation */}
              <div className="flex items-center justify-between mb-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPrev}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {currentIndex + 1} of {roadmapData.length}
                  </p>
                  <p className="font-semibold">{currentItem.quarter}</p>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNext}
                  disabled={currentIndex === roadmapData.length - 1}
                  className="flex items-center gap-2"
                >
                  Next
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roadmapData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card 
                      key={item.id} 
                      className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
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
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">
              Shape the Future with Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our community and help us build the next generation of security tools. 
              Your feedback drives our roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/community">
                  Join Community
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/pro-edition">
                  Start Pro Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}