import { useState, useEffect } from 'react';
import { Copy, Github, Star, Download, Terminal, Zap, Database, Shield, RotateCcw, Trash2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModuleExplorer from '@/components/ModuleExplorer';
import { SoftwareApplicationSchema } from '@/components/SoftwareApplicationSchema';
import OpenCoreBackground from '@/components/background/OpenCoreBackground';
const OpenCore = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});
  useEffect(() => {
    // Update meta tags for SEO
    document.title = 'ReflexCore: Open-Core DevSecOps OS | Gitswhy OS';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ReflexCore is the open-source foundation of Gitswhy OS - a cognition-native DevSecOps platform with self-healing infrastructure, predictive debugging, and autonomous optimization.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'ReflexCore: Open-Core DevSecOps OS | Gitswhy OS');
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'The cognition-native core that powers intelligent DevSecOps. Self-healing infrastructure, predictive debugging, and autonomous optimization - all open source.');
    }

    // Add structured data for Software Application
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ReflexCore",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Linux, macOS, Windows",
      "description": "Open-source cognition-native DevSecOps OS foundation with self-healing infrastructure and predictive debugging",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "downloadUrl": "https://github.com/gitswhy/reflexcore",
      "softwareVersion": "2.1.0",
      "programmingLanguage": ["JavaScript", "TypeScript", "Python", "Go"],
      "license": "https://opensource.org/licenses/MIT"
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      // Cleanup structured data script
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(type);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const toggleCard = (cardName: string) => {
    setOpenCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };
  const coreModules = [{
    name: 'Bootstrapping',
    icon: Terminal,
    description: 'Self-configuring development environment setup',
    code: `# Auto-detect and configure your stack
gitswhy bootstrap --detect
# Sets up optimal configs for your tech stack
# Configures linting, testing, CI/CD pipelines`,
    color: 'from-terminal-green/20 to-terminal-green/5'
  }, {
    name: 'Overclock',
    icon: Zap,
    description: 'Performance optimization and monitoring',
    code: `# Monitor and optimize build performance
gitswhy overclock --monitor
# Identifies bottlenecks in real-time
# Auto-optimizes compilation speeds`,
    color: 'from-terminal-blue/20 to-terminal-blue/5'
  }, {
    name: 'QuantumFlush',
    icon: Database,
    description: 'Intelligent cache management and cleanup',
    code: `# Smart cache invalidation
gitswhy quantum-flush --smart
# Predicts which caches to clear
# Prevents stale dependency issues`,
    color: 'from-terminal-green/15 to-primary/5'
  }, {
    name: 'CoreMirror',
    icon: Shield,
    description: 'Real-time code reflection and analysis',
    code: `# Deep code analysis and mirroring
gitswhy mirror --analyze
# Maps code dependencies and impact
# Prevents breaking changes`,
    color: 'from-terminal-blue/15 to-accent/5'
  }, {
    name: 'VaultSync',
    icon: RotateCcw,
    description: 'Secure environment synchronization',
    code: `# Sync environments securely
gitswhy vault sync --env=staging
# Encrypted env var management
# Zero-downtime deployments`,
    color: 'from-terminal-green/25 to-muted/5'
  }, {
    name: 'AutoClean',
    icon: Trash2,
    description: 'Autonomous system maintenance and debris detection',
    code: `# Intelligent cleanup automation
gitswhy autoclean --scan
# Removes unused dependencies
# Clears stale cache files
# Optimizes storage usage`,
    color: 'from-orange-500/20 to-orange-500/5'
  }];
  const installCommands = {
    zsh: `echo 'export PATH="$PATH:/usr/local/bin/gitswhy"' >> ~/.zshrc && source ~/.zshrc`,
    bash: `echo 'export PATH="$PATH:/usr/local/bin/gitswhy"' >> ~/.bashrc && source ~/.bashrc`
  };
  return <div className="min-h-screen">
      <OpenCoreBackground />
      {/* Additional SEO Schema (complementing existing structured data) */}
      <SoftwareApplicationSchema
        name="ReflexCore Open Source Edition"
        description="Free, open-source cognition-native DevSecOps platform with self-healing infrastructure and predictive debugging capabilities."
        offers={[
          { price: "0", priceCurrency: "USD", name: "Open Core Edition" }
        ]}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-terminal-surface/80 border border-terminal-green/30 rounded-full px-6 py-2 mb-8">
              <Badge variant="secondary" className="bg-terminal-green/20 text-terminal-green border-terminal-green/50">
                Open Source
              </Badge>
              <span className="text-muted-foreground">Apache Licensed</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 bg-gradient-to-r from-terminal-green via-primary to-terminal-blue bg-clip-text text-transparent">
              ReflexCore
              <span className="inline-block w-1 h-16 bg-terminal-green ml-2 animate-pulse" />
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
              Open-Source Foundation
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              The cognition-native core that powers intelligent DevSecOps. 
              Self-healing infrastructure, predictive debugging, and autonomous optimization - all open source.
            </p>

            <div className="flex justify-center">
              <Button size="lg" className="bg-terminal-green hover:bg-terminal-green/80 text-terminal-bg font-mono" asChild>
                <a href="https://github.com/gitswhy/reflexcore" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Core Modules Features */}
      <section className="py-16 bg-terminal-surface/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-mono font-bold mb-3">
              Core Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six foundational modules that make up the ReflexCore open-source foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto" style={{ gridAutoRows: 'max-content' }}>
            {coreModules.map((module, index) => (
              <div
                key={module.name}
                className="group relative animate-fade-in"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  zIndex: openCards[module.name] ? 10 : 1
                }}
              >
                <Card 
                  className={`relative overflow-visible bg-terminal-surface/60 border-terminal-green/30 hover:border-terminal-green/50 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:shadow-xl hover:shadow-terminal-green/20 ${
                    openCards[module.name] ? 'scale-[1.02] border-terminal-green/50 shadow-lg shadow-terminal-green/10' : ''
                  }`}
                  onClick={() => toggleCard(module.name)}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 transition-all duration-500 ${
                    openCards[module.name] ? 'opacity-100' : 'group-hover:opacity-50'
                  }`} />
                  
                  {/* Glowing Border Effect */}
                  <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                    openCards[module.name] ? 'shadow-[inset_0_0_20px_rgba(34,197,94,0.2)]' : ''
                  }`} />
                  
                  <CardHeader className="relative z-10 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-terminal-green/20 transition-all duration-500 ${
                          openCards[module.name] 
                            ? 'bg-terminal-green/40 scale-110 rotate-6' 
                            : 'group-hover:bg-terminal-green/30 group-hover:scale-105'
                        }`}>
                          <module.icon className={`h-6 w-6 text-terminal-green transition-all duration-500 ${
                            openCards[module.name] ? 'scale-110' : ''
                          }`} />
                        </div>
                        <div>
                          <CardTitle className={`font-mono text-lg text-left transition-all duration-300 ${
                            openCards[module.name] ? 'text-terminal-green' : 'group-hover:text-terminal-green'
                          }`}>
                            {module.name}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground text-left text-sm mt-1">
                            {module.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className={`p-2 rounded-full transition-all duration-500 ${
                        openCards[module.name] ? 'bg-terminal-green/20' : 'group-hover:bg-terminal-green/10'
                      }`}>
                        <ChevronDown 
                          className={`h-5 w-5 text-terminal-green transition-all duration-500 ${
                            openCards[module.name] ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                          }`}
                        />
                      </div>
                    </div>
                  </CardHeader>

                  {/* Code Content with Absolute Positioning */}
                  {openCards[module.name] && (
                    <div className="absolute top-full left-0 right-0 z-20 mt-2">
                      <CardContent className="p-4">
                        <div className="bg-terminal-surface/95 rounded-xl p-4 border border-terminal-green/50 backdrop-blur-sm shadow-xl shadow-terminal-green/20">
                          <pre className="text-sm font-mono text-terminal-green whitespace-pre-wrap overflow-x-auto leading-relaxed max-h-48 overflow-y-auto">
                            {module.code}
                          </pre>
                        </div>
                      </CardContent>
                    </div>
                  )}

                  {/* Floating Particles Effect */}
                  {openCards[module.name] && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-4 right-4 w-2 h-2 bg-terminal-green/40 rounded-full animate-pulse" />
                      <div className="absolute bottom-6 left-6 w-1 h-1 bg-terminal-green/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-terminal-green/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Explorer Accordion */}
      <ModuleExplorer />

      {/* Installation Guide */}
      <section className="py-24 bg-terminal-surface/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-mono font-bold mb-4">
                Quick Installation
                <span className="inline-block w-1 h-8 bg-terminal-blue ml-2 animate-pulse" />
              </h2>
              <p className="text-lg text-muted-foreground">
                Get ReflexCore running in seconds with one command
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-terminal-surface/70 rounded-lg border border-terminal-green/30 p-6">
                <h3 className="font-mono font-bold text-terminal-green mb-4 flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  For Zsh users
                </h3>
                <div className="flex items-center gap-3 bg-terminal-surface/80 rounded-lg p-4">
                  <code className="flex-1 font-mono text-sm text-terminal-green">
                    {installCommands.zsh}
                  </code>
                  <Button size="sm" variant="ghost" className="text-terminal-green hover:bg-terminal-green/20" onClick={() => copyToClipboard(installCommands.zsh, 'zsh')}>
                    {copiedCommand === 'zsh' ? '✓' : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="bg-terminal-surface/70 rounded-lg border border-terminal-blue/30 p-6">
                <h3 className="font-mono font-bold text-terminal-blue mb-4 flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  For Bash users
                </h3>
                <div className="flex items-center gap-3 bg-terminal-surface/80 rounded-lg p-4">
                  <code className="flex-1 font-mono text-sm text-terminal-blue">
                    {installCommands.bash}
                  </code>
                  <Button size="sm" variant="ghost" className="text-terminal-blue hover:bg-terminal-blue/20" onClick={() => copyToClipboard(installCommands.bash, 'bash')}>
                    {copiedCommand === 'bash' ? '✓' : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Need help? Check out our comprehensive documentation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-terminal-green text-terminal-green hover:bg-terminal-green/10">
                  View Documentation
                </Button>
                <Button variant="outline" className="border-terminal-blue text-terminal-blue hover:bg-terminal-blue/10">
                  API Reference
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-terminal-surface/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-mono font-bold mb-4">
              Join the Community
              <span className="inline-block w-1 h-8 bg-terminal-green ml-2 animate-pulse" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of the movement building the future of cognition-native DevSecOps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center bg-terminal-surface/60 border-terminal-green/30 hover:border-terminal-green/50 transition-colors">
              <CardHeader>
                <Github className="h-12 w-12 text-terminal-green mx-auto mb-4" />
                <CardTitle className="font-mono">Contribute</CardTitle>
                <CardDescription>
                  Help build the next generation of intelligent DevOps tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-terminal-green hover:bg-terminal-green/80 text-terminal-bg">
                  View Issues
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-terminal-surface/60 border-terminal-blue/30 hover:border-terminal-blue/50 transition-colors">
              <CardHeader>
                <Star className="h-12 w-12 text-terminal-blue mx-auto mb-4" />
                <CardTitle className="font-mono">Star us</CardTitle>
                <CardDescription>
                  Show your support and help others discover ReflexCore
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-terminal-blue text-terminal-blue hover:bg-terminal-blue/10">
                  Star on GitHub
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-terminal-surface/60 border-primary/30 hover:border-primary/50 transition-colors">
              <CardHeader>
                <RotateCcw className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-mono">Discuss</CardTitle>
                <CardDescription>
                  Join discussions, ask questions, and share your experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10" asChild>
                  <a href="https://discord.com/invite/NuevNNzQwm" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default OpenCore;