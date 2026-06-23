import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Video } from "lucide-react";
import { format } from "date-fns";

interface Session {
  id: string;
  title: string;
  country: string;
  date: string;
  durationMinutes: number;
  status: string;
  questionnaire: string | null;
  client: { fullName: string | null; companyName: string | null; country: string | null } | null;
}

export default function PartnerUpcomingSessionsPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch(`${import.meta.env.VITE_API_URL}/api/sessions/my-sessions`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          const upcoming = (data.data as Session[]).filter(
            (s) => s.status === "upcoming" || s.status === "pending_approval"
          );
          setSessions(upcoming);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Upcoming Sessions</h1>
        <p className="text-muted-foreground">Scheduled Deal Room sessions awaiting your participation</p>
      </div>

      {sessions.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium">No upcoming sessions</p>
            <p className="text-muted-foreground text-sm mt-1">Sessions approved by admin will appear here</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {sessions.map((session) => (
            <Card key={session.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{session.title}</CardTitle>
                  <Badge variant={session.status === "upcoming" ? "default" : "secondary"}>
                    {session.status === "pending_approval" ? "Pending Approval" : "Confirmed"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{format(new Date(session.date), "EEEE, d MMMM yyyy")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{format(new Date(session.date), "h:mm a")} · {session.durationMinutes} min</span>
                  </div>
                  {session.client && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{session.client.fullName || session.client.companyName || "Client"}</span>
                    </div>
                  )}
                </div>

                {session.questionnaire && (
                  <div className="rounded-md bg-muted p-3 text-sm">
                    <p className="font-medium mb-1">Client's Pre-Session Brief</p>
                    <p className="text-muted-foreground">{session.questionnaire}</p>
                  </div>
                )}

                {session.status === "upcoming" && (
                  <Button size="sm" className="gap-2">
                    <Video className="h-4 w-4" />
                    Join Room
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
