import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useFormContext, useWatch } from "react-hook-form";
import type { PartnerSignupFormData } from "../schema";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useVerifyOtpMutation } from "@/store/api/authApi";

interface Props {
  nextStep: () => void;
}

export default function Step2OTP({ nextStep }: Props) {
  const { control } = useFormContext<PartnerSignupFormData>();
  const email = useWatch({ control, name: "email" });

  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);

  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeLeft]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const handleVerify = async () => {
    try {
      const res = await verifyOtp({ email, otp }).unwrap();
      if (res.success) {
        toast.success(res.message || "OTP verified!");
        nextStep();
      } else {
        toast.error(res.message || "Invalid OTP");
      }
    } catch (err: any) {
      toast.error(err.data?.message || "Verification failed");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Verify Your Email
        </h1>
        <p className="text-muted-foreground text-sm">
          We've sent a one-time password to your email address.
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Email OTP</Label>
            <span className="text-xs text-muted-foreground">Sent to {email}</span>
          </div>
          <div className="flex justify-center w-full">
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup className="gap-2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <InputOTPSlot key={i} index={i} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>

        <div className="pt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Didn't receive a code?{" "}
            {timeLeft > 0 ? (
              <span className="font-medium text-foreground">
                Resend in {formatTime(timeLeft)}
              </span>
            ) : (
              <button
                onClick={() => setTimeLeft(120)}
                className="text-primary font-medium hover:underline"
                type="button"
              >
                Resend OTP
              </button>
            )}
          </p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <Button
          className="w-full"
          size="lg"
          onClick={(e) => {
            e.preventDefault();
            handleVerify();
          }}
          disabled={otp.length !== 6 || isLoading}
          type="button"
        >
          {isLoading ? "Verifying..." : "Verify & Continue"}
        </Button>
      </div>
    </div>
  );
}
