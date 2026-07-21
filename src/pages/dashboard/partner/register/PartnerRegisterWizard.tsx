import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { partnerSignupSchema, type PartnerSignupFormData, initialPartnerFormData } from "./schema";
import { Progress } from "@/components/ui/progress";
import { useSendOtpMutation, useUploadFileMutation, usePartnerSignupMutation } from "@/store/api/authApi";
import { parsePhoneNumber } from "react-phone-number-input";

import Step1Account from "./steps/Step1Account";
import Step2OTP from "./steps/Step2OTP";
import Step3Profile from "./steps/Step3Profile";
import Step4Expertise from "./steps/Step4Expertise";
import Step5Documents from "./steps/Step5Documents";
import Step6Complete from "./steps/Step6Complete";

const getFieldsForStep = (step: number): (keyof PartnerSignupFormData)[] => {
  switch (step) {
    case 1:
      return ["fullName", "email", "mobile", "country", "password", "confirmPassword"];
    case 2:
      return [];
    case 3:
      return ["professionalTitle", "organization", "yearsOfExperience", "nationality", "languagesSpoken", "bio", "motivation"];
    case 4:
      return ["expertiseCountries", "expertiseSectors", "linkedinProfileUrl", "websiteUrl"];
    case 5:
      return ["governmentId", "agreedToTerms"];
    default:
      return [];
  }
};

export default function PartnerRegisterWizard() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [sendOtp] = useSendOtpMutation();
  const [uploadFile] = useUploadFileMutation();
  const [partnerSignup] = usePartnerSignupMutation();

  const methods = useForm<PartnerSignupFormData>({
    resolver: zodResolver(partnerSignupSchema),
    defaultValues: initialPartnerFormData as PartnerSignupFormData,
    mode: "onChange",
  });

  const nextStep = async () => {
    const fields = getFieldsForStep(step);
    let isValid = true;

    if (fields.length > 0) {
      isValid = await methods.trigger(fields);
    }

    if (!isValid) return;

    if (step === 1) {
      setIsSubmitting(true);
      try {
        const { email, fullName } = methods.getValues();
        const res = await sendOtp({ email, fullName }).unwrap();
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

    if (step === 5) {
      setIsSubmitting(true);
      try {
        const data = methods.getValues();

        const uploadSingleStr = async (file: File | string | null | undefined, folder: string) => {
          if (!file) return undefined;
          if (typeof file === "string") return file;
          const res = await uploadFile({ file, folder }).unwrap();
          return res.success ? res.data.url : undefined;
        };

        const uploadFileObj = async (file: File | string | null | undefined, folder: string, typeName: string) => {
          if (!file) return undefined;
          let fileName: string;
          let url: string;
          if (typeof file === "string") {
            url = file;
            fileName = file.split('/').pop() || 'file';
          } else {
            const res = await uploadFile({ file, folder }).unwrap();
            if (!res.success) return undefined;
            url = res.data.url;
            fileName = file.name;
          }
          return { name: fileName, url, type: typeName };
        };

        const [profilePictureUrl, govIdObj, profCertObj, bizProofObj] = await Promise.all([
          uploadSingleStr(data.profilePicture, "partner-avatars"),
          uploadFileObj(data.governmentId, "partner-docs", "governmentId"),
          uploadFileObj(data.professionalCert, "partner-docs", "professionalCert"),
          uploadFileObj(data.businessProof, "partner-docs", "businessProof"),
        ]);

        const uploadedFiles = [govIdObj, profCertObj, bizProofObj].filter(Boolean);

        let countryCode = "";
        let cleanMobile = data.mobile;
        try {
          if (data.mobile) {
            const parsed = parsePhoneNumber(data.mobile);
            if (parsed) {
              countryCode = `+${parsed.countryCallingCode}`;
              cleanMobile = parsed.nationalNumber;
            }
          }
        } catch (e) {
          console.log(e);
        }

        const res = await partnerSignup({
          email: data.email,
          password: data.password,
          fullName: data.fullName,
          mobileNumber: cleanMobile,
          countryCode: countryCode,
          country: data.country,
          nationality: data.nationality,
          professionalTitle: data.professionalTitle,
          organization: data.organization,
          yearsOfExperience: data.yearsOfExperience,
          languagesSpoken: data.languagesSpoken,
          bio: data.bio,
          motivation: data.motivation,
          expertiseCountries: data.expertiseCountries,
          expertiseSectors: data.expertiseSectors,
          linkedinProfileUrl: data.linkedinProfileUrl,
          websiteUrl: data.websiteUrl,
          references: data.references,
          profilePicture: profilePictureUrl,
          governmentId: govIdObj?.url,
          professionalCert: profCertObj?.url,
          businessProof: bizProofObj?.url,
          uploadedFiles: uploadedFiles,
        }).unwrap();

        if (res.success) {
          toast.success(res.message || "Application submitted!");
          setStep(6);
        } else {
          toast.error(res.message || "Submission failed");
        }
      } catch (err: any) {
        toast.error(err.data?.message || "An error occurred during submission");
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    setStep((s) => Math.min(s + 1, 6));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const progressValue = (step / 6) * 100;

  return (
    <div className="w-full flex flex-col h-full relative pb-10">
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
              {step === 1 && <Step1Account nextStep={nextStep} />}
              {step === 2 && <Step2OTP nextStep={nextStep} />}
              {step === 3 && <Step3Profile nextStep={nextStep} />}
              {step === 4 && <Step4Expertise nextStep={nextStep} />}
              {step === 5 && <Step5Documents nextStep={nextStep} isSubmitting={isSubmitting} />}
              {step === 6 && <Step6Complete />}
            </motion.div>
          </AnimatePresence>
        </div>
      </FormProvider>
    </div>
  );
}
