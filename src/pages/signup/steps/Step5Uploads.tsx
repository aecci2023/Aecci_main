import { useCallback, useState } from "react";
import type { SignupFormData } from "../types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UploadCloud, FileText, X } from "lucide-react";

interface Props {
  data: SignupFormData;
  updateData: (data: Partial<SignupFormData>) => void;
  nextStep: () => void;
}

export default function Step5Uploads({ data, updateData, nextStep }: Props) {
  const isBusiness = data.userType === "business";
  const isIndia = data.country === "India";
  
  const [files, setFiles] = useState<File[]>(data.documents || []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...droppedFiles]);
    }
  }, []);

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    updateData({ documents: files });
    nextStep();
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-2">Upload Documents</h1>
        <p className="text-muted-foreground text-sm">
          Please provide required compliance documents for verification.
        </p>
      </div>

      <div className="space-y-6 flex-1">
        
        <div className="bg-muted/30 border border-border p-4 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Required / Recommended</h3>
          <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
            {isBusiness ? (
              isIndia ? (
                <>
                  <li>IEC Certificate (Mandatory for import/export)</li>
                  <li>GST Registration Certificate</li>
                  <li>Company PAN Card</li>
                  <li>Product Catalogue / Company Profile</li>
                </>
              ) : (
                <>
                  <li>Business Registration / Trade License</li>
                  <li>Tax ID Proof</li>
                  <li>Passport / ID of Key Contact</li>
                  <li>Product Catalogue / Brochure</li>
                </>
              )
            ) : (
              <>
                <li>Government ID (PAN, Passport, or National ID)</li>
                <li>Resume / Profile Summary PDF</li>
                <li>Relevant Certificates</li>
              </>
            )}
          </ul>
        </div>

        {/* Drag and Drop Zone */}
        <div 
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-muted/30 transition-colors"
        >
          <UploadCloud className="size-10 text-muted-foreground mb-4" />
          <p className="text-sm font-medium mb-1">Drag & drop files here</p>
          <p className="text-xs text-muted-foreground mb-4">PDF, JPG, PNG (Max 5MB each)</p>
          <div className="mt-4 w-full max-w-xs">
            <Input 
              type="file" 
              multiple 
              onChange={(e) => {
                if (e.target.files) {
                  setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
                }
              }}
            />
          </div>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Attached Files</h4>
            <div className="space-y-2">
              {files.map((file, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <FileText className="size-5 text-primary shrink-0" />
                    <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                  </div>
                  <button onClick={() => removeFile(i)} className="text-muted-foreground hover:text-destructive p-1 transition-colors">
                    <X className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      <div className="mt-8 pt-6 border-t border-border flex gap-4">
        <Button
          className="w-full"
          size="lg"
          onClick={handleNext}
        >
          Submit for Review
        </Button>
      </div>
    </div>
  );
}
