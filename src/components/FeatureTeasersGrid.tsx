import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  ShieldCheck,
  Wrench,
  Keyboard,
  Bot,
  Lock,
  Mic,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  badgeType: 'Free' | 'Pro' | 'Free/Pro';
  link?: string;
  delay?: number;
}

const FeatureBadge: React.FC<{ type: 'Free' | 'Pro' | 'Free/Pro' }> = ({ type }) => {
  if (type === 'Free/Pro') {
    return (
      <div className="flex gap-1">
        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
          Free
        </span>
        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
          Pro
        </span>
      </div>
    );
  }
  
  const bgColor = type === 'Free' ? 'bg-green-500/20' : 'bg-blue-500/20';
  const textColor = type === 'Free' ? 'text-green-400' : 'text-blue-400';
  const borderColor = type === 'Free' ? 'border-green-500/30' : 'border-blue-500/30';
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${bgColor} ${textColor} border ${borderColor}`}>
      {type}
    </span>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  badgeType, 
  link,
  delay = 0 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card
        className={`group h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 ${
          badgeType === 'Free' ? 'hover:shadow-lg hover:shadow-green-500/25' :
          badgeType === 'Pro' ? 'hover:shadow-lg hover:shadow-blue-500/25' :
          'hover:shadow-lg hover:shadow-emerald-400/20 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.15)]'
        } ${link ? 'cursor-pointer' : ''}`}
        onClick={handleClick}
        aria-label={`Feature: ${title}`}
      >
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
            </div>
            <FeatureBadge type={badgeType} />
          </div>
          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription 
            className="text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: description.replace(/patches issues/g, '<strong>patches issues</strong>') 
            }}
          />
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export const FeatureTeasersGrid: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: ShieldCheck,
      title: "Real-Time Security Scanning",
      description: "Detects vulns/misconfigs in code/IaC on keystroke or save",
      badgeType: 'Free/Pro',
      link: "/how-it-works",
      delay: 0.1,
    },
    {
      icon: Wrench,
      title: "Self-Healing Remediation",
      description: "Auto-flushes entropy, cleans processes, patches issues before commit",
      badgeType: 'Free/Pro',
      delay: 0.2,
    },
    {
      icon: Keyboard,
      title: "Keystroke Intent Detection",
      description: "Analyzes pauses for cognitive drift, labels as 'uncertain' or 'fatigued'",
      badgeType: 'Free',
      delay: 0.3,
    },
    {
      icon: Bot,
      title: "AI-Powered Auto-Patching",
      description: "LLM agents synthesize/verify fixes with rollback",
      badgeType: 'Pro',
      delay: 0.4,
    },
    {
      icon: Lock,
      title: "Encrypted Vault",
      description: "Logs 'why' data in domain-split structure for audits/compliance",
      badgeType: 'Free/Pro',
      delay: 0.5,
    },
    {
      icon: Mic,
      title: "Voice Commands & Web Dashboards",
      description: "Hands-free ops and team analytics with Slack integrations",
      badgeType: 'Pro',
      delay: 0.6,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Core <span className="text-terminal-green">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security and development tools designed to protect your code and enhance your workflow
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              badgeType={feature.badgeType}
              link={feature.link}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTeasersGrid;