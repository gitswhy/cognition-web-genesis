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
    id: 'quick-start',
    title: 'Quick Start',
    icon: Book,
    subsections: [
      {
        id: 'installation',
        title: 'Installation',
        content: (
          <div className="space-y-4">
            <p className="text-muted-foreground">Get started with Gitswhy OS in minutes.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">1. Install Core</h4>
                <CodeBlock language="bash">
{`# Using npm
npm install -g @gitswhy/core

# Using yarn
yarn global add @gitswhy/core

# Using brew
brew install gitswhy/tap/core`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Initialize Repository</h4>
                <CodeBlock language="bash">
{`cd your-project
gitswhy init

# Configure basic settings
gitswhy config set team.name "Your Team"`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. First Scan</h4>
                <CodeBlock language="bash">
{`# Run initial scan
gitswhy scan

# View results
gitswhy report --format web`}
                </CodeBlock>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'configuration',
        title: 'Basic Configuration',
        content: (
          <div className="space-y-4">
            <p className="text-muted-foreground">Configure Gitswhy OS for your workflow.</p>
            
            <CodeBlock language="yaml">
{`# .gitswhy.yml
version: "2.0"
team:
  name: "Development Team"
  timezone: "UTC"

scanning:
  auto_scan: true
  include_patterns:
    - "*.js"
    - "*.ts"
    - "*.py"
    - "*.go"
  exclude_patterns:
    - "node_modules/**"
    - "vendor/**"

policies:
  security:
    enabled: true
    severity: "medium"
  performance:
    enabled: true
    thresholds:
      response_time: 500
  reliability:
    enabled: true
    coverage_threshold: 80`}
            </CodeBlock>
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
        id: 'commands',
        title: 'Commands',
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Core Commands</h4>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">gitswhy init</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Initialize Gitswhy OS in a repository</p>
                    <CodeBlock language="bash">
{`gitswhy init [options]

Options:
  --template <name>    Use predefined template
  --team <name>        Set team name
  --no-hooks          Skip git hooks installation`}
                    </CodeBlock>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">gitswhy scan</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Run code analysis and scanning</p>
                    <CodeBlock language="bash">
{`gitswhy scan [options]

Options:
  --type <type>       Scan type: full, quick, security
  --format <format>   Output format: json, yaml, web
  --output <file>     Output file path
  --watch            Watch for changes`}
                    </CodeBlock>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Configuration Commands</h4>
              <CodeBlock language="bash">
{`# View configuration
gitswhy config list

# Set configuration value
gitswhy config set <key> <value>

# Get configuration value
gitswhy config get <key>

# Reset to defaults
gitswhy config reset`}
              </CodeBlock>
            </div>
          </div>
        )
      },
      {
        id: 'flags',
        title: 'Global Flags',
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--verbose, -v</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Enable verbose logging output</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--quiet, -q</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Suppress non-error output</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--config</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Specify config file path</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">--no-color</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Disable colored output</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: 'config-policies',
    title: 'Config & Policies',
    icon: Settings,
    subsections: [
      {
        id: 'configuration-files',
        title: 'Configuration Files',
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Main Configuration</h4>
              <p className="text-muted-foreground mb-4">The primary configuration file is <code className="bg-muted px-1 py-0.5 rounded">.gitswhy.yml</code></p>
              
              <CodeBlock language="yaml">
{`# .gitswhy.yml - Main configuration
version: "2.0"

# Team settings
team:
  name: "Development Team"
  timezone: "UTC"
  notification_channels:
    - slack: "#dev-alerts"
    - email: "dev-team@company.com"

# Repository settings
repository:
  main_branch: "main"
  protected_branches:
    - "main"
    - "develop"
    - "release/*"

# Scanning configuration
scanning:
  auto_scan: true
  schedule: "0 */6 * * *"  # Every 6 hours
  include_patterns:
    - "src/**/*.{js,ts,jsx,tsx}"
    - "lib/**/*.py"
    - "cmd/**/*.go"
  exclude_patterns:
    - "node_modules/**"
    - "vendor/**"
    - "dist/**"
    - "build/**"`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Policy Configuration</h4>
              <CodeBlock language="yaml">
{`# Security policies
policies:
  security:
    enabled: true
    severity: "medium"
    rules:
      - no_hardcoded_secrets
      - secure_dependencies
      - input_validation
    
  # Performance policies  
  performance:
    enabled: true
    thresholds:
      response_time: 500
      memory_usage: "512MB"
      cpu_usage: 80
    
  # Reliability policies
  reliability:
    enabled: true
    coverage_threshold: 80
    test_requirements:
      unit_tests: true
      integration_tests: true`}
              </CodeBlock>
            </div>
          </div>
        )
      },
      {
        id: 'policy-templates',
        title: 'Policy Templates',
        content: (
          <div className="space-y-4">
            <p className="text-muted-foreground">Pre-configured policy templates for common use cases.</p>
            
            <Tabs defaultValue="startup" className="w-full">
              <TabsList>
                <TabsTrigger value="startup">Startup</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
                <TabsTrigger value="opensource">Open Source</TabsTrigger>
              </TabsList>
              
              <TabsContent value="startup">
                <CodeBlock language="yaml">
{`# Startup template - Fast iteration focused
policies:
  security:
    enabled: true
    severity: "low"
  performance:
    enabled: false
  reliability:
    enabled: true
    coverage_threshold: 60`}
                </CodeBlock>
              </TabsContent>
              
              <TabsContent value="enterprise">
                <CodeBlock language="yaml">
{`# Enterprise template - Compliance focused
policies:
  security:
    enabled: true
    severity: "high"
    compliance:
      - SOC2
      - GDPR
  performance:
    enabled: true
    strict_mode: true
  reliability:
    enabled: true
    coverage_threshold: 90`}
                </CodeBlock>
              </TabsContent>
              
              <TabsContent value="opensource">
                <CodeBlock language="yaml">
{`# Open source template - Community focused
policies:
  security:
    enabled: true
    severity: "medium"
    public_scanning: true
  performance:
    enabled: true
  reliability:
    enabled: true
    coverage_threshold: 75`}
                </CodeBlock>
              </TabsContent>
            </Tabs>
          </div>
        )
      }
    ]
  },
  {
    id: 'api',
    title: 'API Reference',
    icon: Code,
    subsections: [
      {
        id: 'rest-api',
        title: 'REST API',
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Authentication</h4>
              <p className="text-muted-foreground mb-4">All API requests require authentication using API tokens.</p>
              
              <CodeBlock language="bash">
{`# Get API token
curl -X POST https://api.gitswhy.com/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{"username": "your-username", "password": "your-password"}'

# Use token in requests
curl -H "Authorization: Bearer <your-token>" \\
  https://api.gitswhy.com/v1/scans`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Endpoints</h4>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">GET</Badge>
                      <code className="text-sm">/v1/scans</code>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">List all scans for the authenticated user</p>
                    <CodeBlock language="json">
{`{
  "scans": [
    {
      "id": "scan_123",
      "status": "completed",
      "created_at": "2024-01-15T10:30:00Z",
      "repository": "owner/repo",
      "results": {
        "security": 2,
        "performance": 1,
        "reliability": 0
      }
    }
  ]
}`}
                    </CodeBlock>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">POST</Badge>
                      <code className="text-sm">/v1/scans</code>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Trigger a new scan</p>
                    <CodeBlock language="json">
{`{
  "repository": "owner/repo",
  "branch": "main",
  "scan_type": "full",
  "policies": ["security", "performance"]
}`}
                    </CodeBlock>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'webhooks',
        title: 'Webhooks',
        content: (
          <div className="space-y-4">
            <p className="text-muted-foreground">Configure webhooks to receive real-time notifications.</p>
            
            <div>
              <h4 className="font-semibold mb-2">Setup</h4>
              <CodeBlock language="bash">
{`# Register webhook
curl -X POST https://api.gitswhy.com/v1/webhooks \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-app.com/webhooks/gitswhy",
    "events": ["scan.completed", "security.alert"],
    "secret": "your-webhook-secret"
  }'`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Payload Example</h4>
              <CodeBlock language="json">
{`{
  "event": "scan.completed",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "scan_id": "scan_123",
    "repository": "owner/repo",
    "status": "completed",
    "results": {
      "security": {
        "issues": 2,
        "severity": "medium"
      },
      "performance": {
        "issues": 1,
        "severity": "low"
      }
    }
  }
}`}
              </CodeBlock>
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
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Installation Issues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Permission denied errors</h5>
                  <CodeBlock language="bash">
{`# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules

# Or use nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`}
                  </CodeBlock>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Command not found</h5>
                  <CodeBlock language="bash">
{`# Check if installed globally
npm list -g @gitswhy/core

# Add to PATH
echo 'export PATH="$PATH:$(npm prefix -g)/bin"' >> ~/.bashrc
source ~/.bashrc`}
                  </CodeBlock>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scanning Issues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Scan timeouts</h5>
                  <CodeBlock language="bash">
{`# Increase timeout
gitswhy config set scanning.timeout 300

# Use incremental scanning
gitswhy scan --incremental`}
                  </CodeBlock>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Memory issues</h5>
                  <CodeBlock language="bash">
{`# Reduce scan scope
gitswhy config set scanning.max_files 1000

# Enable memory optimization
gitswhy config set scanning.memory_optimization true`}
                  </CodeBlock>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      },
      {
        id: 'debugging',
        title: 'Debugging',
        content: (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Enable Debug Mode</h4>
              <CodeBlock language="bash">
{`# Enable verbose logging
export GITSWHY_DEBUG=true
gitswhy scan --verbose

# Or use debug flag
gitswhy --debug scan`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Log Locations</h4>
              <CodeBlock language="bash">
{`# System logs
tail -f ~/.gitswhy/logs/gitswhy.log

# Scan logs
tail -f ~/.gitswhy/logs/scan-$(date +%Y%m%d).log

# Error logs
tail -f ~/.gitswhy/logs/error.log`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Support Information</h4>
              <CodeBlock language="bash">
{`# Generate support bundle
gitswhy support bundle

# System information
gitswhy --version
gitswhy config doctor`}
              </CodeBlock>
            </div>
          </div>
        )
      }
    ]
  }
];

export default function Docs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVersion, setSelectedVersion] = useState('v2.0');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar starts closed
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Desktop collapse state
  const [isDesktop, setIsDesktop] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['quick-start']);

  const currentSection = searchParams.get('section') || 'quick-start';
  const currentSubsection = searchParams.get('subsection') || 'installation';

  useEffect(() => {
    // Force dark mode on docs page
    document.documentElement.classList.add('dark');

    // Track window size for responsive behavior
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const navigateToSection = (sectionId: string, subsectionId?: string) => {
    const params = new URLSearchParams();
    params.set('section', sectionId);
    if (subsectionId) {
      params.set('subsection', subsectionId);
    }
    setSearchParams(params);
  };

  const getCurrentContent = () => {
    const section = sections.find(s => s.id === currentSection);
    if (!section) return null;
    
    const subsection = section.subsections.find(s => s.id === currentSubsection);
    return subsection || section.subsections[0];
  };

  const currentContent = getCurrentContent();
  const currentSectionData = sections.find(s => s.id === currentSection);

  return (
    <div className="min-h-screen">
      <DocsBackground />
      <Header />
      
      {/* Docs Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Badge variant="outline">Documentation</Badge>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10"
              />
            </div>

            <select
              value={selectedVersion}
              onChange={(e) => setSelectedVersion(e.target.value)}
              className="bg-background border border-border rounded-md px-3 py-1 text-sm"
            >
              <option value="v2.0">v2.0 (Latest)</option>
              <option value="v1.9">v1.9</option>
              <option value="v1.8">v1.8</option>
            </select>
          </div>
        </div>
      </header>

      {/* Floating Toggle Button - Always Visible */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          if (isDesktop) {
            setIsSidebarCollapsed(!isSidebarCollapsed);
          } else {
            setIsSidebarOpen(!isSidebarOpen);
          }
        }}
        className="fixed top-24 left-4 z-50 bg-background/95 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        {isDesktop ? (
          isSidebarCollapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />
        ) : (
          isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />
        )}
      </Button>

      <div className="flex">
        {/* Fixed Sidebar for Desktop */}
        <aside 
          className={`hidden lg:block fixed left-0 h-screen border-r bg-background z-30 transition-all duration-300 ${
            isSidebarCollapsed ? 'w-16' : 'w-64'
          }`} 
          style={{ top: '128px', height: 'calc(100vh - 128px)' }}
        >
          <div className="h-full overflow-y-auto py-6 px-4">
            {!isSidebarCollapsed && (
              <div className="space-y-2">
                {sections.map((section) => (
                  <Collapsible
                    key={section.id}
                    open={expandedSections.includes(section.id)}
                    onOpenChange={() => toggleSection(section.id)}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-muted">
                      <div className="flex items-center gap-2">
                        <section.icon className="h-4 w-4" />
                        {section.title}
                      </div>
                      {expandedSections.includes(section.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="pl-6 space-y-1">
                      {section.subsections.map((subsection) => (
                        <button
                          key={subsection.id}
                          onClick={() => navigateToSection(section.id, subsection.id)}
                          className={`block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-muted ${
                            currentSection === section.id && currentSubsection === subsection.id
                              ? 'bg-muted text-primary font-medium'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {subsection.title}
                        </button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            )}
            
            {/* Collapsed state - show only icons */}
            {isSidebarCollapsed && (
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => navigateToSection(section.id, section.subsections[0].id)}
                    className={`w-full p-3 rounded-lg hover:bg-muted flex items-center justify-center ${
                      currentSection === section.id ? 'bg-muted text-primary' : 'text-muted-foreground'
                    }`}
                    title={section.title}
                  >
                    <section.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <aside className="fixed left-0 top-0 z-50 w-64 h-full border-r bg-background lg:hidden" style={{ top: '128px', height: 'calc(100vh - 128px)' }}>
              <div className="h-full overflow-y-auto py-6 px-4">
                <div className="space-y-2">
                  {sections.map((section) => (
                    <Collapsible
                      key={section.id}
                      open={expandedSections.includes(section.id)}
                      onOpenChange={() => toggleSection(section.id)}
                    >
                      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-muted">
                        <div className="flex items-center gap-2">
                          <section.icon className="h-4 w-4" />
                          {section.title}
                        </div>
                        {expandedSections.includes(section.id) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="pl-6 space-y-1">
                        {section.subsections.map((subsection) => (
                          <button
                            key={subsection.id}
                            onClick={() => {
                              navigateToSection(section.id, subsection.id);
                              setIsSidebarOpen(false);
                            }}
                            className={`block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-muted ${
                              currentSection === section.id && currentSubsection === subsection.id
                                ? 'bg-muted text-primary font-medium'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {subsection.title}
                          </button>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </div>
            </aside>
          </>
        )}

        {/* Main Content */}
        <main className={`flex-1 w-full transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'}`}>
          <div className="container mx-auto max-w-4xl px-4 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/docs" className="hover:text-foreground">Docs</Link>
              <ChevronRight className="h-4 w-4" />
              <span>{currentSectionData?.title}</span>
              {currentContent && (
                <>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-foreground">{currentContent.title}</span>
                </>
              )}
            </nav>

            {/* Content */}
            {currentContent && (
              <article className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">{currentContent.title}</h1>
                </div>
                
                <div className="not-prose">
                  {currentContent.content}
                </div>
              </article>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t">
              {/* Previous */}
              <div className="flex-1">
                {/* Add previous navigation logic here */}
              </div>

              {/* Next */}
              <div className="flex-1 text-right">
                {/* Add next navigation logic here */}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Gitswhy OS Documentation",
            "description": "Complete documentation for Gitswhy OS - code quality and security scanning platform",
            "author": {
              "@type": "Organization",
              "name": "Gitswhy"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Gitswhy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gitswhy.com/logo.png"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://gitswhy.com/docs"
            }
          })
        }}
      />
    </div>
  );
}