import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData, initialFormData } from "../schema";

import Step1Registration from "../steps/Step1Registration";
import Step2OTP from "../steps/Step2OTP";

import { Progress } from "@/components/ui/progress";
import Step3Profile from "../steps/Step3Profile";
import Step4Details from "../steps/Step4Details";
import Step5Uploads from "../steps/Step5Uploads";
import Step6Complete from "../steps/Step6Complete";

const getFieldsForStep = (
  step: number,
  userType: string,
  country: string,
): (keyof SignupFormData)[] => {
  switch (step) {
    case 1:
      return [
        "fullName",
        "email",
        "mobile",
        "password",
        "confirmPassword",
        "country",
        "userType",
        ...(userType === "business" ? ["companyName" as const] : []),
      ];
    case 2:
      return []; // OTP handled inside step or separately
    case 3:
      if (userType === "business") {
        return [
          "companyName",
          "yearEstablished",
          "companySize",
          "turnover",
          "websiteUrl",
          "linkedinUrl",
          "industrySector",
          "businessAddress",
          "legalStructure",
          ...(country === "India"
            ? ["iecNumber", "gstNumber", "panNumber"]
            : ["internationalBusinessIds"]),
        ] as (keyof SignupFormData)[];
      } else {
        return [
          "professionalTitle",
          "nationality",
          "linkedinProfileUrl",
          "yearsOfExperience",
          ...(country === "India"
            ? ["aadharNumber", "panNumber"]
            : ["internationalKycIds"]),
        ] as (keyof SignupFormData)[];
      }
    case 4:
      if (userType === "business") {
        return [
          "businessRole",
          "products",
          "targetMarkets",
          "keyCertifications",
          "experience",
          "objective",
        ];
      } else {
        return [
          "expertiseAreas",
          "sectorsOfInterest",
          "languagesSpoken",
          "experience",
          "objective",
        ];
      }
    case 5:
      return ["agreedToTerms", "documents", "productCatalogue"];
    default:
      return [];
  }
};

export default function SignupWizard() {
  const [step, setStep] = useState(1);

  const methods = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: initialFormData,
    mode: "onChange",
  });

  const userType = methods.watch("userType");
  const country = methods.watch("country");

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(step, userType, country);
    let isValid = true;

    if (fieldsToValidate.length > 0) {
      isValid = await methods.trigger(fieldsToValidate);
    }

    if (isValid) {
      setStep((s) => Math.min(s + 1, 6));
    }
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

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
              {step === 3 && <Step3Profile nextStep={nextStep} />}
              {step === 4 && <Step4Details nextStep={nextStep} />}
              {step === 5 && <Step5Uploads nextStep={nextStep} />}
              {step === 6 && <Step6Complete />}
            </motion.div>
          </AnimatePresence>
        </div>
      </FormProvider>
    </div>
  );
}
