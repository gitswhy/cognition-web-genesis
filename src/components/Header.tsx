import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Terminal, ChevronDown, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navItems = [{
    label: "Open Core",
    href: "/open-core"
  }, {
    label: "Pro Edition",
    href: "/pro-edition"
  }, {
    label: "How It Works",
    href: "/how-it-works"
  }, {
    label: "Pricing",
    href: "/pricing"
  }];
  const dropdownItems = [{
    label: "Docs",
    href: "/docs"
  }, {
    label: "Patent",
    href: "/patent"
  }, {
    label: "Roadmap",
    href: "/roadmap"
  }];
  return <header className="fixed top-0 w-full z-[100] glass border-b border-terminal-green/20 backdrop-blur-xl safe-area-top">
      <div className="container mx-auto safe-area-padding">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 py-0 my-0">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-1 sm:space-x-1.5 transition-all duration-500 relative overflow-visible">
            {/* Custom >_< SVG Icon with Individual Character Colors */}
            <div className="relative">
              <svg width="20" height="20" viewBox="0 0 32 32" className="sm:w-6 sm:h-6 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
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
              <span className="text-sm sm:text-lg font-bold font-mono transition-all duration-500 group-hover:tracking-wide flex">
                {/* Individual character animations with smaller transforms */}
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{
                transitionDelay: '0ms'
              }}>G</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{
                transitionDelay: '50ms'
              }}>i</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{
                transitionDelay: '100ms'
              }}>t</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{
                transitionDelay: '150ms'
              }}>s</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{
                transitionDelay: '200ms'
              }}>w</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{
                transitionDelay: '250ms'
              }}>h</span>
                <span className="inline-block text-terminal-green transition-all duration-500 group-hover:text-terminal-blue group-hover:scale-105 group-hover:-translate-y-0.5" style={{
                transitionDelay: '300ms'
              }}>y</span>
                <span className="inline-block text-terminal-blue transition-all duration-500 group-hover:text-terminal-green group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-6" style={{
                transitionDelay: '350ms'
              }}>O</span>
                <span className="inline-block text-terminal-blue transition-all duration-500 group-hover:text-terminal-green group-hover:scale-110 group-hover:-translate-y-1 group-hover:-rotate-3" style={{
                transitionDelay: '400ms'
              }}>S</span>
              </span>
              
              {/* Border box effect */}
              <div className="absolute inset-0 rounded-lg border border-terminal-green/0 group-hover:border-terminal-green/30 transition-all duration-500 group-hover:scale-105 pointer-events-none" />
            </div>
            
            {/* Small particle effects */}
            <div className="absolute -top-1 -right-1 w-1 h-1 bg-terminal-green rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{
            transitionDelay: '300ms'
          }} />
            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-terminal-blue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300" style={{
            transitionDelay: '500ms'
          }} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {navItems.map(item => <Link key={item.label} to={item.href} className="group relative flex items-center text-xs xl:text-sm font-medium text-foreground/80 hover:text-terminal-green transition-all duration-300 cursor-pointer overflow-hidden px-3 py-1.5 rounded-lg">
                <span className="relative z-10 transition-all duration-300 group-hover:scale-105">{item.label}</span>
                <div className="absolute inset-0 bg-terminal-green/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-terminal-blue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
              </Link>)}
            
            {/* Resources Dropdown with Enhanced Animations */}
            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center space-x-1 text-xs xl:text-sm font-medium text-foreground/80 hover:text-terminal-green transition-all duration-300 cursor-pointer relative overflow-hidden">
                <span className="relative z-10 transition-all duration-300 group-hover:scale-105">Resources</span>
                <ChevronDown className="h-3 w-3 transition-all duration-300 group-hover:rotate-180 group-hover:text-terminal-blue relative z-10" />
                
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-terminal-green/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                
                {/* Pulse animation dot */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-terminal-blue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-[200] bg-background/98 backdrop-blur-md border border-terminal-green/20 shadow-xl min-w-[160px] animate-in slide-in-from-top-2 duration-200" align="start" sideOffset={8} onCloseAutoFocus={e => e.preventDefault()}>
                {dropdownItems.map((item, index) => <DropdownMenuItem key={item.label} className="focus:bg-terminal-green/10 transition-all duration-200 hover:pl-3 animate-fade-in" style={{
                animationDelay: `${index * 50}ms`
              }}>
                    <Link to={item.href} className="w-full text-sm text-foreground hover:text-terminal-green transition-colors duration-200 flex items-center group">
                      <span className="transition-transform duration-200 group-hover:translate-x-1">{item.label}</span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <ChevronDown className="h-3 w-3 rotate-[-90deg] text-terminal-green" />
                      </div>
                    </Link>
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {user ? (
              <Button variant="terminal-blue" size="sm" asChild className="group terminal-clean text-xs xl:text-sm relative overflow-hidden">
                <Link to="/dashboard" className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Dashboard</span>
                  <div className="absolute inset-0 bg-terminal-blue/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="terminal-outline" size="sm" asChild className="group terminal-clean text-xs xl:text-sm relative overflow-hidden">
                  <Link to="/auth" className="flex items-center">
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Sign In</span>
                    <div className="absolute inset-0 bg-terminal-green/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button variant="terminal-blue" size="sm" asChild className="group terminal-clean text-xs xl:text-sm relative overflow-hidden">
                  <Link to="/pro-edition" className="flex items-center">
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Start Pro Trial</span>
                    <div className="absolute inset-0 bg-terminal-blue/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-1.5 sm:p-2 text-foreground/80 hover:text-terminal-green transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden border-t border-terminal-green/20 py-3 sm:py-4 animate-fade-in">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map(item => <Link key={item.label} to={item.href} className="text-sm font-medium text-foreground/80 hover:text-terminal-green transition-colors duration-200 px-2 py-1.5 rounded hover:bg-terminal-green/5" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>)}
              
              {/* Mobile Resources Section */}
              <div className="space-y-2 border-t border-terminal-green/20 pt-3">
                <div className="text-xs font-semibold text-foreground/60 px-2 uppercase tracking-wide">Resources</div>
                {dropdownItems.map(item => <Link key={item.label} to={item.href} className="text-sm font-medium text-foreground/80 hover:text-terminal-green transition-colors duration-200 px-2 py-1.5 rounded hover:bg-terminal-green/5 block" onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>)}
              </div>
              <div className="flex flex-col space-y-2.5 sm:space-y-3 pt-3 sm:pt-4 border-t border-terminal-green/20">
                {user ? (
                  <Button variant="terminal-blue" size="sm" asChild className="w-full">
                    <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                  </Button>
                ) : (
                  <>
                    <Button variant="terminal-outline" size="sm" asChild className="w-full">
                      <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                    </Button>
                    <Button variant="terminal-blue" size="sm" asChild className="w-full">
                      <Link to="/pro-edition" onClick={() => setIsMenuOpen(false)}>Start Pro Trial</Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;