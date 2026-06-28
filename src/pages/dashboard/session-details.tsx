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
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Info } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useGetSessionByIdQuery } from "@/store/api/sessionApi";

export default function SessionDetailsPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("id");

  const { data, isLoading } = useGetSessionByIdQuery(sessionId as string, {
    skip: !sessionId,
  });
  const session = data?.data;

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [step, setStep] = useState(1); // 1: Screening Approved, 2: Terms Acceptance, 3: Payment Checkout

  if (isLoading || !session) {
    return (
      <Main fluid className="flex justify-center p-10">
        <p className="text-muted-foreground animate-pulse">
          Loading session details...
        </p>
      </Main>
    );
  }

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Marketplace</span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Session Details</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{session.title}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Session ID: {session.id} • Co-Host:{" "}
            {session.partner?.companyName || session.partner?.fullName}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Detailed Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Bilateral Matchmaking Overview
                </CardTitle>
                <CardDescription>
                  Targeted trade matchmaking for verified producers.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  {session.marketOverview ||
                    "Join this deal room session to connect directly with international buyers and distribution partners."}
                </p>

                <h3 className="font-semibold text-foreground mt-4 mb-2">
                  Rules & Agenda
                </h3>
                <div className="bg-muted p-3 rounded-md">
                  {session.rules || "No specific rules provided."}
                </div>

                <h3 className="font-semibold text-foreground mt-4 mb-2">
                  Deliverables Provided
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Verified Buyer Introductions during session</li>
                  <li>Full Post-Session Opportunity Report</li>
                  <li>Draft non-circumvention facilitation advisory</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2.5 pb-2">
                <Info className="size-5 text-primary shrink-0" />
                <CardTitle className="text-lg">
                  Refund & Rescheduling Policies
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-2 text-muted-foreground">
                <p>
                  <strong>Registration & Screening:</strong> Non-refundable once
                  document screening begins.
                </p>
                <p>
                  <strong>Collaboration Partner No-Show:</strong> In case the
                  partner fails to appear, AECCI will reschedule the session
                  within 30 days. If rescheduling is not possible, a 100% refund
                  or a credit note will be issued.
                </p>
                <p>
                  <strong>Technical Failures:</strong> If a server or moderator
                  failure interrupts the session, it will be paused and
                  rescheduled. No consequential damages are payable.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stepper / Booking Acceptance Layer Column */}
          <div className="space-y-6">
            <Card className="border-primary/20 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Slot Booking Stepper</CardTitle>
                <CardDescription>
                  Complete legal acceptance layers to secure slot.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Stepper Status Indicators */}
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex gap-3 items-start">
                    <div className="size-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      <Check className="size-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        1. Compliance Screening
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Company profile & IEC/GST verified by Secretariat.
                      </p>
                      <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-[10px] mt-1">
                        Approved
                      </Badge>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-3 items-start">
                    <div
                      className={`size-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5
                      ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      {step > 2 ? <Check className="size-3.5" /> : "2"}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold">
                        2. Booking Terms Acceptance
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Confirm Slot Booking & Refund Policies.
                      </p>

                      {step === 1 && (
                        <Button
                          onClick={() => setStep(2)}
                          size="sm"
                          className="mt-3 bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          Begin Terms Review
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-3 items-start">
                    <div
                      className={`size-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5
                      ${step === 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">
                        3. Secure Payment
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Secure your matchmaking seat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stepper Details Rendering */}
                {step === 2 && (
                  <div className="p-4 bg-muted/40 rounded-lg border border-border/80 space-y-4 mt-4 animate-in fade-in duration-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Layer 2: Slot Booking Terms
                    </h3>
                    <div className="text-xs text-muted-foreground max-h-40 overflow-y-auto space-y-2 pr-1 border-b border-border pb-2">
                      <p>
                        1. Slot fee is for accessing the Deal Room and matching
                        services only.
                      </p>
                      <p>
                        2. Payment does not guarantee buyers, contracts, or
                        distribution approvals.
                      </p>
                      <p>
                        3. Participants must join on time with proper high-speed
                        internet and webcam equipment.
                      </p>
                      <p>4. All prices are exclusive of applicable taxes.</p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Checkbox
                        id="booking-terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) =>
                          setAgreedToTerms(checked === true)
                        }
                        className="mt-0.5"
                      />
                      <label
                        htmlFor="booking-terms"
                        className="text-xs font-medium text-muted-foreground leading-tight cursor-pointer"
                      >
                        I agree to the Booking, Refund and Cancellation Policy{" "}
                        <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <Button
                      disabled={!agreedToTerms}
                      onClick={() => setStep(3)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
                      size="sm"
                    >
                      Accept & Proceed
                    </Button>
                  </div>
                )}

                {step === 3 && (
                  <div className="p-4 bg-muted/40 rounded-lg border border-border/80 space-y-4 mt-4 animate-in fade-in duration-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Payment Summary
                    </h3>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Matchmaking Slot Fee</span>
                        <span className="font-semibold text-foreground">
                          ${session.price} USD
                        </span>
                      </div>
                      <div className="border-t border-border pt-2 flex justify-between font-bold text-sm text-foreground">
                        <span>Total Payable</span>
                        <span>${session.price} USD</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs"
                    >
                      <Link to={`/dashboard/payment?sessionId=${session.id}`}>
                        Proceed to Secure Checkout
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Main>
    </>
  );
}
