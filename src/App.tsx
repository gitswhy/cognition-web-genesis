
import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import PageTransitionWrapper from "./components/layout/PageTransitionWrapper";
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
        <Route path="/" element={<PageTransitionWrapper><Index /></PageTransitionWrapper>} />
        <Route path="/open-core" element={<PageTransitionWrapper><OpenCore /></PageTransitionWrapper>} />
        <Route path="/pro-edition" element={<PageTransitionWrapper><ProEdition /></PageTransitionWrapper>} />
        <Route path="/how-it-works" element={<PageTransitionWrapper><HowItWorks /></PageTransitionWrapper>} />
        <Route path="/pricing" element={<PageTransitionWrapper><Pricing /></PageTransitionWrapper>} />
        <Route path="/docs" element={<PageTransitionWrapper><Docs /></PageTransitionWrapper>} />
        <Route path="/blog" element={<PageTransitionWrapper><BlogResources /></PageTransitionWrapper>} />
        <Route path="/community" element={<PageTransitionWrapper><Community /></PageTransitionWrapper>} />
        <Route path="/about" element={<PageTransitionWrapper><About /></PageTransitionWrapper>} />
        <Route path="/patent" element={<PageTransitionWrapper><Patent /></PageTransitionWrapper>} />
        <Route path="/roadmap" element={<PageTransitionWrapper><Roadmap /></PageTransitionWrapper>} />
        <Route path="*" element={<PageTransitionWrapper><NotFound /></PageTransitionWrapper>} />
      </Routes>
    </Suspense>
  );
};

const App = () => {
  usePerformanceOptimizer();
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
