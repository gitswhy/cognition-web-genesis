import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import { useTranslation } from 'react-i18next';
import { Shield, Zap, Code, Terminal, Lock, Search } from 'lucide-react';
import { AnimatedCard, StaggeredContainer } from '@/components/animations/AnimationComponents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import digitalVaultImg from '@/assets/digital-vault.png';
import cliDemoImg from '@/assets/cli-demo.png';
import lightningPerformanceImg from '@/assets/lightning-performance.png';
import multiLanguageImg from '@/assets/multi-language.png';
import zeroTrustImg from '@/assets/zero-trust.png';
import codeAnalysisImg from '@/assets/code-analysis.png';
const Features = () => {
  const {
    t
  } = useTranslation();
  const features = [{
    icon: Shield,
    title: 'Real-time Security Scanning',
    description: 'Advanced AI algorithms detect vulnerabilities as you code, providing instant feedback and remediation suggestions.',
    badge: 'Core',
    badgeVariant: 'default' as const,
    image: digitalVaultImg,
    lottieData: null,
    // Would be actual Lottie data in production
    stats: '99.9% accuracy'
  }, {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Scan millions of lines of code in seconds with our optimized Rust engine and intelligent caching.',
    badge: 'Core',
    badgeVariant: 'default' as const,
    image: lightningPerformanceImg,
    lottieData: null,
    stats: '<100ms response'
  }, {
    icon: Code,
    title: 'Multi-Language Support',
    description: 'Native support for 20+ programming languages with smart pattern recognition and context awareness.',
    badge: 'Core',
    badgeVariant: 'default' as const,
    image: multiLanguageImg,
    lottieData: null,
    stats: '20+ languages'
  }, {
    icon: Terminal,
    title: 'AI-Powered CLI Assistant',
    description: 'Intelligent command-line interface that learns from your workflow and suggests optimizations.',
    badge: 'Pro',
    badgeVariant: 'secondary' as const,
    image: cliDemoImg,
    lottieData: null,
    stats: 'Smart automation'
  }, {
    icon: Lock,
    title: 'Zero Trust Architecture',
    description: 'Built-in compliance checks for SOC2, GDPR, and industry standards with automated reporting.',
    badge: 'Pro',
    badgeVariant: 'secondary' as const,
    image: zeroTrustImg,
    lottieData: null,
    stats: 'Full compliance'
  }, {
    icon: Search,
    title: 'Deep Code Analysis',
    description: 'Advanced static analysis that understands code context, data flow, and business logic patterns.',
    badge: 'Pro',
    badgeVariant: 'secondary' as const,
    image: codeAnalysisImg,
    lottieData: null,
    stats: 'Context-aware'
  }];
  return <section className="py-20">{/* Consistent background from PageBackground */}
      <div className="container mx-auto px-4">
        <StaggeredContainer className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            
            <motion.h2 className="text-3xl md:text-5xl font-bold" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }}>
              Powerful Security Features
            </motion.h2>
            
            
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <AnimatedCard key={feature.title} delay={index * 0.1} className="h-full" hoverScale={1.03} hoverY={-8}>
                  <Card className="h-full group relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <CardHeader className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" whileHover={{
                      rotate: 5,
                      scale: 1.1
                    }} transition={{
                      duration: 0.2
                    }}>
                          <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        
                        <Badge variant={feature.badgeVariant} className="text-xs font-medium">
                          {feature.badge}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Visual Element */}
                      {feature.image && <motion.div className="relative mt-4 rounded-lg overflow-hidden" whileHover={{
                    scale: 1.05
                  }} transition={{
                    duration: 0.3
                  }}>
                          <img src={feature.image} alt={feature.title} className="w-full h-32 object-cover" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                        </motion.div>}
                      
                      {/* Lottie Animation Placeholder */}
                      {feature.lottieData && <div className="w-full h-32 bg-muted/30 rounded-lg flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">
                            Lottie Animation: {feature.title}
                          </span>
                        </div>}
                      
                      {/* Stats */}
                      <div className="pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Performance</span>
                          <Badge variant="outline" className="text-xs">
                            {feature.stats}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                    
                    {/* Hover Effect Overlay */}
                    <motion.div className="absolute inset-0 border-2 border-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" initial={false} whileHover={{
                  scale: 1.02
                }} />
                  </Card>
                </AnimatedCard>;
          })}
          </div>

          {/* Bottom CTA */}
          <motion.div className="text-center mt-16" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Secure Your Code?</h3>
                <p className="text-muted-foreground">
                  Join thousands of developers who trust Gitswhy OS to keep their code secure.
                </p>
                <motion.button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  Wishlist
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </StaggeredContainer>
      </div>
    </section>;
};
export default Features;