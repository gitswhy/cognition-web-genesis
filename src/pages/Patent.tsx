import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  Brain, 
  FileText, 
  Lock, 
  ArrowRight, 
  CheckCircle,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react';

export default function Patent() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="mb-4">
                <FileText className="w-4 h-4 mr-2" />
                Patent Pending
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Our <span className="text-primary">Patent-Pending</span> Technology
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Revolutionary intent detection and self-healing capabilities that protect 
                your code's cognitive state and ensure autonomous security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Innovation in Autonomous Security
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our provisional patent filing covers groundbreaking technology in intent detection, 
                recursive vault logging, and self-healing security systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Intent Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced AI algorithms that understand developer intent and 
                    predict potential security vulnerabilities before they manifest.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Recursive Vault Logging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive security state tracking that maintains a complete 
                    audit trail of all security decisions and their reasoning.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Self-Healing Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Autonomous remediation capabilities that automatically fix 
                    security issues while preserving code functionality and intent.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Patent Details</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <CardTitle>Filing Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Patent Type</h4>
                      <p className="text-muted-foreground">Provisional Patent Application</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Filing Date</h4>
                      <p className="text-muted-foreground">March 2024</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Patent Office</h4>
                      <p className="text-muted-foreground">United States Patent and Trademark Office (USPTO)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Priority Number</h4>
                      <p className="text-muted-foreground">63/123,456</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Patented by</h4>
                      <p className="text-muted-foreground">Atharve Malviya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    <CardTitle>Key Innovations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Cognitive State Protection</h4>
                        <p className="text-muted-foreground">
                          Novel approach to maintaining and protecting the intended cognitive state 
                          of software systems throughout their lifecycle.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Intent-Aware Security Scanning</h4>
                        <p className="text-muted-foreground">
                          Advanced algorithms that understand developer intent to reduce false 
                          positives and enhance security accuracy.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Autonomous Remediation</h4>
                        <p className="text-muted-foreground">
                          Self-healing capabilities that automatically resolve security 
                          vulnerabilities while preserving system functionality.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Recursive Security Vaults</h4>
                        <p className="text-muted-foreground">
                          Comprehensive logging and audit systems that maintain complete 
                          security decision histories and reasoning chains.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What This Means for Your Security
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    <CardTitle>Unprecedented Accuracy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    By understanding developer intent, our system dramatically reduces false 
                    positives while catching vulnerabilities that traditional scanners miss.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lock className="w-6 h-6 text-primary" />
                    <CardTitle>Proactive Protection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our cognitive state protection ensures your code's security posture 
                    remains intact even as it evolves and changes over time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-primary" />
                    <CardTitle>Zero-Touch Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Self-healing capabilities mean security issues are resolved automatically, 
                    without disrupting your development workflow.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <CardTitle>Complete Audit Trail</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Recursive vault logging provides comprehensive documentation of all 
                    security decisions for compliance and forensic analysis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">
              Experience Patent-Pending Innovation
            </h2>
            <p className="text-lg text-muted-foreground">
              See how our revolutionary technology transforms security scanning 
              and autonomous remediation in our Pro Edition.
            </p>
            <Button size="lg" asChild>
              <a href="/pro-edition">
                Learn More About Pro Features
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}