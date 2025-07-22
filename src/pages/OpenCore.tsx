import { useState, useEffect } from 'react';
import { Copy, Github, Star, Download, Terminal, Zap, Database, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const OpenCore = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
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
  }];
  const installCommands = {
    zsh: `echo 'export PATH="$PATH:/usr/local/bin/gitswhy"' >> ~/.zshrc && source ~/.zshrc`,
    bash: `echo 'export PATH="$PATH:/usr/local/bin/gitswhy"' >> ~/.bashrc && source ~/.bashrc`
  };
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section with Terminal Heatmap Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Terminal Heatmap Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 md:grid-cols-12 gap-1 h-full">
            {Array.from({
            length: 96
          }).map((_, i) => <div key={i} className={`
                  animate-glow-pulse bg-terminal-green/30 rounded-sm
                  ${i % 3 === 0 ? 'animate-delay-100' : ''}
                  ${i % 5 === 0 ? 'animate-delay-300' : ''}
                  ${i % 7 === 0 ? 'bg-terminal-blue/20' : ''}
                `} style={{
            animationDelay: `${i * 100 % 2000}ms`,
            height: `${Math.random() * 60 + 20}px`
          }} />)}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-terminal-surface/50 border border-terminal-green/30 rounded-full px-6 py-2 mb-8">
              <Badge variant="secondary" className="bg-terminal-green/20 text-terminal-green border-terminal-green/50">
                Open Source
              </Badge>
              <span className="text-muted-foreground">MIT Licensed</span>
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
              <Button size="lg" className="bg-terminal-green hover:bg-terminal-green/80 text-terminal-bg font-mono">
                <Star className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>

            {/* GitHub Stats */}
            <div className="flex justify-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-terminal-green" />
                <span className="font-mono">12.4k stars</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span className="font-mono">2.1k forks</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4 text-terminal-blue" />
                <span className="font-mono">156k downloads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules Features */}
      <section className="py-24 bg-terminal-surface/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-mono font-bold mb-4">
              Core Modules
              <span className="inline-block w-1 h-8 bg-terminal-green ml-2 animate-pulse" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five foundational modules that make up the ReflexCore open-source foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreModules.map((module, index) => <Card key={module.name} className="group relative overflow-hidden bg-terminal-surface/30 border-terminal-green/20 hover:border-terminal-green/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-terminal-green/20 group-hover:bg-terminal-green/30 transition-colors">
                      <module.icon className="h-5 w-5 text-terminal-green" />
                    </div>
                    <CardTitle className="font-mono text-lg">{module.name}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {module.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="bg-terminal-surface/60 rounded-lg p-4 border border-terminal-green/20 group-hover:border-terminal-green/40 transition-colors">
                    <pre className="text-sm font-mono text-terminal-green whitespace-pre-wrap overflow-x-auto">
                      {module.code}
                    </pre>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-24">
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
              <div className="bg-terminal-surface/40 rounded-lg border border-terminal-green/30 p-6">
                <h3 className="font-mono font-bold text-terminal-green mb-4 flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  For Zsh users
                </h3>
                <div className="flex items-center gap-3 bg-terminal-surface/50 rounded-lg p-4">
                  <code className="flex-1 font-mono text-sm text-terminal-green">
                    {installCommands.zsh}
                  </code>
                  <Button size="sm" variant="ghost" className="text-terminal-green hover:bg-terminal-green/20" onClick={() => copyToClipboard(installCommands.zsh, 'zsh')}>
                    {copiedCommand === 'zsh' ? '✓' : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="bg-terminal-surface/40 rounded-lg border border-terminal-blue/30 p-6">
                <h3 className="font-mono font-bold text-terminal-blue mb-4 flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  For Bash users
                </h3>
                <div className="flex items-center gap-3 bg-terminal-surface/50 rounded-lg p-4">
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
      <section className="py-24 bg-terminal-surface/20">
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
            <Card className="text-center bg-terminal-surface/30 border-terminal-green/20 hover:border-terminal-green/50 transition-colors">
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

            <Card className="text-center bg-terminal-surface/30 border-terminal-blue/20 hover:border-terminal-blue/50 transition-colors">
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

            <Card className="text-center bg-terminal-surface/30 border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader>
                <RotateCcw className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-mono">Discuss</CardTitle>
                <CardDescription>
                  Join discussions, ask questions, and share your experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Join Discord
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