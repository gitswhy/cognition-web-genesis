import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Shield, Lock } from 'lucide-react';

const ValuePropositions = () => {
  const valueProps = [
    {
      icon: Brain,
      title: "ReflexCore Free",
      description: "Intent detection and self-healing capabilities",
      features: [
        "Real-time keystroke analysis",
        "Cognitive pattern recognition",
        "Basic self-healing automation",
        "Open source core"
      ],
      badge: "Always Free",
      badgeColor: "bg-terminal-green text-terminal-bg"
    },
    {
      icon: Shield,
      title: "Gitswhy OS Pro",
      description: "Advanced scanning and auto-patching system",
      features: [
        "Deep vulnerability scanning",
        "AI-powered auto-patching",
        "Enterprise integrations",
        "Priority support"
      ],
      badge: "30-Day Trial",
      badgeColor: "bg-terminal-blue text-terminal-bg"
    },
    {
      icon: Lock,
      title: "Patent-Pending Security",
      description: "Recursive vault logging and protection",
      features: [
        "Recursive security vault",
        "Advanced threat detection",
        "Compliance automation",
        "Zero-trust architecture"
      ],
      badge: "Enterprise",
      badgeColor: "bg-purple-500 text-white"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Choose Your <span className="text-terminal-green">Security Level</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            From basic intent detection to enterprise-grade recursive vault protection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <Card key={prop.title} className="relative group hover:shadow-terminal-glow transition-all duration-300 bg-terminal-surface border-terminal-green/20">
                <div className="absolute inset-0 bg-gradient-to-br from-terminal-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative text-center">
                  <div className="mx-auto p-4 rounded-xl bg-terminal-green/10 w-fit mb-4 group-hover:bg-terminal-green/20 transition-colors">
                    <Icon className="w-8 h-8 text-terminal-green" />
                  </div>
                  
                  <Badge className={`${prop.badgeColor} mb-2 mx-auto w-fit`}>
                    {prop.badge}
                  </Badge>
                  
                  <CardTitle className="text-xl text-foreground group-hover:text-terminal-green transition-colors">
                    {prop.title}
                  </CardTitle>
                  
                  <p className="text-foreground/70 text-sm">
                    {prop.description}
                  </p>
                </CardHeader>
                
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {prop.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-terminal-green flex-shrink-0" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;