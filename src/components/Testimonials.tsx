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
  }, []);
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const currentTestimonial = testimonials[currentIndex];
  return;
};
export default Testimonials;