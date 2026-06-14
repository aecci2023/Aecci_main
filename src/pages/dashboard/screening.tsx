import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Clock } from "lucide-react";
import { useState } from "react";

export default function ScreeningPage() {
  const [certified, setCertified] = useState(false);

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Screening</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Compliance & Screening Desk
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            All slots and deal room participations require screening approval by
            the AECCI Secretariat.
          </p>
        </div>

        {/* Screening Progress Card */}
        <Card className="hover:shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="size-5 text-amber-500" /> Screening Status: In
              Review
            </CardTitle>
            <CardDescription>
              We are verifying your tax and business licensing documents.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Stepper progress */}
            <div className="space-y-4 relative border-l border-border pl-6 ml-3">
              <div className="relative">
                <div className="absolute -left-[31px] top-0 size-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                  <Check className="size-3" />
                </div>
                <h4 className="text-sm font-semibold text-foreground leading-none">
                  Onboarding Registration Complete
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Submitted June 10, 2026
                </p>
              </div>

              <div className="relative pt-2">
                <div className="absolute -left-[31px] top-2 size-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                  <Check className="size-3" />
                </div>
                <h4 className="text-sm font-semibold text-foreground leading-none">
                  Company Profile Checked
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Verified June 12, 2026
                </p>
              </div>

              <div className="relative pt-2">
                <div className="absolute -left-[31px] top-2 size-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold">
                  •
                </div>
                <h4 className="text-sm font-semibold text-foreground leading-none">
                  IEC & GST Verification
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Currently querying local tax APIs
                </p>
              </div>
            </div>

            {/* Certification Clause */}
            <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg space-y-3">
              <div className="flex items-start gap-2.5">
                <Checkbox
                  id="certify-data"
                  checked={certified}
                  onCheckedChange={(checked) => setCertified(checked === true)}
                  className="mt-0.5"
                />
                <label
                  htmlFor="certify-data"
                  className="text-xs font-semibold text-muted-foreground leading-tight cursor-pointer"
                >
                  I certify that all information and compliance documents
                  provided are accurate and truthful{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
              <p className="text-[10px] text-muted-foreground italic pl-6">
                Providing false information results in immediate account
                suspension and cancellation of all matched slots.
              </p>
            </div>

            <Button
              disabled={!certified}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Confirm Documentation Certification
            </Button>
          </CardContent>
        </Card>
      </Main>
    </>
  );
}
