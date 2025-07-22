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
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Terminal className="h-8 w-8 text-terminal-green" />
            <span className="text-xl font-bold font-mono text-terminal-green">
              Gitswhy<span className="text-terminal-blue">OS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-terminal-green transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="terminal-outline" size="sm" asChild>
              <Link to="/open-core">Try Free Core</Link>
            </Button>
            <Button variant="terminal-blue" size="sm" asChild>
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