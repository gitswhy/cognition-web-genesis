import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { Search, Menu, ChevronRight, ChevronDown, Book, Terminal, Settings, Code, AlertTriangle, X, PanelLeftClose, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import DocsBackground from '@/components/background/DocsBackground';
import Header from '@/components/Header';

interface DocSection {
  id: string;
  title: string;
  icon: React.ElementType;
  subsections: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
}

const CodeBlock = ({ children, language = 'bash', ...props }: { children: string; language?: string }) => {

  return (
    <div className="relative group">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          background: 'hsl(var(--muted))',
          border: '1px solid hsl(var(--border))',
          borderRadius: '8px',
          fontSize: '14px',
          margin: '16px 0',
          overflow: 'auto'
        }}
        {...props}
      >
        {children}
      </SyntaxHighlighter>
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => navigator.clipboard.writeText(children)}
      >
        Copy
      </Button>
    </div>
  );
};

const sections: DocSection[] = [
  {
    id: 'installation',
    title: 'ReflexCore Installation Guide',
    icon: Book,
    subsections: [
      {
        id: 'prerequisites',
        title: 'Prerequisites',
        content: (
          <div className="space-y-4">
            <p className="text-muted-foreground">Before installing ReflexCore, ensure you have the following prerequisites:</p>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-2">Required</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Python 3.7+ and pip</li>
                    <li>Bash shell</li>
                    <li>Git version control</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-2">Optional</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>sudo privileges (for system-level operations)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      },
      {
        id: 'installation-steps',
        title: 'Installation Steps',
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Step 1 - Clone Repository</h4>
              <CodeBlock language="bash">
{`git clone https://github.com/gitswhy/reflexcore.git
cd reflexcore`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Step 2 - Install Dependencies</h4>
              <CodeBlock language="bash">
{`pip install click cryptography pyyaml`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Step 3 - Make Scripts Executable</h4>
              <CodeBlock language="bash">
{`chmod +x scripts/*.sh modules/*.sh gitswhy_vault_manager.py cli/gitswhy_cli.py`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Step 4 - (Optional) Shell Startup</h4>
              <p className="text-muted-foreground mb-2">Add ReflexCore to your shell startup for convenient access:</p>
              <CodeBlock language="bash">
{`# For bash users
echo "source /path/to/reflexcore/scripts/bashrc" >> ~/.bashrc

# For zsh users  
echo "source /path/to/reflexcore/scripts/bashrc" >> ~/.zshrc`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Step 5 - Initialize</h4>
              <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py init`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Step 6 - Test Suite</h4>
              <CodeBlock language="bash">
{`sudo ./test_all.sh`}
              </CodeBlock>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'cli-reference',
    title: 'CLI Reference',
    icon: Terminal,
    subsections: [
      {
        id: 'real-commands',
        title: 'Real Commands',
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground mb-4">
              All commands use the format: <code className="bg-muted px-1 py-0.5 rounded">python3 cli/gitswhy_cli.py [command] [options]</code>
            </p>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">init</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Initialize ReflexCore background services</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py init`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">mirror</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Start keystroke monitoring</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py mirror --timeout 60`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">flush</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Initiate quantum system flush</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py flush --test`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">clean</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Perform system cleanup</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py clean --aggressive`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">overclock</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Apply/restore overclocking</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py overclock --restore`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">syncvault</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Sync events to encrypted vault</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py syncvault --force`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">showvault</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Display vault info</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py showvault --decrypt --format summary`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">fractal</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Basic fractal context splitting</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py fractal`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">emotion</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Basic emotion state mapping</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py emotion`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">status</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Show system status</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py status`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">stop</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Stop services</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py stop --service <name>`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">restart</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Restart services</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py restart`}
                  </CodeBlock>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">troubleshooting</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Show troubleshooting tips</p>
                  <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py troubleshooting`}
                  </CodeBlock>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      },
      {
        id: 'usage-examples',
        title: 'Usage Examples',
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Monitor keystrokes</h4>
              <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py mirror`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Flush system entropy</h4>
              <CodeBlock language="bash">
{`sudo python3 cli/gitswhy_cli.py flush`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Show vault summary</h4>
              <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py showvault --decrypt --format summary`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Check system status</h4>
              <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py status`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Run full test suite</h4>
              <CodeBlock language="bash">
{`sudo ./test_all.sh`}
              </CodeBlock>
            </div>
          </div>
        )
      },
      {
        id: 'global-flags',
        title: 'Global Flags',
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--verbose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Enable verbose output</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--config, -c</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Path to configuration file</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--version</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Show version information</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--help</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Show help for commands</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--force</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Force operations (for init, syncvault)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--timeout</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Set timeout for monitoring operations</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--decrypt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Decrypt vault contents</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--format</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Output format (json, summary, events)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    icon: AlertTriangle,
    subsections: [
      {
        id: 'common-issues',
        title: 'Common Issues',
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Permission denied</h4>
              <p className="text-muted-foreground mb-2">Ensure scripts are executable and run with sudo if needed</p>
              <CodeBlock language="bash">
{`chmod +x scripts/*.sh modules/*.sh gitswhy_vault_manager.py cli/gitswhy_cli.py
sudo python3 cli/gitswhy_cli.py flush`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Missing dependencies</h4>
              <p className="text-muted-foreground mb-2">Re-run pip install for required dependencies</p>
              <CodeBlock language="bash">
{`pip install click cryptography pyyaml`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Vault not created</h4>
              <p className="text-muted-foreground mb-2">Run syncvault to create vault</p>
              <CodeBlock language="bash">
{`python3 cli/gitswhy_cli.py syncvault`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Logs</h4>
              <p className="text-muted-foreground mb-2">Check logs and vault files for debugging</p>
              <CodeBlock language="bash">
{`# Check user logs
ls ~/.gitswhy/

# Check root logs (if using sudo)
sudo ls /root/.gitswhy/`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Config errors</h4>
              <p className="text-muted-foreground mb-2">Check configuration file and ensure required fields are present</p>
              <CodeBlock language="bash">
{`cat config/gitswhy_config.yaml`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Test commands</h4>
              <p className="text-muted-foreground mb-2">Run tests to verify installation</p>
              <CodeBlock language="bash">
{`# Python tests
python3 testall.py

# Full system tests
sudo ./test_all.sh`}
              </CodeBlock>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'configuration',
    title: 'Configuration',
    icon: Settings,
    subsections: [
      {
        id: 'config-files',
        title: 'Configuration Files',
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Main Configuration</h4>
              <p className="text-muted-foreground mb-4">
                The main configuration file is located at <code className="bg-muted px-1 py-0.5 rounded">config/gitswhy_config.yaml</code>
              </p>
              
              <Card>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Fractal domains configuration:</strong> Advanced context splitting settings</p>
                    <p className="text-sm"><strong>Analytics config:</strong> Note that --config is only required for encrypted vault operations</p>
                    <p className="text-sm"><strong>Version info:</strong> All major scripts support --version for quick checks</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="font-semibold mb-2">GitHub Repository</h4>
              <p className="text-muted-foreground mb-4">
                For complete documentation and source code, visit the official repository:
              </p>
              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">GitHub</Badge>
                    <a 
                      href="https://github.com/gitswhy/reflexcore" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://github.com/gitswhy/reflexcore
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      }
    ]
  }
];

export default function Docs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['installation']));
  const location = useLocation();

  const currentSection = searchParams.get('section') || 'installation';
  const currentSubsection = searchParams.get('subsection') || 'prerequisites';

  useEffect(() => {
    // Auto-expand current section
    setExpandedSections(prev => new Set([...prev, currentSection]));
  }, [currentSection]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const getCurrentContent = () => {
    const section = sections.find(s => s.id === currentSection);
    if (!section) return null;
    
    const subsection = section.subsections.find(sub => sub.id === currentSubsection);
    return subsection ? subsection.content : section.subsections[0]?.content;
  };

  const getCurrentTitle = () => {
    const section = sections.find(s => s.id === currentSection);
    if (!section) return 'Documentation';
    
    const subsection = section.subsections.find(sub => sub.id === currentSubsection);
    return subsection ? subsection.title : section.subsections[0]?.title;
  };

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.subsections.some(sub => 
      sub.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      <DocsBackground />
      <Header />
      
      <div className="min-h-screen pt-16">
        <div className="flex h-screen">
          {/* Desktop Sidebar */}
          <div className={`hidden lg:block transition-all duration-300 ${sidebarOpen ? 'w-80' : 'w-16'} border-r border-border bg-background/80 backdrop-blur-sm`}>
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between">
                {sidebarOpen && (
                  <h2 className="text-lg font-semibold">Documentation</h2>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="shrink-0"
                >
                  {sidebarOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeft className="h-4 w-4" />}
                </Button>
              </div>
              
              {sidebarOpen && (
                <div className="mt-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search docs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              )}
            </div>
            
            {sidebarOpen && (
              <div className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-140px)]">
                {filteredSections.map((section) => (
                  <Collapsible
                    key={section.id}
                    open={expandedSections.has(section.id)}
                    onOpenChange={() => toggleSection(section.id)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors">
                        <div className="flex items-center gap-2">
                          <section.icon className="h-4 w-4" />
                          <span className="text-sm font-medium">{section.title}</span>
                        </div>
                        {expandedSections.has(section.id) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1 ml-6">
                      {section.subsections.map((subsection) => (
                        <Button
                          key={subsection.id}
                          variant={currentSection === section.id && currentSubsection === subsection.id ? "secondary" : "ghost"}
                          className="w-full justify-start text-sm h-8"
                          onClick={() => {
                            setSearchParams({ section: section.id, subsection: subsection.id });
                            setMobileSidebarOpen(false);
                          }}
                        >
                          {subsection.title}
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Sidebar */}
          {mobileSidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
              <div className="fixed inset-y-0 left-0 w-80 bg-background border-r border-border">
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Documentation</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setMobileSidebarOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="mt-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search docs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-140px)]">
                  {filteredSections.map((section) => (
                    <Collapsible
                      key={section.id}
                      open={expandedSections.has(section.id)}
                      onOpenChange={() => toggleSection(section.id)}
                    >
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors">
                          <div className="flex items-center gap-2">
                            <section.icon className="h-4 w-4" />
                            <span className="text-sm font-medium">{section.title}</span>
                          </div>
                          {expandedSections.has(section.id) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 ml-6">
                        {section.subsections.map((subsection) => (
                          <Button
                            key={subsection.id}
                            variant={currentSection === section.id && currentSubsection === subsection.id ? "secondary" : "ghost"}
                            className="w-full justify-start text-sm h-8"
                            onClick={() => {
                              setSearchParams({ section: section.id, subsection: subsection.id });
                              setMobileSidebarOpen(false);
                            }}
                          >
                            {subsection.title}
                          </Button>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto p-6 lg:p-8">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setMobileSidebarOpen(true)}
                  >
                    <Menu className="h-4 w-4 mr-2" />
                    Menu
                  </Button>
                </div>
                <h1 className="text-3xl font-bold">{getCurrentTitle()}</h1>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                {getCurrentContent()}
              </div>
            </div>
          </div>

          {/* Floating sidebar toggle for desktop */}
          {!sidebarOpen && (
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:flex fixed top-20 left-4 z-40 shadow-lg"
              onClick={() => setSidebarOpen(true)}
            >
              <PanelLeft className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "ReflexCore Documentation",
            "description": "Complete documentation for ReflexCore installation, CLI commands, and troubleshooting",
            "author": {
              "@type": "Organization",
              "name": "Gitswhy"
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
          })
        }}
      />
    </>
  );
}