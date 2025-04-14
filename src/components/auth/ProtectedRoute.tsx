
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/integrations/supabase/client";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "farmer" | "dealer" | "admin";
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { session, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthAndRole = async () => {
      if (!isLoading) {
        if (!session) {
          navigate("/login");
          return;
        }

        if (requiredRole) {
          const userRole = session.user.user_metadata.role;
          console.log("Checking role access:", { required: requiredRole, user: userRole });

          if (userRole !== requiredRole) {
            console.log("Invalid role access, redirecting to appropriate dashboard");
            // Redirect to appropriate dashboard based on actual role
            if (userRole === "dealer") {
              navigate("/dealer");
            } else {
              navigate("/dashboard");
            }
          }
        }
      }
    };

    checkAuthAndRole();
  }, [session, isLoading, navigate, requiredRole]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return session ? <>{children}</> : null;
};

export default ProtectedRoute;
