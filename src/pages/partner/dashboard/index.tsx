import { useNavigate, Link } from "react-router-dom";
import { Main } from "@/components/layout/main";
import { useGetMyPartnerProfileQuery } from "@/store/api/adminApi";
import { useGetMySessionsQuery } from "@/store/api/sessionApi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  CalendarClock,
  History,
  MessageSquare,
  Users,
  Video,
  Globe,
  Briefcase,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { format } from "date-fns";

function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number | string;
  color: string;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 pt-6">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="size-5 text-white" />
        </div>
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PartnerDashboard() {
  const navigate = useNavigate();

  const { data: profileData, isLoading: isProfileLoading } =
    useGetMyPartnerProfileQuery();
  const { data: sessionsData, isLoading: isSessionsLoading } =
    useGetMySessionsQuery();

  const profile = profileData?.data;
  const user = profile?.user;
  const sessions: any[] = sessionsData?.data || [];

  const needsSetup =
    !isProfileLoading && profile && (!profile.bio || !profile.signedAgreement);

  if (!isProfileLoading && needsSetup) {
    navigate("/partner/onboarding", { replace: true });
    return null;
  }

  const upcoming = sessions
    .filter((s) => s.status === "upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const past = sessions.filter(
    (s) => s.status === "completed" || s.status === "past",
  );

  const pendingSummary = past.filter((s) => !s.postSessionSummary);

  const completionItems = [
    { label: "Full Name", isComplete: !!user?.fullName },
    { label: "Mobile Number", isComplete: !!user?.mobileNumber },
    { label: "Country", isComplete: !!user?.country },
    { label: "Profile Picture", isComplete: !!user?.profilePicture },
    { label: "Bio", isComplete: !!profile?.bio },
    { label: "Organization", isComplete: !!profile?.organization },
    { label: "Expertise Countries", isComplete: !!(profile?.expertiseCountries as string[])?.length },
    { label: "Expertise Sectors", isComplete: !!(profile?.expertiseSectors as string[])?.length },
    { label: "Availability", isComplete: !!profile?.availability },
  ];

  const completedCount = completionItems.filter((item) => item.isComplete).length;
  const completionPercentage = Math.round((completedCount / completionItems.length) * 100);
  const pendingItems = completionItems.filter((item) => !item.isComplete);

  if (isProfileLoading || isSessionsLoading) {
    return (
      <Main fluid className="space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="flex items-center gap-4 pt-6">
                <Skeleton className="size-11 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-8" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Skeleton className="h-64 lg:col-span-1 rounded-xl" />
          <Skeleton className="h-64 lg:col-span-2 rounded-xl" />
        </div>
      </Main>
    );
  }


  return (
    <Main fluid className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user?.fullName?.split(" ")[0] || "Partner"}
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            {profile?.organization} · {user?.country}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
          >
            Active
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={CalendarClock}
          label="Upcoming Sessions"
          value={upcoming.length}
          color="bg-blue-500"
        />
        <StatCard
          icon={History}
          label="Past Sessions"
          value={past.length}
          color="bg-emerald-500"
        />
        <StatCard
          icon={Clock}
          label="Summaries Pending"
          value={pendingSummary.length}
          color="bg-amber-500"
        />
        <StatCard
          icon={Users}
          label="Total Engagements"
          value={sessions.length}
          color="bg-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Briefcase className="size-4 text-primary" /> Partner Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              {user?.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt={user.fullName}
                  className="size-14 rounded-full object-cover border border-border"
                />
              ) : (
                <div className="size-14 rounded-full bg-muted flex items-center justify-center border border-border">
                  <Briefcase className="size-6 text-muted-foreground" />
                </div>
              )}
              <div>
                <p className="font-semibold">{user?.fullName}</p>
                <p className="text-xs text-muted-foreground">
                  {user?.professionalTitle}
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-muted-foreground">Profile Completion</span>
                <span className="font-bold">{completionPercentage}%</span>
              </div>
              <Progress value={completionPercentage} className="h-2" />
              {pendingItems.length > 0 && (
                <div className="pt-2">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">Pending Actions</p>
                  <div className="flex flex-wrap gap-1">
                    {pendingItems.map(item => (
                      <Badge key={item.label} variant="outline" className="text-[10px] text-amber-600 bg-amber-500/10 border-amber-500/20">
                        + {item.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Separator />

            {profile?.bio && (
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
                {profile.bio}
              </p>
            )}

            <div className="space-y-2 text-xs">
              {(user?.languagesSpoken as string[] | undefined)?.length ? (
                <div>
                  <p className="font-medium text-muted-foreground mb-1">
                    Languages
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {(user!.languagesSpoken as string[])
                      .slice(0, 5)
                      .map((l: string) => (
                        <Badge key={l} variant="secondary" className="text-xs">
                          {l}
                        </Badge>
                      ))}
                    {(user!.languagesSpoken as string[]).length > 5 && (
                      <Badge variant="secondary" className="text-xs">
                        +{(user!.languagesSpoken as string[]).length - 5}
                      </Badge>
                    )}
                  </div>
                </div>
              ) : null}

              {(profile?.expertiseCountries as string[] | undefined)
                ?.length ? (
                <div>
                  <p className="font-medium text-muted-foreground mb-1 flex items-center gap-1">
                    <Globe className="size-3" /> Countries
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {(profile!.expertiseCountries as string[])
                      .slice(0, 4)
                      .map((c: string) => (
                        <Badge key={c} variant="outline" className="text-xs">
                          {c}
                        </Badge>
                      ))}
                    {(profile!.expertiseCountries as string[]).length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{(profile!.expertiseCountries as string[]).length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full"
              asChild
            >
              <Link to="/partner/settings">
                Edit Profile <ArrowRight className="size-3 ml-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Sessions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base flex items-center gap-2">
                  <CalendarClock className="size-4 text-blue-500" /> Upcoming
                  Sessions
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">
                  Sessions scheduled for you
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/partner/sessions/upcoming">
                  View all <ArrowRight className="size-3 ml-1" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              {upcoming.length === 0 ? (
                <div className="text-center py-8 border-2 border-dashed rounded-lg text-muted-foreground text-sm">
                  <CalendarClock className="size-8 mx-auto mb-2 opacity-40" />
                  No upcoming sessions scheduled
                </div>
              ) : (
                <div className="space-y-3">
                  {upcoming.slice(0, 3).map((session: any) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-3 border rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="font-medium text-sm truncate">
                          {session.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {format(new Date(session.date), "MMM d, yyyy · h:mm a")}
                        </p>
                      </div>
                      <Button size="sm" className="shrink-0 ml-3 gap-1.5" asChild>
                        <Link
                          to={`/partner/waiting-room?sessionId=${session.id}`}
                        >
                          <Video className="size-3.5" /> Join
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Pending Summaries */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base flex items-center gap-2">
                  <MessageSquare className="size-4 text-amber-500" /> Pending
                  Summaries
                </CardTitle>
                <CardDescription className="text-xs mt-0.5">
                  Submit post-session outcomes to unlock client reports
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/partner/sessions/past">
                  View all <ArrowRight className="size-3 ml-1" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              {pendingSummary.length === 0 ? (
                <div className="text-center py-8 border-2 border-dashed rounded-lg text-muted-foreground text-sm">
                  <CheckCircle2 className="size-8 mx-auto mb-2 opacity-40 text-emerald-500" />
                  All summaries submitted — great work!
                </div>
              ) : (
                <div className="space-y-3">
                  {pendingSummary.slice(0, 3).map((session: any) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-3 border rounded-lg bg-amber-500/5 border-amber-500/20"
                    >
                      <div className="min-w-0">
                        <p className="font-medium text-sm truncate">
                          {session.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {format(new Date(session.date), "MMM d, yyyy")}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="shrink-0 ml-3 text-amber-600 border-amber-500/30 hover:bg-amber-500/10"
                        asChild
                      >
                        <Link to={`/partner/sessions/${session.id}/summary`}>
                          Submit
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Main>
  );
}
