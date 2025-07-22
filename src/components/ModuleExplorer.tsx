import { useState } from 'react';
import { ChevronDown, Play, Code, Cpu, Database, Shield, RotateCcw, Zap, Terminal } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ModuleExplorer = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const modules = [
    {
      id: 'bootstrapper',
      name: 'Bootstrapper',
      icon: Terminal,
      shortDescription: 'Bootstrapper: Cognitive environment initialization with predictive stack detection',
      description: 'Intelligently detects your development environment and configures optimal settings based on cognitive patterns and project context.',
      code: `// Cognitive environment bootstrap
import { CognitiveBootstrap } from '@reflexcore/bootstrapper';

const bootstrap = new CognitiveBootstrap({
  detectStack: true,
  cognitiveProfile: 'developer',
  adaptiveConfig: true
});

// Auto-configure based on detection
await bootstrap.initialize({
  languages: ['typescript', 'python'],
  frameworks: ['react', 'fastapi'],
  tools: ['docker', 'k8s'],
  preferences: {
    codeStyle: 'aggressive-optimization',
    testStrategy: 'behavior-driven',
    deploymentStyle: 'blue-green'
  }
});

console.log('Environment bootstrapped with cognitive awareness');`,
      animation: 'bootstrap',
      color: 'from-terminal-green/20 to-terminal-green/5'
    },
    {
      id: 'overclock',
      name: 'Overclock',
      icon: Zap,
      shortDescription: 'Overclock: Performance amplification through predictive resource optimization',
      description: 'Monitors system performance and applies intelligent optimizations based on usage patterns and computational requirements.',
      code: `// Performance overclock system
import { PerformanceOverclock } from '@reflexcore/overclock';

const overclock = new PerformanceOverclock({
  mode: 'cognitive',
  optimization: 'aggressive',
  monitoring: 'real-time'
});

// Monitor and optimize performance
overclock.monitor({
  buildTimes: true,
  memoryUsage: true,
  cpuUtilization: true,
  ioOperations: true
});

// Apply intelligent optimizations
await overclock.optimize({
  parallelization: 'auto-detect',
  caching: 'predictive',
  resourceAllocation: 'dynamic'
});

console.log('System performance overclocked');`,
      animation: 'performance',
      color: 'from-terminal-blue/20 to-terminal-blue/5'
    },
    {
      id: 'quantumflush',
      name: 'QuantumFlush',
      icon: Database,
      shortDescription: 'QuantumFlush: Quantum cache invalidation with temporal dependency mapping',
      description: 'Intelligently manages cache lifecycles using quantum computing principles to predict optimal invalidation timing.',
      code: `// Quantum cache management
import { QuantumFlush } from '@reflexcore/quantumflush';

const qFlush = new QuantumFlush({
  algorithm: 'quantum-prediction',
  temporal: 'multi-dimensional',
  dependencies: 'graph-analysis'
});

// Quantum cache analysis
const cacheState = await qFlush.analyze({
  scope: 'project-wide',
  dependencies: true,
  temporal: true,
  quantum: {
    superposition: 'enabled',
    entanglement: 'dependency-aware'
  }
});

// Intelligent cache flush
await qFlush.flush({
  strategy: 'predictive',
  preserveHot: true,
  quantumSync: true
});

console.log('Quantum cache flush completed');`,
      animation: 'quantum',
      color: 'from-purple-400/20 to-purple-400/5'
    },
    {
      id: 'autoclean',
      name: 'AutoClean',
      icon: RotateCcw,
      shortDescription: 'AutoClean: Autonomous system maintenance with cognitive debris detection',
      description: 'Automatically identifies and removes unnecessary files, dependencies, and artifacts using machine learning algorithms.',
      code: `// Autonomous cleaning system
import { AutoClean } from '@reflexcore/autoclean';

const cleaner = new AutoClean({
  intelligence: 'machine-learning',
  scope: 'comprehensive',
  safety: 'paranoid'
});

// Cognitive debris detection
const analysis = await cleaner.scanDebris({
  files: 'unused-artifacts',
  dependencies: 'orphaned-packages',
  cache: 'stale-entries',
  logs: 'outdated-traces'
});

// Safe autonomous cleaning
await cleaner.clean({
  dryRun: false,
  backup: 'incremental',
  rollback: 'enabled',
  verification: 'integrity-check'
});

console.log('Autonomous cleaning cycle completed');`,
      animation: 'cleaning',
      color: 'from-green-400/20 to-green-400/5'
    },
    {
      id: 'coremirror',
      name: 'CoreMirror',
      icon: Shield,
      shortDescription: 'CoreMirror: Tracks keystroke velocity and cognitive drift patterns',
      description: 'Real-time code analysis that mirrors your development patterns and provides cognitive insights for optimal workflow.',
      code: `// Cognitive code mirroring
import { CoreMirror } from '@reflexcore/coremirror';

const mirror = new CoreMirror({
  tracking: 'keystroke-velocity',
  analysis: 'cognitive-drift',
  insights: 'real-time'
});

// Pattern recognition
mirror.trackPatterns({
  keystrokeVelocity: true,
  cognitiveDrift: true,
  decisionHesitation: true,
  focusIntensity: true
});

// Real-time insights
mirror.on('cognitiveShift', (data) => {
  console.log('Cognitive state change detected:', {
    velocity: data.keystrokeVelocity,
    drift: data.cognitiveDrift,
    focus: data.focusLevel,
    recommendations: data.suggestions
  });
});

console.log('CoreMirror cognitive tracking active');`,
      animation: 'mirroring',
      color: 'from-blue-400/20 to-blue-400/5'
    },
    {
      id: 'vaultsync',
      name: 'VaultSync',
      icon: Cpu,
      shortDescription: 'VaultSync: Encrypted environment synchronization with quantum-safe protocols',
      description: 'Securely synchronizes development environments across multiple contexts using quantum-resistant encryption.',
      code: `// Quantum-safe environment sync
import { VaultSync } from '@reflexcore/vaultsync';

const vault = new VaultSync({
  encryption: 'quantum-resistant',
  protocol: 'zero-trust',
  sync: 'bidirectional'
});

// Secure environment sync
await vault.sync({
  environments: ['development', 'staging', 'production'],
  secrets: 'encrypted-transit',
  variables: 'context-aware',
  keys: {
    algorithm: 'post-quantum-crypto',
    rotation: 'automatic',
    escrow: 'distributed'
  }
});

// Verify sync integrity
const verification = await vault.verify({
  checksum: 'quantum-hash',
  signature: 'digital-certificate',
  timestamp: 'blockchain-verified'
});

console.log('Vault synchronization completed securely');`,
      animation: 'vault',
      color: 'from-orange-400/20 to-orange-400/5'
    }
  ];

  const customSyntaxStyle = {
    ...tomorrow,
    'pre[class*="language-"]': {
      ...tomorrow['pre[class*="language-"]'],
      background: 'rgba(20, 20, 20, 0.8)',
      border: '1px solid rgba(0, 255, 102, 0.2)',
      borderRadius: '8px',
      fontFamily: 'JetBrains Mono, monospace',
    },
    'code[class*="language-"]': {
      ...tomorrow['code[class*="language-"]'],
      fontFamily: 'JetBrains Mono, monospace',
    }
  };

  return (
    <section className="py-24 bg-terminal-surface/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold mb-4">
            Module Explorer
            <span className="inline-block w-1 h-8 bg-terminal-green ml-2 animate-pulse" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dive into each ReflexCore module with interactive code examples and cognitive insights
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="space-y-4"
            value={activeModule || ''}
            onValueChange={setActiveModule}
          >
            {modules.map((module, index) => (
              <AccordionItem
                key={module.id}
                value={module.id}
                className="group bg-terminal-surface/30 border border-terminal-green/20 rounded-lg overflow-hidden hover:border-terminal-green/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-terminal-green/5 transition-colors duration-300">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-terminal-green/20 group-hover:bg-terminal-green/30 transition-colors duration-300">
                        <module.icon className="h-6 w-6 text-terminal-green" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-mono font-bold text-lg text-foreground">
                          {module.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 font-mono">
                          {module.shortDescription}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant="secondary" 
                        className="bg-terminal-green/20 text-terminal-green border-terminal-green/50 font-mono"
                      >
                        Interactive
                      </Badge>
                      <ChevronDown className="h-5 w-5 text-terminal-green transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6">
                  <div className="grid lg:grid-cols-2 gap-6 mt-4">
                    {/* Left side - Description and Animation */}
                    <div className="space-y-4">
                      <Card className="bg-terminal-surface/40 border-terminal-green/30">
                        <CardHeader>
                          <CardTitle className="font-mono text-terminal-green flex items-center gap-2">
                            <Code className="h-5 w-5" />
                            Module Overview
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {module.description}
                          </p>
                        </CardContent>
                      </Card>

                      {/* Animation placeholder - using a styled div for now */}
                      <Card className="bg-terminal-surface/40 border-terminal-green/30">
                        <CardContent className="p-6">
                          <div className="h-32 rounded-lg bg-gradient-to-br from-terminal-green/10 to-terminal-blue/10 border border-terminal-green/20 flex items-center justify-center">
                            <div className="flex items-center gap-3">
                              <module.icon className="h-8 w-8 text-terminal-green animate-pulse" />
                              <span className="font-mono text-sm text-muted-foreground">
                                {module.animation} animation
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Right side - Code Example */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-mono font-bold text-terminal-green">Code Example</h4>
                        <div className="flex items-center gap-2">
                          <Play className="h-4 w-4 text-terminal-green" />
                          <span className="text-sm font-mono text-muted-foreground">Interactive</span>
                        </div>
                      </div>
                      
                      <div className="rounded-lg overflow-hidden border border-terminal-green/20 hover:border-terminal-green/40 transition-colors duration-300">
                        <SyntaxHighlighter
                          language="javascript"
                          style={customSyntaxStyle}
                          customStyle={{
                            margin: 0,
                            padding: '1.5rem',
                            fontSize: '0.875rem',
                            lineHeight: '1.5'
                          }}
                          showLineNumbers={true}
                          lineNumberStyle={{
                            color: 'rgba(0, 255, 102, 0.4)',
                            paddingRight: '1rem',
                            fontSize: '0.75rem'
                          }}
                        >
                          {module.code}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>

                  {/* Interactive features hint */}
                  <div className="mt-6 p-4 bg-terminal-green/10 border border-terminal-green/30 rounded-lg">
                    <div className="flex items-center gap-3 text-sm">
                      <Badge variant="secondary" className="bg-terminal-green/20 text-terminal-green border-terminal-green/50">
                        Pro Tip
                      </Badge>
                      <span className="text-muted-foreground font-mono">
                        This module includes real-time cognitive analysis and adaptive learning capabilities
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ModuleExplorer;