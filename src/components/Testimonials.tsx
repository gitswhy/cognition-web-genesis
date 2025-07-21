import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, TrendingUp } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Gitswhy OS saved our team 47 hours last month alone. The self-healing engine caught a critical security flaw before it hit production.",
      author: "Sarah Chen",
      role: "Senior DevOps Engineer",
      company: "TechFlow Inc",
      avatar: "👩‍💻",
      savedHours: 47,
      metric: "Security flaws prevented: 12"
    },
    {
      quote: "The cognition engine learns our patterns so well, it's like having a senior developer pair programming with everyone on the team.",
      author: "Marcus Rodriguez",
      role: "Lead Developer",
      company: "CloudScale Solutions",
      avatar: "👨‍💻",
      savedHours: 62,
      metric: "Code quality improved: 85%"
    },
    {
      quote: "Intent Vault revolutionized our onboarding. New developers are productive in days, not weeks, because the system teaches them our patterns.",
      author: "Alex Kim",
      role: "Engineering Manager",
      company: "InnovateLabs",
      avatar: "👨‍🔬",
      savedHours: 156,
      metric: "Onboarding time reduced: 70%"
    },
    {
      quote: "We deployed 40% more features last quarter with zero production incidents. The predictive healing is absolutely game-changing.",
      author: "Priya Patel",
      role: "CTO",
      company: "NextGen Systems",
      avatar: "👩‍🔬",
      savedHours: 89,
      metric: "Production incidents: 0"
    },
    {
      quote: "The real-time cognition analysis helped us identify and fix a performance bottleneck that was costing us $10K monthly in cloud costs.",
      author: "David Thompson",
      role: "Platform Engineer",
      company: "EfficientOps",
      avatar: "👨‍⚡",
      savedHours: 34,
      metric: "Cloud costs reduced: $10K/month"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-r from-terminal-surface/50 to-terminal-bg/50">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Trusted by <span className="text-terminal-green">Development Teams</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            See how teams are transforming their workflows and saving time with Gitswhy OS
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-terminal-surface border border-terminal-green/20 rounded-xl p-8 md:p-12 text-center relative terminal-glow">
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{currentTestimonial.avatar}</div>
                <div className="text-left">
                  <div className="font-semibold text-foreground text-lg">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-foreground/70">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-terminal-green text-sm font-medium">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="flex items-center space-x-1 text-terminal-green font-bold text-2xl">
                    <Clock className="h-5 w-5" />
                    <span>{currentTestimonial.savedHours}h</span>
                  </div>
                  <div className="text-foreground/60 text-sm">saved/month</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center space-x-1 text-terminal-blue font-bold text-lg">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-foreground/60 text-xs max-w-[120px]">
                    {currentTestimonial.metric}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-terminal-green/20 hover:border-terminal-green/40 hover:bg-terminal-green/10 transition-all duration-200"
              >
                <ChevronLeft className="h-5 w-5 text-terminal-green" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-terminal-green' : 'bg-foreground/20'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-terminal-green/20 hover:border-terminal-green/40 hover:bg-terminal-green/10 transition-all duration-200"
              >
                <ChevronRight className="h-5 w-5 text-terminal-green" />
              </button>
            </div>
          </div>

          {/* Background Cards */}
          <div className="absolute inset-0 -z-10">
            {/* Previous card */}
            <div className="absolute inset-0 bg-terminal-surface/30 border border-terminal-green/10 rounded-xl transform -rotate-1 scale-95"></div>
            {/* Next card */}
            <div className="absolute inset-0 bg-terminal-surface/20 border border-terminal-green/5 rounded-xl transform rotate-1 scale-90"></div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-terminal-green mb-2">500+</div>
            <div className="text-foreground/70 text-sm">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-terminal-green mb-2">10K+</div>
            <div className="text-foreground/70 text-sm">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-terminal-green mb-2">2.5M+</div>
            <div className="text-foreground/70 text-sm">Hours Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-terminal-green mb-2">99.9%</div>
            <div className="text-foreground/70 text-sm">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;