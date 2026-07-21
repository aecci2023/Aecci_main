import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  FileText,
  ChevronRight,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useGetMySessionsQuery } from "@/store/api/sessionApi";

export default function MySessionsPage() {
  const { data, isLoading, error, refetch } = useGetMySessionsQuery();

  const sessions = data?.data || [];

  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return (
        d.toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }) + " IST"
      );
    } catch (e) {
      console.log(e)
      return dateString;
    }
  };

  const getCountryFlag = (country: string) => {
    const flags: Record<string, string> = {
      India: "🇮🇳",
      Kenya: "🇰🇪",
      Nigeria: "🇳🇬",
      "South Africa": "🇿🇦",
      USA: "🇺🇸",
      UK: "🇬🇧",
      Germany: "🇩🇪",
      Japan: "🇯🇵",
      Singapore: "🇸🇬",
    };
    return flags[country] || "🌐";
  };

  const renderEmptyState = (message: string) => (
    <Card className="border-dashed border-2 py-12 flex flex-col items-center justify-center text-center">
      <CardContent className="space-y-3">
        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
          <Calendar className="size-6" />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">No sessions found</h3>
          <p className="text-sm text-muted-foreground max-w-sm">{message}</p>
        </div>
        <Button asChild size="sm" className="mt-2">
          <Link to="/dashboard/marketplace">Explore Marketplace</Link>
        </Button>
      </CardContent>
    </Card>
  );

  const renderSessionCard = (session: any) => {
    const isUpcoming = session.status === "upcoming";
    const isCompleted = session.status === "completed";
    const isPending = session.status === "pending_approval";
    const isRejected = session.status === "rejected";

    let statusLabel = session.status;
    let statusColor = "bg-muted text-muted-foreground border-muted";

    if (isPending) {
      statusLabel = "In Review";
      statusColor =
        "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
    } else if (isUpcoming) {
      statusLabel = "Upcoming";
      statusColor = "bg-primary/10 text-primary border-primary/20";
    } else if (isCompleted) {
      statusLabel = "Completed";
      statusColor =
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    } else if (isRejected) {
      statusLabel = "Rejected";
      statusColor =
        "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
    }

    let actionUrl = "";
    let actionText = "";

    if (isUpcoming) {
      actionUrl = `/dashboard/waiting-room?sessionId=${session.id}`;
      actionText = "Join Waiting Room";
    } else if (isCompleted) {
      actionUrl = `/dashboard/opportunity-report`;
      actionText = "View Report";
    } else if (isPending) {
      actionUrl = `/dashboard/marketplace`;
      actionText = "Browse Partners";
    }

    const partnerName = session.partner?.fullName || "AECCI Trade Expert";
    const partnerCompany = session.partner?.companyName || "Verified Partner";
    const flag = getCountryFlag(
      session.country || session.partner?.country || "Global",
    );

    return (
      <Card key={session.id} className="hover:shadow-sm transition-shadow">
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-muted-foreground font-mono">
                ID:{" "}
                {session.id
                  .substring(Math.max(0, session.id.length - 8))
                  .toUpperCase()}
              </span>
              <Badge className={statusColor}>{statusLabel}</Badge>
            </div>
            <CardTitle className="text-lg md:text-xl flex items-center gap-2">
              <span className="text-2xl">{flag}</span>
              {session.title || `B2B Consultative Session - ${session.country}`}
            </CardTitle>
            <CardDescription className="mt-1">
              Partner:{" "}
              <span className="font-medium text-foreground">{partnerName}</span>{" "}
              ({partnerCompany})
            </CardDescription>
          </div>
          <div className="flex flex-col md:items-end gap-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-1 font-medium bg-muted/50 px-2 py-1 rounded">
              <Calendar className="size-3.5" /> {formatDate(session.date)}
            </div>
          </div>
        </CardHeader>
        <CardContent className="border-t border-border/50 pt-4 mt-1 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="text-sm text-muted-foreground max-w-2xl">
            {session.questionnaire ? (
              <div className="space-y-1">
                <span className="font-semibold text-xs text-foreground uppercase tracking-wider block">
                  Pre-Session Objectives:
                </span>
                <p className="italic">"{session.questionnaire}"</p>
              </div>
            ) : (
              <p>
                B2B Deal Room matchmaking session to discuss market compliance,
                local trade channels, and strategic opportunities.
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
            {isCompleted && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full md:w-auto"
              >
                <Link
                  to="/dashboard/opportunity-report"
                  className="flex items-center gap-1.5"
                >
                  <FileText className="size-4" /> Report
                </Link>
              </Button>
            )}
            {actionUrl && (
              <Button asChild size="sm" className="w-full md:w-auto">
                <Link to={actionUrl} className="flex items-center gap-1">
                  {actionText} <ChevronRight className="size-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  const upcomingSessions = sessions.filter((s: any) => s.status === "upcoming");
  const pendingSessions = sessions.filter(
    (s: any) => s.status === "pending_approval",
  );
  const completedSessions = sessions.filter(
    (s: any) => s.status === "completed",
  );

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">My Sessions</span>
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
              My B2B Deal Room Sessions
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Manage your booked matchmaking slots, view verification progress, and
              download reports.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => refetch()}
            className="self-start md:self-auto gap-1"
          >
            <RefreshCw className="size-4" /> Refresh
          </Button>
        </div>

        {isLoading ? (
          <div className="flex h-[40vh] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <Card className="border-dashed border-2 py-12 flex flex-col items-center justify-center text-center">
            <CardContent className="space-y-3">
              <p className="text-rose-500 font-semibold">
                Failed to load sessions data
              </p>
              <Button onClick={() => refetch()} size="sm">
                Retry Connection
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="all">All ({sessions.length})</TabsTrigger>
              <TabsTrigger value="upcoming">
                Upcoming ({upcomingSessions.length})
              </TabsTrigger>
              <TabsTrigger value="review">
                In Review ({pendingSessions.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({completedSessions.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {sessions.length > 0
                ? sessions.map((s: any) => renderSessionCard(s))
                : renderEmptyState(
                    "You haven't requested any Deal Room sessions yet. Access the partner directory to book your slot.",
                  )}
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingSessions.length > 0
                ? upcomingSessions.map((s: any) => renderSessionCard(s))
                : renderEmptyState(
                    "You don't have any upcoming matchmaking sessions. Once admin approves your request, it will appear here.",
                  )}
            </TabsContent>

            <TabsContent value="review" className="space-y-4">
              {pendingSessions.length > 0
                ? pendingSessions.map((s: any) => renderSessionCard(s))
                : renderEmptyState(
                    "There are currently no sessions undergoing verification. Book a partner to initiate matching verification.",
                  )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {completedSessions.length > 0
                ? completedSessions.map((s: any) => renderSessionCard(s))
                : renderEmptyState(
                    "No completed sessions yet. Finished deal room sessions will list here along with opportunity report links.",
                  )}
            </TabsContent>
          </Tabs>
        )}
      </Main>
    </>
  );
}
