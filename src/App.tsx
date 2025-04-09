
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
import NewWasteListing from "./pages/dashboard/waste/NewWasteListing";
import Orders from "./pages/dashboard/orders/Index";
import Learning from "./pages/dashboard/learning/Index";
import Messages from "./pages/dashboard/messages/Index";
import Settings from "./pages/dashboard/settings/Index";
import ResetPassword from "./pages/ResetPassword";
import DealerDashboard from "./pages/dealer/Index";
import BrowseListings from "./pages/dealer/listings/Index";
import DealerOrders from "./pages/dealer/orders/Index";
import DealerMessages from "./pages/dealer/messages/Index";
import Logistics from "./pages/dealer/logistics/Index";
import Reviews from "./pages/dealer/reviews/Index";
import DealerLearning from "./pages/dealer/learning/Index";
import DealerSettings from "./pages/dealer/settings/Index";
import ProtectedRoute from "./components/auth/ProtectedRoute";

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
            <Route path="/reset-password" element={<ResetPassword />} />
            
            {/* Farmer Dashboard Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard/waste" element={<ProtectedRoute><WasteDashboard /></ProtectedRoute>} />
            <Route path="/dashboard/waste/new" element={<ProtectedRoute><NewWasteListing /></ProtectedRoute>} />
            <Route path="/dashboard/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path="/dashboard/learning" element={<ProtectedRoute><Learning /></ProtectedRoute>} />
            <Route path="/dashboard/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
            <Route path="/dashboard/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            
            {/* Dealer Dashboard Routes */}
            <Route path="/dealer" element={<ProtectedRoute><DealerDashboard /></ProtectedRoute>} />
            <Route path="/dealer/listings" element={<ProtectedRoute><BrowseListings /></ProtectedRoute>} />
            <Route path="/dealer/orders" element={<ProtectedRoute><DealerOrders /></ProtectedRoute>} />
            <Route path="/dealer/messages" element={<ProtectedRoute><DealerMessages /></ProtectedRoute>} />
            <Route path="/dealer/logistics" element={<ProtectedRoute><Logistics /></ProtectedRoute>} />
            <Route path="/dealer/reviews" element={<ProtectedRoute><Reviews /></ProtectedRoute>} />
            <Route path="/dealer/learning" element={<ProtectedRoute><DealerLearning /></ProtectedRoute>} />
            <Route path="/dealer/settings" element={<ProtectedRoute><DealerSettings /></ProtectedRoute>} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
