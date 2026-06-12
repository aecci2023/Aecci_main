import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { type SignupFormData, initialFormData } from "../types";

import Step1Registration from "../steps/Step1Registration";
import Step2OTP from "../steps/Step2OTP";

import { Progress } from "@/components/ui/progress";
import Step3Profile from "../steps/Step3Profile";
import Step4Details from "../steps/Step4Details";
import Step5Uploads from "../steps/Step5Uploads";
import Step6Complete from "../steps/Step6Complete";

export default function SignupWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SignupFormData>(initialFormData);

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const updateData = (data: Partial<SignupFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const progressValue = (step / 6) * 100;

  return (
    <div className="w-full flex flex-col h-full relative pb-10">
      {/* Header & Progress */}
      {step < 6 && (
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
              Step {step} of 5
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

      {/* Step Content */}
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
            {step === 1 && (
              <Step1Registration data={formData} updateData={updateData} nextStep={nextStep} />
            )}
            {step === 2 && (
              <Step2OTP data={formData} updateData={updateData} nextStep={nextStep} />
            )}
            {step === 3 && (
              <Step3Profile data={formData} updateData={updateData} nextStep={nextStep} />
            )}
            {step === 4 && (
              <Step4Details data={formData} updateData={updateData} nextStep={nextStep} />
            )}
            {step === 5 && (
              <Step5Uploads data={formData} updateData={updateData} nextStep={nextStep} />
            )}
            {step === 6 && (
              <Step6Complete data={formData} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
