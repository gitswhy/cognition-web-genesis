
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import PageTransitionWrapper from "./components/layout/PageTransitionWrapper";

import Index from "./pages/Index";
import OpenCore from "./pages/OpenCore";
import ProEdition from "./pages/ProEdition";
import HowItWorks from "./pages/HowItWorks";
import Integrations from "./pages/Integrations";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import BlogResources from "./pages/BlogResources";
import Community from "./pages/Community";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransitionWrapper><Index /></PageTransitionWrapper>} />
        <Route path="/open-core" element={<PageTransitionWrapper><OpenCore /></PageTransitionWrapper>} />
        <Route path="/pro-edition" element={<PageTransitionWrapper><ProEdition /></PageTransitionWrapper>} />
        <Route path="/how-it-works" element={<PageTransitionWrapper><HowItWorks /></PageTransitionWrapper>} />
        <Route path="/integrations" element={<PageTransitionWrapper><Integrations /></PageTransitionWrapper>} />
        <Route path="/pricing" element={<PageTransitionWrapper><Pricing /></PageTransitionWrapper>} />
        <Route path="/docs" element={<PageTransitionWrapper><Docs /></PageTransitionWrapper>} />
        <Route path="/blog" element={<PageTransitionWrapper><BlogResources /></PageTransitionWrapper>} />
        <Route path="/community" element={<PageTransitionWrapper><Community /></PageTransitionWrapper>} />
        <Route path="/about" element={<PageTransitionWrapper><About /></PageTransitionWrapper>} />
        <Route path="*" element={<PageTransitionWrapper><NotFound /></PageTransitionWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
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

export default App;
