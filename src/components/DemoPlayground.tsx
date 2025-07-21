import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Terminal, Lock, Zap } from "lucide-react";

const DemoPlayground = () => {
  const [activeTab, setActiveTab] = useState<"free" | "pro">("free");
  const [selectedCommand, setSelectedCommand] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const freeCommands = [
    {
      command: "gitswhy scan",
      description: "Basic security and vulnerability scanning",
      output: [
        "🔍 Scanning codebase...",
        "✓ Found 0 critical vulnerabilities",
        "⚠ 3 potential improvements suggested",
        "📊 Security score: 85/100"
      ]
    },
    {
      command: "gitswhy deploy --dry-run",
      description: "Simulate deployment with basic checks",
      output: [
        "🚀 Simulating deployment...",
        "✓ Build passed",
        "✓ Tests passed (47/47)",
        "ℹ Ready for deployment"
      ]
    },
    {
      command: "gitswhy analyze",
      description: "Code quality and pattern analysis",
      output: [
        "🧠 Analyzing code patterns...",
        "✓ Code quality: Good",
        "📈 Performance: +12% improvement possible",
        "🔧 3 optimization suggestions available"
      ]
    }
  ];

  const proCommands = [
    {
      command: "gitswhy cognition --deep-scan",
      description: "Advanced AI-powered cognition analysis",
      output: [
        "🧠 Deep cognition analysis active...",
        "✓ Intent prediction: 94% accuracy",
        "🔮 Predicting 2 potential issues",
        "🛡️ Auto-generating preventive patches",
        "✨ Team pattern optimization: +23% efficiency"
      ]
    },
    {
      command: "gitswhy heal --auto-patch",
      description: "Automatic self-healing with live patching",
      output: [
        "🔧 Self-healing engine activated...",
        "✓ Detected memory leak in user.service.ts",
        "🛠️ Auto-generated patch",
        "✅ Applied fix without downtime",
        "📊 System health: 100%"
      ]
    },
    {
      command: "gitswhy vault --sync-team",
      description: "Team intelligence synchronization",
      output: [
        "🗄️ Syncing with Intent Vault...",
        "✓ 127 team patterns learned",
        "🤝 Cross-team insights available",
        "📈 Productivity boost: +31%",
        "🎯 5 optimization opportunities identified"
      ]
    }
  ];

  const commands = activeTab === "free" ? freeCommands : proCommands;

  const runCommand = async () => {
    setIsRunning(true);
    // Simulate command execution
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRunning(false);
  };

  return (
    <section className="py-20 bg-terminal-surface/30">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Interactive <span className="text-terminal-green">Demo</span> Playground
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Experience the power of cognition-native commands. Try basic commands for free or explore Pro features.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Free/Pro Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-terminal-surface border border-terminal-green/20 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab("free")}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === "free"
                    ? "bg-terminal-green/20 text-terminal-green"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Free Core
              </button>
              <button
                onClick={() => setActiveTab("pro")}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === "pro"
                    ? "bg-terminal-blue/20 text-terminal-blue"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Pro Edition
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Command List */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Terminal className="h-5 w-5 mr-2 text-terminal-green" />
                Available Commands
                {activeTab === "pro" && (
                  <Lock className="h-4 w-4 ml-2 text-terminal-blue" />
                )}
              </h3>
              
              {commands.map((cmd, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCommand(index)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedCommand === index
                      ? activeTab === "pro"
                        ? "border-terminal-blue/40 bg-terminal-blue/10"
                        : "border-terminal-green/40 bg-terminal-green/10"
                      : "border-terminal-green/20 bg-terminal-surface/50 hover:border-terminal-green/30"
                  }`}
                >
                  <div className="font-mono text-sm font-medium text-terminal-green mb-2">
                    {cmd.command}
                  </div>
                  <div className="text-foreground/70 text-sm">
                    {cmd.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Output */}
            <div className="bg-terminal-surface border border-terminal-green/20 rounded-lg overflow-hidden code-matrix shadow-xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between bg-terminal-bg/50 px-4 py-3 border-b border-terminal-green/20">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-foreground/60 font-mono ml-4">demo@gitswhy:~</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-terminal-green" />
                  <span className="text-xs text-terminal-green font-mono">Ready</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm min-h-[300px]">
                <div className="text-terminal-green mb-4">
                  $ {commands[selectedCommand].command}
                </div>
                
                {!isRunning ? (
                  <div className="space-y-2">
                    {commands[selectedCommand].output.map((line, index) => (
                      <div key={index} className="text-foreground/80 animate-fade-in">
                        {line}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-foreground/60">
                    <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
                    <span>Executing command...</span>
                  </div>
                )}

                <div className="mt-8">
                  <Button
                    onClick={runCommand}
                    disabled={isRunning}
                    variant={activeTab === "pro" ? "terminal-blue" : "terminal"}
                    size="sm"
                  >
                    <Play className="h-4 w-4" />
                    {isRunning ? "Running..." : "Run Command"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="terminal" size="lg">
                Try Free Commands
              </Button>
              <Button variant="terminal-blue" size="lg">
                Unlock Pro Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPlayground;