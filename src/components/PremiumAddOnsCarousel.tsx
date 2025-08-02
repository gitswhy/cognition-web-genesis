import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Brain, Zap, TrendingUp, Lock } from 'lucide-react';
import type { CarouselApi } from '@/components/ui/carousel';

const PremiumAddOnsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  
  const addOns = [
    {
      id: 'fractal-memory',
      title: 'Fractal Memory',
      subtitle: 'Cognitive Enhancement',
      description: 'Revolutionary memory architecture that learns from every code interaction, building an infinite contextual understanding of your codebase patterns and team behaviors.',
      icon: Brain,
      gradient: 'from-purple-500/20 to-pink-500/20',
      badge: 'Neural AI'
    },
    {
      id: 'emotional-sync',
      title: 'Emotional Sync',
      subtitle: 'Team Harmony Engine',
      description: 'AI-powered sentiment analysis that monitors team morale, predicts burnout and suggests optimal collaboration patterns for maximum productivity and happiness.',
      icon: TrendingUp,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      badge: 'Wellbeing AI'
    },
    {
      id: 'neural-acceleration',
      title: 'Neural Acceleration',
      subtitle: 'Quantum Code Processing',
      description: 'Breakthrough quantum-enhanced processing that analyzes code at the speed of thought, providing instant insights across millions of lines of code simultaneously.',
      icon: Zap,
      gradient: 'from-orange-500/20 to-red-500/20',
      badge: 'Quantum Core'
    }
  ];

  // Track carousel API and current slide
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-mono mb-4">
            Premium Add-Ons
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the future of development with our revolutionary cognitive extensions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {addOns.map((addOn, index) => {
                const Icon = addOn.icon;
                return (
                  <CarouselItem key={addOn.id}>
                     <Card className="relative group cursor-pointer transition-all duration-500 border-terminal-blue/30 backdrop-blur-sm overflow-hidden">
                      {/* Lock Overlay - Only visible on hover */}
                      <div className="absolute inset-0 bg-terminal-blue/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <div className="text-center space-y-4">
                          <Lock className="w-12 h-12 text-terminal-blue mx-auto" />
                          <Button className="bg-terminal-blue hover:bg-terminal-blue/90 text-white">
                            Upgrade to Unlock
                          </Button>
                        </div>
                      </div>

                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(0,212,255,0.05)_50%,transparent_65%)] bg-[length:20px_20px] animate-pulse" />
                      
                      <CardContent className="p-8 lg:p-12 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          {/* Left Content */}
                          <div className="space-y-6">
                            <div className="space-y-4">
                              <Badge variant="secondary" className="bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30">
                                {addOn.badge}
                              </Badge>
                              <div className="flex items-center gap-3">
                                <Icon className="w-10 h-10 text-terminal-blue group-hover:scale-110 transition-transform duration-300" />
                                <div>
                                  <CardTitle className="text-2xl lg:text-3xl font-mono text-terminal-blue">
                                    {addOn.title}
                                  </CardTitle>
                                  <p className="text-lg text-terminal-blue/80">{addOn.subtitle}</p>
                                </div>
                              </div>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                {addOn.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Right Visual */}
                          <div className="relative">
                            <div className="bg-terminal-surface/50 rounded-xl p-8 border border-terminal-blue/20">
                              <div className="text-center space-y-6">
                                <div className="relative inline-block">
                                  <Icon className="w-16 h-16 text-terminal-blue mx-auto group-hover:animate-pulse" />
                                  
                                  {/* Animated elements specific to each add-on */}
                                  {addOn.id === 'fractal-memory' && (
                                    <div className="absolute -inset-4 border border-terminal-blue/30 rounded-full animate-ping" />
                                  )}
                                  {addOn.id === 'emotional-sync' && (
                                    <div className="flex justify-center mt-4 gap-1">
                                      {[...Array(5)].map((_, i) => (
                                        <div
                                          key={i}
                                          className="w-2 h-2 bg-terminal-blue rounded-full animate-pulse"
                                          style={{ animationDelay: `${i * 0.2}s` }}
                                        />
                                      ))}
                                    </div>
                                  )}
                                  {addOn.id === 'neural-acceleration' && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-terminal-blue/20 to-transparent animate-slide-in-right" />
                                  )}
                                </div>
                                
                                <div className="bg-terminal-bg/80 rounded-lg p-4 border border-terminal-blue/20">
                                  <div className="font-mono text-sm text-terminal-blue">
                                    <div className="text-terminal-green mb-2">$ {addOn.id.replace('-', '_')}.status</div>
                                    <div className="text-terminal-blue">Available in Enterprise</div>
                                    <div className="text-muted-foreground text-xs mt-2">
                                      ✓ Advanced AI Module
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="border-terminal-blue/30 text-terminal-blue hover:bg-terminal-blue/10 hover:!translate-y-[-50%]" />
            <CarouselNext className="border-terminal-blue/30 text-terminal-blue hover:bg-terminal-blue/10 hover:!translate-y-[-50%]" />
          </Carousel>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {addOns.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-terminal-blue' 
                    : 'bg-terminal-blue/30 hover:bg-terminal-blue/50'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAddOnsCarousel;