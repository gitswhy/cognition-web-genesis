import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Scan, 
  ShieldCheck, 
  Mic, 
  Terminal, 
  Lock, 
  Zap 
} from 'lucide-react';

const FeatureTeasers = () => {
  const features = [
    {
      icon: Scan,
      title: "Real-Time Scanning",
      description: "Continuous security monitoring as you code",
      badge: "Core",
      badgeVariant: "default" as const
    },
    {
      icon: ShieldCheck,
      title: "Self-Healing",
      description: "Automatic remediation of detected issues",
      badge: "Core",
      badgeVariant: "default" as const
    },
    {
      icon: Mic,
      title: "Voice Commands",
      description: "Natural language interface for operations",
      badge: "Pro",
      badgeVariant: "secondary" as const
    },
    {
      icon: Terminal,
      title: "Smart CLI",
      description: "AI-powered command line assistant",
      badge: "Pro",
      badgeVariant: "secondary" as const
    },
    {
      icon: Lock,
      title: "Vault Protection",
      description: "Recursive security vault logging",
      badge: "Pro",
      badgeVariant: "secondary" as const
    },
    {
      icon: Zap,
      title: "Auto-Patching",
      description: "Intelligent vulnerability remediation",
      badge: "Pro",
      badgeVariant: "secondary" as const
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Feature <span className="text-terminal-green">Highlights</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discover the power of cognition-native security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isPro = feature.badge === "Pro";
            
            return (
              <Card 
                key={feature.title} 
                className={`group hover:shadow-lg transition-all duration-300 bg-terminal-surface border-terminal-green/20 ${
                  isPro ? 'hover:shadow-blue-glow' : 'hover:shadow-terminal-glow'
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                      isPro 
                        ? 'bg-terminal-blue/10 group-hover:bg-terminal-blue/20' 
                        : 'bg-terminal-green/10 group-hover:bg-terminal-green/20'
                    }`}>
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${
                        isPro ? 'text-terminal-blue' : 'text-terminal-green'
                      }`} />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center mb-2">
                    <Badge 
                      variant={feature.badgeVariant}
                      className={`text-xs ${isPro ? 'bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30' : ''}`}
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <CardTitle className={`text-lg transition-colors duration-300 ${
                    isPro ? 'group-hover:text-terminal-blue' : 'group-hover:text-terminal-green'
                  }`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center pt-0">
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureTeasers;