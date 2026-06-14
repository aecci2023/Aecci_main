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
import { ShieldCheck, Video, Mic, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function WaitingRoomPage() {
  const [agreed, setAgreed] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(10); // 10 seconds demo countdown

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Waiting Room</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            B2B Virtual Waiting Room
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            India-Kenya Textile Round (AECCI-2026-06B)
          </p>
        </div>

        {/* Countdown Header Card */}
        <Card className="border-2 border-primary/20 text-center py-8 bg-gradient-to-br from-primary/5 via-background to-primary/10 dark:from-primary/10 dark:to-primary/20">
          <CardContent className="space-y-4">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider block">
              Session Opening Status
            </span>

            {secondsLeft > 0 ? (
              <>
                <div className="text-5xl font-mono font-bold text-primary">
                  00:00:{secondsLeft.toString().padStart(2, "0")}
                </div>
                <p className="text-sm text-muted-foreground">
                  Preparing secure connection desks. Please do not close this
                  window.
                </p>
              </>
            ) : (
              <>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2">
                  <ShieldCheck className="size-6 text-emerald-500" /> Host is
                  Ready. Desks Open.
                </div>
                <p className="text-sm text-muted-foreground">
                  Accept confidentiality rules below to join the live session.
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Rules & Confidentiality Checkbox */}
          <Card className="md:col-span-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">
                Layer 3: Deal Room Participation & Conduct Rules
              </CardTitle>
              <CardDescription>
                Legal agreement required for all participants entering the live
                trade desk.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-xs text-muted-foreground max-h-48 overflow-y-auto space-y-3 bg-muted/40 p-4 rounded-lg border border-border">
                <p>
                  <strong>1. Strict Confidentiality:</strong> All financial
                  offers, supply capacities, and client details shared during
                  this session must remain confidential and cannot be disclosed
                  to third parties.
                </p>
                <p>
                  <strong>2. No Recording:</strong> Audio, video recording, or
                  screenshots are strictly prohibited without written consent
                  from the AECCI moderator.
                </p>
                <p>
                  <strong>3. Non-Circumvention:</strong> You agree not to bypass
                  AECCI to contract directly with introduced buyers/partners
                  without prior notification to the Chamber.
                </p>
                <p>
                  <strong>4. Decorum:</strong> Professional conduct is required.
                  The moderator reserves the right to remove any participant
                  immediately for misbehavior without a refund.
                </p>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Checkbox
                  id="waiting-terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked === true)}
                  className="mt-0.5"
                />
                <label
                  htmlFor="waiting-terms"
                  className="text-xs font-semibold text-muted-foreground leading-tight cursor-pointer"
                >
                  I agree to the Confidentiality and Participation Rules{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Technical Diagnostics */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Device Status</CardTitle>
              <CardDescription>
                Ensuring stable audio/video matching.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center justify-between p-2.5 bg-muted/30 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <Video className="size-4 text-emerald-500" />
                  <span>Webcam</span>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  Connected
                </Badge>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-muted/30 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <Mic className="size-4 text-emerald-500" />
                  <span>Microphone</span>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  Connected
                </Badge>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-muted/30 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <Wifi className="size-4 text-primary" />
                  <span>Network Latency</span>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-600">
                  32ms (Excellent)
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enter Button Panel */}
        <div className="flex justify-center pt-2">
          <Button
            asChild
            disabled={secondsLeft > 0 || !agreed}
            size="lg"
            className="w-full md:w-64 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base"
          >
            {secondsLeft > 0 || !agreed ? (
              <span>Locked (Complete checklist)</span>
            ) : (
              <Link
                to="/dashboard/live-deal-room"
                className="flex items-center gap-2"
              >
                Enter Live Deal Room <Video className="size-5" />
              </Link>
            )}
          </Button>
        </div>
      </Main>
    </>
  );
}
