import React, { useState, useEffect } from 'react';
import { Github, MessageCircle, Users, Star, GitBranch, Heart, ExternalLink, Code, BookOpen, Zap, ArrowRight, Calendar, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import PageBackground from '@/components/background/PageBackground';
import Header from '@/components/Header';
import CommunityBackground from '@/components/background/CommunityBackground';
interface GitHubIssue {
  id: number;
  title: string;
  body: string;
  state: 'open' | 'closed';
  labels: string[];
  author: string;
  createdAt: string;
  comments: number;
  url: string;
}
interface CommunityStats {
  contributors: number;
  openIssues: number;
  discordMembers: number;
}
const mockIssues: GitHubIssue[] = [{
  id: 1234,
  title: 'Add support for Go module scanning',
  body: 'It would be great to have native support for Go modules in the security scanner...',
  state: 'open',
  labels: ['enhancement', 'go', 'help wanted'],
  author: 'developer123',
  createdAt: '2024-01-15T10:30:00Z',
  comments: 8,
  url: 'https://github.com/gitswhy/core/issues/1234'
}, {
  id: 1233,
  title: 'False positive in dependency scanner for npm packages',
  body: 'The scanner is flagging lodash as vulnerable when it\'s actually safe...',
  state: 'open',
  labels: ['bug', 'scanner', 'npm'],
  author: 'security_dev',
  createdAt: '2024-01-14T15:20:00Z',
  comments: 12,
  url: 'https://github.com/gitswhy/core/issues/1233'
}, {
  id: 1232,
  title: 'Integration with Jenkins CI/CD pipeline',
  body: 'Documentation and examples for Jenkins integration would be helpful...',
  state: 'open',
  labels: ['documentation', 'integration', 'jenkins'],
  author: 'devops_guru',
  createdAt: '2024-01-13T09:15:00Z',
  comments: 5,
  url: 'https://github.com/gitswhy/core/issues/1232'
}, {
  id: 1231,
  title: 'Memory optimization for large repositories',
  body: 'Scanner uses too much memory when scanning repositories with 100k+ files...',
  state: 'closed',
  labels: ['performance', 'memory', 'optimization'],
  author: 'perf_engineer',
  createdAt: '2024-01-10T14:45:00Z',
  comments: 15,
  url: 'https://github.com/gitswhy/core/issues/1231'
}];
const communityStats: CommunityStats = {
  contributors: 89,
  openIssues: 42,
  discordMembers: 3200
};
const contributionAreas = [{
  title: 'Core Engine',
  description: 'Help improve the scanning algorithms and detection capabilities',
  icon: Zap,
  skills: ['Rust', 'Go', 'Security'],
  difficulty: 'Advanced',
  issues: 8
}, {
  title: 'Documentation',
  description: 'Write guides, tutorials, and improve existing documentation',
  icon: BookOpen,
  skills: ['Writing', 'Markdown', 'Examples'],
  difficulty: 'Beginner',
  issues: 15
}, {
  title: 'Integrations',
  description: 'Build connectors for CI/CD tools and development platforms',
  icon: Code,
  skills: ['API', 'CI/CD', 'Webhooks'],
  difficulty: 'Intermediate',
  issues: 12
}, {
  title: 'Web Interface',
  description: 'Enhance the dashboard and reporting features',
  icon: Users,
  skills: ['React', 'TypeScript', 'Design'],
  difficulty: 'Intermediate',
  issues: 7
}];
const IssueCard = ({
  issue,
  index
}: {
  issue: GitHubIssue;
  index: number;
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };
  return <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in" style={{
    animationDelay: `${index * 100}ms`
  }}>
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {issue.state === 'open' ? <AlertCircle className="w-4 h-4 text-green-500" /> : <CheckCircle className="w-4 h-4 text-purple-500" />}
            <span className="text-sm text-muted-foreground">#{issue.id}</span>
          </div>
          <Badge variant={issue.state === 'open' ? 'default' : 'secondary'}>
            {issue.state}
          </Badge>
        </div>
        
        <CardTitle className="text-lg leading-tight">
          <a href={issue.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {issue.title}
          </a>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {issue.body}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {issue.labels.map(label => <Badge key={label} variant="outline" className="text-xs">
              {label}
            </Badge>)}
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>by {issue.author}</span>
            <span>{formatDate(issue.createdAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3 h-3" />
            <span>{issue.comments}</span>
          </div>
        </div>
      </CardContent>
    </Card>;
};
const ContributionCard = ({
  area,
  index
}: {
  area: typeof contributionAreas[0];
  index: number;
}) => {
  const Icon = area.icon;
  return <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in" style={{
    animationDelay: `${index * 150}ms`
  }}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg">{area.title}</CardTitle>
            <Badge variant={area.difficulty === 'Beginner' ? 'secondary' : area.difficulty === 'Intermediate' ? 'default' : 'destructive'} className="text-xs">
              {area.difficulty}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {area.description}
        </p>
        
        <div>
          <p className="text-xs font-medium mb-2">Skills needed:</p>
          <div className="flex flex-wrap gap-1">
            {area.skills.map(skill => <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>)}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <AlertCircle className="w-3 h-3" />
            <span>{area.issues} open issues</span>
          </div>
          <Button size="sm" variant="outline">
            Contribute
            <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>;
};
export default function Community() {
  const [activeTab, setActiveTab] = useState('github');
  return <div className="min-h-screen">
      <CommunityBackground />
      <Header />
      
      <div className="min-h-screen">
        {/* SEO Meta Tags */}
        <head>
          <title>Community - Gitswhy OS | Open Source DevSecOps Community</title>
          <meta name="description" content="Join the Gitswhy OS community. Contribute to open source, connect with developers, and help build the future of DevSecOps." />
          <meta name="keywords" content="open source, community, DevSecOps, contribute, GitHub, Discord, developers" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Community - Gitswhy OS" />
          <meta property="og:description" content="Join the Gitswhy OS community and help build the future of DevSecOps." />
          <meta property="og:image" content="https://gitswhy.com/og-community.png" />
          <meta property="og:url" content="https://gitswhy.com/community" />
          <meta property="og:type" content="website" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Community - Gitswhy OS" />
          <meta name="twitter:description" content="Join our open source community and contribute to DevSecOps." />
          <meta name="twitter:image" content="https://gitswhy.com/og-community.png" />
          
          <link rel="canonical" href="https://gitswhy.com/community" />
        </head>

        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 pb-8 sm:pb-12">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center space-responsive">
            <h1 className="text-scale-hero font-bold">
              Join Our <span className="text-terminal-green">Community</span>
            </h1>
            <p className="text-scale-subtitle text-foreground/80">
              Connect with developers, security experts, and DevOps engineers building 
              the future of secure software development.
            </p>
          </div>
        </div>
      </section>

      {/* Community Tabs */}
      <section className="padding-section">
        <div className="container-responsive">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="github">GitHub</TabsTrigger>
              <TabsTrigger value="discord">Discord</TabsTrigger>
              <TabsTrigger value="contribute">Contribute</TabsTrigger>
            </TabsList>
            
            <TabsContent value="github" className="mt-8">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-scale-heading font-bold mb-2 sm:mb-4">
                    Latest from <span className="text-terminal-green">GitHub</span>
                  </h2>
                  <p className="text-scale-body text-foreground/80 max-w-2xl mx-auto">
                    Stay updated with the latest issues, discussions, and contributions 
                    to the Gitswhy OS open source project.
                  </p>
                </div>
                
                <div className="flex justify-center flex-responsive mb-4 sm:mb-8">
                  <Button asChild size="sm" variant="default" className="mobile-button">
                    <a href="https://github.com/gitswhy/core" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Repository
                      <ExternalLink className="w-2 h-2 ml-1" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="mobile-button">
                    <a href="https://github.com/gitswhy/core/issues/new" target="_blank" rel="noopener noreferrer">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Report Issue
                    </a>
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockIssues.map((issue, index) => <IssueCard key={issue.id} issue={issue} index={index} />)}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="discord" className="mt-8">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Join Our <span className="text-terminal-blue">Discord</span>
                  </h2>
                  <p className="text-foreground/80 max-w-2xl mx-auto">
                    Connect with the community in real-time. Get help, share ideas, 
                    and collaborate with fellow developers.
                  </p>
                </div>
                
                <Card className="max-w-2xl mx-auto">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Discord Community</h3>
                      <p className="text-muted-foreground">
                        Join {communityStats.discordMembers.toLocaleString()}+ developers discussing 
                        DevSecOps, sharing solutions, and building together.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-medium">#general</div>
                        <div className="text-muted-foreground">General discussion</div>
                      </div>
                      <div>
                        <div className="font-medium">#support</div>
                        <div className="text-muted-foreground">Get help & troubleshooting</div>
                      </div>
                      <div>
                        <div className="font-medium">#contributors</div>
                        <div className="text-muted-foreground">For project contributors</div>
                      </div>
                    </div>
                    
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <a href="https://discord.com/invite/NuevNNzQwm" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Join Discord Server
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Discord Widget Placeholder */}
                <Card className="max-w-4xl mx-auto">
                  <CardHeader>
                    <CardTitle>Live Discord Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/30 rounded-lg p-8 text-center">
                      <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Discord widget would be embedded here showing live community activity.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="contribute" className="mt-8">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Contribute to <span className="text-primary">Gitswhy OS</span>
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Help us build the future of DevSecOps. Whether you're a seasoned developer 
                    or just getting started, there's a place for you in our community.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contributionAreas.map((area, index) => <ContributionCard key={area.title} area={area} index={index} />)}
                </div>
                
                <Card className="max-w-4xl mx-auto">
                  <CardHeader>
                    <CardTitle className="text-2xl">Getting Started Guide</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <GitBranch className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold">1. Fork & Clone</h4>
                        <p className="text-sm text-muted-foreground">
                          Fork the repository and clone it to your local machine
                        </p>
                      </div>
                      
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <Code className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold">2. Make Changes</h4>
                        <p className="text-sm text-muted-foreground">
                          Create a new branch, make your changes, and test thoroughly
                        </p>
                      </div>
                      
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <Heart className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold">3. Submit PR</h4>
                        <p className="text-sm text-muted-foreground">
                          Submit a pull request with a clear description of your changes
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild>
                        <a href="https://github.com/gitswhy/core/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Read Contribution Guide
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href="https://github.com/gitswhy/core/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22" target="_blank" rel="noopener noreferrer">
                          <Star className="w-4 h-4 mr-2" />
                          Good First Issues
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Gitswhy OS Community",
          "description": "Open source DevSecOps community building secure software development tools",
          "url": "https://gitswhy.com/community",
          "logo": "https://gitswhy.com/logo.png",
          "sameAs": ["https://github.com/gitswhy/core", "https://discord.com/invite/NuevNNzQwm"],
          "memberOf": {
            "@type": "SoftwareSourceCode",
            "name": "Gitswhy OS",
            "codeRepository": "https://github.com/gitswhy/core"
          }
        })
      }} />
    </div>
    </div>;
}