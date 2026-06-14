import { useFormContext, useWatch } from "react-hook-form";
import type { SignupFormData } from "../schema";
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
import { UploadCloud, FileText, X, AlertCircle } from "lucide-react";
import { useState } from "react";

interface Props {
  nextStep: () => void;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function Step5Uploads({ nextStep }: Props) {
  const { control } = useFormContext<SignupFormData>();
  const userType = useWatch({ control, name: "userType" });
  const country = useWatch({ control, name: "country" });

  const isBusiness = userType === "business";
  const isIndia = country === "India";

  const [fileErrors, setFileErrors] = useState<Record<string, string>>({});

  const validateFiles = (files: File[], fieldName: string) => {
    const validFiles: File[] = [];
    let errorMsg = "";

    for (const file of files) {
      if (file.type !== "application/pdf") {
        errorMsg = "Only PDF files are allowed.";
      } else if (file.size > MAX_FILE_SIZE) {
        errorMsg = "File size must be less than 5MB.";
      } else {
        validFiles.push(file);
      }
    }

    if (errorMsg) {
      setFileErrors((prev) => ({ ...prev, [fieldName]: errorMsg }));
      setTimeout(
        () => setFileErrors((prev) => ({ ...prev, [fieldName]: "" })),
        4000,
      );
    }

    return validFiles;
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Upload Documents
        </h1>
        <p className="text-muted-foreground text-sm">
          Please provide required compliance documents for verification. PDF
          only, Max 5MB per file.
        </p>
      </div>

      <div className="space-y-6 flex-1">
        <div className="bg-muted/30 border border-border p-4 rounded-lg mb-6">
          <h3 className="text-sm font-medium mb-2">Required Documents</h3>
          <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
            {isBusiness ? (
              isIndia ? (
                <>
                  <li>IEC Certificate / GST Registration / PAN Card</li>
                </>
              ) : (
                <>
                  <li>Business Registration / Trade License / Tax ID</li>
                </>
              )
            ) : (
              <>
                <li>Government ID (Aadhar, Passport, or National ID)</li>
                <li>Resume / Profile Summary</li>
                <li>Relevant Certificates</li>
              </>
            )}
            <li>Product Catalogue / Brochure (in the section below)</li>
          </ul>
        </div>

        {/* General Documents Upload */}
        <FormField
          control={control}
          name="documents"
          render={({ field }) => {
            const files = field.value || [];

            const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
              e.preventDefault();
              if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                const droppedFiles = Array.from(e.dataTransfer.files);
                const validFiles = validateFiles(droppedFiles, "documents");
                if (validFiles.length)
                  field.onChange([...files, ...validFiles]);
              }
            };

            const removeFile = (index: number) => {
              field.onChange(files.filter((_, i) => i !== index));
            };

            return (
              <FormItem>
                <FormLabel>
                  Compliance Documents <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div>
                    <div
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                      className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-muted/30 transition-colors"
                    >
                      <UploadCloud className="size-10 text-muted-foreground mb-4" />
                      <p className="text-sm font-medium mb-1">
                        Drag & drop files here
                      </p>
                      <p className="text-xs text-muted-foreground mb-4">
                        PDF only (Max 5MB each)
                      </p>
                      <div className="mt-2 w-full max-w-xs relative">
                        <Input
                          type="file"
                          multiple
                          accept="application/pdf"
                          onChange={(e) => {
                            if (e.target.files) {
                              const validFiles = validateFiles(
                                Array.from(e.target.files),
                                "documents",
                              );
                              if (validFiles.length)
                                field.onChange([...files, ...validFiles]);
                            }
                          }}
                        />
                      </div>
                    </div>
                    {fileErrors["documents"] && (
                      <p className="text-destructive text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="size-4" />{" "}
                        {fileErrors["documents"]}
                      </p>
                    )}
                    {files.length > 0 && (
                      <div className="space-y-2 mt-4">
                        <h4 className="text-sm font-medium">
                          Attached Documents
                        </h4>
                        <div className="space-y-2">
                          {files.map((file, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border"
                            >
                              <div className="flex items-center gap-3 overflow-hidden">
                                <FileText className="size-5 text-primary shrink-0" />
                                <span className="text-sm truncate max-w-[200px]">
                                  {file.name}
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="text-muted-foreground hover:text-destructive p-1 transition-colors"
                              >
                                <X className="size-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <div className="border-t border-border my-6"></div>

        {/* Product Catalogue Upload */}
        <FormField
          control={control}
          name="productCatalogue"
          render={({ field }) => {
            const files = field.value || [];

            const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
              e.preventDefault();
              if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                const droppedFiles = Array.from(e.dataTransfer.files);
                const validFiles = validateFiles(
                  droppedFiles,
                  "productCatalogue",
                );
                if (validFiles.length)
                  field.onChange([...files, ...validFiles]);
              }
            };

            const removeFile = (index: number) => {
              field.onChange(files.filter((_, i) => i !== index));
            };

            return (
              <FormItem>
                <FormLabel>Product Catalogue / Brochure</FormLabel>
                <FormControl>
                  <div>
                    <div
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                      className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-muted/30 transition-colors bg-primary/5 border-primary/20"
                    >
                      <UploadCloud className="size-10 text-primary/60 mb-4" />
                      <p className="text-sm font-medium mb-1">
                        Upload your brochure
                      </p>
                      <p className="text-xs text-muted-foreground mb-4">
                        PDF only (Max 5MB each)
                      </p>
                      <div className="mt-2 w-full max-w-xs relative">
                        <Input
                          type="file"
                          multiple
                          accept="application/pdf"
                          onChange={(e) => {
                            if (e.target.files) {
                              const validFiles = validateFiles(
                                Array.from(e.target.files),
                                "productCatalogue",
                              );
                              if (validFiles.length)
                                field.onChange([...files, ...validFiles]);
                            }
                          }}
                        />
                      </div>
                    </div>
                    {fileErrors["productCatalogue"] && (
                      <p className="text-destructive text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="size-4" />{" "}
                        {fileErrors["productCatalogue"]}
                      </p>
                    )}
                    {files.length > 0 && (
                      <div className="space-y-2 mt-4">
                        <h4 className="text-sm font-medium">
                          Attached Catalogue
                        </h4>
                        <div className="space-y-2">
                          {files.map((file, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border"
                            >
                              <div className="flex items-center gap-3 overflow-hidden">
                                <FileText className="size-5 text-primary shrink-0" />
                                <span className="text-sm truncate max-w-[200px]">
                                  {file.name}
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="text-muted-foreground hover:text-destructive p-1 transition-colors"
                              >
                                <X className="size-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </div>

      <div className="mt-8">
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
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the Terms and Conditions and Privacy Policy{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="mt-6 pt-6 border-t border-border flex gap-4">
        <Button
          className="w-full"
          size="lg"
          onClick={(e) => {
            e.preventDefault();
            nextStep();
          }}
          type="button"
        >
          Submit for Review
        </Button>
      </div>
    </div>
  );
}
