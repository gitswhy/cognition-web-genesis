import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  Brain, 
  CheckCircle, 
  Clock, 
  CreditCard,
  Users,
  Building,
  Github,
  ArrowRight,
  Check
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebsiteBackground from "@/components/background/WebsiteBackground";

const Trial = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    useCase: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Trial signup:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="page-fade-in">
        <WebsiteBackground>
          <Header />
          <div className="page-content">
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
              <div className="container mx-auto max-w-2xl text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-8">
                    <div className="w-20 h-20 mx-auto mb-6 bg-terminal-green/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-terminal-green" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Welcome to Your 30 Day Pro Trial!
                    </h1>
                    <p className="text-xl text-foreground/70 mb-8">
                      Check your email for setup instructions and your personal trial dashboard link.
                    </p>
                  </div>

                  <Card className="text-left mb-8">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-4">What happens next:</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-terminal-green flex-shrink-0" />
                          <span>Setup email sent to {formData.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-terminal-blue flex-shrink-0" />
                          <span>Trial begins immediately - no credit card required</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-terminal-green flex-shrink-0" />
                          <span>Dedicated onboarding specialist will contact you</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button size="lg" className="w-full sm:w-auto">
                    <Github className="mr-2 w-5 h-5" />
                    View Setup Instructions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </section>
          </div>
          <Footer />
        </WebsiteBackground>
      </div>
    );
  }

  return (
    <div className="page-fade-in">
      <WebsiteBackground>
        <Header />
        <div className="page-content">
          <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge className="mb-4 bg-terminal-green/10 text-terminal-green border-terminal-green/20">
                    30 Day Free Trial
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Start Your <span className="text-terminal-green">Pro Trial</span>
                  </h1>
                  <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                    Experience the full power of GitSwhy Pro with AI auto-patching, voice commands, and advanced team analytics.
                  </p>
                </motion.div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Features Column */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="mr-2 w-6 h-6 text-terminal-blue" />
                        Pro Features Included
                      </CardTitle>
                      <CardDescription>
                        Everything in Core, plus advanced capabilities
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { icon: Brain, title: "AI Auto Patching", desc: "LLM agents fix vulnerabilities automatically" },
                        { icon: Shield, title: "Advanced Security", desc: "Enterprise grade threat detection" },
                        { icon: Users, title: "Team Analytics", desc: "Slack integrations and dashboard insights" },
                        { icon: CreditCard, title: "No Credit Card", desc: "Full 30 days, completely free" }
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="p-2 bg-terminal-blue/10 rounded-lg">
                            <feature.icon className="w-5 h-5 text-terminal-blue" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{feature.title}</h4>
                            <p className="text-sm text-foreground/70">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Form Column */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Start Your Free Trial</CardTitle>
                      <CardDescription>
                        Takes less than 2 minutes to get started
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Work Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="john@company.com"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Acme Corp"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="role">Role</Label>
                            <Select onValueChange={(value) => handleInputChange('role', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select role" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="developer">Developer</SelectItem>
                                <SelectItem value="architect">Software Architect</SelectItem>
                                <SelectItem value="security">Security Engineer</SelectItem>
                                <SelectItem value="devops">DevOps Engineer</SelectItem>
                                <SelectItem value="manager">Engineering Manager</SelectItem>
                                <SelectItem value="cto">CTO</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="teamSize">Team Size</Label>
                            <Select onValueChange={(value) => handleInputChange('teamSize', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-5">1-5 developers</SelectItem>
                                <SelectItem value="6-20">6-20 developers</SelectItem>
                                <SelectItem value="21-50">21-50 developers</SelectItem>
                                <SelectItem value="51-100">51-100 developers</SelectItem>
                                <SelectItem value="100+">100+ developers</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="terms"
                              checked={formData.agreeToTerms}
                              onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked === true)}
                              required
                            />
                            <Label htmlFor="terms" className="text-sm">
                              I agree to the <a href="#" className="text-terminal-blue hover:underline">Terms of Service</a> and <a href="#" className="text-terminal-blue hover:underline">Privacy Policy</a> *
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="marketing"
                              checked={formData.agreeToMarketing}
                              onCheckedChange={(checked) => handleInputChange('agreeToMarketing', checked === true)}
                            />
                            <Label htmlFor="marketing" className="text-sm">
                              I'd like to receive product updates and security insights
                            </Label>
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full"
                          disabled={isSubmitting || !formData.agreeToTerms}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                              Setting Up Your Trial...
                            </>
                          ) : (
                            <>
                              Start 30 Day Free Trial
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-center text-foreground/60">
                          No credit card required • Cancel anytime • Full feature access
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </WebsiteBackground>
    </div>
  );
};

export default Trial;