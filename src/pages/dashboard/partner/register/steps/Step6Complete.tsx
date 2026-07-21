import { useFormContext } from "react-hook-form";
import type { PartnerSignupFormData } from "../schema";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Step6Complete() {
  const { getValues } = useFormContext<PartnerSignupFormData>();
  const data = getValues();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-12">
      <div className="size-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
        <CheckCircle2 className="size-10 text-green-600 dark:text-green-500" />
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-4">
        Application Submitted!
      </h1>

      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Thank you, {data.fullName}. Your partner application has been received
        and is pending review by our team.
      </p>

      <div className="bg-muted/40 border border-border p-6 rounded-lg w-full max-w-md mb-8">
        <div className="flex items-start gap-4 text-left">
          <Clock className="size-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">
              Under Review
            </h3>
            <p className="text-sm text-muted-foreground">
              Our compliance team will review your credentials and documents.
              You'll receive an email once your application is approved and your
              partner account is activated.
            </p>
          </div>
        </div>
      </div>

      <Link to="/login" className="w-full max-w-xs">
        <Button className="w-full" size="lg">
          Go to Login
        </Button>
      </Link>
    </div>
  );
}
