import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star, Zap, Shield } from 'lucide-react';
import { ButtonUltimate } from '@/components/ui/button-ultimate';

const UltimateCTA = () => {
  return (
    <section className="padding-section bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 border border-terminal-green/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 border border-terminal-blue/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-terminal-green/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-terminal-blue/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container-ultimate relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex justify-center mb-8"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-terminal-green/20 to-terminal-blue/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-terminal-green/30">
              <Rocket className="w-10 h-10 text-terminal-green" />
            </div>
          </motion.div>

          <h2 className="text-fluid-4xl font-display font-bold mb-6 text-gradient-primary">
            Ready to Transform Your DevSecOps?
          </h2>
          
          <p className="text-fluid-xl text-muted-foreground mb-8 leading-relaxed">
            Join thousands of developers who have revolutionized their workflow with 
            our cognition native platform. Experience the future today.
          </p>

          {/* Feature Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Star, text: "30 Day Free Trial" },
              { icon: Zap, text: "Instant Setup" },
              { icon: Shield, text: "Enterprise Ready" }
            ].map((feature, index) => (
              <div 
                key={feature.text}
                className="flex items-center gap-2 px-4 py-2 bg-terminal-bg/50 backdrop-blur-sm border border-terminal-green/20 rounded-full text-sm font-medium text-terminal-green"
              >
                <feature.icon className="w-4 h-4" />
                {feature.text}
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ButtonUltimate 
              size="xl" 
              variant="ultimate"
              className="group text-lg font-semibold px-12 py-4 transition-ultra hover-ultra"
            >
              <Rocket className="w-5 h-5 group-hover:animate-bounce" />
              Start Your Journey
            </ButtonUltimate>
            
            <ButtonUltimate 
              size="xl" 
              variant="neon"
              className="text-lg font-medium px-12 py-4"
            >
              Schedule Demo
            </ButtonUltimate>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 pt-8 border-t border-terminal-green/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Fortune 500', 'Startups', 'Government', 'Healthcare'].map((type, index) => (
                <div 
                  key={type}
                  className="px-4 py-2 bg-terminal-surface/30 rounded-lg border border-terminal-green/10 text-sm font-mono text-terminal-green/60"
                >
                  {type}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltimateCTA;