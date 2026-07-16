import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Video, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useGetMySessionsQuery } from "@/store/api/sessionApi";

export default function PartnerUpcomingSessionsPage() {
  const { data: sessionData, isLoading } = useGetMySessionsQuery();
  
  const sessions = (sessionData?.data || []).filter(
    (s: any) => s.status === "upcoming" || s.status === "pending_approval"
  ).sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="animate-spin text-primary size-8" />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Upcoming Sessions</h1>
        <p className="text-muted-foreground">
          Scheduled Deal Room sessions awaiting your participation
        </p>
      </div>

      {sessions.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium">No upcoming sessions</p>
            <p className="text-muted-foreground text-sm mt-1">
              Sessions approved by admin will appear here
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {sessions.map((session: any) => (
            <Card key={session.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{session.title || `B2B Consultative Session - ${session.country}`}</CardTitle>
                  <Badge
                    variant={
                      session.status === "upcoming" ? "default" : "secondary"
                    }
                  >
                    {session.status === "pending_approval"
                      ? "Pending Approval"
                      : "Confirmed"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {format(new Date(session.date), "EEEE, d MMMM yyyy")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>
                      {format(new Date(session.date), "h:mm a")} ·{" "}
                      {session.durationMinutes} min
                    </span>
                  </div>
                  {session.client && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>
                        {session.client.fullName ||
                          session.client.companyName ||
                          "Client"}
                      </span>
                    </div>
                  )}
                </div>

                {session.questionnaire && (
                  <div className="rounded-md bg-muted p-3 text-sm">
                    <p className="font-medium mb-1">
                      Client's Pre-Session Brief
                    </p>
                    <p className="text-muted-foreground">
                      {session.questionnaire}
                    </p>
                  </div>
                )}

                {session.status === "upcoming" && (
                  <Button asChild size="sm" className="gap-2">
                    <Link to={`/partner/waiting-room?sessionId=${session.id}`}>
                      <Video className="h-4 w-4" />
                      Join Room
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
