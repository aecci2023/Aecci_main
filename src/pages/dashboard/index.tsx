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
import {
  Calendar,
  ArrowRight,
  Globe,
  MessageSquare,
  FileText,
  TrendingUp,
  ShieldCheck,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Dashboard</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main Content ===== */}
      <Main fluid className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Welcome Back, AECCI Member
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Track your screening, access active deal rooms, and explore
              country briefs.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="px-3 py-1 flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
            >
              <ShieldCheck className="size-4" /> Verified Account
            </Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Sessions
              </CardTitle>
              <Calendar className="size-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground mt-1">
                1 Upcoming, 1 In Review
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Unread Messages
              </CardTitle>
              <MessageSquare className="size-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground mt-1">
                From Partner Desk
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Documents Approved
              </CardTitle>
              <FileText className="size-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4 / 4</div>
              <p className="text-xs text-muted-foreground mt-1">
                 Compliance complete
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Intelligence Briefs
              </CardTitle>
              <Globe className="size-4 text-teal-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground mt-1">
                Global markets covered
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Live Deal Room Hero Countdown */}
        <Card className="border-2 border-primary/20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-teal-500/5 dark:from-primary/10 dark:to-teal-500/10">
          <div className="absolute right-0 top-0 w-[30%] h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge className="bg-primary hover:bg-primary/95 text-primary-foreground animate-pulse">
                  Live Session Coming Up
                </Badge>
                <span className="text-xs text-muted-foreground">
                  ID: AECCI-2026-06B
                </span>
              </div>
              <CardTitle className="text-xl md:text-2xl">
                India-Kenya Bilateral Textile & Garment Matchmaking
              </CardTitle>
              <CardDescription className="max-w-2xl mt-1">
                Pitch directly to retail distributors and trade commissioners in
                Nairobi. Ensure your product catalogue is updated.
              </CardDescription>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Countdown
              </span>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="bg-background border border-border px-2.5 py-1.5 rounded-lg shadow-sm font-mono text-lg font-bold">
                  {timeLeft.hours.toString().padStart(2, "0")}h
                </div>
                <span className="text-muted-foreground font-bold">:</span>
                <div className="bg-background border border-border px-2.5 py-1.5 rounded-lg shadow-sm font-mono text-lg font-bold">
                  {timeLeft.minutes.toString().padStart(2, "0")}m
                </div>
                <span className="text-muted-foreground font-bold">:</span>
                <div className="bg-background border border-border px-2.5 py-1.5 rounded-lg shadow-sm font-mono text-lg font-bold">
                  {timeLeft.seconds.toString().padStart(2, "0")}s
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6 md:items-center justify-between border-t border-border/50 pt-6 mt-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <span className="text-xs text-muted-foreground block mb-0.5">
                  Moderator
                </span>
                <span className="text-sm font-medium">
                  AECCI International Trade Desk
                </span>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block mb-0.5">
                  Country Partner
                </span>
                <span className="text-sm font-medium">
                  Kenya Chamber of Commerce (KNCCI)
                </span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="text-xs text-muted-foreground block mb-0.5">
                  Scheduled Time
                </span>
                <span className="text-sm font-medium">
                  June 15, 2026 at 14:00 IST
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
              >
                <Link
                  to="/dashboard/waiting-room"
                  className="flex items-center gap-2"
                >
                  Join Waiting Room <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Lower Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Country Brief Widget */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">
                  Featured Country Intelligence
                </CardTitle>
                <CardDescription>
                  Target market overview for garments & textiles.
                </CardDescription>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link
                  to="/dashboard/intelligence"
                  className="flex items-center gap-1 text-primary"
                >
                  View Intelligence <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-border">
                <span className="text-4xl">🇰🇪</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Kenya (Nairobi Hub)</h4>
                    <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                      High Demand
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Kenya remains the primary entry point for East African
                    trade. Duty-free textile imports are highly active under
                    COMESA frameworks.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg bg-background">
                  <h5 className="font-medium text-sm text-primary flex items-center gap-1.5 mb-2">
                    <TrendingUp className="size-4" /> Growth Areas
                  </h5>
                  <ul className="text-xs space-y-1.5 text-muted-foreground list-disc pl-4">
                    <li>Cotton blended woven garments</li>
                    <li>Eco-friendly organic linen and apparel</li>
                    <li>Value-added home fabrics & textiles</li>
                  </ul>
                </div>
                <div className="p-4 border border-border rounded-lg bg-background">
                  <h5 className="font-medium text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5 mb-2">
                    <Globe className="size-4" /> Import Restrictions
                  </h5>
                  <ul className="text-xs space-y-1.5 text-muted-foreground list-disc pl-4">
                    <li>Pre-export Verification of Conformity (PVoC)</li>
                    <li>Mandatory KEBS import standardization marks</li>
                    <li>Specific fabric weight thresholds</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions & Support */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Recent Opportunity Reports
                </CardTitle>
                <CardDescription>
                  Based on your selected industry.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted/30 rounded-lg border border-border flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <FileText className="size-5 text-primary shrink-0" />
                    <div className="overflow-hidden">
                      <span className="text-xs font-semibold block truncate">
                        Kenya Textile Report 2026.pdf
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        Completed June 12
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 text-muted-foreground hover:text-primary"
                  >
                    <Download className="size-4" />
                  </Button>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg border border-border flex items-center justify-between gap-2 opacity-60">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <FileText className="size-5 text-muted-foreground shrink-0" />
                    <div className="overflow-hidden">
                      <span className="text-xs font-semibold block truncate">
                        UAE Foodstuffs Entry Guidelines.pdf
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        Draft Phase
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled
                    className="shrink-0 text-muted-foreground"
                  >
                    <Download className="size-4" />
                  </Button>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full text-xs mt-2"
                >
                  <Link to="/dashboard/opportunity-report">
                    See All Reports
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Support & Inquiries</CardTitle>
                <CardDescription>
                  Direct line to the chamber officers.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground">
                  Need custom matching, legal document verification, or
                  assistance with import compliance?
                </p>
                <div className="flex gap-2">
                  <Button asChild className="flex-1 text-xs" variant="default">
                    <Link to="/dashboard/submit-questions">
                      Submit Question
                    </Link>
                  </Button>
                  <Button asChild className="flex-1 text-xs" variant="outline">
                    <Link to="/dashboard/messages">Chat Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Main>
    </>
  );
}
