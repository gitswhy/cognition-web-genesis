import { Brain, Shield, Vault } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
// import CoreCapabilities3D from "@/components/background/CoreCapabilities3D"; // Disabled for performance

const CoreFeaturesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Brain,
      title: "Real-Time Cognition",
      description: "AI monitors every keystroke, understanding developer intent and predicting issues before they occur.",
      details: "Advanced pattern recognition • Intent analysis • Proactive suggestions",
      color: "terminal-green",
      animation: "animate-pulse"
    },
    {
      icon: Shield,
      title: "Self-Healing Engine",
      description: "Automatically detects, diagnoses, and patches vulnerabilities in real-time without breaking your flow.",
      details: "Auto-vulnerability detection • Instant patches • Zero-downtime fixes",
      color: "terminal-blue", 
      animation: "animate-spin"
    },
    {
      icon: Vault,
      title: "Intent Vault",
      description: "Secure repository of development patterns and decisions that learns from your team's collective intelligence.",
      details: "Pattern learning • Decision history • Team intelligence",
      color: "terminal-green",
      animation: "animate-bounce"
    }
  ];

  return (
    <motion.section 
      className="py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* <CoreCapabilities3D /> Disabled for performance */}
      <div className="container mx-auto px-4 lg:px-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Core <span className="text-terminal-green">Capabilities</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Three revolutionary engines working together to transform your development experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative p-4 sm:p-6 lg:p-8 rounded-xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                feature.color === 'terminal-blue'
                  ? 'border-terminal-blue/20 bg-terminal-surface/50 hover:border-terminal-blue/40'
                  : 'border-terminal-green/20 bg-terminal-surface/50 hover:border-terminal-green/40'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon with animation */}
              <div className={`relative inline-flex p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 ${
                feature.color === 'terminal-blue'
                  ? 'bg-terminal-blue/10 text-terminal-blue'
                  : 'bg-terminal-green/10 text-terminal-green'
              }`}>
                <feature.icon 
                  className={`h-6 w-6 sm:h-8 sm:w-8 ${
                    hoveredCard === index ? feature.animation : ''
                  }`} 
                />
                
                {/* Pulsing effect for Real-Time Cognition */}
                {index === 0 && hoveredCard === index && (
                  <div className="absolute inset-0 rounded-lg bg-terminal-green/20 animate-ping"></div>
                )}
                
                {/* Shield rotation effect */}
                {index === 1 && hoveredCard === index && (
                  <div className="absolute inset-0 rounded-lg border border-terminal-blue/40 animate-pulse"></div>
                )}
                
                {/* Vault door effect */}
                {index === 2 && hoveredCard === index && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-terminal-green/10 to-transparent animate-pulse"></div>
                )}
              </div>

              <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                hoveredCard === index 
                  ? feature.color === 'terminal-blue' ? 'text-terminal-blue' : 'text-terminal-green'
                  : 'text-foreground'
              }`}>
                {feature.title}
              </h3>

              <p className="text-foreground/70 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Detailed features */}
              <div className={`space-y-1.5 sm:space-y-2 transition-all duration-300 ${
                hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-2'
              }`}>
                {feature.details.split(' • ').map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2">
                    <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0 ${
                      feature.color === 'terminal-blue' ? 'bg-terminal-blue' : 'bg-terminal-green'
                    }`}></div>
                    <span className="text-xs sm:text-sm text-foreground/80 break-words">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                hoveredCard === index ? 'opacity-100' : 'opacity-0'
              } ${
                feature.color === 'terminal-blue' ? 'blue-glow' : 'terminal-glow'
              }`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreFeaturesGrid;