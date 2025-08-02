import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SEOFAQSection = () => {
  const faqData = [
    {
      question: "How does ReflexCore run in the background?",
      answer: "ReflexCore integrates seamlessly with your development environment through lightweight shell hooks and git integrations. It monitors file changes, git operations and command executions without impacting performance. The cognitive engine runs asynchronously, analyzing patterns and providing real time feedback without interrupting your workflow."
    },
    {
      question: "What makes Gitswhy OS different from traditional DevSecOps tools?",
      answer: "Gitswhy OS is the first cognition-native DevSecOps platform. Unlike traditional tools that scan code after it's written, our system understands developer intent in real time, predicts potential issues and provides contextual suggestions. It learns from your coding patterns and adapts to your team's workflow automatically."
    },
    {
      question: "Is my code data safe and private?",
      answer: "Absolutely. ReflexCore processes your code locally by default. For Pro features that require cloud processing, we use end to end encryption and zero trust architecture. Your source code never leaves your environment unless explicitly configured for team collaboration features, and all data is encrypted both in transit and at rest."
    },
    {
      question: "How accurate is the automated vulnerability detection?",
      answer: "Our AI-powered detection engine achieves 99.8% accuracy with minimal false positives. The system combines static analysis, pattern recognition and machine learning models trained on millions of code patterns. It continuously improves by learning from your codebase and feedback, becoming more accurate over time."
    },
    {
      question: "Can ReflexCore integrate with existing CI/CD pipelines?",
      answer: "Yes, ReflexCore provides native integrations with popular CI/CD platforms including GitHub Actions, GitLab CI, Jenkins and Azure DevOps. It can run as part of your pipeline stages or operate independently, providing real time feedback during development and comprehensive reports during deployment."
    },
    {
      question: "What programming languages and frameworks are supported?",
      answer: "ReflexCore supports 50+ programming languages including JavaScript, TypeScript, Python, Java, Go, Rust, C++ and more. It provides specialized analysis for popular frameworks like React, Node.js, Django, Spring Boot and container technologies like Docker and Kubernetes."
    },
    {
      question: "How does the auto-repair feature work?",
      answer: "The auto repair feature uses advanced code analysis and pattern matching to generate safe, tested fixes for common vulnerabilities and code quality issues. Each fix is generated with full context awareness, includes rollback capabilities and can be reviewed before application. The system learns from your coding style to provide increasingly relevant suggestions."
    },
    {
      question: "What are the system requirements for running Gitswhy OS?",
      answer: "Gitswhy OS has minimal system requirements: 512MB RAM, 100MB disk space and any modern operating system (Linux, macOS, Windows). The cognitive engine scales resources based on project size and can run efficiently on everything from laptops to enterprise servers."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8 text-terminal-green" />
            <h2 className="text-3xl font-bold font-mono">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about ReflexCore and Gitswhy OS
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-terminal-green/20">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-terminal-green/10 rounded-lg px-4 data-[state=open]:border-terminal-green/30 transition-colors duration-200"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-terminal-green transition-colors duration-200 py-4">
                      <span className="font-mono font-medium pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SEOFAQSection;