import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/providers/AuthProvider";

// Debug mode for testing
const DEBUG_MODE = true;

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { session, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isDebugSession, setIsDebugSession] = useState(false);

  useEffect(() => {
    // Debug mode - check localStorage for debug login
    if (DEBUG_MODE) {
      const hasDebugLogin = localStorage.getItem("debug_session") === "active";
      if (hasDebugLogin) {
        console.log("Debug session active from localStorage");
        setIsDebugSession(true);
        return;
      }
    }

    // Normal authentication flow
    if (!isLoading && !session && !isDebugSession) {
      navigate("/login");
    }
  }, [session, isLoading, navigate, isDebugSession]);

  // Set debug session in localStorage when logging in
  useEffect(() => {
    if (location.pathname === "/dashboard" && !session && DEBUG_MODE) {
      // This means we just redirected from login
      const urlParams = new URLSearchParams(location.search);
      if (urlParams.get("debug") === "true") {
        console.log("Setting debug session in localStorage");
        localStorage.setItem("debug_session", "active");
        setIsDebugSession(true);
      }
    }
  }, [location, session]);

  if (isLoading && !isDebugSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Allow access if real session or debug session
  if (session || isDebugSession) {
    return (
      <>
        {children}
        {isDebugSession && (
          <div className="fixed bottom-0 right-0 m-4 p-2 bg-yellow-100 border border-yellow-400 rounded text-xs text-yellow-800 z-50">
            Debug Mode Active
          </div>
        )}
      </>
    );
  }

  return null;
};
// This creates the protected route for the creation.
export default ProtectedRoute;

