import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Eye, Cpu, Lock, Sparkles, Terminal } from 'lucide-react';
import { CardUltimate, CardUltimateContent, CardUltimateHeader, CardUltimateTitle, CardUltimateDescription } from '@/components/ui/card-ultimate';

const features = [
  {
    icon: Brain,
    title: "Cognitive Intelligence",
    description: "AI that learns your patterns and predicts issues before they happen",
    color: "text-terminal-green",
    gradient: "from-terminal-green/20 to-transparent"
  },
  {
    icon: Shield,
    title: "Self Healing Security", 
    description: "Automatically patches vulnerabilities and strengthens defenses in real time",
    color: "text-terminal-blue",
    gradient: "from-terminal-blue/20 to-transparent"
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized workflows that execute at the speed of thought",
    color: "text-yellow-400",
    gradient: "from-yellow-400/20 to-transparent"
  },
  {
    icon: Eye,
    title: "360° Visibility",
    description: "Complete transparency across your entire development pipeline",
    color: "text-purple-400",
    gradient: "from-purple-400/20 to-transparent"
  },
  {
    icon: Cpu,
    title: "Neural Processing",
    description: "Advanced algorithms that adapt and evolve with your codebase",
    color: "text-terminal-green",
    gradient: "from-terminal-green/20 to-transparent"
  },
  {
    icon: Lock,
    title: "Zero Trust Architecture",
    description: "Military grade security that never compromises on protection",
    color: "text-red-400",
    gradient: "from-red-400/20 to-transparent"
  }
];

const UltimateFeatures = () => {
  return (
    <section className="padding-section bg-gradient-ultra">
      <div className="container-ultimate">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-fluid-4xl font-display font-bold mb-6 text-gradient-primary">
            Ultimate Features
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by cutting edge technology and designed for the future of development
          </p>
        </motion.div>

        <div className="grid-ultimate">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardUltimate 
                variant="glass"
                className="group h-full transition-ultra hover-ultra"
              >
                <CardUltimateHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardUltimateTitle>{feature.title}</CardUltimateTitle>
                  <CardUltimateDescription>
                    {feature.description}
                  </CardUltimateDescription>
                </CardUltimateHeader>
                <CardUltimateContent>
                  <div className="flex items-center text-terminal-green/60 text-sm font-mono">
                    <Terminal className="w-4 h-4 mr-2" />
                    Ready to deploy
                  </div>
                </CardUltimateContent>
              </CardUltimate>
            </motion.div>
          ))}
        </div>

        {/* Ultimate Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "10ms", label: "Response Time" },
            { value: "100%", label: "Security Score" },
            { value: "∞", label: "Scalability" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-fluid-3xl font-display font-bold text-gradient-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UltimateFeatures;