import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Terminal, Copy } from "lucide-react";

const DemoPlayground = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"free" | "pro">("free");
  const [selectedCommand, setSelectedCommand] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const allCommands = [
    {
      command: "gitswhy init",
      description: "Initialize cognition-native DevSecOps",
      isPro: false,
      output: [
        "🚀 Initializing Gitswhy OS...",
        "✓ Cognition engine activated",
        "✓ Security protocols established", 
        "✓ DevSecOps pipeline configured",
        "🎯 Ready for intelligent operations"
      ]
    },
    {
      command: "gitswhy analyze",
      description: "Analyze codebase for patterns and risks",
      isPro: true,
      output: [
        "🧠 Deep cognition analysis active...",
        "✓ Intent prediction: 94% accuracy",
        "🔮 Predicting 2 potential issues",
        "🛡️ Auto-generating preventive patches",
        "✨ Advanced insights unlocked"
      ]
    },
    {
      command: "gitswhy heal",
      description: "Auto-heal detected issues", 
      isPro: true,
      output: [
        "🔧 Self-healing engine activated...",
        "✓ Detected memory leak in user.service.ts",
        "🛠️ Auto-generated patch",
        "✅ Applied fix without downtime",
        "📊 System health: 100%"
      ]
    }
  ];

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
  };

  const runCommand = async (index: number) => {
    const cmd = allCommands[index];
    if (activeTab === "free" && cmd.isPro) return; // Can't run pro commands in free mode
    
    setSelectedCommand(index);
    setIsRunning(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRunning(false);
  };

  const isCommandLocked = (cmd: any) => {
    return activeTab === "free" && cmd.isPro;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground break-words">
            Try <span className="text-terminal-green">Gitswhy OS</span> Interactive Demo
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto break-words px-4">
            Experience the power of cognition-native DevSecOps
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Free/Pro Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-terminal-surface border border-terminal-green/20 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab("free")}
                className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === "free"
                    ? "bg-terminal-green text-terminal-bg"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Free Core
              </button>
              <button
                onClick={() => setActiveTab("pro")}
                className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === "pro"
                    ? "bg-terminal-blue text-terminal-bg"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                <span className="flex items-center">
                  <span className="mr-2">⚡</span>
                  Pro Edition
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Command List */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 flex items-center break-words">
                <Terminal className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-terminal-green flex-shrink-0" />
                <span>Available Commands</span>
              </h3>
              
              {allCommands.map((cmd, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-lg border transition-all duration-200 ${
                    selectedCommand === index
                      ? activeTab === "pro"
                        ? "border-terminal-blue/40 bg-terminal-blue/5"
                        : "border-terminal-green/40 bg-terminal-green/5"
                      : "border-terminal-green/20 bg-terminal-surface/50 hover:border-terminal-green/30"
                  } ${isCommandLocked(cmd) ? "opacity-60" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="font-mono text-sm font-medium text-terminal-green">
                          {cmd.command}
                        </span>
                        {cmd.isPro && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-terminal-blue/20 text-terminal-blue rounded font-medium">
                            PRO
                          </span>
                        )}
                      </div>
                      <div className="text-foreground/70 text-sm">
                        {cmd.description}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => copyCommand(cmd.command)}
                        className="p-1.5 sm:p-2 rounded-md hover:bg-terminal-green/10 transition-colors opacity-0 group-hover:opacity-100"
                        disabled={isCommandLocked(cmd)}
                      >
                        <Copy className="h-3 w-3 sm:h-4 sm:w-4 text-foreground/60" />
                      </button>
                      
                      <Button
                        onClick={() => runCommand(index)}
                        disabled={isCommandLocked(cmd) || isRunning}
                        size="sm"
                        variant={isCommandLocked(cmd) ? "outline" : (activeTab === "pro" ? "terminal-blue" : "terminal")}
                        className={`text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 ${isCommandLocked(cmd) ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1 flex-shrink-0" />
                        <span>Run</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Output */}
            <div className="bg-terminal-surface border border-terminal-green/20 rounded-lg overflow-hidden shadow-xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between bg-terminal-bg/50 px-4 py-3 border-b border-terminal-green/20">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-foreground/60 font-mono">gitswhy@demo:~</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${activeTab === "pro" ? "bg-terminal-blue" : "bg-terminal-green"}`}></div>
                  <span className={`text-xs font-mono ${activeTab === "pro" ? "text-terminal-blue" : "text-terminal-green"}`}>
                    {activeTab === "pro" ? "PRO" : "FREE"}
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm min-h-[300px]">
                <div className="text-terminal-green mb-2">
                  Welcome to Gitswhy OS Interactive Demo!
                </div>
                <div className="text-foreground/70 mb-6">
                  Select a command from the left to see it in action.
                </div>
                
                <div className="text-terminal-green mb-4">
                  $ {allCommands[selectedCommand].command}
                </div>
                
                {!isRunning ? (
                  <div className="space-y-2">
                    {allCommands[selectedCommand].output.map((line, index) => (
                      <div key={index} className="text-foreground/80 animate-fade-in">
                        {line}
                      </div>
                    ))}
                    <div className="mt-4 text-terminal-green">$</div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-foreground/60">
                    <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
                    <span>Running...</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="terminal" 
                size="lg"
                onClick={() => navigate('/open-core')}
                className="transition-all duration-300 hover:scale-105"
              >
                Try Free Commands
              </Button>
              <Button 
                variant="terminal-blue" 
                size="lg"
                onClick={() => navigate('/pro-edition')}
                className="transition-all duration-300 hover:scale-105"
              >
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