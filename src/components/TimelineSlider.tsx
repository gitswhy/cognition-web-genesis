import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar, Rocket } from 'lucide-react';

const TimelineSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const timeline = [
    {
      date: "July 30, 2024",
      title: "ReflexCore Launch",
      description: "Open source cognition engine with intent detection and basic self-healing",
      status: "completed",
      features: ["Intent Detection", "Basic Self-Healing", "CLI Interface"]
    },
    {
      date: "September 15, 2024",
      title: "Pro Beta Release",
      description: "Advanced scanning and auto-patching capabilities for early adopters",
      status: "completed",
      features: ["Vulnerability Scanning", "Auto-Patching", "Voice Commands"]
    },
    {
      date: "October 30, 2024",
      title: "Enterprise GA",
      description: "Full enterprise features with recursive vault and compliance tools",
      status: "current",
      features: ["Recursive Vault", "Compliance Automation", "Enterprise Support"]
    },
    {
      date: "December 15, 2024",
      title: "AI Assistant 2.0",
      description: "Enhanced cognitive capabilities and natural language processing",
      status: "upcoming",
      features: ["Advanced NLP", "Predictive Security", "Smart Automation"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % timeline.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + timeline.length) % timeline.length);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-terminal-green border-terminal-green/30 bg-terminal-green/10';
      case 'current':
        return 'text-terminal-blue border-terminal-blue/30 bg-terminal-blue/10';
      case 'upcoming':
        return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      default:
        return 'text-foreground/60 border-foreground/20 bg-foreground/5';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            90-Day <span className="text-terminal-green">Launch Timeline</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            From open source core to enterprise-grade security platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Slider */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {timeline.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-terminal-surface border-terminal-green/20 hover:shadow-terminal-glow transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        {/* Status Badge */}
                        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${getStatusColor(item.status)}`}>
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{item.date}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-foreground">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                          {item.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap justify-center gap-3">
                          {item.features.map((feature, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 text-sm bg-terminal-green/10 text-terminal-green border border-terminal-green/20 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Status Icon */}
                        <div className="flex justify-center">
                          <div className={`p-3 rounded-full ${
                            item.status === 'completed' ? 'bg-terminal-green/20' :
                            item.status === 'current' ? 'bg-terminal-blue/20' :
                            'bg-yellow-400/20'
                          }`}>
                            <Rocket className={`w-6 h-6 ${
                              item.status === 'completed' ? 'text-terminal-green' :
                              item.status === 'current' ? 'text-terminal-blue' :
                              'text-yellow-400'
                            }`} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={prevSlide}
              className="border-terminal-green/20 hover:border-terminal-green/40"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {timeline.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-terminal-green' : 'bg-foreground/20'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              onClick={nextSlide}
              className="border-terminal-green/20 hover:border-terminal-green/40"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSlider;