import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Open Core", href: "/open-core" },
    { label: "Pro Edition", href: "/pro-edition" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Integrations", href: "/integrations" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
    { label: "Community", href: "/community" },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-terminal-green/20 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-2 transition-all duration-500 hover-lift relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-terminal-green/20 to-terminal-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-150" />
            
            {/* Terminal Icon with Advanced Animation */}
            <div className="relative">
              <Terminal className="h-8 w-8 text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_15px_rgba(0,255,102,0.6)]" />
              {/* Scanning line effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-terminal-green/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </div>
            
            {/* Text with Character Animation */}
            <div className="relative overflow-hidden">
              <span className="text-xl font-bold font-mono transition-all duration-500 group-hover:tracking-wider">
                {/* Individual character animations */}
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-110 group-hover:-translate-y-1" style={{ transitionDelay: '0ms' }}>G</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-110 group-hover:-translate-y-1" style={{ transitionDelay: '50ms' }}>i</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-110 group-hover:-translate-y-1" style={{ transitionDelay: '100ms' }}>t</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-110 group-hover:-translate-y-1" style={{ transitionDelay: '150ms' }}>s</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-110 group-hover:-translate-y-1" style={{ transitionDelay: '200ms' }}>w</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-110 group-hover:-translate-y-1" style={{ transitionDelay: '250ms' }}>h</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-110 group-hover:-translate-y-1" style={{ transitionDelay: '300ms' }}>y</span>
                <span className="inline-block text-terminal-blue transition-all duration-500 group-hover:text-terminal-green group-hover:scale-125 group-hover:-translate-y-2 group-hover:rotate-12" style={{ transitionDelay: '350ms' }}>O</span>
                <span className="inline-block text-terminal-blue transition-all duration-500 group-hover:text-terminal-green group-hover:scale-125 group-hover:-translate-y-2 group-hover:-rotate-6" style={{ transitionDelay: '400ms' }}>S</span>
              </span>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-terminal-green/0 group-hover:border-terminal-green/50 transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 rounded-lg border-2 border-terminal-blue/0 group-hover:border-terminal-blue/30 transition-all duration-700 group-hover:scale-110" style={{ transitionDelay: '200ms' }} />
            </div>
            
            {/* Particle effects */}
            <div className="absolute -top-2 -right-2 w-1 h-1 bg-terminal-green rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{ transitionDelay: '300ms' }} />
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-terminal-blue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300" style={{ transitionDelay: '500ms' }} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-terminal-green transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-terminal-green after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="terminal-outline" size="sm" asChild className="hover-lift">
              <Link to="/open-core">Try Free Core</Link>
            </Button>
            <Button variant="terminal-blue" size="sm" asChild className="hover-lift">
              <Link to="/pro-edition">Start Pro Trial</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground/80 hover:text-terminal-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-terminal-green/20 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-terminal-green transition-colors duration-200 px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-terminal-green/20">
                <Button variant="terminal-outline" size="sm" asChild>
                  <Link to="/open-core" onClick={() => setIsMenuOpen(false)}>Try Free Core</Link>
                </Button>
                <Button variant="terminal-blue" size="sm" asChild>
                  <Link to="/pro-edition" onClick={() => setIsMenuOpen(false)}>Start Pro Trial</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;