
import { createContext, useContext, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

interface AuthContextType {
  session: Session | null;
  isLoading: boolean;
  signInWithGoogle: (role: "farmer" | "dealer" | "admin") => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  isLoading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
  resetPassword: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setIsLoading(false);

      // If user just signed in, check their role and redirect accordingly
      if (session?.user) {
        try {
          const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', session.user.id)
            .single();

          if (profile) {
            // Redirect based on user role
            if (profile.role === 'dealer') {
              window.location.href = '/dealer';
            } else {
              // Default to farmer dashboard
              window.location.href = '/dashboard';
            }
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async (role: "farmer" | "dealer" | "admin") => {
    try {
      console.log("Starting Google sign-in process with role:", role);
      
      // Fixed: Move the role into queryParams instead of using 'data'
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
            role: role, // Pass role as a query parameter
          },
          redirectTo: `${window.location.origin}`,
        }
      });
      
      if (error) {
        console.error("Google sign-in error:", error);
        toast({
          title: "Login failed",
          description: error.message || "Could not sign in with Google. Please try again.",
          variant: "destructive",
        });
        throw error;
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      toast({
        title: "Login error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      // Use the current window location origin for the redirect URL
      const redirectUrl = `${window.location.origin}/reset-password`;
      console.log("Password reset redirect URL:", redirectUrl);
      
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectUrl,
      });
      
      if (error) {
        console.error("Password reset error:", error);
        toast({
          title: "Password reset failed",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }
      
      toast({
        title: "Password reset email sent",
        description: "Check your email for a link to reset your password.",
      });
    } catch (error: any) {
      console.error("Error during password reset:", error);
      toast({
        title: "Password reset error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Sign out error:", error);
        toast({
          title: "Sign out failed",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Error signing out",
        description: "An unexpected error occurred while signing out.",
        variant: "destructive",
      });
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ session, isLoading, signInWithGoogle, signOut, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
