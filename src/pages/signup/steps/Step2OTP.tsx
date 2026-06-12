import { useState, useEffect } from "react";
import type { SignupFormData } from "../types";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

interface Props {
  data: SignupFormData;
  updateData: (data: Partial<SignupFormData>) => void;
  nextStep: () => void;
}

export default function Step2OTP({ data, nextStep }: Props) {
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(120);
    // Add logic to trigger actual resend API here later
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const isVerified = emailOtp.length === 6 && mobileOtp.length === 6;

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-2">Verify Your Contact Details</h1>
        <p className="text-muted-foreground text-sm">
          We've sent one-time passwords to your email and mobile number.
        </p>
      </div>

      <div className="space-y-8">
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Email OTP</Label>
            <span className="text-xs text-muted-foreground">Sent to {data.email}</span>
          </div>
          <div className="flex justify-center w-full">
            <InputOTP maxLength={6} value={emailOtp} onChange={setEmailOtp}>
              <InputOTPGroup className="gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Mobile OTP</Label>
            <span className="text-xs text-muted-foreground">Sent to {data.mobile}</span>
          </div>
          <div className="flex justify-center w-full">
            <InputOTP maxLength={6} value={mobileOtp} onChange={setMobileOtp}>
              <InputOTPGroup className="gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>

        <div className="pt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Didn't receive a code?{" "}
            {timeLeft > 0 ? (
              <span className="font-medium text-foreground">Resend in {formatTime(timeLeft)}</span>
            ) : (
              <button 
                onClick={handleResend}
                className="text-primary font-medium hover:underline"
              >
                Resend OTPs
              </button>
            )}
          </p>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <Button
          className="w-full"
          size="lg"
          onClick={nextStep}
          disabled={!isVerified}
        >
          Verify & Continue
        </Button>
      </div>
    </div>
  );
}
