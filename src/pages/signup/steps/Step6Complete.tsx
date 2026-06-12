
import type { SignupFormData } from "../types";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  data: SignupFormData;
}

export default function Step6Complete({ data }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-12">
      <div className="size-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
        <CheckCircle2 className="size-10 text-green-600 dark:text-green-500" />
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-4">Registration Submitted!</h1>
      
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Thank you, {data.fullName}. Your {data.userType} account profile has been successfully created and your documents have been securely uploaded.
      </p>

      <div className="bg-muted/40 border border-border p-6 rounded-lg w-full max-w-md mb-8">
        <div className="flex items-start gap-4 text-left">
          <Clock className="size-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">Pending Screening Review</h3>
            <p className="text-sm text-muted-foreground">
              Our compliance team is currently reviewing your profile to ensure trust and security across the Global Deal Room. You will receive an email once approved.
            </p>
          </div>
        </div>
      </div>

      <Link to="/dashboard" className="w-full max-w-xs">
        <Button className="w-full" size="lg" variant="default">
          Go to Dashboard
        </Button>
      </Link>
    </div>
  );
}
