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
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ClipboardList,
  ShieldAlert,
  Download,
  Briefcase,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SessionSummaryPage() {
  useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleAgreementSubmit = () => {
    setAccepted(true);
  };

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Session Summary</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Session Summary & Highlights
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              India-Kenya Bilateral Textile Matchmaking (AECCI-2026-06B)
            </p>
          </div>
          <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 px-3 py-1 flex items-center gap-1">
            <Check className="size-4" /> Session Concluded
          </Badge>
        </div>

        {/* Highlights & Insights Card */}
        <Card className="hover:shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ClipboardList className="size-5 text-primary" /> Key Matchmaking
              Insights
            </CardTitle>
            <CardDescription>
              Consolidated trade requirements discussed during the session.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted/40 rounded-lg border border-border">
                <span className="text-xs text-muted-foreground uppercase tracking-wider block font-bold">
                  Price Target
                </span>
                <p className="text-lg font-bold text-foreground mt-1">
                  USD 4.50 - 5.20
                </p>
                <span className="text-xs text-muted-foreground block mt-0.5">
                  Per meter CIF Mombasa
                </span>
              </div>
              <div className="p-4 bg-muted/40 rounded-lg border border-border">
                <span className="text-xs text-muted-foreground uppercase tracking-wider block font-bold">
                  Preferred Spec
                </span>
                <p className="text-lg font-bold text-foreground mt-1">
                  Cotton-Synthetic
                </p>
                <span className="text-xs text-muted-foreground block mt-0.5">
                  Blends, 220-250 GSM
                </span>
              </div>
              <div className="p-4 bg-muted/40 rounded-lg border border-border">
                <span className="text-xs text-muted-foreground uppercase tracking-wider block font-bold font-bold">
                  Delivery Window
                </span>
                <p className="text-lg font-bold text-primary mt-1">
                  Early July 2026
                </p>
                <span className="text-xs text-muted-foreground block mt-0.5">
                  For first sample shipment
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm">
                Recommended Action Items
              </h4>
              <ul className="text-xs text-muted-foreground space-y-2 list-disc pl-5">
                <li>
                  Submit official CIF pricing sheets and fabric certifications
                  to Nairobi buyers.
                </li>
                <li>
                  Finalize sample packaging configurations according to East
                  African Standards (KEBS).
                </li>
                <li>
                  Secure the AECCI Country Opportunity report to analyze
                  competing supplier pricing from East Asia.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Non-Circumvention Legal Layer */}
        <Card
          className={`border-2 transition-colors duration-300 ${accepted ? "border-emerald-500/20 bg-emerald-500/5" : "border-amber-500/20 bg-amber-500/5"}`}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              {accepted ? (
                <Check className="size-5 text-emerald-500 shrink-0" />
              ) : (
                <ShieldAlert className="size-5 text-amber-500 shrink-0" />
              )}
              <CardTitle className="text-lg">
                Layer 4: Post-Session Non-Circumvention Agreement
              </CardTitle>
            </div>
            <CardDescription>
              Please accept the non-circumvention terms to initiate direct
              business intros with Nairobi buyers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-xs text-muted-foreground max-h-40 overflow-y-auto space-y-2 bg-background p-3.5 rounded-lg border border-border/80 pr-2 leading-relaxed">
              <p>
                <strong>1. Introduction Protection:</strong> Any buyers or local
                partners introduced to you during this matchmaking session
                remain proprietary introductions facilitated by the Chamber
                (AECCI).
              </p>
              <p>
                <strong>2. Direct Circumvention Bar:</strong> You agree not to
                bypass AECCI to contract directly or conduct business with the
                introduced partners outside of AECCI's advisory desk for 24
                months.
              </p>
              <p>
                <strong>3. Advisory Engagements:</strong> For any structured
                business or trade deals resulting from this session, you must
                first report and notify AECCI before final execution.
              </p>
            </div>

            {!accepted ? (
              <div className="space-y-4">
                <div className="flex items-start gap-2.5">
                  <Checkbox
                    id="non-circ"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked === true)}
                    className="mt-0.5"
                  />
                  <label
                    htmlFor="non-circ"
                    className="text-xs font-semibold text-muted-foreground leading-tight cursor-pointer"
                  >
                    I agree to the Post-Session Non-Circumvention Agreement{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                <Button
                  disabled={!agreed}
                  onClick={handleAgreementSubmit}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs px-4"
                  size="sm"
                >
                  Accept & Activate Introductions
                </Button>
              </div>
            ) : (
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs rounded-md font-medium">
                Agreement Signed Digitally. Direct trade introductions are now
                activated. AECCI Desk will email the buyer contact details.
              </div>
            )}
          </CardContent>
        </Card>

        {/* Next Step Actions Buttons */}
        <div className="flex flex-col md:flex-row gap-4 pt-2">
          <Button
            asChild
            size="lg"
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            <Link
              to="/dashboard/opportunity-report"
              className="flex items-center justify-center gap-2"
            >
              Download Opportunity Report <Download className="size-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="flex-1 font-semibold"
          >
            <Link
              to="/dashboard/follow-up-services"
              className="flex items-center justify-center gap-2"
            >
              Go to Follow-Up Services <Briefcase className="size-5" />
            </Link>
          </Button>
        </div>
      </Main>
    </>
  );
}
