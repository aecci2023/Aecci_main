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
  FileText,
  TrendingUp,
  ShieldCheck,
  ShieldAlert,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetUserByIdQuery } from "@/store/api/adminApi";
import { useGetMySessionsQuery } from "@/store/api/sessionApi";

export default function DashboardPage() {
  const [currentUser] = useState<any>(() => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  });

  const userId = currentUser?.id || currentUser?._id;
  const { data: userData } = useGetUserByIdQuery(userId as string, {
    skip: !userId,
  });
  const dbUser = userData?.data || currentUser;

  const { data: sessionsData } = useGetMySessionsQuery();
  const sessions = sessionsData?.data || [];
  
  const upcomingSessions = sessions.filter((s: any) => s.status === 'upcoming').sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pendingSessions = sessions.filter((s: any) => s.status === 'pending_approval');
  
  const nextSession = upcomingSessions[0] || null;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!nextSession?.date) return;
    
    const calculateTimeLeft = () => {
      const difference = new Date(nextSession.date).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [nextSession?.date]);

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
              Welcome Back, {dbUser?.fullName || "Member"}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Track your verification, access active deal rooms, and explore
              country briefs.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {dbUser?.verificationStatus === "active" ? (
              <Badge
                variant="outline"
                className="px-3 py-1 flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
              >
                <ShieldCheck className="size-4" /> Verified Account
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="px-3 py-1 flex items-center gap-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
              >
                <ShieldAlert className="size-4" /> Pending Verification
              </Badge>
            )}
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
              <div className="text-2xl font-bold">{upcomingSessions.length + pendingSessions.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {upcomingSessions.length} Upcoming, {pendingSessions.length} In Review
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Remaining Slots
              </CardTitle>
              <Calendar className="size-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dbUser?.slotsRemaining || 0}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Book more Deal Rooms
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
        {nextSession ? (
          <Card className="border-2 border-primary/20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-teal-500/5 dark:from-primary/10 dark:to-teal-500/10">
            <div className="absolute right-0 top-0 w-[30%] h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
            <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Badge className="bg-primary hover:bg-primary/95 text-primary-foreground animate-pulse">
                    Live Session Coming Up
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    ID: {nextSession.id.substring(nextSession.id.length - 8).toUpperCase()}
                  </span>
                </div>
                <CardTitle className="text-xl md:text-2xl">
                  {nextSession.title || `B2B Consultative Session - ${nextSession.country}`}
                </CardTitle>
                <CardDescription className="max-w-2xl mt-1 line-clamp-2">
                  {nextSession.questionnaire}
                </CardDescription>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Countdown
                </span>
                <div className="flex items-center gap-2 mt-1.5">
                  {timeLeft.days > 0 && (
                    <>
                      <div className="bg-background border border-border px-2.5 py-1.5 rounded-lg shadow-sm font-mono text-lg font-bold">
                        {timeLeft.days.toString().padStart(2, "0")}d
                      </div>
                      <span className="text-muted-foreground font-bold">:</span>
                    </>
                  )}
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
                    Client/Exporter
                  </span>
                  <span className="text-sm font-medium">
                    {nextSession.client?.fullName || "Member"}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-0.5">
                    Country Partner
                  </span>
                  <span className="text-sm font-medium">
                    {nextSession.partner?.fullName || "Partner"}
                  </span>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <span className="text-xs text-muted-foreground block mb-0.5">
                    Scheduled Time
                  </span>
                  <span className="text-sm font-medium">
                    {new Date(nextSession.date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })} IST
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
                    to={`/dashboard/waiting-room?sessionId=${nextSession.id}`}
                    className="flex items-center gap-2"
                  >
                    Join Waiting Room <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-dashed border-2 flex flex-col items-center justify-center py-12">
            <Calendar className="size-10 text-muted-foreground/30 mb-3" />
            <h3 className="text-lg font-semibold">No Upcoming Sessions</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm text-center">
              You do not have any approved live Deal Room sessions. Book a partner from the Marketplace to get started.
            </p>
            <Button asChild className="mt-4" size="sm">
              <Link to="/dashboard/marketplace">Explore Marketplace</Link>
            </Button>
          </Card>
        )}

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
