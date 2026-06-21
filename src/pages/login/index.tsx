import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { 
  useLoginMutation, 
  useForgotPasswordMutation,
  useVerifyResetOtpMutation,
  useResetPasswordMutation
} from "@/store/api/authApi";
import MapBranding from "@/pages/signup/components/MapBranding";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type ViewState = 'login' | 'forgot-email' | 'forgot-otp' | 'reset-password';

export default function LoginPage() {
  const navigate = useNavigate();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [forgotPassword, { isLoading: isForgotLoading }] = useForgotPasswordMutation();
  const [verifyResetOtp, { isLoading: isVerifyOtpLoading }] = useVerifyResetOtpMutation();
  const [resetPassword, { isLoading: isResetLoading }] = useResetPasswordMutation();

  const [view, setView] = useState<ViewState>('login');
  
  // Login States
  const [requiresAdminOtp, setRequiresAdminOtp] = useState(false);
  const [adminOtp, setAdminOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    let interval: ReturnType<typeof window.setInterval>;
    if (requiresAdminOtp && timer > 0) {
      interval = window.setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [requiresAdminOtp, timer]);

  // Forgot Password States
  const [resetOtp, setResetOtp] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const isLoading = isLoginLoading || isForgotLoading || isVerifyOtpLoading || isResetLoading;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = requiresAdminOtp ? { email: formData.email, password: formData.password, otp: adminOtp } : { email: formData.email, password: formData.password };
      const result = await login(payload).unwrap();
      
      if (result.data?.requiresOtp) {
        setRequiresAdminOtp(true);
        setTimer(120);
        toast.success(result.message || "OTP sent to your email");
        return;
      }
      
      if (result.success) {
        toast.success("Logged in successfully");
        const { accessToken, refreshToken, user } = result.data;
        
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(user));
        
        if (user.role === "admin") {
          navigate("/admin/dashboard");
        } else if (user.role === "partner") {
          navigate("/partner/dashboard");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Login failed");
    }
  };

  const handleResendOtp = async () => {
    try {
      const payload = { email: formData.email, password: formData.password };
      const result = await login(payload).unwrap();
      
      if (result.data?.requiresOtp) {
        toast.success(result.message || "OTP resent to your email");
        setTimer(120);
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to resend OTP");
    }
  };

  const handleForgotEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return toast.error("Email is required");
    try {
      const result = await forgotPassword({ email: formData.email }).unwrap();
      if (result.success) {
        toast.success(result.message);
        setView('forgot-otp');
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to send reset OTP");
    }
  };

  const handleForgotOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetOtp || resetOtp.length !== 6) return toast.error("Enter a valid 6-digit OTP");
    try {
      const result = await verifyResetOtp({ email: formData.email, otp: resetOtp }).unwrap();
      if (result.success) {
        toast.success(result.message);
        setResetToken(result.resetToken);
        setView('reset-password');
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Invalid OTP");
    }
  };

  const handleResetPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }
    if (formData.newPassword.length < 8) {
      return toast.error("Password must be at least 8 characters");
    }
    try {
      const result = await resetPassword({ 
        email: formData.email, 
        resetToken, 
        newPassword: formData.newPassword 
      }).unwrap();
      
      if (result.success) {
        toast.success(result.message);
        // Reset state and go back to login
        setFormData(prev => ({ ...prev, password: "", newPassword: "", confirmPassword: "" }));
        setRequiresAdminOtp(false);
        setAdminOtp("");
        setResetOtp("");
        setResetToken("");
        setView('login');
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to reset password");
    }
  };

  const renderHeader = () => {
    if (view === 'login') {
      return (
        <>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {requiresAdminOtp ? "Verify Admin Login" : "Welcome Back"}
          </h1>
          <p className="text-muted-foreground">
            {requiresAdminOtp 
              ? "Enter the 6-digit code sent to your email to access the admin portal." 
              : "Sign in to your AECCI Global Deal Room account"}
          </p>
        </>
      );
    }
    if (view === 'forgot-email') {
      return (
        <>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Reset Password</h1>
          <p className="text-muted-foreground">Enter your email and we'll send you an OTP.</p>
        </>
      );
    }
    if (view === 'forgot-otp') {
      return (
        <>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Verify Reset OTP</h1>
          <p className="text-muted-foreground">Enter the 6-digit code sent to {formData.email}</p>
        </>
      );
    }
    if (view === 'reset-password') {
      return (
        <>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Create New Password</h1>
          <p className="text-muted-foreground">Please choose a strong, secure password.</p>
        </>
      );
    }
  };

  const renderForm = () => {
    if (view === 'login') {
      return (
        <form onSubmit={handleLoginSubmit} className="space-y-6">
          {!requiresAdminOtp ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <button 
                    type="button" 
                    onClick={() => setView('forgot-email')}
                    className="text-xs text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-4 flex flex-col items-center">
              <InputOTP maxLength={6} value={adminOtp} onChange={(val) => setAdminOtp(val)}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <div className="text-sm mt-4">
                {timer > 0 ? (
                  <span className="text-muted-foreground">
                    Resend OTP in {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={isLoading}
                    className="text-primary font-medium hover:underline focus:outline-none"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col space-y-4 pt-2">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Please wait..." : requiresAdminOtp ? "Verify & Sign In" : "Sign in"}
            </Button>
            
            {requiresAdminOtp && (
              <Button 
                type="button" 
                variant="ghost" 
                onClick={() => {
                  setRequiresAdminOtp(false);
                  setAdminOtp("");
                }}
                className="w-full text-muted-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to login
              </Button>
            )}
          </div>
        </form>
      );
    }

    if (view === 'forgot-email') {
      return (
        <form onSubmit={handleForgotEmailSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-4 pt-2">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send OTP"}
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => setView('login')}
              className="w-full text-muted-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to login
            </Button>
          </div>
        </form>
      );
    }

    if (view === 'forgot-otp') {
      return (
        <form onSubmit={handleForgotOtpSubmit} className="space-y-6">
          <div className="space-y-4 flex flex-col items-center">
            <InputOTP maxLength={6} value={resetOtp} onChange={(val) => setResetOtp(val)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="flex flex-col space-y-4 pt-2">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify OTP"}
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => {
                setView('forgot-email');
                setResetOtp("");
              }}
              className="w-full text-muted-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Use a different email
            </Button>
          </div>
        </form>
      );
    }

    if (view === 'reset-password') {
      return (
        <form onSubmit={handleResetPasswordSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative">
              <Input
                id="newPassword"
                name="newPassword"
                type={showNewPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.newPassword}
                onChange={handleChange}
                className="pr-10"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="pr-10"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-4 pt-2">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </div>
        </form>
      );
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row w-full overflow-hidden">
      {/* Left Branding / Map Section - Hidden on mobile */}
      <div className="hidden md:flex md:w-5/12 lg:w-1/2 bg-zinc-950 text-white relative">
        <MapBranding />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col relative bg-background overflow-y-auto h-screen">
        <div className="flex-1 w-full max-w-xl mx-auto px-6 py-12 md:px-12 flex flex-col justify-center">
          
          <div className="flex flex-col items-start mb-8">
            {renderHeader()}
          </div>

          {renderForm()}

          {view === 'login' && !requiresAdminOtp && (
            <div className="mt-8 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <button
                onClick={() => navigate("/signup")}
                className="text-primary font-medium hover:underline"
              >
                Sign up
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
