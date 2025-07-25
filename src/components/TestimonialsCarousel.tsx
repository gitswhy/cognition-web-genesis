import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Gitswhy OS saved us 15 hours per week by catching vulnerabilities before they hit production. The self-healing feature is revolutionary.",
      author: "Sarah Chen",
      role: "Lead Security Engineer",
      company: "TechCorp",
      avatar: "/lovable-uploads/58df480a-beae-4774-87d5-4123cd510209.png",
      savedHours: "15 hours/week",
      impact: "Zero security incidents"
    },
    {
      quote: "The cognitive pattern recognition is incredible. It learns our coding patterns and prevents issues we didn't even know we had.",
      author: "Marcus Rodriguez",
      role: "DevOps Director",
      company: "CloudScale",
      avatar: "/lovable-uploads/674408c2-2765-4106-ad6b-7a44b6a330d0.png",
      savedHours: "12 hours/week",
      impact: "50% faster deployments"
    },
    {
      quote: "ReflexCore's intent detection caught a critical auth vulnerability during development. Potentially saved us millions in damages.",
      author: "Emily Watson",
      role: "CTO",
      company: "SecureBank",
      avatar: "/lovable-uploads/a7f7e837-a59e-4a99-a3a4-8dbeaba0a2ef.png",
      savedHours: "20 hours/week",
      impact: "99.9% uptime achieved"
    },
    {
      quote: "The recursive vault logging gives us complete audit trails. Compliance audits went from weeks to days.",
      author: "David Kim",
      role: "Compliance Officer",
      company: "FinTech Pro",
      avatar: "/lovable-uploads/c5887050-324e-42db-a241-b8dae5f05849.png",
      savedHours: "8 hours/week",
      impact: "100% compliance score"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What Our <span className="text-terminal-green">Users Say</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Real results from teams using Gitswhy OS in production
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <Card className="bg-terminal-surface border-terminal-green/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-8">
                  {/* Quote Icon */}
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-terminal-green/10">
                      <Quote className="w-8 h-8 text-terminal-green" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed font-medium max-w-3xl mx-auto">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="w-16 h-16 border-2 border-terminal-green/20">
                      <AvatarImage 
                        src={testimonials[currentTestimonial].avatar} 
                        alt={testimonials[currentTestimonial].author}
                      />
                      <AvatarFallback className="bg-terminal-green/10 text-terminal-green">
                        {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="text-center">
                      <div className="font-semibold text-foreground text-lg">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-foreground/70">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-terminal-green font-medium">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="flex flex-col md:flex-row justify-center gap-8 pt-8 border-t border-terminal-green/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-terminal-green">
                        {testimonials[currentTestimonial].savedHours}
                      </div>
                      <div className="text-foreground/70 text-sm">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-terminal-blue">
                        {testimonials[currentTestimonial].impact}
                      </div>
                      <div className="text-foreground/70 text-sm">Key Impact</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 border-terminal-green/20 hover:border-terminal-green/40 hidden md:flex"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 border-terminal-green/20 hover:border-terminal-green/40 hidden md:flex"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial 
                    ? 'bg-terminal-green scale-125' 
                    : 'bg-foreground/20 hover:bg-foreground/40'
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center mt-6 space-x-4 md:hidden">
            <Button variant="outline" onClick={prevTestimonial} size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button variant="outline" onClick={nextTestimonial} size="sm">
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;