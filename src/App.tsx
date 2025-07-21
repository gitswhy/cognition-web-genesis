import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/open-core" element={<OpenCore />} />
          <Route path="/pro-edition" element={<ProEdition />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/blog" element={<BlogResources />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
