
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

// Direct imports for faster loading
import Index from "./pages/Index";
import OpenCore from "./pages/OpenCore";
import ProEdition from "./pages/ProEdition";
import Wishlist from "./pages/Wishlist";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import BlogResources from "./pages/BlogResources";

import About from "./pages/About";
import Patent from "./pages/Patent";
import Trial from "./pages/Trial";
import Roadmap from "./pages/Roadmap";
import NotFound from "./pages/NotFound";

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
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Index />} />
      <Route path="/open-core" element={<OpenCore />} />
      <Route path="/pro-edition" element={<ProEdition />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/blog" element={<BlogResources />} />
      
      <Route path="/about" element={<About />} />
      <Route path="/patent" element={<Patent />} />
      <Route path="/trial" element={<Trial />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
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
