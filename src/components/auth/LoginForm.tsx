import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { User, Lock, Mail, Building2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/providers/AuthProvider";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    role: "farmer" as "farmer" | "dealer" | "admin",
  });

  const { signInWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleRoleSelect = async (role: "farmer" | "dealer") => {
    try {
      await signInWithGoogle(role);
      // The redirect will be handled by the OAuth flow
    } catch (error: any) {
      console.error("Google sign in error:", error);
      toast({
        title: "Authentication error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error: signUpError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
              role: formData.role,
            },
          },
        });

        if (signUpError) throw signUpError;

        toast({
          title: "Account created successfully",
          description: "Please check your email to verify your account.",
        });
      } else {
        console.log("Attempting to sign in...");
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (signInError) {
          console.error("Sign in error:", signInError);
          throw signInError;
        }

        console.log("Sign in successful, user data:", data);
        
        // Get user role from metadata
        const userRole = data.user?.user_metadata?.role;
        console.log("User role:", userRole);

        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });

        // Redirect based on user role
        setTimeout(() => {
          console.log("Navigating to dashboard based on role...");
          if (userRole === 'dealer') {
            navigate("/dealer", { replace: true });
          } else {
            navigate("/dashboard", { replace: true });
          }
        }, 100);
      }
    } catch (error: any) {
      console.error("Authentication error:", error);
      toast({
        title: "Authentication error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      await resetPassword(resetEmail);
      setIsResetDialogOpen(false);
    } catch (error) {
      // Errors are already handled in the resetPassword function
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="space-y-4">
        <div className="flex gap-4 w-full">
          <Button
            type="button"
            className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700"
            onClick={() => handleRoleSelect("farmer")}
          >
            <User className="h-5 w-5" />
            <span>Sign in as Farmer</span>
          </Button>
          <Button
            type="button"
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700"
            onClick={() => handleRoleSelect("dealer")}
          >
            <Building2 className="h-5 w-5" />
            <span>Sign in as Dealer</span>
          </Button>
        </div>
        
        <div className="flex items-center">
          <Separator className="flex-1" />
          <span className="px-3 text-xs text-gray-500 uppercase">Or continue with email</span>
          <Separator className="flex-1" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <>
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  className="pl-10 input-ring"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required={isSignUp}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="role"
                  className="pl-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as "farmer" | "dealer" | "admin" })}
                  required
                >
                  <option value="farmer">Farmer</option>
                  <option value="dealer">Dealer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
          </>
        )}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10 input-ring"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="pl-10 input-ring"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          {!isSignUp && (
            <Dialog open={isResetDialogOpen} onOpenChange={setIsResetDialogOpen}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="text-sm font-medium text-primary hover:text-primary-600"
                >
                  Forgot password?
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Reset Password</DialogTitle>
                  <DialogDescription>
                    Enter your email address and we'll send you a link to reset your password.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handlePasswordReset} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="resetEmail"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10 input-ring"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Send Reset Link</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary-600 text-white transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Please wait..." : isSignUp ? "Sign up" : "Sign in"}
        </Button>
      </form>
      
      <div className="text-center">
        <p className="text-sm text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            className="font-medium text-primary hover:text-primary-600"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
