import React, { useState } from 'react';
import { Github, Linkedin, Twitter, ArrowRight, Heart, Shield, Zap, Users, Globe, Code, ChevronLeft, ChevronRight, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OptimizedCard from '@/components/common/OptimizedCard';
import LazyImage from '@/components/common/LazyImage';
import { Separator } from '@/components/ui/separator';
import AboutBackground from '@/components/background/AboutBackground';
import Header from '@/components/Header';
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}
interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  githubIssue?: string;
}
const teamMembers: TeamMember[] = [{
  name: 'Atharve Malviya',
  role: 'CEO',
  bio: 'Built web3 communities to 50,000 users; CS50x, Harvard; led product virality and business development.',
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face',
  expertise: ['Leadership', 'Community Building', 'Product', 'Business Development'],
  social: {
    github: 'https://github.com/atharvemalviya',
    linkedin: 'https://linkedin.com/in/atharvemalviya',
    twitter: 'https://twitter.com/atharvemalviya'
  }
}, {
  name: 'Yash Alluri',
  role: 'CTO',
  bio: 'ML & DevSecOps expert; led security automation at Assurant (Fortune 500); 5× hackathon winner.',
  image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face',
  expertise: ['AI/ML', 'DevSecOps', 'Security Automation', 'Architecture'],
  social: {
    github: 'https://github.com/yashalluri',
    linkedin: 'https://linkedin.com/in/yashalluri'
  }
}, {
  name: 'Harry MD Nguyen',
  role: 'CPO',
  bio: 'Full-stack developer; created tech content with 16M TikTok views; built workflow tools at Edrolo/SBD.',
  image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face',
  expertise: ['Full-stack Development', 'Content Creation', 'Product Design', 'Workflow Tools'],
  social: {
    github: 'https://github.com/harrynguyen',
    linkedin: 'https://linkedin.com/in/harrynguyen',
    twitter: 'https://twitter.com/harrynguyen'
  }
}, {
  name: 'Shivang Sagwaliya',
  role: 'COO',
  bio: 'AI UX specialist; MS, Harvard; expert in prompt engineering and team workflows.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  expertise: ['AI UX Design', 'Prompt Engineering', 'Team Operations', 'Workflows'],
  social: {
    github: 'https://github.com/shivangsagwaliya',
    linkedin: 'https://linkedin.com/in/shivangsagwaliya'
  }
}, {
  name: 'Jim Manico',
  role: 'Advisor',
  bio: 'Global security educator and renowned expert in application security, helping guide our security strategy.',
  image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
  expertise: ['Security Education', 'Application Security', 'Strategy', 'Advisory'],
  social: {
    github: 'https://github.com/jimmanico',
    linkedin: 'https://linkedin.com/in/jimmanico',
    twitter: 'https://twitter.com/jimmanico'
  }
}];
const values = [{
  icon: Shield,
  title: 'Privacy First',
  description: 'Everything runs locally unless you opt-in. Your code and data stay under your control, always.'
}, {
  icon: Heart,
  title: 'Open Source at Core',
  description: 'Apache 2.0 licensed foundation. We build in the open and believe in transparent, iterative development.'
}, {
  icon: Zap,
  title: 'Cross Platform & Minimal',
  description: 'Designed for Linux/macOS with minimal resource use. Your workflow shouldn\'t be disrupted.'
}, {
  icon: Users,
  title: 'Community Powered',
  description: 'Product led, community driven development. Always open to feedback and contributions.'
}, {
  icon: Globe,
  title: 'Ship with Peace of Mind',
  description: 'Our mission is to help every team save 15+ hours per week and deploy code with confidence.'
}, {
  icon: Code,
  title: 'Secure by Design',
  description: 'Encrypted logs, no vendor lock-in and self-healing capabilities built into every component.'
}];
const jobRoles: JobRole[] = [{
  id: 'senior-rust-engineer',
  title: 'Senior Rust Engineer',
  department: 'Engineering',
  location: 'Remote / San Francisco',
  type: 'Full-time',
  description: 'Join our core team building the next generation security scanning engine in Rust.',
  requirements: ['5+ years of systems programming experience', 'Expert level Rust programming skills', 'Experience with security tools or static analysis', 'Understanding of compiler design principles'],
  responsibilities: ['Design and implement core scanning algorithms', 'Optimize performance for large codebases', 'Contribute to our open source core engine', 'Mentor junior engineers and review code'],
  githubIssue: 'https://github.com/gitswhy/careers/issues/12'
}, {
  id: 'security-researcher',
  title: 'Security Researcher',
  department: 'Security',
  location: 'Remote / New York',
  type: 'Full-time',
  description: 'Research new vulnerability patterns and improve our detection capabilities.',
  requirements: ['PhD or Masters in Computer Security', 'Experience with vulnerability research', 'Knowledge of common security patterns', 'Published security research papers preferred'],
  responsibilities: ['Research emerging security vulnerabilities', 'Develop detection rules and patterns', 'Collaborate with engineering on implementation', 'Present findings at security conferences'],
  githubIssue: 'https://github.com/gitswhy/careers/issues/15'
}, {
  id: 'devrel-engineer',
  title: 'Developer Relations Engineer',
  department: 'Developer Relations',
  location: 'Remote',
  type: 'Full-time',
  description: 'Help developers adopt Gitswhy OS through content, community, and partnerships.',
  requirements: ['Strong software engineering background', 'Experience with developer tools and DevOps', 'Excellent communication and writing skills', 'Public speaking experience preferred'],
  responsibilities: ['Create technical content and tutorials', 'Engage with developer community', 'Build partnerships with other tools', 'Represent Gitswhy at conferences and events'],
  githubIssue: 'https://github.com/gitswhy/careers/issues/18'
}, {
  id: 'frontend-engineer',
  title: 'Senior Frontend Engineer',
  department: 'Engineering',
  location: 'Remote / London',
  type: 'Full-time',
  description: 'Build beautiful, intuitive interfaces for security scanning and reporting.',
  requirements: ['5+ years of React/TypeScript experience', 'Experience with data visualization', 'Strong design sensibility', 'Understanding of security concepts'],
  responsibilities: ['Build and maintain the web dashboard', 'Create interactive security reports', 'Implement real time scanning interfaces', 'Collaborate with design and product teams'],
  githubIssue: 'https://github.com/gitswhy/careers/issues/21'
}, {
  id: 'site-reliability-engineer',
  title: 'Site Reliability Engineer',
  department: 'Infrastructure',
  location: 'Remote / Austin',
  type: 'Full-time',
  description: 'Ensure our platform scales reliably to handle millions of security scans.',
  requirements: ['Experience with cloud infrastructure (AWS/GCP)', 'Kubernetes and container orchestration', 'Infrastructure as Code (Terraform)', 'Monitoring and observability tools'],
  responsibilities: ['Design and maintain scalable infrastructure', 'Implement monitoring and alerting', 'Optimize scanning performance and costs', 'Ensure 99.9% uptime SLA'],
  githubIssue: 'https://github.com/gitswhy/careers/issues/24'
}];
const TeamMemberCard = ({
  member,
  index
}: {
  member: TeamMember;
  index: number;
}) => {
  return <OptimizedCard variant="animated" delay={index * 150} className="group">
      <div className="p-6 text-center space-y-4">
        <div className="relative">
          <LazyImage src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-primary font-medium">{member.role}</p>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {member.bio}
        </p>
        
        <div className="flex flex-wrap gap-1 justify-center">
          {member.expertise.map(skill => <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>)}
        </div>
        
        <div className="flex justify-center gap-3 pt-2">
          {member.social.github && <Button size="sm" variant="ghost" asChild>
              <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>}
          {member.social.linkedin && <Button size="sm" variant="ghost" asChild>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>}
          {member.social.twitter && <Button size="sm" variant="ghost" asChild>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4" />
              </a>
            </Button>}
        </div>
      </div>
    </OptimizedCard>;
};
const JobCard = ({
  job
}: {
  job: JobRole;
}) => {
  return <Card className="min-w-[350px] h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{job.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="outline">{job.department}</Badge>
              <span>•</span>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {job.location}
              </div>
            </div>
          </div>
          <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {job.description}
        </p>
        
        <div>
          <h4 className="font-medium mb-2 text-sm">Key Requirements:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            {job.requirements.slice(0, 3).map((req, index) => <li key={index} className="flex items-start gap-2">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                {req}
              </li>)}
          </ul>
        </div>
        
        <div className="flex flex-col gap-2 pt-2">
          <Button asChild className="w-full">
            <a href={job.githubIssue} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Apply via GitHub
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </Button>
          <Button variant="outline" size="sm" className="w-full">
            View Full Details
            <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>;
};
const CareersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2;
  const maxIndex = Math.max(0, jobRoles.length - itemsPerView);
  const goToNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };
  const goToPrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };
  return <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Open Positions</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={goToPrev} disabled={currentIndex === 0}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={goToNext} disabled={currentIndex >= maxIndex}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <div className="flex gap-6 transition-transform duration-300" style={{
        transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
      }}>
          {jobRoles.map(job => <div key={job.id} className="flex-none w-1/2">
              <JobCard job={job} />
            </div>)}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({
        length: maxIndex + 1
      }).map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'}`} />)}
      </div>
    </div>;
};
export default function AboutCareers() {
  return <div className="min-h-screen">
      <Header />
      <AboutBackground />
      {/* SEO Meta Tags */}
      <head>
        <title>About & Careers - Gitswhy OS | Join Our Mission to Secure Software</title>
        <meta name="description" content="Learn about Gitswhy OS's mission, values, and team. Join us in building the future of DevSecOps with open source security tools." />
        <meta name="keywords" content="about gitswhy, careers, team, mission, values, open source, DevSecOps jobs" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About & Careers - Gitswhy OS" />
        <meta property="og:description" content="Join our mission to make security accessible to every developer through open source tools." />
        <meta property="og:image" content="https://gitswhy.com/og-about.png" />
        <meta property="og:url" content="https://gitswhy.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About & Careers - Gitswhy OS" />
        <meta name="twitter:description" content="Join our mission to secure software development worldwide." />
        <meta name="twitter:image" content="https://gitswhy.com/og-about.png" />
        
        <link rel="canonical" href="https://gitswhy.com/about" />
      </head>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center space-responsive">
            <div className="space-responsive animate-fade-in">
              <h1 className="text-scale-hero font-bold">
                About <span className="text-primary">Gitswhy OS</span>
              </h1>
              <p className="text-scale-subtitle text-muted-foreground">Your second brain for self-healing secure code. Proactively fixing vulnerabilities, cleaning up system clutter and capturing the "why" behind every code change.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born from the frustrations of modern developers, Gitswhy OS transforms the way teams and solo coders work by 
              <strong> proactively fixing vulnerabilities, cleaning up system clutter and capturing the "why" behind every code change</strong> all 
              running quietly in the background. We started because coding has evolved: today, AI "vibe coding" and rapid prototyping 
              are everywhere, but that comes with a new flood of bugs, security holes and wasted hours on cleanup. What began as a 
              simple AI helper for code reviews is now a modular "operating layer" that secures, explains and tunes development 
              workflows across terminals, editors, CI tools and cloud containers.
            </p>
          </div>
        </div>
      </section>

      {/* Open Core Philosophy */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
              <p className="text-xl text-muted-foreground">
                Two editions designed for different needs, both built on our open-source foundation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-2 sm:gap-4 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">ReflexCore (Free, Open-Source)</h3>
                  <p className="text-muted-foreground">A lightweight agent (&lt;50MB RAM) for Linux/macOS that runs always on, analyzing keystroke patterns for hesitation (intent), self-healing system slowness, killing zombie processes and securely logging events never sending data elsewhere.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Gitswhy OS Pro (Paid)</h3>
                  <p className="text-muted-foreground">Adds 30,000+ real-time security rules, AI-powered auto-patching, compliance policy packs (PCI/SOC2/GDPR), dashboards, cross-repo risk graphs, voice command fixes and collaborative insights designed for teams and enterprises.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Where We're Headed</h3>
                  <p className="text-muted-foreground">ReflexCore is already public on GitHub (open core foundation). Pro features (auto-patch, voice, dashboard, compliance packs) are rolling out quarterly. Our goal:- save developers 15+ hours/week and help every team "ship with peace of mind."</p>
                </div>
              </div>
              
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Code className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Apache 2.0 Licensed</h4>
                      <p className="text-sm text-muted-foreground">
                        Open-source foundation, always free to use and modify
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Modular Design</h4>
                      <p className="text-sm text-muted-foreground">
                        Anyone can contribute new detectors and automations
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Cross Platform</h4>
                      <p className="text-sm text-muted-foreground">
                        Works on Linux/macOS with minimal resource use
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission & Values</h2>
              <p className="text-xl text-muted-foreground">Give every developer their own second-brain OS that anticipates problems, fixes them instantly and explains every "why" in plain English, so you ship code faster and safer.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
              {values.map((value, index) => {
              const Icon = value.icon;
              return <Card key={value.title} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in" style={{
                animationDelay: `${index * 100}ms`
              }}>
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Want to try it or join our mission?</h2>
            <p className="text-xl text-muted-foreground">
              <strong>Gitswhy OS: your second brain for self-healing secure code so you never debug alone again.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg">
                <a href="https://github.com/gitswhy/reflexcore" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Explore ReflexCore on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/pro-edition">
                  Sign up for Gitswhy OS Pro
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Connect with us for team pilots or custom integrations
            </p>
          </div>
        </div>
      </section>
    </div>;
}