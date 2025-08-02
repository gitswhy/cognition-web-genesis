import { Terminal, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Open Core", href: "/open-core" },
        { label: "Pro Edition", href: "/pro-edition" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Pricing", href: "/pricing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Privacy", href: "#" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "GitHub", href: "https://github.com/gitswhy" },
        { label: "Discord", href: "https://discord.com/invite/NuevNNzQwm" },
        { label: "Forums", href: "#" },
        { label: "Contributors", href: "#" }
      ]
    }
  ];

  return (
    <footer className="border-t border-terminal-green/20">{/* Consistent background from PageBackground */}
      <div className="container mx-auto px-2 sm:px-4 lg:px-20 py-4 sm:py-8 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Brand section */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
              <svg width="24" height="24" viewBox="0 0 32 32" className="sm:w-8 sm:h-8">
                <defs>
                  <linearGradient id="footerUnderscoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0080FF" />
                    <stop offset="100%" stopColor="#00FF80" />
                  </linearGradient>
                </defs>
                {/* > character - green */}
                <text x="8" y="20" textAnchor="middle" className="font-mono text-sm sm:text-lg font-bold fill-terminal-green">&gt;</text>
                {/* _ character - gradient */}
                <text x="16" y="20" textAnchor="middle" fill="url(#footerUnderscoreGradient)" className="font-mono text-sm sm:text-lg font-bold">_</text>
                {/* < character - blue */}
                <text x="24" y="20" textAnchor="middle" className="font-mono text-sm sm:text-lg font-bold fill-terminal-blue">&lt;</text>
              </svg>
              <span className="text-sm sm:text-xl font-bold font-mono">
                <span className="text-terminal-green">Gitswhy</span><span className="text-terminal-blue">OS</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/70 mb-2 sm:mb-4 lg:mb-6 max-w-sm hidden md:block">
              The first cognition-native DevSecOps operating system that transforms 
              how teams build, secure and deploy software.
            </p>
            <div className="flex space-x-2 sm:space-x-4">
              <a href="https://github.com/gitswhy" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-terminal-green transition-colors">
                <Github className="h-3 w-3 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-terminal-green transition-colors">
                <Twitter className="h-3 w-3 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.linkedin.com/company/gitswhy" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-terminal-blue transition-colors">
                <Linkedin className="h-3 w-3 sm:h-5 sm:w-5" />
              </a>
              <a href="mailto:contact@gitswhy.com" className="text-foreground/60 hover:text-terminal-green transition-colors">
                <Mail className="h-3 w-3 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-xs sm:text-sm text-foreground mb-1 sm:mb-4">{section.title}</h4>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('http') || link.href === '#' ? (
                      <a 
                        href={link.href}
                        className="text-foreground/70 hover:text-terminal-green transition-colors text-sm"
                        {...(link.href.startsWith('http') && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-foreground/70 hover:text-terminal-green transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-terminal-green/20 mt-4 sm:mt-8 lg:mt-12 pt-3 sm:pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="text-xs sm:text-sm text-foreground/60">
            © 2025 GitswhyOS. All rights reserved.
          </div>
          <div className="flex space-x-3 sm:space-x-6 mt-2 md:mt-0">
            <a href="#" className="text-xs sm:text-sm text-foreground/60 hover:text-terminal-green transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs sm:text-sm text-foreground/60 hover:text-terminal-green transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs sm:text-sm text-foreground/60 hover:text-terminal-green transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;