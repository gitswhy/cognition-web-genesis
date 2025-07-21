import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Filter,
  ExternalLink,
  Copy,
  CheckCircle,
  Code,
  Terminal,
  FileCode,
  Zap,
  Cloud,
  MessageSquare,
  Search
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface Integration {
  id: string;
  name: string;
  category: 'ide' | 'cicd' | 'cloud' | 'chat';
  description: string;
  logo: string;
  logoAlt: string;
  status: 'stable' | 'beta' | 'coming-soon';
  yamlConfig: string;
  cliInstall: string;
  docsUrl: string;
  features: string[];
  setupTime: string;
}

const Integrations = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
  const [copiedText, setCopiedText] = useState<string>('');
  const { toast } = useToast();

  const integrations: Integration[] = [
    {
      id: 'github',
      name: 'GitHub',
      category: 'cicd',
      description: 'Complete GitHub Actions integration with automatic security scanning and PR checks.',
      logo: '🐙',
      logoAlt: 'GitHub integration for Gitswhy OS DevSecOps platform',
      status: 'stable',
      yamlConfig: `name: Gitswhy Security Scan
on: [push, pull_request]
jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Gitswhy Scan
        uses: gitswhy/github-action@v1
        with:
          api-token: \${{ secrets.GITSWHY_TOKEN }}
          fail-on-high: true`,
      cliInstall: 'gitswhy integration add github --token $GITHUB_TOKEN',
      docsUrl: 'https://docs.gitswhy.io/integrations/github',
      features: ['Automated PR checks', 'Security scanning', 'Dependency monitoring'],
      setupTime: '2 minutes'
    },
    {
      id: 'gitlab',
      name: 'GitLab',
      category: 'cicd',
      description: 'GitLab CI/CD pipeline integration with merge request security validation.',
      logo: '🦊',
      logoAlt: 'GitLab CI/CD integration for Gitswhy OS security scanning',
      status: 'stable',
      yamlConfig: `gitswhy-scan:
  stage: security
  image: gitswhy/scanner:latest
  script:
    - gitswhy scan --format gitlab-sast
  artifacts:
    reports:
      sast: gitswhy-sast-report.json
  only:
    - merge_requests
    - main`,
      cliInstall: 'gitswhy integration add gitlab --url $GITLAB_URL',
      docsUrl: 'https://docs.gitswhy.io/integrations/gitlab',
      features: ['GitLab SAST integration', 'Merge request checks', 'Security dashboards'],
      setupTime: '3 minutes'
    },
    {
      id: 'vscode',
      name: 'VS Code',
      category: 'ide',
      description: 'Real-time security feedback directly in your VS Code editor with inline suggestions.',
      logo: '📝',
      logoAlt: 'Visual Studio Code extension for real-time Gitswhy OS security analysis',
      status: 'stable',
      yamlConfig: `{
  "gitswhy.enabled": true,
  "gitswhy.realTimeScanning": true,
  "gitswhy.showInlineHints": true,
  "gitswhy.autoFix": {
    "enabled": true,
    "confirmBeforeFix": true
  }
}`,
      cliInstall: 'code --install-extension gitswhy.gitswhy-vscode',
      docsUrl: 'https://docs.gitswhy.io/integrations/vscode',
      features: ['Real-time scanning', 'Inline security hints', 'Auto-fix suggestions'],
      setupTime: '1 minute'
    },
    {
      id: 'jetbrains',
      name: 'JetBrains IDEs',
      category: 'ide',
      description: 'Support for IntelliJ IDEA, PyCharm, WebStorm, and other JetBrains IDEs.',
      logo: '🧠',
      logoAlt: 'JetBrains IDE plugin for Gitswhy OS intelligent code analysis',
      status: 'stable',
      yamlConfig: `<component name="Gitswhy">
  <option name="enabled" value="true" />
  <option name="realTimeAnalysis" value="true" />
  <option name="showSecurityAnnotations" value="true" />
  <option name="autoSuggestFixes" value="true" />
</component>`,
      cliInstall: 'gitswhy ide install jetbrains',
      docsUrl: 'https://docs.gitswhy.io/integrations/jetbrains',
      features: ['Code annotations', 'Security inspections', 'Smart suggestions'],
      setupTime: '2 minutes'
    },
    {
      id: 'aws',
      name: 'AWS',
      category: 'cloud',
      description: 'Deploy Gitswhy OS on AWS with CloudFormation templates and Lambda functions.',
      logo: '☁️',
      logoAlt: 'Amazon Web Services cloud deployment for Gitswhy OS enterprise',
      status: 'stable',
      yamlConfig: `AWSTemplateFormatVersion: '2010-09-09'
Resources:
  GitwshyScanner:
    Type: AWS::Lambda::Function
    Properties:
      FunctionName: gitswhy-security-scanner
      Runtime: nodejs18.x
      Handler: index.handler
      Environment:
        Variables:
          GITSWHY_API_KEY: !Ref GitwhyApiKey`,
      cliInstall: 'aws cloudformation deploy --template-file gitswhy-aws.yml',
      docsUrl: 'https://docs.gitswhy.io/integrations/aws',
      features: ['CloudFormation templates', 'Lambda functions', 'S3 integration'],
      setupTime: '10 minutes'
    },
    {
      id: 'azure',
      name: 'Azure DevOps',
      category: 'cloud',
      description: 'Complete Azure DevOps integration with pipeline extensions and security gates.',
      logo: '🌀',
      logoAlt: 'Microsoft Azure DevOps integration for Gitswhy OS security pipelines',
      status: 'beta',
      yamlConfig: `trigger:
- main

pool:
  vmImage: ubuntu-latest

steps:
- task: gitswhy-security-scan@1
  inputs:
    scanType: 'full'
    failOnHigh: true
    reportFormat: 'sarif'
  displayName: 'Gitswhy Security Scan'`,
      cliInstall: 'az extension add --name gitswhy-devops',
      docsUrl: 'https://docs.gitswhy.io/integrations/azure',
      features: ['Pipeline extensions', 'Security gates', 'SARIF reports'],
      setupTime: '5 minutes'
    },
    {
      id: 'slack',
      name: 'Slack',
      category: 'chat',
      description: 'Get real-time security alerts and team notifications in your Slack channels.',
      logo: '💬',
      logoAlt: 'Slack integration for Gitswhy OS security notifications and team alerts',
      status: 'stable',
      yamlConfig: `notifications:
  slack:
    webhook_url: "https://hooks.slack.com/services/..."
    channels:
      - "#security-alerts"
      - "#dev-team"
    events:
      - high_severity_found
      - scan_completed
      - auto_fix_applied`,
      cliInstall: 'gitswhy integration add slack --webhook-url $SLACK_WEBHOOK',
      docsUrl: 'https://docs.gitswhy.io/integrations/slack',
      features: ['Real-time alerts', 'Custom channels', 'Rich notifications'],
      setupTime: '3 minutes'
    },
    {
      id: 'discord',
      name: 'Discord',
      category: 'chat',
      description: 'Security notifications and bot commands for Discord servers and communities.',
      logo: '🎮',
      logoAlt: 'Discord bot integration for Gitswhy OS developer community notifications',
      status: 'beta',
      yamlConfig: `discord:
  bot_token: "your_bot_token_here"
  guild_id: "your_server_id"
  channels:
    alerts: "security-alerts"
    status: "bot-status"
  commands:
    - "/gitswhy scan"
    - "/gitswhy status"`,
      cliInstall: 'gitswhy integration add discord --bot-token $DISCORD_BOT_TOKEN',
      docsUrl: 'https://docs.gitswhy.io/integrations/discord',
      features: ['Bot commands', 'Server notifications', 'Community features'],
      setupTime: '4 minutes'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Integrations', icon: Filter },
    { id: 'ide', name: 'IDE & Editors', icon: Code },
    { id: 'cicd', name: 'CI/CD', icon: Zap },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'chat', name: 'Chat & Notifications', icon: MessageSquare }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const copyToClipboard = async (text: string, type: 'yaml' | 'cli') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      toast({
        title: "Copied!",
        description: `${type === 'yaml' ? 'Configuration' : 'Command'} copied to clipboard`,
      });
      setTimeout(() => setCopiedText(''), 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-terminal-green/20 text-terminal-green border-terminal-green/30';
      case 'beta': return 'bg-terminal-blue/20 text-terminal-blue border-terminal-blue/30';
      case 'coming-soon': return 'bg-muted text-muted-foreground border-border';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-background to-terminal-surface/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,102,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="bg-terminal-green/20 text-terminal-green border-terminal-green/30 mb-6">
            100+ Integrations
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold font-mono mb-6">
            Connect <span className="text-terminal-green">Everything</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Seamlessly integrate Gitswhy OS with your existing development tools, 
            CI/CD pipelines, cloud platforms, and communication channels.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-terminal-surface border border-terminal-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-terminal-green/50 text-foreground placeholder-muted-foreground"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-terminal-surface/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <Button
                  key={category.id}
                  variant={isActive ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    isActive 
                      ? 'bg-terminal-green hover:bg-terminal-green/90 text-background' 
                      : 'border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <Dialog key={integration.id}>
                <DialogTrigger asChild>
                  <Card 
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-terminal-surface bg-gradient-to-br from-card to-terminal-surface/50 backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedIntegration(integration)}
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      {/* Logo */}
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {integration.logo}
                      </div>
                      
                      {/* Name and Status */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{integration.name}</h3>
                        <Badge variant="secondary" className={getStatusColor(integration.status)}>
                          {integration.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {integration.description}
                      </p>
                      
                      {/* Setup Time */}
                      <div className="flex items-center justify-center gap-2 text-xs text-terminal-green">
                        <Terminal className="w-3 h-3" />
                        <span>{integration.setupTime} setup</span>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-terminal-bg border-terminal-surface">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <span className="text-3xl">{integration.logo}</span>
                      <div>
                        <div className="flex items-center gap-3">
                          {integration.name}
                          <Badge variant="secondary" className={getStatusColor(integration.status)}>
                            {integration.status.replace('-', ' ')}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground font-normal mt-1">
                          {integration.description}
                        </p>
                      </div>
                    </DialogTitle>
                  </DialogHeader>

                  <Tabs defaultValue="config" className="mt-6">
                    <TabsList className="grid w-full grid-cols-3 bg-terminal-surface">
                      <TabsTrigger value="config">Configuration</TabsTrigger>
                      <TabsTrigger value="install">Installation</TabsTrigger>
                      <TabsTrigger value="features">Features</TabsTrigger>
                    </TabsList>

                    <TabsContent value="config" className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold flex items-center gap-2">
                            <FileCode className="w-5 h-5 text-terminal-green" />
                            Configuration File
                          </h4>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(integration.yamlConfig, 'yaml')}
                            className="border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10"
                          >
                            {copiedText === 'yaml' ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                            Copy
                          </Button>
                        </div>
                        <Card className="bg-terminal-surface border-terminal-surface">
                          <CardContent className="p-4">
                            <pre className="text-terminal-green font-mono text-sm whitespace-pre-wrap overflow-x-auto">
                              {integration.yamlConfig}
                            </pre>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="install" className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold flex items-center gap-2">
                            <Terminal className="w-5 h-5 text-terminal-blue" />
                            CLI Installation
                          </h4>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(integration.cliInstall, 'cli')}
                            className="border-terminal-blue/30 text-terminal-blue hover:bg-terminal-blue/10"
                          >
                            {copiedText === 'cli' ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                            Copy
                          </Button>
                        </div>
                        <Card className="bg-terminal-surface border-terminal-surface">
                          <CardContent className="p-4">
                            <pre className="text-terminal-blue font-mono text-sm whitespace-pre-wrap">
                              {integration.cliInstall}
                            </pre>
                          </CardContent>
                        </Card>
                        
                        <div className="pt-4">
                          <Button 
                            asChild
                            className="bg-terminal-blue hover:bg-terminal-blue/90 text-white"
                          >
                            <a 
                              href={integration.docsUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              View Complete Documentation
                            </a>
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="features" className="space-y-4">
                      <h4 className="text-lg font-semibold">Key Features</h4>
                      <div className="grid gap-3">
                        {integration.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-terminal-surface/50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-terminal-green flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Setup time: <span className="text-terminal-green font-medium">{integration.setupTime}</span>
                        </div>
                        <Button 
                          asChild
                          variant="outline"
                          className="border-terminal-green/30 text-terminal-green hover:bg-terminal-green/10"
                        >
                          <a 
                            href={integration.docsUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            See Documentation
                          </a>
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No integrations found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-terminal-green/20 via-terminal-green/10 to-terminal-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-mono mb-6">
            Don't See Your Tool?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're constantly adding new integrations. Request support for your favorite tools 
            or build custom integrations using our REST API.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-terminal-green hover:bg-terminal-green/90 text-background">
              Request Integration
            </Button>
            <Button variant="outline" size="lg" className="border-terminal-blue/30 text-terminal-blue hover:bg-terminal-blue/10">
              View API Docs
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Gitswhy OS Integrations",
            "description": "Connect Gitswhy OS with 100+ development tools, CI/CD pipelines, cloud platforms, and communication channels for seamless DevSecOps workflows.",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Cross-platform",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "softwareRequirements": "Git, Node.js",
            "integrationPlatforms": integrations.map(integration => ({
              "@type": "SoftwareApplication",
              "name": integration.name,
              "description": integration.description,
              "applicationCategory": integration.category
            }))
          })
        }}
      />
    </div>
  );
};

export default Integrations;