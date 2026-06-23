import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, FileText, User } from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

interface Session {
  id: string;
  title: string;
  country: string;
  date: string;
  durationMinutes: number;
  status: string;
  postSessionSummary: string | null;
  client: { fullName: string | null; companyName: string | null } | null;
}

export default function PartnerPastSessionsPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch(`${import.meta.env.VITE_API_URL}/api/sessions/my-sessions`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          const past = (data.data as Session[]).filter((s) => s.status === "completed");
          setSessions(past);
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
        <h1 className="text-2xl font-bold tracking-tight">Past Sessions</h1>
        <p className="text-muted-foreground">History of completed Deal Room sessions</p>
      </div>

      {sessions.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <CheckCircle className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium">No completed sessions yet</p>
            <p className="text-muted-foreground text-sm mt-1">Completed sessions will appear here</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {sessions.map((session) => (
            <Card key={session.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{session.title}</CardTitle>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Completed
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{format(new Date(session.date), "d MMM yyyy, h:mm a")}</span>
                  </div>
                  {session.client && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{session.client.fullName || session.client.companyName || "Client"}</span>
                    </div>
                  )}
                </div>

                {session.postSessionSummary ? (
                  <div className="rounded-md bg-muted p-3 text-sm">
                    <p className="font-medium mb-1 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Summary Submitted
                    </p>
                    <p className="text-muted-foreground line-clamp-2">{session.postSessionSummary}</p>
                  </div>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                    onClick={() => navigate(`/partner/sessions/${session.id}/summary`)}
                  >
                    <FileText className="h-4 w-4" />
                    Submit Post-Session Summary
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
