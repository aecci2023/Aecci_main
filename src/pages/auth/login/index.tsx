import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  useLoginMutation,
  useForgotPasswordMutation,
  useVerifyResetOtpMutation,
  useResetPasswordMutation,
} from "@/store/api/authApi";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  Mail,
  Lock,
  Globe,
  TrendingUp,
  ShieldCheck,
  Headphones
} from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type ViewState = "login" | "forgot-email" | "forgot-otp" | "reset-password";

export default function LoginPage() {
  const navigate = useNavigate();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [forgotPassword, { isLoading: isForgotLoading }] =
    useForgotPasswordMutation();
  const [verifyResetOtp, { isLoading: isVerifyOtpLoading }] =
    useVerifyResetOtpMutation();
  const [resetPassword, { isLoading: isResetLoading }] =
    useResetPasswordMutation();

  const [view, setView] = useState<ViewState>("login");

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

  const isLoading =
    isLoginLoading || isForgotLoading || isVerifyOtpLoading || isResetLoading;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = requiresAdminOtp
        ? { email: formData.email, password: formData.password, otp: adminOtp }
        : { email: formData.email, password: formData.password };
      const result = await login(payload).unwrap();

      if (result.data?.requiresOtp) {
        setRequiresAdminOtp(true);
        setTimer(120);
        toast.success(result.message || "OTP sent to your email");
        return;
      }

      if (result.success) {
        const { accessToken, refreshToken, user } = result.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(user));

        if (user.role === "admin") {
          toast.success("Logged in successfully");
          navigate("/admin/dashboard");
        } else if (user.role === "partner") {
          if (user.verificationStatus === "pending_verification") {
            toast.warning("Your application is under review. We'll notify you once approved.");
            return;
          }
          toast.success("Logged in successfully");
          navigate("/partner/dashboard");
        } else if (user.role === "importer") {
          if (user.verificationStatus === "pending_verification") {
            toast.warning("Your application is under review. We'll notify you once approved.");
            return;
          }
          if (user.verificationStatus === "rejected") {
            navigate("/importer/rejected");
            return;
          }
          toast.success("Logged in successfully");
          navigate("/importer/dashboard");
        } else if (user.role === "agent") {
          if (user.verificationStatus === "pending_verification") {
            toast.warning("Your account is under review. You'll be notified once approved.");
            return;
          }
          if (user.verificationStatus === "rejected") {
            navigate("/agent/rejected");
            return;
          }
          toast.success("Logged in successfully");
          navigate("/agent/dashboard");
        } else {
          if (user.verificationStatus === "pending_verification") {
            toast.warning("Your account is under review. You'll be notified once approved.");
            return;
          }
          if (user.verificationStatus === "rejected") {
            navigate("/dashboard/rejected");
            return;
          }
          toast.success("Logged in successfully");
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
        setView("forgot-otp");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to send reset OTP");
    }
  };

  const handleForgotOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetOtp || resetOtp.length !== 6)
      return toast.error("Enter a valid 6-digit OTP");
    try {
      const result = await verifyResetOtp({
        email: formData.email,
        otp: resetOtp,
      }).unwrap();
      if (result.success) {
        toast.success(result.message);
        setResetToken(result.resetToken);
        setView("reset-password");
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
        newPassword: formData.newPassword,
      }).unwrap();

      if (result.success) {
        toast.success(result.message);
        // Reset state and go back to login
        setFormData((prev) => ({
          ...prev,
          password: "",
          newPassword: "",
          confirmPassword: "",
        }));
        setRequiresAdminOtp(false);
        setAdminOtp("");
        setResetOtp("");
        setResetToken("");
        setView("login");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to reset password");
    }
  };

  const renderHeader = () => {
    if (view === "login") {
      return (
        <div className="text-center mb-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {requiresAdminOtp ? "Verify Admin Login" : "Login to Your Account"}
          </h2>
          <p className="text-slate-500 text-xs mt-1.5 font-medium">
            {requiresAdminOtp
              ? "Enter the 6-digit code sent to your email to access the admin portal."
              : "Enter your credentials to continue"}
          </p>
        </div>
      );
    }
    if (view === "forgot-email") {
      return (
        <div className="text-center mb-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Reset Password</h2>
          <p className="text-slate-500 text-xs mt-1.5 font-medium">
            Enter your email and we'll send you an OTP.
          </p>
        </div>
      );
    }
    if (view === "forgot-otp") {
      return (
        <div className="text-center mb-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Verify Reset OTP</h2>
          <p className="text-slate-500 text-xs mt-1.5 font-medium">
            Enter the 6-digit code sent to {formData.email}
          </p>
        </div>
      );
    }
    if (view === "reset-password") {
      return (
        <div className="text-center mb-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Create New Password</h2>
          <p className="text-slate-500 text-xs mt-1.5 font-medium">
            Please choose a strong, secure password.
          </p>
        </div>
      );
    }
  };

  const renderForm = () => {
    if (view === "login") {
      return (
        <form onSubmit={handleLoginSubmit} className="space-y-3.5">
          {!requiresAdminOtp ? (
            <>
              {/* Email Address */}
              <div className="text-left">
                <label className="text-[13px] font-semibold text-slate-700 block mb-1">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                    <Mail size={16} />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition text-slate-800 bg-white placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="text-left">
                <label className="text-[13px] font-semibold text-slate-700 block mb-1">Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                    <Lock size={16} />
                  </span>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition text-slate-800 bg-white placeholder:text-slate-400"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-300 text-[#0A1A3A] focus:ring-[#0A1A3A]/20"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={() => setView("forgot-email")}
                  className="text-blue-600 hover:text-blue-800 font-bold hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            </>
          ) : (
            /* Admin OTP Verification */
            <div className="space-y-4 flex flex-col items-center py-4 bg-gray-50 rounded-2xl border border-gray-100">
              <InputOTP
                maxLength={6}
                value={adminOtp}
                onChange={(val) => setAdminOtp(val)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="bg-white" />
                  <InputOTPSlot index={1} className="bg-white" />
                  <InputOTPSlot index={2} className="bg-white" />
                  <InputOTPSlot index={3} className="bg-white" />
                  <InputOTPSlot index={4} className="bg-white" />
                  <InputOTPSlot index={5} className="bg-white" />
                </InputOTPGroup>
              </InputOTP>
              <div className="text-xs mt-2">
                {timer > 0 ? (
                  <span className="text-gray-500 font-medium">
                    Resend OTP in {Math.floor(timer / 60)}:
                    {(timer % 60).toString().padStart(2, "0")}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={isLoading}
                    className="text-blue-600 font-bold hover:underline focus:outline-none"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col space-y-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
            >
              {isLoading ? (
                "Please wait..."
              ) : (
                <>
                  <Lock size={16} className="text-white shrink-0" />
                  {requiresAdminOtp ? "Verify & Sign In" : "Login"}
                </>
              )}
            </button>

            {requiresAdminOtp && (
              <button
                type="button"
                onClick={() => {
                  setRequiresAdminOtp(false);
                  setAdminOtp("");
                }}
                className="w-full py-2.5 text-gray-500 hover:text-gray-800 text-xs font-semibold flex items-center justify-center gap-1 hover:bg-gray-50 rounded-xl transition"
              >
                <ArrowLeft size={14} />
                Back to login
              </button>
            )}
          </div>
        </form>
      );
    }

    if (view === "forgot-email") {
      return (
        <form onSubmit={handleForgotEmailSubmit} className="space-y-3.5">
          <div className="space-y-1 text-left">
            <label className="text-xs font-semibold text-gray-700 block">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                <Mail size={16} />
              </span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition text-slate-800 bg-white placeholder:text-slate-400"
                required
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition duration-200 text-sm disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </button>
            <button
              type="button"
              onClick={() => setView("login")}
              className="w-full py-2.5 text-gray-500 hover:text-gray-800 text-xs font-semibold flex items-center justify-center gap-1 hover:bg-gray-50 rounded-xl transition"
            >
              <ArrowLeft size={14} />
              Back to login
            </button>
          </div>
        </form>
      );
    }

    if (view === "forgot-otp") {
      return (
        <form onSubmit={handleForgotOtpSubmit} className="space-y-4">
          <div className="space-y-4 flex flex-col items-center py-4 bg-gray-50 rounded-2xl border border-gray-100">
            <InputOTP
              maxLength={6}
              value={resetOtp}
              onChange={(val) => setResetOtp(val)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="bg-white" />
                <InputOTPSlot index={1} className="bg-white" />
                <InputOTPSlot index={2} className="bg-white" />
                <InputOTPSlot index={3} className="bg-white" />
                <InputOTPSlot index={4} className="bg-white" />
                <InputOTPSlot index={5} className="bg-white" />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="flex flex-col space-y-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg transition duration-200 text-sm disabled:opacity-50"
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
            <button
              type="button"
              onClick={() => {
                setView("forgot-email");
                setResetOtp("");
              }}
              className="w-full py-2.5 text-gray-500 hover:text-gray-800 text-xs font-semibold flex items-center justify-center gap-1 hover:bg-gray-50 rounded-xl transition"
            >
              <ArrowLeft size={14} />
              Use a different email
            </button>
          </div>
        </form>
      );
    }

    if (view === "reset-password") {
      return (
        <form onSubmit={handleResetPasswordSubmit} className="space-y-3.5">
          <div className="space-y-1 text-left">
            <label className="text-[13px] font-semibold text-slate-700 block mb-1">New Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <Lock size={16} />
              </span>
              <input
                id="newPassword"
                name="newPassword"
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition text-slate-800 bg-white placeholder:text-slate-400"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-gray-600"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div className="space-y-1 text-left">
            <label className="text-[13px] font-semibold text-slate-700 block mb-1">Confirm Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <Lock size={16} />
              </span>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition text-slate-800 bg-white placeholder:text-slate-400"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition duration-200 text-sm disabled:opacity-50"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </form>
      );
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center py-6 bg-[#040D1A] overflow-y-auto"
      style={{
        backgroundImage: `url('/login_earth_background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-950/45 z-0" />

      {/* Grid Container */}
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Column - Welcome and Benefits */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 leading-tight">
              Welcome Back to
            </h1>
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent block text-3xl md:text-5xl font-extrabold tracking-tight">
              AECCI Global Deal Room
            </span>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mt-4 leading-relaxed">
              Login to your account to connect with global businesses, access deal rooms, insights and growth opportunities.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4"
          >
            {/* Benefit 1 */}
            <motion.div
              variants={staggerItem}
              whileHover={{ x: 6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
            >
              <div className="bg-[#4c9dff]/10 p-3 rounded-full border border-[#4c9dff]/25 text-[#4c9dff] flex-shrink-0">
                <Globe size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Global Network</h4>
                <p className="text-slate-400 text-xs mt-0.5 leading-normal">
                  Connect with verified businesses in 50+ countries
                </p>
              </div>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              variants={staggerItem}
              whileHover={{ x: 6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
            >
              <div className="bg-emerald-500/10 p-3 rounded-full border border-emerald-500/25 text-emerald-400 flex-shrink-0">
                <TrendingUp size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Business Growth</h4>
                <p className="text-slate-400 text-xs mt-0.5 leading-normal">
                  Discover new markets and opportunities
                </p>
              </div>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              variants={staggerItem}
              whileHover={{ x: 6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
            >
              <div className="bg-purple-500/10 p-3 rounded-full border border-purple-500/25 text-purple-400 flex-shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Secure &amp; Trusted</h4>
                <p className="text-slate-400 text-xs mt-0.5 leading-normal">
                  Your data and business interests are protected
                </p>
              </div>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div
              variants={staggerItem}
              whileHover={{ x: 6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-default"
            >
              <div className="bg-amber-500/10 p-3 rounded-full border border-amber-500/25 text-amber-400 flex-shrink-0">
                <Headphones size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Dedicated Support</h4>
                <p className="text-slate-400 text-xs mt-0.5 leading-normal">
                  Our team is here to support your global journey
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Secure Platform Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="pt-6 cursor-default"
          >
            <div className="bg-[#051426]/60 backdrop-blur-md border border-[#1e2d42]/60 hover:border-[#4c9dff]/30 rounded-2xl p-5 max-w-md flex items-start gap-4 shadow-lg transition-all duration-300">
              <div className="bg-[#4c9dff]/10 p-3 rounded-xl border border-[#4c9dff]/20 text-[#4c9dff] flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Secure Platform</h4>
                <p className="text-slate-400 text-xs mt-1 leading-normal">
                  AECCI Global Deal Room is a secure, trusted platform for international business collaboration.
                </p>
                <div className="flex items-center gap-2 mt-3 text-[10px]">
                  <span className="text-emerald-400 font-semibold bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">100% Verified Members</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-sky-400 font-semibold bg-sky-500/5 px-2 py-0.5 rounded border border-sky-500/10">Confidential &amp; Safe</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 25, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_25px_50px_rgba(0,0,0,0.35)] border border-gray-100 flex flex-col gap-4 w-full max-w-md relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={view + (requiresAdminOtp ? "-otp" : "")}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex flex-col gap-4 w-full"
              >
                {/* Header */}
                {renderHeader()}

                {/* Form */}
                {renderForm()}

                {/* Social Logins, signup links & help desk - only for login view */}
                {view === "login" && !requiresAdminOtp && (
                  <>


                    {/* Create Account Link */}
                    <div className="text-center text-xs text-slate-500 font-semibold pt-0.5">
                      New to AECCI Global Deal Room?{" "}
                      <button
                        onClick={() => navigate("/interest-form")}
                        className="text-[#2563eb] hover:text-[#1d4ed8] font-bold hover:underline inline-flex items-center gap-0.5"
                      >
                        Create your account &rarr;
                      </button>
                    </div>

                    {/* Support Banner */}
                    <div className="bg-[#f0f6fc] border border-[#e1eefc] rounded-2xl p-3 flex items-center gap-3 shadow-sm text-left">
                      <div className="text-blue-600 bg-blue-50 p-2 rounded-xl flex-shrink-0">
                        <Headphones size={18} />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 text-[11px] leading-none">Need help logging in?</h5>
                        <p className="text-[10px] text-slate-500 mt-1">
                          Contact our support team at{" "}
                          <a href="mailto:support@aecci.org.in" className="text-[#2563eb] font-bold hover:underline">
                            support@aecci.org.in
                          </a>
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
