import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, TrendingUp } from "lucide-react";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    quote: "Gitswhy OS saved our team 47 hours last month alone. The self-healing engine caught a critical security flaw before it hit production.",
    author: "Sarah Chen",
    role: "Senior DevOps Engineer",
    company: "TechFlow Inc",
    avatar: "👩‍💻",
    savedHours: 47,
    metric: "Security flaws prevented: 12"
  }, {
    quote: "The cognition engine learns our patterns so well, it's like having a senior developer pair programming with everyone on the team.",
    author: "Marcus Rodriguez",
    role: "Lead Developer",
    company: "CloudScale Solutions",
    avatar: "👨‍💻",
    savedHours: 62,
    metric: "Code quality improved: 85%"
  }, {
    quote: "Intent Vault revolutionized our onboarding. New developers are productive in days, not weeks, because the system teaches them our patterns.",
    author: "Alex Kim",
    role: "Engineering Manager",
    company: "InnovateLabs",
    avatar: "👨‍🔬",
    savedHours: 156,
    metric: "Onboarding time reduced: 70%"
  }, {
    quote: "We deployed 40% more features last quarter with zero production incidents. The predictive healing is absolutely game-changing.",
    author: "Priya Patel",
    role: "CTO",
    company: "NextGen Systems",
    avatar: "👩‍🔬",
    savedHours: 89,
    metric: "Production incidents: 0"
  }, {
    quote: "The real-time cognition analysis helped us identify and fix a performance bottleneck that was costing us $10K monthly in cloud costs.",
    author: "David Thompson",
    role: "Platform Engineer",
    company: "EfficientOps",
    avatar: "👨‍⚡",
    savedHours: 34,
    metric: "Cloud costs reduced: $10K/month"
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Development Teams Worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            See how Gitswhy OS transforms developer productivity
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <blockquote className="text-xl md:text-2xl text-foreground mb-6 italic">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{currentTestimonial.avatar}</span>
                  <div>
                    <p className="font-semibold text-foreground">{currentTestimonial.author}</p>
                    <p className="text-muted-foreground">{currentTestimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{currentTestimonial.company}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 min-w-[200px]">
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Time Saved</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{currentTestimonial.savedHours}h</div>
                </div>
                
                <div className="bg-accent/10 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">Impact</span>
                  </div>
                  <div className="text-sm font-medium text-foreground">{currentTestimonial.metric}</div>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:bg-card transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:bg-card transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;