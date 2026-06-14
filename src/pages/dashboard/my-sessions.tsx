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
import { Calendar, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function MySessionsPage() {
  const sessions = [
    {
      id: "AECCI-2026-06B",
      title: "India-Kenya Bilateral Textile Matchmaking",
      partner: "Kenya Chamber of Commerce (KNCCI)",
      country: "Kenya",
      flag: "🇰🇪",
      dateTime: "June 15, 2026 at 14:00 IST",
      status: "Upcoming",
      statusColor: "bg-primary/10 text-primary border-primary/20",
      actionUrl: "/dashboard/waiting-room",
      actionText: "Join Waiting Room",
      description:
        "Session covers import/export compliance, wholesale distribution channels, and agent matchmaking.",
    },
    {
      id: "AECCI-2026-05A",
      title: "Agricultural Expansion Desk Matchmaking",
      partner: "Federal Ministry of Agriculture & Rural Development",
      country: "Nigeria",
      flag: "🇳🇬",
      dateTime: "May 28, 2026 at 11:30 IST",
      status: "Completed",
      statusColor:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      actionUrl: "/dashboard/session-summary",
      actionText: "View Summary",
      description:
        "Discussed exporting processed spices and milled grain distribution in Lagos and Abuja.",
    },
    {
      id: "AECCI-2026-06C",
      title: "Automotive Components Sourcing Round",
      partner: "South African Association of Auto Parts Distributors",
      country: "South Africa",
      flag: "🇿🇦",
      dateTime: "July 10, 2026 at 15:30 IST",
      status: "Screening",
      statusColor:
        "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      actionUrl: "/dashboard/marketplace",
      actionText: "Check Status",
      description:
        "Your application document and compliance proofs are currently being verified by AECCI Secretariat.",
    },
  ];

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
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            My B2B Deal Room Sessions
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage your booked matchmaking slots, view screening progress, and
            download reports.
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="all">All (3)</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="screening">In Screening</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {sessions.map((session) => (
              <Card
                key={session.id}
                className="hover:shadow-sm transition-shadow"
              >
                <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-muted-foreground font-mono">
                        {session.id}
                      </span>
                      <Badge className={session.statusColor}>
                        {session.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                      <span className="text-2xl">{session.flag}</span>
                      {session.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Partner:{" "}
                      <span className="font-medium text-foreground">
                        {session.partner}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="size-3.5" /> {session.dateTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="border-t border-border/50 pt-4 mt-1 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <p className="text-sm text-muted-foreground max-w-2xl">
                    {session.description}
                  </p>
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    {session.status === "Completed" && (
                      <Button asChild variant="outline" size="sm">
                        <Link
                          to="/dashboard/opportunity-report"
                          className="flex items-center gap-1.5"
                        >
                          <FileText className="size-4" /> Report
                        </Link>
                      </Button>
                    )}
                    <Button asChild size="sm" className="w-full md:w-auto">
                      <Link
                        to={session.actionUrl}
                        className="flex items-center gap-1"
                      >
                        {session.actionText} <ChevronRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {sessions
              .filter((s) => s.status === "Upcoming")
              .map((session) => (
                <Card key={session.id}>
                  <CardHeader className="flex flex-col md:flex-row md:items-center justify-between pb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-muted-foreground font-mono">
                          {session.id}
                        </span>
                        <Badge className={session.statusColor}>
                          {session.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="text-2xl">{session.flag}</span>
                        {session.title}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="size-3.5" /> {session.dateTime}
                    </div>
                  </CardHeader>
                  <CardContent className="border-t border-border/50 pt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {session.description}
                    </p>
                    <Button asChild size="sm">
                      <Link
                        to={session.actionUrl}
                        className="flex items-center gap-1"
                      >
                        {session.actionText} <ChevronRight className="size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="screening" className="space-y-4">
            {sessions
              .filter((s) => s.status === "Screening")
              .map((session) => (
                <Card key={session.id}>
                  <CardHeader className="flex flex-col md:flex-row md:items-center justify-between pb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-muted-foreground font-mono">
                          {session.id}
                        </span>
                        <Badge className={session.statusColor}>
                          {session.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="text-2xl">{session.flag}</span>
                        {session.title}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="size-3.5" /> {session.dateTime}
                    </div>
                  </CardHeader>
                  <CardContent className="border-t border-border/50 pt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {session.description}
                    </p>
                    <Button asChild size="sm" variant="outline">
                      <Link
                        to={session.actionUrl}
                        className="flex items-center gap-1"
                      >
                        {session.actionText} <ChevronRight className="size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {sessions
              .filter((s) => s.status === "Completed")
              .map((session) => (
                <Card key={session.id}>
                  <CardHeader className="flex flex-col md:flex-row md:items-center justify-between pb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-muted-foreground font-mono">
                          {session.id}
                        </span>
                        <Badge className={session.statusColor}>
                          {session.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="text-2xl">{session.flag}</span>
                        {session.title}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="size-3.5" /> {session.dateTime}
                    </div>
                  </CardHeader>
                  <CardContent className="border-t border-border/50 pt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {session.description}
                    </p>
                    <div className="flex gap-2">
                      <Button asChild variant="outline" size="sm">
                        <Link to="/dashboard/opportunity-report">
                          Download Report
                        </Link>
                      </Button>
                      <Button asChild size="sm">
                        <Link to={session.actionUrl}>View Summary</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </Main>
    </>
  );
}
