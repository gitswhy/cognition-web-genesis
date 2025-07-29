import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowRight, 
  Heart, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Code,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  ExternalLink
} from 'lucide-react';
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

const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'Co-founder & CEO',
    bio: 'Former security architect at Google with 12+ years in DevSecOps. Passionate about making security accessible to every developer.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face',
    expertise: ['Leadership', 'DevSecOps', 'Strategy', 'Security'],
    social: {
      github: 'https://github.com/sarahchen',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen'
    }
  },
  {
    name: 'David Kumar',
    role: 'Co-founder & CTO',
    bio: 'AI researcher and former principal engineer at Microsoft. Leading the development of next generation security scanning technology.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face',
    expertise: ['AI/ML', 'Rust', 'Architecture', 'Security'],
    social: {
      github: 'https://github.com/davidkumar',
      linkedin: 'https://linkedin.com/in/davidkumar'
    }
  },
  {
    name: 'Emma Rodriguez',
    role: 'Head of Engineering',
    bio: 'Full stack engineer with expertise in distributed systems. Previously led engineering teams at Stripe and Datadog.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face',
    expertise: ['Engineering', 'Go', 'Distributed Systems', 'Team Leadership'],
    social: {
      github: 'https://github.com/emmarodriguez',
      linkedin: 'https://linkedin.com/in/emmarodriguez',
      twitter: 'https://twitter.com/emmarodriguez'
    }
  },
  {
    name: 'Michael Zhang',
    role: 'Head of Security Research',
    bio: 'Security researcher with 10+ years finding and fixing vulnerabilities. Former red team lead at major financial institutions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    expertise: ['Security Research', 'Penetration Testing', 'Vulnerability Assessment', 'Python'],
    social: {
      github: 'https://github.com/michaelzhang',
      linkedin: 'https://linkedin.com/in/michaelzhang'
    }
  },
  {
    name: 'Lisa Park',
    role: 'Head of Product',
    bio: 'Product strategist with deep DevOps experience. Previously at Docker and HashiCorp, focused on developer experience.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    expertise: ['Product Strategy', 'UX Design', 'DevOps', 'Analytics'],
    social: {
      github: 'https://github.com/lisapark',
      linkedin: 'https://linkedin.com/in/lisapark',
      twitter: 'https://twitter.com/lisapark'
    }
  },
  {
    name: 'Alex Thompson',
    role: 'Developer Relations',
    bio: 'Community builder and developer advocate. Former maintainer of popular open source security tools.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    expertise: ['Community', 'Open Source', 'Developer Relations', 'Public Speaking'],
    social: {
      github: 'https://github.com/alexthompson',
      linkedin: 'https://linkedin.com/in/alexthompson',
      twitter: 'https://twitter.com/alexthompson'
    }
  }
];

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We believe security should be built into every stage of development, not bolted on as an afterthought.'
  },
  {
    icon: Heart,
    title: 'Open by Default',
    description: 'Transparency and open source are at our core. We build in the open and share our knowledge freely.'
  },
  {
    icon: Zap,
    title: 'Developer Experience',
    description: 'Security tools should enhance, not hinder, developer productivity. We obsess over great UX.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Our roadmap is shaped by our community. Every feature request and contribution matters.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We\'re building tools that will secure software used by billions of people around the world.'
  },
  {
    icon: Code,
    title: 'Technical Excellence',
    description: 'We ship high quality, performant code that developers love to use and contribute to.'
  }
];

const jobRoles: JobRole[] = [
  {
    id: 'senior-rust-engineer',
    title: 'Senior Rust Engineer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    description: 'Join our core team building the next generation security scanning engine in Rust.',
    requirements: [
      '5+ years of systems programming experience',
      'Expert level Rust programming skills',
      'Experience with security tools or static analysis',
      'Understanding of compiler design principles'
    ],
    responsibilities: [
      'Design and implement core scanning algorithms',
      'Optimize performance for large codebases',
      'Contribute to our open source core engine',
      'Mentor junior engineers and review code'
    ],
    githubIssue: 'https://github.com/gitswhy/careers/issues/12'
  },
  {
    id: 'security-researcher',
    title: 'Security Researcher',
    department: 'Security',
    location: 'Remote / New York',
    type: 'Full-time',
    description: 'Research new vulnerability patterns and improve our detection capabilities.',
    requirements: [
      'PhD or Masters in Computer Security',
      'Experience with vulnerability research',
      'Knowledge of common security patterns',
      'Published security research papers preferred'
    ],
    responsibilities: [
      'Research emerging security vulnerabilities',
      'Develop detection rules and patterns',
      'Collaborate with engineering on implementation',
      'Present findings at security conferences'
    ],
    githubIssue: 'https://github.com/gitswhy/careers/issues/15'
  },
  {
    id: 'devrel-engineer',
    title: 'Developer Relations Engineer',
    department: 'Developer Relations',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help developers adopt Gitswhy OS through content, community, and partnerships.',
    requirements: [
      'Strong software engineering background',
      'Experience with developer tools and DevOps',
      'Excellent communication and writing skills',
      'Public speaking experience preferred'
    ],
    responsibilities: [
      'Create technical content and tutorials',
      'Engage with developer community',
      'Build partnerships with other tools',
      'Represent Gitswhy at conferences and events'
    ],
    githubIssue: 'https://github.com/gitswhy/careers/issues/18'
  },
  {
    id: 'frontend-engineer',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote / London',
    type: 'Full-time',
    description: 'Build beautiful, intuitive interfaces for security scanning and reporting.',
    requirements: [
      '5+ years of React/TypeScript experience',
      'Experience with data visualization',
      'Strong design sensibility',
      'Understanding of security concepts'
    ],
    responsibilities: [
      'Build and maintain the web dashboard',
      'Create interactive security reports',
      'Implement real time scanning interfaces',
      'Collaborate with design and product teams'
    ],
    githubIssue: 'https://github.com/gitswhy/careers/issues/21'
  },
  {
    id: 'site-reliability-engineer',
    title: 'Site Reliability Engineer',
    department: 'Infrastructure',
    location: 'Remote / Austin',
    type: 'Full-time',
    description: 'Ensure our platform scales reliably to handle millions of security scans.',
    requirements: [
      'Experience with cloud infrastructure (AWS/GCP)',
      'Kubernetes and container orchestration',
      'Infrastructure as Code (Terraform)',
      'Monitoring and observability tools'
    ],
    responsibilities: [
      'Design and maintain scalable infrastructure',
      'Implement monitoring and alerting',
      'Optimize scanning performance and costs',
      'Ensure 99.9% uptime SLA'
    ],
    githubIssue: 'https://github.com/gitswhy/careers/issues/24'
  }
];

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <OptimizedCard 
      variant="animated"
      delay={index * 150}
      className="group"
    >
      <div className="p-6 text-center space-y-4">
        <div className="relative">
          <LazyImage
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
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
          {member.expertise.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-center gap-3 pt-2">
          {member.social.github && (
            <Button size="sm" variant="ghost" asChild>
              <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
          {member.social.linkedin && (
            <Button size="sm" variant="ghost" asChild>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          )}
          {member.social.twitter && (
            <Button size="sm" variant="ghost" asChild>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </OptimizedCard>
  );
};

const JobCard = ({ job }: { job: JobRole }) => {
  return (
    <Card className="min-w-[350px] h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
            {job.requirements.slice(0, 3).map((req, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                {req}
              </li>
            ))}
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
    </Card>
  );
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

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Open Positions</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <div 
          className="flex gap-6 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {jobRoles.map((job) => (
            <div key={job.id} className="flex-none w-1/2">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function AboutCareers() {
  return (
    <div className="min-h-screen">
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
              <p className="text-scale-subtitle text-muted-foreground">
                Making security accessible to every developer through 
                open source innovation and community collaboration.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-8">
              <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-3xl font-bold text-primary">500k+</div>
                <p className="text-muted-foreground">Repositories Scanned</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="text-3xl font-bold text-primary">10M+</div>
                <p className="text-muted-foreground">Vulnerabilities Found</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="text-3xl font-bold text-primary">2k+</div>
                <p className="text-muted-foreground">Developer Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe that <strong>security should be a natural part of software development</strong>, 
              not a barrier to innovation. Our mission is to democratize security by providing 
              developers with intelligent, fast, and easy-to-use tools that catch vulnerabilities 
              before they reach production—without slowing down development velocity.
            </p>
          </div>
        </div>
      </section>

      {/* Open Core Philosophy */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Open Core Philosophy</h2>
              <p className="text-xl text-muted-foreground">
                Transparency, community, and shared innovation drive everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-2 sm:gap-4 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Open Source Core</h3>
                  <p className="text-muted-foreground">
                    Our core scanning engine is completely open source, auditable, and 
                    community-driven. We believe security tools should be transparent 
                    and trustworthy.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Community First</h3>
                  <p className="text-muted-foreground">
                    Features, roadmap, and priorities are shaped by our community. 
                    Every contribution, whether code, documentation, or feedback, 
                    makes Gitswhy OS better for everyone.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Sustainable Growth</h3>
                  <p className="text-muted-foreground">
                    Our enterprise features and hosted services fund the development 
                    of open source tools, creating a sustainable ecosystem that 
                    benefits both individual developers and enterprises.
                  </p>
                </div>
              </div>
              
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Code className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Always Free Core</h4>
                      <p className="text-sm text-muted-foreground">
                        Core scanning features remain free forever
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Community Governance</h4>
                      <p className="text-sm text-muted-foreground">
                        Major decisions made with community input
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Global Access</h4>
                      <p className="text-sm text-muted-foreground">
                        No restrictions based on geography or company size
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
              <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide every decision we make.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={value.title}
                    className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground">
                Security experts, engineers, and community builders working together 
                to make software development more secure.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Join Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                Help us build the future of DevSecOps. We're looking for passionate 
                people who believe in making security accessible to all developers.
              </p>
            </div>
            
            <CareersCarousel />
            
            <Separator className="my-12" />
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8 text-center space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Why Work With Us?</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 text-left">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div>
                          <h4 className="font-medium">Remote-First Culture</h4>
                          <p className="text-sm text-muted-foreground">Work from anywhere with flexible hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div>
                          <h4 className="font-medium">Open Source Impact</h4>
                          <p className="text-sm text-muted-foreground">Your work benefits the entire developer community</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div>
                          <h4 className="font-medium">Learning Budget</h4>
                          <p className="text-sm text-muted-foreground">$3,000 annual budget for conferences and training</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div>
                          <h4 className="font-medium">Equity Participation</h4>
                          <p className="text-sm text-muted-foreground">Share in the company's success</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div>
                          <h4 className="font-medium">Health & Wellness</h4>
                          <p className="text-sm text-muted-foreground">Comprehensive health coverage and wellness stipend</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                        <div>
                          <h4 className="font-medium">Conference Speaking</h4>
                          <p className="text-sm text-muted-foreground">Opportunities to represent Gitswhy at events</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <a href="https://github.com/gitswhy/careers/issues" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      View All Positions
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="mailto:careers@gitswhy.com">
                      Don't See Your Role?
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Gitswhy",
            "description": "Open source DevSecOps platform making security accessible to every developer",
            "url": "https://gitswhy.com",
            "logo": "https://gitswhy.com/logo.png",
            "foundingDate": "2023",
            "founders": [
              {
                "@type": "Person",
                "name": "Sarah Chen",
                "jobTitle": "Co-founder & CEO"
              },
              {
                "@type": "Person", 
                "name": "David Kumar",
                "jobTitle": "Co-founder & CTO"
              }
            ],
            "employee": teamMembers.map(member => ({
              "@type": "Person",
              "name": member.name,
              "jobTitle": member.role,
              "description": member.bio
            })),
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Gitswhy"
            },
            "jobPosting": jobRoles.map(job => ({
              "@type": "JobPosting",
              "title": job.title,
              "description": job.description,
              "employmentType": job.type.toUpperCase(),
              "jobLocation": {
                "@type": "Place",
                "address": job.location
              },
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Gitswhy"
              }
            }))
          })
        }}
      />
    </div>
  );
}