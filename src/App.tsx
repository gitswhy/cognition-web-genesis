
import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// Removed AnimatePresence and PageTransitionWrapper for better performance
import ScrollToTop from "./components/ScrollToTop";
import { usePerformanceOptimizer } from '@/components/performance/PerformanceOptimizer';
import { useWebVitals } from '@/components/performance/WebVitals';

// Lazy load components for better performance
const Index = React.lazy(() => import("./pages/Index"));
const OpenCore = React.lazy(() => import("./pages/OpenCore"));
const ProEdition = React.lazy(() => import("./pages/ProEdition"));
const HowItWorks = React.lazy(() => import("./pages/HowItWorks"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Docs = React.lazy(() => import("./pages/Docs"));
const BlogResources = React.lazy(() => import("./pages/BlogResources"));
const Community = React.lazy(() => import("./pages/Community"));
const About = React.lazy(() => import("./pages/About"));
const Patent = React.lazy(() => import("./pages/Patent"));
const Roadmap = React.lazy(() => import("./pages/Roadmap"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin w-8 h-8 border-2 border-terminal-green border-t-transparent rounded-full"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/open-core" element={<OpenCore />} />
        <Route path="/pro-edition" element={<ProEdition />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/blog" element={<BlogResources />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/patent" element={<Patent />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => {
  // usePerformanceOptimizer(); // Temporarily disabled due to React import issue
  useWebVitals();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
