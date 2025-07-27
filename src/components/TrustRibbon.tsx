import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import original logos
import githubLogo from "/lovable-uploads/0a19be48-d6dd-48dc-a711-34c6740a37d2.png";
import gitlabLogo from "/lovable-uploads/1af99421-8b01-4352-ba81-9d46cc349790.png";
import snykLogo from "/lovable-uploads/ceec2436-24c6-4b19-9d2d-494a198545f3.png";
import linearLogo from "/lovable-uploads/ae7c343f-4543-444b-81b8-6c6a791af406.png";
import cursorLogo from "/lovable-uploads/a4fcbc2d-94ef-4bbc-b536-835a4928adf2.png";
import dockerLogo from "/lovable-uploads/fb2c8f17-9a17-4e78-8b07-08793a8371db.png";
import awsLogo from "/lovable-uploads/688fef01-54d0-43c6-a8e0-68fcbf989d9a.png";
import vercelLogo from "@/assets/logos/vercel-logo.png";

const TrustRibbon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const partners = [
    { 
      name: "GitHub", 
      logo: <img src={githubLogo} alt="GitHub Logo" className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
    },
    { 
      name: "GitLab", 
      logo: <img src={gitlabLogo} alt="GitLab Logo" className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
    },
    { 
      name: "Snyk", 
      logo: <img src={snykLogo} alt="Snyk Logo" className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
    },
    { 
      name: "Linear", 
      logo: <img src={linearLogo} alt="Linear Logo" className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
    },
    { 
      name: "Cursor", 
      logo: <img src={cursorLogo} alt="Cursor Logo" className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
    },
    { 
      name: "Docker", 
      logo: <img src={dockerLogo} alt="Docker Logo" className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
    },
    { 
      name: "AWS", 
      logo: <img src={awsLogo} alt="AWS Logo" className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
    },
    { 
      name: "Vercel", 
      logo: <img src={vercelLogo} alt="Vercel Logo" className="w-8 h-8 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" />
    }
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
                    <div className="text-foreground/70 group-hover:text-terminal-green group-hover:scale-110 transition-all duration-300">
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