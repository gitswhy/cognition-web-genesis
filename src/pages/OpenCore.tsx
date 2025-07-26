import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, Github, Star, Download, Terminal, Zap, Database, Shield, RotateCcw, Trash2, ChevronDown, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModuleExplorer from '@/components/ModuleExplorer';
import { SoftwareApplicationSchema } from '@/components/SoftwareApplicationSchema';
import OpenCoreBackground from '@/components/background/OpenCoreBackground';
const OpenCore = () => {
  const navigate = useNavigate();
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
    bash: `echo 'export PATH="$PATH:/usr/local/bin/gitswhy"' >> ~/.bashrc && source ~/.bashrc`,
    powershell: {
      prerequisites: `# Check PowerShell version
$PSVersionTable.PSVersion
# Install Python (if not installed)
winget install Python.Python.3.11
# Install Git for Windows
winget install Git.Git`,
      clone: `git clone https://github.com/gitswhy/reflexcore.git
cd reflexcore`,
      dependencies: `python -m pip install click cryptography pyyaml`,
      profile: `# Add to PowerShell profile (optional)
# Run: notepad $PROFILE
# Add: . "$env:USERPROFILE\\reflexcore\\scripts\\gitswhy_initiate.ps1"`,
      initialize: `python cli/gitswhy_cli.py init`,
      usage: `# Monitor performance
python cli/gitswhy_cli.py mirror
# Flush entropy cache
python cli/gitswhy_cli.py flush
# Get version info
python cli/gitswhy_cli.py --version`,
      troubleshooting: `# Permission issues - run as Administrator
# Missing dependencies - re-run pip install
# Logs location: ~\\.gitswhy\\logs\\`,
      uninstall: `# Remove directory and profile lines
Remove-Item -Recurse -Force reflexcore`
    }
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
                  <div className={`absolute top-full left-0 right-0 z-20 mt-2 transition-all duration-500 ease-out transform-gpu ${
                    openCards[module.name] 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 translate-y-[-10px] pointer-events-none'
                  }`}>
                    <div className={`transition-all duration-300 delay-100 ${
                      openCards[module.name] ? 'opacity-100 transform-none' : 'opacity-0 translate-y-2'
                    }`}>
                      <CardContent className="p-4">
                        <div className={`bg-terminal-surface/95 rounded-xl p-4 border border-terminal-green/50 backdrop-blur-sm shadow-xl shadow-terminal-green/20 transition-all duration-400 ${
                          openCards[module.name] ? 'scale-100 border-terminal-green/50' : 'scale-95 border-terminal-green/30'
                        }`}>
                          <pre className="text-sm font-mono text-terminal-green whitespace-pre-wrap overflow-x-auto leading-relaxed max-h-48 overflow-y-auto">
                            {module.code}
                          </pre>
                        </div>
                      </CardContent>
                    </div>
                  </div>

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

      {/* ReflexCore Installation Guide Section */}
      <section className="py-24 bg-terminal-surface/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Terminal className="w-12 h-12 text-terminal-green mr-4" />
              <h2 className="text-4xl font-mono font-bold bg-gradient-to-r from-terminal-green via-primary to-terminal-blue bg-clip-text text-transparent">
                ReflexCore Installation Guide
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This guide will help you install and configure ReflexCore on Linux, WSL, or macOS.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1: Prerequisites */}
            <div className="bg-terminal-surface/60 backdrop-blur-sm border border-terminal-green/30 rounded-xl p-8 hover:border-terminal-green/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-terminal-green to-terminal-blue rounded-full flex items-center justify-center text-terminal-bg font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-3">Prerequisites</h3>
                  <p className="text-muted-foreground mb-4">Ensure you have the required dependencies installed:</p>
                  <ul className="text-muted-foreground space-y-2 mb-6">
                    <li>• <strong>Python 3.7+</strong> and <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">pip</code> (check with <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">python3 --version</code> and <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">pip --version</code>)</li>
                    <li>• <strong>Bash</strong> (default on Linux/macOS/WSL)</li>
                    <li>• <strong>git</strong></li>
                    <li>• (Optional) <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">sudo</code> privileges for system-level optimizations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2: Clone Repository */}
            <div className="bg-terminal-surface/60 backdrop-blur-sm border border-terminal-green/30 rounded-xl p-8 hover:border-terminal-green/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-terminal-green to-terminal-blue rounded-full flex items-center justify-center text-terminal-bg font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-3">Clone the Repository</h3>
                  <p className="text-muted-foreground mb-4">Clone the ReflexCore repository from GitHub.</p>
                  <div className="relative group">
                    <pre className="bg-terminal-surface/95 border border-terminal-green/30 rounded-lg p-4 overflow-x-auto">
                      <code className="text-terminal-green font-mono text-sm" aria-label="Clone Repository Command">
{`git clone https://github.com/gitswhy/reflexcore.git
cd reflexcore`}
                      </code>
                    </pre>
                    <button 
                      onClick={() => copyToClipboard(`git clone https://github.com/gitswhy/reflexcore.git\ncd reflexcore`, 'clone')}
                      className="absolute top-2 right-2 p-2 bg-terminal-surface/80 hover:bg-terminal-surface rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Copy clone command"
                    >
                      {copiedCommand === 'clone' ? '✓' : <Copy className="w-4 h-4 text-terminal-green" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Install Dependencies */}
            <div className="bg-terminal-surface/60 backdrop-blur-sm border border-terminal-green/30 rounded-xl p-8 hover:border-terminal-green/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-terminal-green to-terminal-blue rounded-full flex items-center justify-center text-terminal-bg font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-3">Install Python Dependencies</h3>
                  <p className="text-muted-foreground mb-4">Install required Python packages.</p>
                  <div className="relative group">
                    <pre className="bg-terminal-surface/95 border border-terminal-green/30 rounded-lg p-4 overflow-x-auto">
                      <code className="text-terminal-green font-mono text-sm" aria-label="Install Dependencies Command">
pip install click cryptography pyyaml
                      </code>
                    </pre>
                    <button 
                      onClick={() => copyToClipboard(`pip install click cryptography pyyaml`, 'dependencies')}
                      className="absolute top-2 right-2 p-2 bg-terminal-surface/80 hover:bg-terminal-surface rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Copy dependencies command"
                    >
                      {copiedCommand === 'dependencies' ? '✓' : <Copy className="w-4 h-4 text-terminal-green" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Make Scripts Executable */}
            <div className="bg-terminal-surface/60 backdrop-blur-sm border border-terminal-green/30 rounded-xl p-8 hover:border-terminal-green/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-terminal-green to-terminal-blue rounded-full flex items-center justify-center text-terminal-bg font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-3">Make Scripts Executable</h3>
                  <p className="text-muted-foreground mb-4">Grant execution permissions to scripts.</p>
                  <div className="relative group">
                    <pre className="bg-terminal-surface/95 border border-terminal-green/30 rounded-lg p-4 overflow-x-auto">
                      <code className="text-terminal-green font-mono text-sm" aria-label="Make Scripts Executable Command">
chmod +x scripts/*.sh modules/*.sh gitswhy_vault_manager.py cli/gitswhy_cli.py
                      </code>
                    </pre>
                    <button 
                      onClick={() => copyToClipboard(`chmod +x scripts/*.sh modules/*.sh gitswhy_vault_manager.py cli/gitswhy_cli.py`, 'chmod')}
                      className="absolute top-2 right-2 p-2 bg-terminal-surface/80 hover:bg-terminal-surface rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Copy chmod command"
                    >
                      {copiedCommand === 'chmod' ? '✓' : <Copy className="w-4 h-4 text-terminal-green" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Optional Shell Startup */}
            <div className="bg-terminal-surface/60 backdrop-blur-sm border border-muted/30 rounded-xl p-8 hover:border-muted/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-muted to-muted-foreground rounded-full flex items-center justify-center text-terminal-bg font-bold text-lg">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-3">
                    Add to Shell Startup 
                    <span className="ml-3 px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">Optional</span>
                  </h3>
                  <p className="text-muted-foreground mb-4">Add ReflexCore to your <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">.bashrc</code> or <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">.zshrc</code> to auto-start background agents:</p>
                  <div className="relative group">
                    <pre className="bg-terminal-surface/95 border border-terminal-green/30 rounded-lg p-4 overflow-x-auto">
                      <code className="text-terminal-green font-mono text-sm" aria-label="Shell Startup Command">
source /path/to/reflexcore/scripts/gitswhy_initiate.sh
                      </code>
                    </pre>
                    <button 
                      onClick={() => copyToClipboard(`source /path/to/reflexcore/scripts/gitswhy_initiate.sh`, 'shell-startup')}
                      className="absolute top-2 right-2 p-2 bg-terminal-surface/80 hover:bg-terminal-surface rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Copy shell startup command"
                    >
                      {copiedCommand === 'shell-startup' ? '✓' : <Copy className="w-4 h-4 text-terminal-green" />}
                    </button>
                  </div>
                  <p className="text-muted-foreground text-sm mt-3">Then restart your shell.</p>
                </div>
              </div>
            </div>

            {/* Step 6: Initialize */}
            <div className="bg-terminal-surface/60 backdrop-blur-sm border border-terminal-green/30 rounded-xl p-8 hover:border-terminal-green/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-terminal-green to-terminal-blue rounded-full flex items-center justify-center text-terminal-bg font-bold text-lg">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-3">Initialize ReflexCore</h3>
                  <p className="text-muted-foreground mb-4">Initialize the ReflexCore setup.</p>
                  <div className="relative group">
                    <pre className="bg-terminal-surface/95 border border-terminal-green/30 rounded-lg p-4 overflow-x-auto">
                      <code className="text-terminal-green font-mono text-sm" aria-label="Initialize Command">
python3 cli/gitswhy_cli.py init
                      </code>
                    </pre>
                    <button 
                      onClick={() => copyToClipboard(`python3 cli/gitswhy_cli.py init`, 'initialize')}
                      className="absolute top-2 right-2 p-2 bg-terminal-surface/80 hover:bg-terminal-surface rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Copy initialize command"
                    >
                      {copiedCommand === 'initialize' ? '✓' : <Copy className="w-4 h-4 text-terminal-green" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 7: Test Suite */}
            <div className="bg-terminal-surface/60 backdrop-blur-sm border border-terminal-green/30 rounded-xl p-8 hover:border-terminal-green/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-terminal-green to-terminal-blue rounded-full flex items-center justify-center text-terminal-bg font-bold text-lg">
                  7
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-3">Run the Test Suite (Recommended)</h3>
                  <p className="text-muted-foreground mb-4">Run tests to verify installation. All tests should pass. If not, check logs in <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">~/.gitswhy/</code> or <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">/root/.gitswhy/</code>.</p>
                  <div className="relative group">
                    <pre className="bg-terminal-surface/95 border border-terminal-green/30 rounded-lg p-4 overflow-x-auto">
                      <code className="text-terminal-green font-mono text-sm" aria-label="Test Suite Command">
sudo ./test_all.sh
                      </code>
                    </pre>
                    <button 
                      onClick={() => copyToClipboard(`sudo ./test_all.sh`, 'test-suite')}
                      className="absolute top-2 right-2 p-2 bg-terminal-surface/80 hover:bg-terminal-surface rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Copy test command"
                    >
                      {copiedCommand === 'test-suite' ? '✓' : <Copy className="w-4 h-4 text-terminal-green" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 8: Usage Examples */}
            <div className="bg-terminal-surface/60 backdrop-blur-sm border border-terminal-green/30 rounded-xl p-8 hover:border-terminal-green/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-terminal-green to-terminal-blue rounded-full flex items-center justify-center text-terminal-bg font-bold text-lg">
                  8
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-3">Usage Examples</h3>
                  <p className="text-muted-foreground mb-6">Basic commands to get started.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-mono font-semibold text-foreground mb-2">Monitor keystrokes:</h4>
                      <div className="relative group">
                        <pre className="bg-terminal-surface/95 border border-terminal-green/30 rounded-lg p-4 overflow-x-auto">
                          <code className="text-terminal-green font-mono text-sm" aria-label="Monitor Command">
python3 cli/gitswhy_cli.py mirror
                          </code>
                        </pre>
                        <button 
                          onClick={() => copyToClipboard(`python3 cli/gitswhy_cli.py mirror`, 'monitor')}
                          className="absolute top-2 right-2 p-2 bg-terminal-surface/80 hover:bg-terminal-surface rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Copy mirror command"
                        >
                          {copiedCommand === 'monitor' ? '✓' : <Copy className="w-4 h-4 text-terminal-green" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-mono font-semibold text-foreground mb-2">Flush system entropy:</h4>
                      <div className="relative group">
                        <pre className="bg-terminal-surface/95 border border-terminal-green/30 rounded-lg p-4 overflow-x-auto">
                          <code className="text-terminal-green font-mono text-sm" aria-label="Flush Command">
sudo python3 cli/gitswhy_cli.py flush
                          </code>
                        </pre>
                        <button 
                          onClick={() => copyToClipboard(`sudo python3 cli/gitswhy_cli.py flush`, 'flush')}
                          className="absolute top-2 right-2 p-2 bg-terminal-surface/80 hover:bg-terminal-surface rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Copy flush command"
                        >
                          {copiedCommand === 'flush' ? '✓' : <Copy className="w-4 h-4 text-terminal-green" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-mono font-semibold text-foreground mb-2">Show vault summary:</h4>
                      <div className="relative group">
                        <pre className="bg-terminal-surface/95 border border-terminal-green/30 rounded-lg p-4 overflow-x-auto">
                          <code className="text-terminal-green font-mono text-sm" aria-label="Vault Command">
python3 cli/gitswhy_cli.py showvault --decrypt --format summary
                          </code>
                        </pre>
                        <button 
                          onClick={() => copyToClipboard(`python3 cli/gitswhy_cli.py showvault --decrypt --format summary`, 'vault')}
                          className="absolute top-2 right-2 p-2 bg-terminal-surface/80 hover:bg-terminal-surface rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Copy showvault command"
                        >
                          {copiedCommand === 'vault' ? '✓' : <Copy className="w-4 h-4 text-terminal-green" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 9: Troubleshooting */}
            <div className="bg-terminal-surface/60 backdrop-blur-sm border border-terminal-green/30 rounded-xl p-8 hover:border-terminal-green/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-terminal-green to-terminal-blue rounded-full flex items-center justify-center text-terminal-bg font-bold text-lg">
                  9
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-3">Troubleshooting</h3>
                  <p className="text-muted-foreground mb-6">Common issues and fixes:</p>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-muted-foreground mb-2">• <strong>Permission denied:</strong> Ensure scripts are executable and run with <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">sudo</code> if needed.</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-2">• <strong>Missing dependencies:</strong> Re-run <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">pip install ...</code> as above.</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-2">• <strong>Vault not created:</strong> Run the following command to create the vault:</p>
                      <div className="relative group mt-2">
                        <pre className="bg-terminal-surface/95 border border-terminal-green/30 rounded-lg p-4 overflow-x-auto">
                          <code className="text-terminal-green font-mono text-sm" aria-label="Sync Vault Command">
python3 cli/gitswhy_cli.py syncvault
                          </code>
                        </pre>
                        <button 
                          onClick={() => copyToClipboard(`python3 cli/gitswhy_cli.py syncvault`, 'syncvault')}
                          className="absolute top-2 right-2 p-2 bg-terminal-surface/80 hover:bg-terminal-surface rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Copy syncvault command"
                        >
                          {copiedCommand === 'syncvault' ? '✓' : <Copy className="w-4 h-4 text-terminal-green" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">• <strong>Logs:</strong> Check <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">~/.gitswhy/</code> or <code className="bg-terminal-surface/80 px-2 py-1 rounded font-mono text-terminal-green">/root/.gitswhy/</code> for logs and vault files.</p>
                    </div>
                  </div>
                </div>
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
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of the movement building the future of cognition-native DevSecOps
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center bg-terminal-surface/60 border-terminal-blue/30 hover:border-terminal-blue/50 transition-colors h-full flex flex-col">
              <CardHeader className="flex-grow">
                <Star className="h-12 w-12 text-terminal-blue mx-auto mb-4" />
                <CardTitle className="font-mono">Star us</CardTitle>
                <CardDescription>
                  Show your support and help others discover ReflexCore
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="outline" className="w-full border-terminal-blue text-terminal-blue hover:bg-terminal-blue/10" asChild>
                  <a href="https://github.com/gitswhy/reflexcore" target="_blank" rel="noopener noreferrer">
                    Star on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-terminal-surface/60 border-primary/30 hover:border-primary/50 transition-colors h-full flex flex-col">
              <CardHeader className="flex-grow">
                <RotateCcw className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-mono">Discuss</CardTitle>
                <CardDescription>
                  Join discussions, ask questions, and share your experience
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
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