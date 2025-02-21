
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/providers/AuthProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashboard/Index";
import WasteDashboard from "./pages/dashboard/waste/Index";
import Orders from "./pages/dashboard/orders/Index";
import Learning from "./pages/dashboard/learning/Index";
import Messages from "./pages/dashboard/messages/Index";
import Settings from "./pages/dashboard/settings/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/waste" element={<WasteDashboard />} />
            <Route path="/dashboard/orders" element={<Orders />} />
            <Route path="/dashboard/learning" element={<Learning />} />
            <Route path="/dashboard/messages" element={<Messages />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
