import { ContentSection } from "../components/content-section";
import { ResetPasswordForm } from "./reset-password-form";
import { Separator } from "@/components/ui/separator";

export function SettingsAccount() {
  return (
    <ContentSection
      title="Account"
      desc="Update your account password settings."
    >
      <div className="space-y-10 pb-6">
        <div className="space-y-4 pt-4">
          <div>
            <h3 className="text-lg font-medium">Reset Password</h3>
            <p className="text-sm text-muted-foreground">
              Reset your password. We will send an OTP to your email address to confirm.
            </p>
          </div>
          <Separator />
          <ResetPasswordForm />
        </div>
      </div>
    </ContentSection>
  );
}
