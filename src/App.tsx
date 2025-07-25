
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
      <Route path="*" element={<NotFound />} />
    </Routes>
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
