import { useState, useEffect } from 'react';
import { ChevronDown, Play, Code, Cpu, Database, Shield, RotateCcw, Zap, Terminal, Pause, RotateCw, Activity, Settings } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ModuleExplorer = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [runningModules, setRunningModules] = useState<Set<string>>(new Set());
  const [moduleOutputs, setModuleOutputs] = useState<Record<string, string[]>>({});
  const [moduleParams, setModuleParams] = useState<Record<string, Record<string, number>>>({
    bootstrapper: { aggressiveness: 75, adaptivity: 80 },
    overclock: { performance: 85, optimization: 90 },
    quantumflush: { quantum: 70, temporal: 60 },
    autoclean: { safety: 95, scope: 65 },
    coremirror: { sensitivity: 80, tracking: 85 },
    vaultsync: { security: 100, sync: 75 }
  });

  const runModule = async (moduleId: string) => {
    setRunningModules(prev => new Set([...prev, moduleId]));
    setModuleOutputs(prev => ({ ...prev, [moduleId]: [] }));

    const outputs = getModuleSimulation(moduleId, moduleParams[moduleId]);
    
    for (let i = 0; i < outputs.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setModuleOutputs(prev => ({
        ...prev,
        [moduleId]: [...(prev[moduleId] || []), outputs[i]]
      }));
    }

    setTimeout(() => {
      setRunningModules(prev => {
        const newSet = new Set(prev);
        newSet.delete(moduleId);
        return newSet;
      });
    }, 1000);
  };

  const getModuleSimulation = (moduleId: string, params: Record<string, number>) => {
    const simulations: Record<string, string[]> = {
      bootstrapper: [
        `🔍 Detecting development environment...`,
        `✅ Found: React ${Math.floor(Math.random() * 5) + 16}.x, TypeScript, Vite`,
        `⚙️  Configuring optimal settings (aggressiveness: ${params.aggressiveness}%)...`,
        `🚀 Bootstrap completed with ${params.adaptivity}% adaptivity`,
        `📊 Environment optimized for cognitive development patterns`
      ],
      overclock: [
        `📈 Monitoring system performance...`,
        `⚡ CPU utilization: ${Math.floor(Math.random() * 30) + 40}% → ${Math.floor(Math.random() * 20) + 70}%`,
        `🧠 Applying ${params.performance}% performance optimization...`,
        `🔧 Build time reduced by ${Math.floor(Math.random() * 30) + 25}%`,
        `✨ System overclocked with ${params.optimization}% efficiency`
      ],
      quantumflush: [
        `🌌 Initializing quantum cache analysis...`,
        `🔬 Quantum superposition enabled (${params.quantum}% coherence)`,
        `⏰ Temporal mapping active (${params.temporal}% accuracy)`,
        `🧹 Flushing ${Math.floor(Math.random() * 50) + 20} stale cache entries...`,
        `⚛️  Quantum cache optimization complete`
      ],
      autoclean: [
        `🔍 Scanning for system debris...`,
        `📁 Found ${Math.floor(Math.random() * 100) + 50} unused files`,
        `🛡️  Safety level: ${params.safety}% (paranoid mode)`,
        `🗑️  Cleaning with ${params.scope}% scope coverage...`,
        `✨ Autonomous cleaning cycle completed safely`
      ],
      coremirror: [
        `👀 Activating cognitive tracking...`,
        `⌨️  Keystroke velocity: ${Math.floor(Math.random() * 50) + 80} WPM`,
        `🧠 Cognitive drift detected: ${params.sensitivity}% sensitivity`,
        `📊 Focus intensity: ${params.tracking}% tracking accuracy`,
        `🔄 Real-time mirroring synchronized`
      ],
      vaultsync: [
        `🔐 Initializing quantum-safe encryption...`,
        `🌐 Syncing environments with ${params.security}% security`,
        `🔑 Post-quantum crypto keys generated`,
        `📡 Bidirectional sync: ${params.sync}% completion`,
        `✅ Vault synchronization completed securely`
      ]
    };
    return simulations[moduleId] || [];
  };

  const InteractiveAnimation = ({ moduleId, isRunning }: { moduleId: string; isRunning: boolean }) => {
    const [animationState, setAnimationState] = useState(0);

    useEffect(() => {
      if (!isRunning) return;
      
      const interval = setInterval(() => {
        setAnimationState(prev => (prev + 1) % 360);
      }, 50);

      return () => clearInterval(interval);
    }, [isRunning]);

    const getAnimationContent = () => {
      switch (moduleId) {
        case 'bootstrapper':
          return (
            <div className="flex items-center justify-center space-x-2">
              <Terminal className={`h-6 w-6 text-terminal-green ${isRunning ? 'animate-pulse' : ''}`} />
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      isRunning && i <= (animationState / 40) % 9 
                        ? 'bg-terminal-green' 
                        : 'bg-terminal-green/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        case 'overclock':
          return (
            <div className="flex items-center justify-center">
              <Zap 
                className={`h-8 w-8 text-terminal-blue ${isRunning ? 'animate-spin' : ''}`}
                style={isRunning ? { transform: `rotate(${animationState}deg)` } : {}}
              />
              <div className="ml-2 flex flex-col space-y-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      isRunning ? 'bg-terminal-blue' : 'bg-terminal-blue/20'
                    }`}
                    style={{
                      width: isRunning ? `${20 + (animationState / 6) % 40}px` : '20px'
                    }}
                  />
                ))}
              </div>
            </div>
          );
        case 'quantumflush':
          return (
            <div className="relative flex items-center justify-center">
              <Database className="h-6 w-6 text-purple-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-12 h-12 border-2 border-purple-400/30 rounded-full ${
                    isRunning ? 'animate-spin' : ''
                  }`}
                  style={isRunning ? { 
                    transform: `rotate(${animationState}deg) scale(${1 + Math.sin(animationState / 10) * 0.2})` 
                  } : {}}
                />
              </div>
            </div>
          );
        case 'autoclean':
          return (
            <div className="flex items-center justify-center space-x-2">
              <RotateCcw 
                className={`h-6 w-6 text-green-400 ${isRunning ? 'animate-spin' : ''}`}
              />
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-8 rounded-full transition-all duration-500 ${
                      isRunning && (animationState / 20) % 5 > i
                        ? 'bg-green-400 scale-y-100' 
                        : 'bg-green-400/20 scale-y-25'
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        case 'coremirror':
          return (
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-6 w-6 text-blue-400" />
              <div className="relative w-16 h-8">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-400/50 rounded ${
                    isRunning ? 'animate-pulse' : ''
                  }`}
                  style={isRunning ? {
                    transform: `scaleX(${0.5 + Math.sin(animationState / 10) * 0.5})`
                  } : {}}
                />
              </div>
            </div>
          );
        case 'vaultsync':
          return (
            <div className="flex items-center justify-center space-x-2">
              <Cpu className="h-6 w-6 text-orange-400" />
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-6 rounded-full transition-all duration-300 ${
                      isRunning 
                        ? `bg-orange-400 opacity-${Math.floor((Math.sin(animationState / 10 + i) + 1) * 50 + 20)}`
                        : 'bg-orange-400/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        default:
          return <Activity className="h-6 w-6 text-terminal-green" />;
      }
    };

    return (
      <div className="h-24 rounded-lg bg-gradient-to-br from-terminal-green/5 to-terminal-blue/5 border border-terminal-green/20 flex items-center justify-center">
        {getAnimationContent()}
      </div>
    );
  };

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
                     {/* Left side - Description, Animation and Controls */}
                    <div className="space-y-4">
                      <Card className="bg-terminal-surface/40 border-terminal-green/30">
                        <CardHeader>
                          <CardTitle className="font-mono text-terminal-green flex items-center gap-2">
                            <Code className="h-5 w-5" />
                            Module Overview
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {module.description}
                          </p>
                          
                          {/* Interactive Controls */}
                          <div className="space-y-3">
                            <h4 className="font-mono text-sm text-terminal-green flex items-center gap-2">
                              <Settings className="h-4 w-4" />
                              Interactive Parameters
                            </h4>
                            {Object.entries(moduleParams[module.id] || {}).map(([param, value]) => (
                              <div key={param} className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="text-muted-foreground capitalize font-mono">{param}</span>
                                  <span className="text-terminal-green font-mono">{value}%</span>
                                </div>
                                <Slider
                                  value={[value]}
                                  onValueChange={([newValue]) => {
                                    setModuleParams(prev => ({
                                      ...prev,
                                      [module.id]: { ...prev[module.id], [param]: newValue }
                                    }));
                                  }}
                                  max={100}
                                  step={5}
                                  className="w-full"
                                />
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>


                      {/* Live Output Terminal */}
                      {moduleOutputs[module.id] && moduleOutputs[module.id].length > 0 && (
                        <Card className="bg-terminal-surface/60 border-terminal-green/30">
                          <CardHeader className="pb-2">
                            <CardTitle className="font-mono text-terminal-green text-sm flex items-center gap-2">
                              <Terminal className="h-4 w-4" />
                              Live Output
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="bg-terminal-bg/80 rounded-lg p-4 border border-terminal-green/20 font-mono text-sm">
                              {moduleOutputs[module.id].map((output, idx) => (
                                <div
                                  key={idx}
                                  className="text-terminal-green animate-fade-in mb-1"
                                  style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                  {output}
                                </div>
                              ))}
                              {runningModules.has(module.id) && (
                                <div className="flex items-center text-terminal-green mt-2">
                                  <span className="animate-pulse">▋</span>
                                  <span className="ml-2 text-muted-foreground">Processing...</span>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>

                     {/* Right side - Code Example and Output */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-mono font-bold text-terminal-green">Interactive Code</h4>
                        <Button
                          size="sm"
                          onClick={() => runModule(module.id)}
                          disabled={runningModules.has(module.id)}
                          className="bg-terminal-green hover:bg-terminal-green/80 text-terminal-bg font-mono"
                        >
                          {runningModules.has(module.id) ? (
                            <>
                              <RotateCw className="h-4 w-4 mr-2 animate-spin" />
                              Running...
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Run Code
                            </>
                          )}
                        </Button>
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