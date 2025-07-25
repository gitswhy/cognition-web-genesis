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
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
    { label: "Community", href: "/community" },
  ];

  return (
    <header className="fixed top-0 w-full z-[9999] bg-background/95 backdrop-blur-lg border-b border-terminal-green/20 shadow-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-20">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-1.5 sm:space-x-2 transition-all duration-500 relative overflow-visible">
            {/* Custom >_< SVG Icon with Individual Character Colors */}
            <div className="relative">
              <svg width="24" height="24" viewBox="0 0 32 32" className="sm:w-8 sm:h-8 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                <defs>
                  <linearGradient id="underscoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0080FF" />
                    <stop offset="100%" stopColor="#00FF80" />
                  </linearGradient>
                </defs>
                {/* > character - green */}
                <text x="8" y="20" textAnchor="middle" className="font-mono text-base sm:text-lg font-bold fill-terminal-green transition-all duration-500 group-hover:fill-terminal-blue">&gt;</text>
                {/* _ character - gradient */}
                <text x="16" y="20" textAnchor="middle" fill="url(#underscoreGradient)" className="font-mono text-base sm:text-lg font-bold">_</text>
                {/* < character - blue */}
                <text x="24" y="20" textAnchor="middle" className="font-mono text-base sm:text-lg font-bold fill-terminal-blue transition-all duration-500 group-hover:fill-terminal-green">&lt;</text>
              </svg>
            </div>
            
            {/* Text with Character Animation */}
            <div className="relative">
              <span className="text-lg sm:text-xl font-bold font-mono transition-all duration-500 group-hover:tracking-wide flex">
                {/* Individual character animations with smaller transforms */}
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{ transitionDelay: '0ms' }}>G</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{ transitionDelay: '50ms' }}>i</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{ transitionDelay: '100ms' }}>t</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{ transitionDelay: '150ms' }}>s</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{ transitionDelay: '200ms' }}>w</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{ transitionDelay: '250ms' }}>h</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{ transitionDelay: '300ms' }}>y</span>
                <span className="inline-block text-terminal-blue transition-all duration-500 group-hover:text-terminal-green group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-6" style={{ transitionDelay: '350ms' }}>O</span>
                <span className="inline-block text-terminal-blue transition-all duration-500 group-hover:text-terminal-green group-hover:scale-110 group-hover:-translate-y-1 group-hover:-rotate-3" style={{ transitionDelay: '400ms' }}>S</span>
              </span>
              
              {/* Border box effect */}
              <div className="absolute inset-0 rounded-lg border border-terminal-green/0 group-hover:border-terminal-green/30 transition-all duration-500 group-hover:scale-105 pointer-events-none" />
            </div>
            
            {/* Small particle effects */}
            <div className="absolute -top-1 -right-1 w-1 h-1 bg-terminal-green rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{ transitionDelay: '300ms' }} />
            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-terminal-blue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300" style={{ transitionDelay: '500ms' }} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="nav-link text-xs xl:text-sm font-medium text-foreground/80 hover:text-terminal-green"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <Button variant="terminal-outline" size="sm" asChild className="terminal-clean text-xs xl:text-sm">
              <Link to="/open-core">Try Free Core</Link>
            </Button>
            <Button variant="terminal-blue" size="sm" asChild className="terminal-clean text-xs xl:text-sm">
              <Link to="/pro-edition">Start Pro Trial</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-1.5 sm:p-2 text-foreground/80 hover:text-terminal-green transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-terminal-green/20 py-3 sm:py-4 animate-fade-in">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-terminal-green transition-colors duration-200 px-2 py-1.5 rounded hover:bg-terminal-green/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2.5 sm:space-y-3 pt-3 sm:pt-4 border-t border-terminal-green/20">
                <Button variant="terminal-outline" size="sm" asChild className="w-full">
                  <Link to="/open-core" onClick={() => setIsMenuOpen(false)}>Try Free Core</Link>
                </Button>
                <Button variant="terminal-blue" size="sm" asChild className="w-full">
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