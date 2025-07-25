import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Calendar, Rocket, Shield, Users, Zap } from 'lucide-react';

const TimelineSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);

  const milestones = [
    {
      id: 1,
      date: 'Week 1-2',
      title: 'ReflexCore Launch',
      description: 'Next-generation cognitive engine with enhanced processing capabilities and real-time analysis.',
      icon: Rocket,
      status: 'upcoming',
      color: 'terminal-blue',
      features: ['Enhanced Processing', 'Real-time Analysis', 'Cognitive Engine']
    },
    {
      id: 2,
      date: 'Week 3-4',
      title: 'Pro Beta Scanning',
      description: 'Advanced security scanning with 30,000+ rules and AI-powered threat detection.',
      icon: Shield,
      status: 'beta',
      color: 'terminal-green',
      features: ['30,000+ Rules', 'AI Detection', 'Threat Prevention']
    },
    {
      id: 3,
      date: 'Week 5-6',
      title: 'Team Collaboration Suite',
      description: 'Enhanced team dashboards, real-time collaboration tools, and shared workspace features.',
      icon: Users,
      status: 'development',
      color: 'purple',
      features: ['Team Dashboards', 'Real-time Sync', 'Shared Workspaces']
    },
    {
      id: 4,
      date: 'Week 7-8',
      title: 'Voice Command Integration',
      description: 'Hands-free DevSecOps workflow control with natural language processing.',
      icon: Zap,
      status: 'planned',
      color: 'yellow',
      features: ['Voice Control', 'NLP Processing', 'Workflow Automation']
    },
    {
      id: 5,
      date: 'Week 9-12',
      title: 'Enterprise Features',
      description: 'Full enterprise suite with advanced analytics, custom policies, and organization-wide insights.',
      icon: Calendar,
      status: 'planned',
      color: 'orange',
      features: ['Enterprise Analytics', 'Custom Policies', 'Organization Insights']
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      upcoming: { text: 'Coming Soon', variant: 'secondary' as const },
      beta: { text: 'Beta', variant: 'default' as const },
      development: { text: 'In Development', variant: 'outline' as const },
      planned: { text: 'Planned', variant: 'outline' as const }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.planned;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (milestones.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (milestones.length - 2)) % (milestones.length - 2));
  };

  useEffect(() => {
    if (!isAutoAdvancing) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoAdvancing, currentIndex]);

  const handleMouseEnter = () => setIsAutoAdvancing(false);
  const handleMouseLeave = () => setIsAutoAdvancing(true);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-mono mb-4">
            90-Day <span className="text-terminal-blue">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upcoming launches and milestones in our development journey
          </p>
        </div>

        {/* Desktop Slider */}
        <div 
          className="hidden lg:block relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-6 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const statusBadge = getStatusBadge(milestone.status);
                
                return (
                  <div key={milestone.id} className="flex-shrink-0 w-1/3 px-3">
                    <Card className="h-full bg-terminal-surface/50 backdrop-blur-sm border-terminal-blue/20 hover:border-terminal-blue/40 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className={`p-3 rounded-lg bg-${milestone.color}/20`}>
                            <Icon className={`w-6 h-6 text-${milestone.color === 'terminal-blue' ? 'terminal-blue' : milestone.color === 'terminal-green' ? 'terminal-green' : milestone.color === 'purple' ? 'purple-400' : milestone.color === 'yellow' ? 'yellow-400' : 'orange-400'}`} />
                          </div>
                          <Badge variant={statusBadge.variant} className="font-mono text-xs">
                            {statusBadge.text}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm font-mono text-terminal-blue">{milestone.date}</div>
                          <h3 className="text-lg font-semibold">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-xs font-mono text-muted-foreground">Key Features:</div>
                          <div className="flex flex-wrap gap-1">
                            {milestone.features.map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
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

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-terminal-surface/80 backdrop-blur-sm border border-terminal-blue/20 hover:border-terminal-blue/40 transition-colors"
            aria-label="Previous milestone"
          >
            <ChevronLeft className="w-5 h-5 text-terminal-blue" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-terminal-surface/80 backdrop-blur-sm border border-terminal-blue/20 hover:border-terminal-blue/40 transition-colors"
            aria-label="Next milestone"
          >
            <ChevronRight className="w-5 h-5 text-terminal-blue" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: milestones.length - 2 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-terminal-blue' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to milestone ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {milestones.map((milestone) => {
            const Icon = milestone.icon;
            const statusBadge = getStatusBadge(milestone.status);
            
            return (
              <Card key={milestone.id} className="bg-terminal-surface/50 backdrop-blur-sm border-terminal-blue/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-${milestone.color}/20`}>
                      <Icon className={`w-6 h-6 text-${milestone.color === 'terminal-blue' ? 'terminal-blue' : milestone.color === 'terminal-green' ? 'terminal-green' : milestone.color === 'purple' ? 'purple-400' : milestone.color === 'yellow' ? 'yellow-400' : 'orange-400'}`} />
                    </div>
                    <Badge variant={statusBadge.variant} className="font-mono text-xs">
                      {statusBadge.text}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-mono text-terminal-blue">{milestone.date}</div>
                    <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-muted-foreground">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {milestone.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSlider;