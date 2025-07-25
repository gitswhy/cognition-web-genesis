import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Code, 
  Zap, 
  RefreshCw, 
  Eye, 
  Database, 
  Trash2,
  ChevronRight,
  Github,
  FileText,
  MessageSquare,
  Copy,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WebsiteBackground from '@/components/background/WebsiteBackground';

const OpenCore = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const modules = [
    {
      icon: Code,
      name: "Bootstrapping",
      description: "Initialize cognitive shell environment with pattern recognition",
      command: "reflexcore bootstrap --pattern-learn",
      details: [
        "Automatic shell environment setup",
        "Pattern recognition initialization", 
        "Cognitive baseline establishment",
        "Custom prompt configuration"
      ],
      color: "terminal-green"
    },
    {
      icon: Zap,
      name: "Overclock",
      description: "Performance optimization and resource management",
      command: "reflexcore overclock --optimize-memory",
      details: [
        "Memory usage optimization",
        "Command execution acceleration",
        "Resource allocation balancing",
        "Performance monitoring"
      ],
      color: "terminal-blue"
    },
    {
      icon: RefreshCw,
      name: "QuantumFlush",
      description: "Entropy reset and system state normalization",
      command: "reflexcore flush --entropy-reset",
      details: [
        "System entropy management",
        "State normalization protocols",
        "Memory leak prevention",
        "Cognitive pattern refresh"
      ],
      color: "yellow-400"
    },
    {
      icon: Eye,
      name: "CoreMirror",
      description: "Intent reflection and cognitive pattern analysis",
      command: "reflexcore mirror --intent-analyze",
      details: [
        "Developer intent detection",
        "Behavioral pattern analysis",
        "Cognitive state mirroring",
        "Predictive suggestions"
      ],
      color: "purple-400"
    },
    {
      icon: Database,
      name: "VaultSync",
      description: "Secure logging and data synchronization",
      command: "reflexcore vault --sync-secure",
      details: [
        "Encrypted log management",
        "Secure data synchronization",
        "Audit trail generation",
        "Compliance logging"
      ],
      color: "terminal-green"
    },
    {
      icon: Trash2,
      name: "AutoClean",
      description: "Intelligent cleanup and maintenance automation",
      command: "reflexcore clean --auto-purge",
      details: [
        "Temporary file cleanup",
        "Cache optimization",
        "Log rotation management",
        "Storage reclamation"
      ],
      color: "red-400"
    }
  ];

  const installSteps = [
    {
      step: 1,
      title: "Download ReflexCore",
      command: "curl -fsSL https://get.reflexcore.dev/install.sh | sh"
    },
    {
      step: 2,
      title: "Initialize Shell Integration",
      command: "reflexcore init --shell=$(echo $SHELL | rev | cut -d'/' -f1 | rev)"
    },
    {
      step: 3,
      title: "Verify Installation",
      command: "reflexcore version && reflexcore status"
    }
  ];

  const copyCommand = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy command:', err);
    }
  };

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>ReflexCore Open Source - Free Cognition-Native Shell | Gitswhy OS</title>
        <meta name="description" content="ReflexCore is the open-source, Apache 2.0-licensed foundation of Gitswhy OS. Get self-healing shell capabilities, cognitive monitoring, and intelligent automation for free." />
        <meta name="keywords" content="open-source self-healing shell, cognitive monitoring, reflexcore, free devops tools, apache license, terminal automation" />
        <meta property="og:title" content="ReflexCore - Always Free Cognition-Native Shell" />
        <meta property="og:description" content="Free, open-source shell with cognitive monitoring and self-healing capabilities. Apache 2.0 licensed." />
        <meta property="og:type" content="website" />
      </Helmet>

      <WebsiteBackground>
        <Header />
        
        {/* Banner Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center space-y-6">
              <Badge className="bg-terminal-green/20 text-terminal-green border-terminal-green/30 px-4 py-2 text-sm font-medium">
                Apache 2.0 Licensed
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                <span className="text-terminal-green">ReflexCore</span> – Always Free
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto">
                Apache 2.0-Licensed Foundation for Cognition-Native Shell Operations
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Cognition-Native <span className="text-terminal-green">Foundation</span>
              </h2>
              
              <p className="text-lg text-foreground/70 leading-relaxed">
                ReflexCore brings cognition-native monitoring and self-healing capabilities to your shell environment. 
                Monitor every keystroke, understand developer intent, and automatically resolve issues before they impact your workflow. 
                Free forever, open source, and ready for enterprise scale.
              </p>
            </div>
          </div>
        </section>

        {/* Module Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Core <span className="text-terminal-green">Modules</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Six essential modules for cognitive shell enhancement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {modules.map((module, index) => {
                const Icon = module.icon;
                const isExpanded = expandedCard === index;
                
                return (
                  <Card 
                    key={module.name}
                    className="group hover:shadow-terminal-glow transition-all duration-300 bg-terminal-surface border-terminal-green/20 cursor-pointer"
                    onClick={() => toggleCard(index)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-xl bg-${module.color}/10 group-hover:bg-${module.color}/20 transition-colors`}>
                          <Icon className={`w-6 h-6 text-${module.color}`} />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyCommand(module.command);
                            }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {copiedCommand === module.command ? (
                              <Check className="w-4 h-4 text-terminal-green" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                          
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-foreground/60" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-foreground/60" />
                          )}
                        </div>
                      </div>
                      
                      <CardTitle className={`text-lg group-hover:text-${module.color} transition-colors`}>
                        {module.name}
                      </CardTitle>
                      
                      <p className="text-foreground/70 text-sm">
                        {module.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="bg-terminal-bg/50 rounded-lg p-3 font-mono text-sm text-terminal-green mb-4">
                        {module.command}
                      </div>
                      
                      {isExpanded && (
                        <div className="space-y-2 animate-fade-in">
                          <h4 className="font-semibold text-foreground text-sm">Features:</h4>
                          <ul className="space-y-1">
                            {module.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-terminal-green flex-shrink-0" />
                                <span className="text-foreground/70">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Install Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Quick <span className="text-terminal-green">Installation</span>
                </h2>
                <p className="text-xl text-foreground/70">
                  Get ReflexCore running in under 60 seconds
                </p>
              </div>

              <div className="space-y-6">
                {installSteps.map((step, index) => (
                  <Card key={step.step} className="bg-terminal-surface border-terminal-green/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-terminal-green/20 flex items-center justify-center">
                          <span className="text-terminal-green font-bold text-sm">{step.step}</span>
                        </div>
                        
                        <div className="flex-1 space-y-3">
                          <h3 className="font-semibold text-foreground">{step.title}</h3>
                          
                          <div className="relative">
                            <div className="bg-terminal-bg rounded-lg p-4 font-mono text-sm text-terminal-green">
                              {step.command}
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyCommand(step.command)}
                              className="absolute top-2 right-2 opacity-0 hover:opacity-100 transition-opacity"
                            >
                              {copiedCommand === step.command ? (
                                <Check className="w-4 h-4 text-terminal-green" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="terminal" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download ReflexCore
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Upgrade Teaser */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-terminal-blue/10 to-purple-500/10 border-terminal-blue/30">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Ready for <span className="text-terminal-blue">More Power?</span>
                  </h2>
                  
                  <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                    Unlock AI-powered vulnerability scanning, auto-patching, and recursive vault protection with Gitswhy OS Pro
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <Badge variant="outline" className="border-terminal-blue/30 text-terminal-blue">
                      Real-time AI Scanning
                    </Badge>
                    <Badge variant="outline" className="border-terminal-blue/30 text-terminal-blue">
                      Auto-Patching
                    </Badge>
                    <Badge variant="outline" className="border-terminal-blue/30 text-terminal-blue">
                      Recursive Vault
                    </Badge>
                    <Badge variant="outline" className="border-terminal-blue/30 text-terminal-blue">
                      Enterprise Support
                    </Badge>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="terminal-blue" size="lg" asChild>
                      <a href="/pro-edition">
                        Upgrade to Pro
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Links Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Community & <span className="text-terminal-green">Resources</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="group hover:shadow-terminal-glow transition-all duration-300 bg-terminal-surface border-terminal-green/20">
                <CardContent className="p-6 text-center">
                  <div className="p-4 rounded-xl bg-terminal-green/10 w-fit mx-auto mb-4">
                    <FileText className="w-8 h-8 text-terminal-green" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Documentation</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Complete guides and API reference
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="/docs">View Docs</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-terminal-glow transition-all duration-300 bg-terminal-surface border-terminal-green/20">
                <CardContent className="p-6 text-center">
                  <div className="p-4 rounded-xl bg-terminal-green/10 w-fit mx-auto mb-4">
                    <Github className="w-8 h-8 text-terminal-green" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Source code and issue tracking
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="https://github.com/gitswhy/reflexcore" target="_blank" rel="noopener noreferrer">
                      Star on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-terminal-glow transition-all duration-300 bg-terminal-surface border-terminal-green/20">
                <CardContent className="p-6 text-center">
                  <div className="p-4 rounded-xl bg-terminal-green/10 w-fit mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-terminal-green" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Discord</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Join our developer community
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="https://discord.gg/gitswhy" target="_blank" rel="noopener noreferrer">
                      Join Discord
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </WebsiteBackground>
    </div>
  );
};

export default OpenCore;