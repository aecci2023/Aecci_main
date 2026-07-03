import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { signupSchema, type SignupFormData, initialFormData } from "../schema";
import {
  useUploadFileMutation,
  useSignupMutation,
  useSendOtpMutation,
  useUpdateProfileMutation,
} from "../../../store/api/authApi";

import Step1Registration from "../steps/Step1Registration";
import Step2OTP from "../steps/Step2OTP";
import { parsePhoneNumber } from "react-phone-number-input";

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
            : ["internationalIds"]),
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
  const [searchParams] = useSearchParams();
  const isResubmit = searchParams.get("resubmit") === "true";
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [uploadFile] = useUploadFileMutation();
  const [sendOtp] = useSendOtpMutation();
  const [signup] = useSignupMutation();
  const [updateProfile] = useUpdateProfileMutation();
  const navigate = useNavigate();

  const methods = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: initialFormData,
    mode: "onChange",
  });

  useEffect(() => {
    if (isResubmit) {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          methods.reset({
            ...initialFormData,
            ...user,
            mobile: user.mobileNumber || "",
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }, [isResubmit, methods]);

  const userType = useWatch({ control: methods.control, name: "userType" });
  const country = useWatch({ control: methods.control, name: "country" });

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(step, userType, country);
    let isValid = true;

    if (fieldsToValidate.length > 0) {
      isValid = await methods.trigger(fieldsToValidate);
    }

    if (isValid) {
      if (step === 1) {
        setIsSubmitting(true);
        try {
          const data = methods.getValues();
          
          let countryCode = "";
          let cleanMobile = data.mobile;
          try {
            const { parsePhoneNumber } = await import("react-phone-number-input");
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

          const submitData = {
            email: data.email,
            fullName: data.fullName,
            mobileNumber: cleanMobile,
            countryCode,
          };
          const res = await sendOtp(submitData).unwrap();
          if (res.success) {
            toast.success(res.message || "OTP sent to your email!");
            setStep(2);
          } else {
            toast.error(res.message || "Registration failed");
          }
        } catch (error: any) {
          toast.error(
            error.data?.message || "An error occurred during registration",
          );
        } finally {
          setIsSubmitting(false);
        }
      } else if (step === 5) {
        setIsSubmitting(true);
        try {
          const data = methods.getValues();

          // Helper to upload files and get URLs
          const uploadFiles = async (
            files: (File | string)[],
            folder: string,
            fileType: string,
          ) => {
            const uploaded: { name: string; url: string; type: string }[] = [];
            for (const file of files) {
              if (typeof file === "string") {
                uploaded.push({ name: file.split('/').pop() || 'file', url: file, type: fileType });
              } else {
                const res = await uploadFile({ file, folder }).unwrap();
                if (res.success) {
                  uploaded.push({ name: file.name, url: res.data.url, type: fileType });
                }
              }
            }
            return uploaded;
          };

          const uploadedDocuments =
            data.documents && data.documents.length > 0
              ? await uploadFiles(data.documents, "documents", "document")
              : [];
          const uploadedCatalogue =
            data.productCatalogue && data.productCatalogue.length > 0
              ? await uploadFiles(data.productCatalogue, "catalog", "product_catalogue")
              : [];

          const allUploadedFiles = [...uploadedDocuments, ...uploadedCatalogue];

          // Map the rest of the profile data
          const profileData: Record<string, any> = { ...data };
          delete profileData.confirmPassword;
          delete profileData.agreedToTerms;
          delete profileData.documents;
          delete profileData.productCatalogue;

          // Map mobile to mobileNumber for backend compatibility
          const mobileNumber = profileData.mobile;
          delete profileData.mobile;
          
          let countryCode = "";
          let cleanMobile = mobileNumber;
          try {
            if (mobileNumber) {
              const parsed = parsePhoneNumber(mobileNumber);
              if (parsed) {
                countryCode = `+${parsed.countryCallingCode}`;
                cleanMobile = parsed.nationalNumber;
              }
            }
          } catch (e) {
            // fallback
            console.log(e)
          }

          const submitData = {
            ...profileData,
            mobileNumber: cleanMobile,
            countryCode,
            uploadedFiles: allUploadedFiles,
          };

          if (isResubmit) {
            const res = await updateProfile({
              ...submitData,
              resubmit: true,
            }).unwrap();
            if (res.success) {
              const userStr = localStorage.getItem("user");
              if (userStr) {
                const user = JSON.parse(userStr);
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    ...user,
                    ...res.data,
                    verificationStatus: "pending_verification",
                  }),
                );
              }
              toast.success("Application resubmitted successfully!");
              setStep(6);
            } else {
              toast.error(res.message || "Resubmission failed");
            }
          } else {
            const res = await signup(submitData).unwrap();
            if (res.success) {
              localStorage.setItem("accessToken", res.data.accessToken);
              localStorage.setItem("refreshToken", res.data.refreshToken);
              toast.success(res.message || "Registration complete!");
              setStep(6);
            } else {
              toast.error(res.message || "Registration failed");
            }
          }
        } catch (error: any) {
          console.error("Registration failed:", error);
          toast.error(
            error.data?.message ||
              "An error occurred during final registration",
          );
        } finally {
          setIsSubmitting(false);
        }
      } else {
        setStep((s) => Math.min(s + 1, 6));
      }
    }
  };

  const prevStep = () => {
    if (isResubmit && step === 3) {
      navigate("/dashboard/rejected");
    } else {
      setStep((s) => Math.max(s - 1, 1));
    }
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
              {step === 5 && (
                <Step5Uploads nextStep={nextStep} isSubmitting={isSubmitting} />
              )}
              {step === 6 && <Step6Complete />}
            </motion.div>
          </AnimatePresence>
        </div>
      </FormProvider>
    </div>
  );
}
