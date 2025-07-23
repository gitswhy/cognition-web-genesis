import { Terminal, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Open Core", href: "/core" },
        { label: "Pro Edition", href: "/pro" },
        { label: "Enterprise", href: "/enterprise" },
        { label: "Pricing", href: "/pricing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "Blog", href: "/blog" },
        { label: "Tutorials", href: "/tutorials" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "GitHub", href: "https://github.com/gitswhy" },
        { label: "Discord", href: "/discord" },
        { label: "Forums", href: "/forums" },
        { label: "Contributors", href: "/contributors" }
      ]
    }
  ];

  return (
    <footer className="border-t border-terminal-green/20">{/* Consistent background from PageBackground */}
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" className="text-terminal-green">
                <text x="16" y="20" textAnchor="middle" className="fill-current font-mono text-lg font-bold">&gt;_&lt;</text>
              </svg>
              <span className="text-xl font-bold font-mono">
                <span className="text-terminal-green">Gitswhy</span><span className="text-terminal-blue">OS</span>
              </span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-sm">
              The first cognition-native DevSecOps operating system that transforms 
              how teams build, secure, and deploy software.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-terminal-green transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-terminal-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-terminal-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-terminal-green transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-foreground/70 hover:text-terminal-green transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-terminal-green/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-foreground/60">
            © 2024 GitswhyOS. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terms" className="text-sm text-foreground/60 hover:text-terminal-green transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-sm text-foreground/60 hover:text-terminal-green transition-colors">
              Privacy Policy
            </a>
            <a href="/security" className="text-sm text-foreground/60 hover:text-terminal-green transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;