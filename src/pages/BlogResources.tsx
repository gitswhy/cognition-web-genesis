import React, { useState, useEffect } from 'react';
import { Search, Filter, Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  image: string;
  featured: boolean;
}

const categories = [
  'All',
  'DevSecOps',
  'AI Shell', 
  'Tutorials',
  'Best Practices',
  'Case Studies',
  'Product Updates'
];

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Secure CI/CD Pipelines with Gitswhy OS',
    excerpt: 'Learn how to integrate security scanning into your continuous integration workflow for maximum protection without compromising speed.',
    content: 'Full article content...',
    category: 'DevSecOps',
    tags: ['CI/CD', 'Security', 'DevOps'],
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face'
    },
    publishedAt: '2024-01-15',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'AI-Powered Code Analysis: The Future of Quality Assurance',
    excerpt: 'Discover how artificial intelligence is revolutionizing code review and quality assurance in modern development workflows.',
    content: 'Full article content...',
    category: 'AI Shell',
    tags: ['AI', 'Code Analysis', 'Machine Learning'],
    author: {
      name: 'David Kumar',
      avatar: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face'
    },
    publishedAt: '2024-01-12',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: '3',
    title: 'Getting Started: Your First Security Scan',
    excerpt: 'A step-by-step tutorial on setting up Gitswhy OS and running your first comprehensive security scan.',
    content: 'Full article content...',
    category: 'Tutorials',
    tags: ['Getting Started', 'Security Scan', 'Tutorial'],
    author: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face'
    },
    publishedAt: '2024-01-10',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: '4',
    title: 'Zero-Trust Security: Implementation Best Practices',
    excerpt: 'Comprehensive guide to implementing zero-trust security principles in your development infrastructure.',
    content: 'Full article content...',
    category: 'Best Practices',
    tags: ['Zero Trust', 'Security', 'Infrastructure'],
    author: {
      name: 'Michael Zhang',
      avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face'
    },
    publishedAt: '2024-01-08',
    readTime: 15,
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: '5',
    title: 'How Acme Corp Reduced Security Vulnerabilities by 85%',
    excerpt: 'Real-world case study showing how one company transformed their security posture with Gitswhy OS.',
    content: 'Full article content...',
    category: 'Case Studies',
    tags: ['Case Study', 'Success Story', 'ROI'],
    author: {
      name: 'Lisa Park',
      avatar: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face'
    },
    publishedAt: '2024-01-05',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: '6',
    title: 'Gitswhy OS v2.1: Enhanced AI Detection Capabilities',
    excerpt: 'Announcing new features including advanced pattern recognition and improved false positive reduction.',
    content: 'Full article content...',
    category: 'Product Updates',
    tags: ['Release Notes', 'AI', 'Features'],
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face'
    },
    publishedAt: '2024-01-03',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    featured: false
  }
];

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        post.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {post.featured && (
          <Badge className="absolute top-3 left-3" variant="secondary">
            Featured
          </Badge>
        )}
        <Badge 
          className="absolute top-3 right-3"
          variant={post.category === 'DevSecOps' ? 'default' : 
                   post.category === 'AI Shell' ? 'secondary' : 'outline'}
        >
          {post.category}
        </Badge>
      </div>
      
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-6 h-6 rounded-full"
          />
          <span>{post.author.name}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime} min read
          </div>
        </div>
        
        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
          {post.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              <Tag className="w-2 h-2 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-2 pt-2">
          <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
            Read More
            <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function BlogResources() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);

  useEffect(() => {
    let filtered = mockPosts;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Blog & Resources - Gitswhy OS | DevSecOps Insights & Tutorials</title>
        <meta name="description" content="Stay updated with the latest DevSecOps insights, AI-powered security tutorials, and best practices from the Gitswhy OS team." />
        <meta name="keywords" content="DevSecOps, AI security, code analysis, tutorials, best practices, security scanning" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog & Resources - Gitswhy OS" />
        <meta property="og:description" content="Stay updated with the latest DevSecOps insights, AI-powered security tutorials, and best practices." />
        <meta property="og:image" content="https://gitswhy.com/og-blog.png" />
        <meta property="og:url" content="https://gitswhy.com/blog" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog & Resources - Gitswhy OS" />
        <meta name="twitter:description" content="Stay updated with the latest DevSecOps insights and tutorials." />
        <meta name="twitter:image" content="https://gitswhy.com/og-blog.png" />
        
        <link rel="canonical" href="https://gitswhy.com/blog" />
      </head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Blog & <span className="text-primary">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay ahead with insights on DevSecOps, AI-powered security, and best practices 
              from industry experts and the Gitswhy OS team.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  <Filter className="w-3 h-3 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 md:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BlogCard post={post} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <p className="text-muted-foreground">
                Get the latest DevSecOps insights and Gitswhy OS updates delivered to your inbox.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                No spam. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Gitswhy OS Blog",
            "description": "DevSecOps insights, AI-powered security tutorials, and best practices",
            "url": "https://gitswhy.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Gitswhy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gitswhy.com/logo.png"
              }
            },
            "blogPost": filteredPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "image": post.image,
              "author": {
                "@type": "Person",
                "name": post.author.name
              },
              "datePublished": post.publishedAt,
              "url": `https://gitswhy.com/blog/${post.id}`
            }))
          })
        }}
      />
    </div>
  );
}