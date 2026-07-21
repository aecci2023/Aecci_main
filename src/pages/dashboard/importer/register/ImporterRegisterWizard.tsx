import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { importerSignupSchema, type ImporterSignupFormData, initialImporterFormData } from "./schema";
import { Progress } from "@/components/ui/progress";
import { useSendOtpMutation, useImporterSignupMutation } from "@/store/api/authApi";

import Step1Registration from "./steps/Step1Registration";
import Step2OTP from "./steps/Step2OTP";
import Step3Business from "./steps/Step3Business";
import Step6Complete from "./steps/Step6Complete";

const getFieldsForStep = (step: number, userType: string): (keyof ImporterSignupFormData)[] => {
  switch (step) {
    case 1:
      return [
        "userType",
        "fullName",
        "email",
        "mobileNumber",
        "countryCode",
        "password",
        "confirmPassword",
        "country",
        "professionalTitle",
        "referralSource",
        ...(userType === "business" ? ["companyName" as const] : []),
      ];
    case 2:
      return []; // OTP doesn't validate schema fields directly
    case 3:
      return ["businessRole", "importVolume", "products", "targetMarkets", "agreedToTerms"];
    default:
      return [];
  }
};

export default function ImporterRegisterWizard() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [sendOtp] = useSendOtpMutation();
  const [importerSignup] = useImporterSignupMutation();

  const methods = useForm<ImporterSignupFormData>({
    resolver: zodResolver(importerSignupSchema),
    defaultValues: initialImporterFormData as ImporterSignupFormData,
    mode: "onChange",
  });

  const userType = useWatch({ control: methods.control, name: "userType" });

  const nextStep = async () => {
    const fields = getFieldsForStep(step, userType);
    let isValid = true;

    if (fields.length > 0) {
      isValid = await methods.trigger(fields);
    }

    if (!isValid) return;

    if (step === 1) {
      setIsSubmitting(true);
      try {
        const data = methods.getValues();

        let countryCode = "";
        let cleanMobile = data.mobileNumber;
        try {
          // Dynamic import of parsePhoneNumber to avoid bundle size if not needed everywhere, 
          // or we can just use regular import. The library is "react-phone-number-input"
          const { parsePhoneNumber } = await import("react-phone-number-input");
          if (data.mobileNumber) {
            const parsed = parsePhoneNumber(data.mobileNumber);
            if (parsed) {
              countryCode = `+${parsed.countryCallingCode}`;
              cleanMobile = parsed.nationalNumber;
            }
          }
        } catch (e) {
          console.log(e);
        }

        const res = await sendOtp({
          email: data.email,
          fullName: data.fullName,
          mobileNumber: cleanMobile,
          countryCode
        }).unwrap();

        if (res.success) {
          toast.success(res.message || "OTP sent to your email!");
          setStep(2);
        } else {
          toast.error(res.message || "Failed to send OTP");
        }
      } catch (err: any) {
        toast.error(err.data?.message || "An error occurred");
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    if (step === 3) {
      setIsSubmitting(true);
      try {
        const data = methods.getValues();

        const res = await importerSignup(data).unwrap();

        if (res.success) {
          toast.success(res.message || "Registration successful!");
          setStep(4);
        } else {
          toast.error(res.message || "Registration failed");
        }
      } catch (err: any) {
        toast.error(err.data?.message || "An error occurred during registration");
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    setStep((s) => Math.min(s + 1, 4));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const progressValue = (step / 3) * 100;

  return (
    <div className="w-full flex flex-col h-full relative pb-10">
      {step < 4 && (
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
              Step {step} of 3
            </h2>
            {step > 1 && (
              <button
                onClick={prevStep}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Back
              </button>
            )}
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>
      )}

      <FormProvider {...methods}>
        <div className="flex-1 flex flex-col relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              {step === 1 && <Step1Registration nextStep={nextStep} />}
              {step === 2 && <Step2OTP nextStep={nextStep} />}
              {step === 3 && <Step3Business nextStep={nextStep} isSubmitting={isSubmitting} />}
              {step === 4 && <Step6Complete />}
            </motion.div>
          </AnimatePresence>
        </div>
      </FormProvider>
    </div>
  );
}
