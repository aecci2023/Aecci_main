import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { PartnerSignupFormData } from "../schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { UploadCloud, FileText, ImageIcon, X, AlertCircle, CheckCircle2, XCircle, RefreshCw } from "lucide-react";

interface Props {
  nextStep: () => void;
  isSubmitting?: boolean;
}

const MAX_SIZE = 5 * 1024 * 1024;
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export default function Step5Documents({ nextStep, isSubmitting }: Props) {
  const { control, setValue, watch } = useFormContext<PartnerSignupFormData>();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [num1, setNum1] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [captchaInput, setCaptchaInput] = useState("");
  
  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setCaptchaInput("");
  };

  const isCaptchaValid = parseInt(captchaInput) === num1 + num2;

  const profilePic = watch("profilePicture");
  const govId = watch("governmentId");
  const profCert = watch("professionalCert");
  const bizProof = watch("businessProof");

  const setError = (field: string, msg: string) => {
    setErrors((p) => ({ ...p, [field]: msg }));
    setTimeout(() => setErrors((p) => ({ ...p, [field]: "" })), 4000);
  };

  const validateDoc = (file: File, field: string): boolean => {
    const isImage = IMAGE_TYPES.includes(file.type);
    const isPdf = file.type === "application/pdf";
    if (!isImage && !isPdf) { setError(field, "Only PDF, JPG, PNG, or WebP files are allowed."); return false; }
    if (file.size > MAX_SIZE) { setError(field, "File size must be less than 5MB."); return false; }
    return true;
  };

  const validateImage = (file: File, field: string): boolean => {
    if (!IMAGE_TYPES.includes(file.type)) { setError(field, "Only JPG, PNG or WebP images are allowed."); return false; }
    if (file.size > MAX_SIZE) { setError(field, "File size must be less than 5MB."); return false; }
    return true;
  };

  const getFileName = (f: File | string | null | undefined) => {
    if (!f) return "";
    if (f instanceof File) return f.name;
    try { return decodeURIComponent(f.split("/").pop() || "Uploaded File"); } catch { return "Uploaded File"; }
  };

  const renderImageUploadField = ({
    label,
    fieldName,
    value,
    required,
  }: {
    label: string;
    fieldName: "profilePicture";
    value: File | string | null | undefined;
    required?: boolean;
  }) => (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <div>
              {value ? (
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3 overflow-hidden">
                    {value instanceof File ? (
                      <img
                        src={URL.createObjectURL(value)}
                        alt="Profile preview"
                        className="size-10 rounded-full object-cover border border-border shrink-0"
                      />
                    ) : (
                      <img
                        src={value}
                        alt="Profile preview"
                        className="size-10 rounded-full object-cover border border-border shrink-0"
                      />
                    )}
                    <span className="text-sm truncate max-w-[200px]">{getFileName(value)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setValue(fieldName, undefined)}
                    className="text-muted-foreground hover:text-destructive p-1"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center text-center hover:bg-muted/30 transition-colors">
                  <ImageIcon className="size-8 text-muted-foreground mb-2" />
                  <p className="text-xs text-muted-foreground mb-3">JPG, PNG or WebP (Max 5MB)</p>
                  <Input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="max-w-xs"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && validateImage(file, fieldName)) field.onChange(file);
                    }}
                  />
                </div>
              )}
              {errors[fieldName] && (
                <p className="text-destructive text-sm mt-2 flex items-center gap-1">
                  <AlertCircle className="size-4" /> {errors[fieldName]}
                </p>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const renderFileUploadField = ({
    label,
    fieldName,
    required,
    value,
  }: {
    label: string;
    fieldName: "governmentId" | "professionalCert" | "businessProof";
    required?: boolean;
    value: File | string | null | undefined;
  }) => (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <div>
              {value ? (
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <FileText className="size-5 text-primary shrink-0" />
                    <span className="text-sm truncate max-w-[200px]">{getFileName(value)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setValue(fieldName, undefined)}
                    className="text-muted-foreground hover:text-destructive p-1"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center text-center hover:bg-muted/30 transition-colors">
                  <UploadCloud className="size-8 text-muted-foreground mb-2" />
                  <p className="text-xs text-muted-foreground mb-3">PDF or Image (Max 5MB)</p>
                  <Input
                    type="file"
                    accept="application/pdf,image/jpeg,image/png,image/webp"
                    className="max-w-xs"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && validateDoc(file, fieldName)) field.onChange(file);
                    }}
                  />
                </div>
              )}
              {errors[fieldName] && (
                <p className="text-destructive text-sm mt-2 flex items-center gap-1">
                  <AlertCircle className="size-4" /> {errors[fieldName]}
                </p>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Company Logo &amp; Verification Documents
        </h1>
        <p className="text-muted-foreground text-sm">
          Your logo appears on your public marketplace card. Documents verify your credentials.
        </p>
      </div>

      <div className="space-y-6 flex-1">
        <div className="bg-muted/30 border border-border p-4 rounded-lg">
          <h3 className="text-sm font-medium mb-2">What to upload</h3>
          <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
            <li>Company logo — shown on your Partner Brief card (JPG/PNG/WebP, required)</li>
            <li>Government-issued ID — Passport, National ID, or Driving License (PDF/Image, required)</li>
            <li>Professional Certificate or Bar/Trade License (PDF/Image, optional)</li>
            <li>Business Registration Proof (PDF/Image, optional)</li>
          </ul>
        </div>

        {renderImageUploadField({
          label: "Company Logo",
          fieldName: "profilePicture",
          value: profilePic,
          required: true,
        })}

        {renderFileUploadField({
          label: "Government ID",
          fieldName: "governmentId",
          required: true,
          value: govId,
        })}
        {renderFileUploadField({
          label: "Professional Certificate / License",
          fieldName: "professionalCert",
          value: profCert,
        })}
        {renderFileUploadField({
          label: "Business Registration Proof",
          fieldName: "businessProof",
          value: bizProof,
        })}
      </div>

      <div className="mt-8 space-y-3">
        <p className="text-sm font-medium mb-1">Human Verification</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-lg border">
            <span className="font-semibold text-lg w-6 text-center">{num1}</span>
            <span className="font-medium text-muted-foreground">+</span>
            <span className="font-semibold text-lg w-6 text-center">{num2}</span>
            <span className="font-medium text-muted-foreground">=</span>
          </div>
          
          <div className="relative w-24">
            <Input
              type="text"
              inputMode="numeric"
              maxLength={2}
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="pr-8 text-center font-semibold"
            />
          </div>
          {captchaInput && (
            <span className={isCaptchaValid ? "text-green-500" : "text-red-500"}>
              {isCaptchaValid ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
            </span>
          )}

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={generateCaptcha}
            className="text-muted-foreground hover:text-foreground"
            title="Refresh Captcha"
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <FormField
          control={control}
          name="agreedToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <label htmlFor="terms" className="text-sm font-medium leading-none">
                  I agree to the{" "}
                  <a
                    href="https://www.aecci.org.in/terms-conditions"
                    className="text-primary hover:underline underline-offset-4 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.aecci.org.in/privacy-policy"
                    className="text-primary hover:underline underline-offset-4 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <Button
          className="w-full relative"
          size="lg"
          onClick={(e) => {
            e.preventDefault();
            nextStep();
          }}
          type="button"
          disabled={isSubmitting || !isCaptchaValid}
        >
          {isSubmitting ? (
            <>
              <span className="opacity-0">Submit Application</span>
              <div className="absolute inset-0 flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground" />
                <span>Uploading &amp; Submitting...</span>
              </div>
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </div>
    </div>
  );
}
