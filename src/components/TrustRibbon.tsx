import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TrustRibbon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const partners = [
    { name: "GitHub", logo: "🐙" },
    { name: "GitLab", logo: "🦊" },
    { name: "Snyk", logo: "🔒" },
    { name: "Linear", logo: "📐" },
    { name: "Cursor", logo: "⚡" },
    { name: "Docker", logo: "🐳" },
    { name: "AWS", logo: "☁️" },
    { name: "Vercel", logo: "▲" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      className="py-12 border-y border-terminal-green/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 lg:px-20">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-foreground/60 font-medium tracking-wide uppercase">
            Trusted by teams using
          </p>
        </motion.div>
        
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 4) }, (_, slideIndex) => (
              <div key={slideIndex} className="flex justify-center items-center space-x-8 md:space-x-12 lg:space-x-16 min-w-full">
                {partners.slice(slideIndex * 4, slideIndex * 4 + 4).map((partner, index) => (
                  <div 
                    key={partner.name}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">
                      {partner.logo}
                    </div>
                    <span className="text-xs font-medium text-foreground/70 group-hover:text-terminal-green transition-colors">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(partners.length / 4) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-terminal-green' : 'bg-foreground/20'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TrustRibbon;