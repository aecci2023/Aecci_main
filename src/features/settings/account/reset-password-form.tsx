import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import {
  useForgotPasswordMutation,
  useVerifyResetOtpMutation,
  useResetPasswordMutation,
} from "@/store/api/authApi";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const resetPasswordFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  otp: z.string().optional(),
  newPassword: z.string().optional(),
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordFormSchema>;

export function ResetPasswordForm() {
  const [step, setStep] = useState<"email" | "otp" | "password">("email");
  const [resetToken, setResetToken] = useState<string>("");
  const { user } = useAuth();

  const [forgotPassword, { isLoading: isSendingOtp }] = useForgotPasswordMutation();
  const [verifyOtp, { isLoading: isVerifying }] = useVerifyResetOtpMutation();
  const [resetPassword, { isLoading: isResetting }] = useResetPasswordMutation();

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      email: user?.email || "",
      otp: "",
      newPassword: "",
    },
  });

  async function onSubmit(data: ResetPasswordFormValues) {
    if (step === "email") {
      try {
        const res = await forgotPassword({ email: data.email }).unwrap();
        toast.success(res.message || "OTP sent to your email");
        setStep("otp");
      } catch (error: any) {
        toast.error(error?.data?.message || "Failed to send OTP");
      }
    } else if (step === "otp") {
      if (!data.otp) {
        form.setError("otp", { message: "OTP is required", type: "manual" });
        return;
      }
      try {
        const res = await verifyOtp({ email: data.email, otp: data.otp }).unwrap();
        setResetToken(res.resetToken);
        toast.success(res.message || "OTP verified successfully");
        setStep("password");
      } catch (error: any) {
        toast.error(error?.data?.message || "Invalid OTP");
      }
    } else if (step === "password") {
      if (!data.newPassword || data.newPassword.length < 8) {
        form.setError("newPassword", { message: "Password must be at least 8 characters.", type: "manual" });
        return;
      }
      try {
        const res = await resetPassword({ 
          email: data.email, 
          resetToken, 
          newPassword: data.newPassword 
        }).unwrap();
        toast.success(res.message || "Password reset successfully");
        setStep("email");
        form.reset({ email: data.email, otp: "", newPassword: "" });
        setResetToken("");
      } catch (error: any) {
        toast.error(error?.data?.message || "Failed to reset password");
      }
    }
  }

  const isSubmitting = isSendingOtp || isVerifying || isResetting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} disabled />
              </FormControl>
              {step === "email" && (
                <FormDescription>
                  We'll send an OTP to this email address to reset your password.
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        
        {step === "otp" && (
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>One-Time Password (OTP)</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Enter the 6-digit code sent to your email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {step === "password" && (
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter new password" {...field} />
                </FormControl>
                <FormDescription>
                  Your password must be at least 8 characters long.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit" disabled={isSubmitting}>
          {step === "email" && (isSubmitting ? "Sending OTP..." : "Send OTP")}
          {step === "otp" && (isSubmitting ? "Verifying..." : "Verify OTP")}
          {step === "password" && (isSubmitting ? "Resetting..." : "Reset Password")}
        </Button>
      </form>
    </Form>
  );
}
