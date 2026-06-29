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
import { UploadCloud, FileText, ImageIcon, X, AlertCircle } from "lucide-react";

interface Props {
  nextStep: () => void;
  isSubmitting?: boolean;
}

const MAX_SIZE = 5 * 1024 * 1024;
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export default function Step5Documents({ nextStep, isSubmitting }: Props) {
  const { control, setValue, watch } = useFormContext<PartnerSignupFormData>();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const profilePic = watch("profilePicture");
  const govId = watch("governmentId");
  const profCert = watch("professionalCert");
  const bizProof = watch("businessProof");

  const setError = (field: string, msg: string) => {
    setErrors((p) => ({ ...p, [field]: msg }));
    setTimeout(() => setErrors((p) => ({ ...p, [field]: "" })), 4000);
  };

  const validatePdf = (file: File, field: string): boolean => {
    if (file.type !== "application/pdf") { setError(field, "Only PDF files are allowed."); return false; }
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

  const ImageUploadField = ({
    label,
    fieldName,
    value,
  }: {
    label: string;
    fieldName: "profilePicture";
    value: File | string | null | undefined;
  }) => (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
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

  const FileUploadField = ({
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
                  <p className="text-xs text-muted-foreground mb-3">PDF only (Max 5MB)</p>
                  <Input
                    type="file"
                    accept="application/pdf"
                    className="max-w-xs"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && validatePdf(file, fieldName)) field.onChange(file);
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
            <li>Company logo — shown on your Partner Brief card (JPG/PNG/WebP)</li>
            <li>Government-issued ID — Passport, National ID, or Driving License (PDF, required)</li>
            <li>Professional Certificate or Bar/Trade License (PDF, optional)</li>
            <li>Business Registration Proof (PDF, optional)</li>
          </ul>
        </div>

        <ImageUploadField
          label="Company Logo"
          fieldName="profilePicture"
          value={profilePic}
        />

        <FileUploadField
          label="Government ID"
          fieldName="governmentId"
          required
          value={govId}
        />
        <FileUploadField
          label="Professional Certificate / License"
          fieldName="professionalCert"
          value={profCert}
        />
        <FileUploadField
          label="Business Registration Proof"
          fieldName="businessProof"
          value={bizProof}
        />
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
                  I agree to the Terms and Conditions and Partner Agreement{" "}
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
          disabled={isSubmitting}
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
