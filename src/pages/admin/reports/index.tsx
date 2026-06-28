import { Main } from "@/components/layout/main";
import {
  useGetSessionsQuery,
  useCreateOpportunityReportMutation,
} from "@/store/api/sessionApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { format } from "date-fns";
import {
  Calendar,
  FileText,
  CheckCircle2,
  Loader2,
  Download,
  AlertCircle,
} from "lucide-react";

export default function AdminReportsPage() {
  const { data, isLoading, refetch } = useGetSessionsQuery({
    status: "completed",
  });
  const [createReport, { isLoading: isGenerating }] =
    useCreateOpportunityReportMutation();

  const [selectedSession, setSelectedSession] = useState<any>(null);

  // Report form states
  const [marketSummary, setMarketSummary] = useState("");
  const [potentialRoutes, setPotentialRoutes] = useState("");
  const [recommendations, setRecommendations] = useState("");

  const completedSessions = data?.data || [];

  const handleGenerateReport = async () => {
    if (
      !marketSummary.trim() ||
      !potentialRoutes.trim() ||
      !recommendations.trim()
    ) {
      toast.error("Please fill out all report sections before compiling.");
      return;
    }

    try {
      await createReport({
        sessionId: selectedSession.id,
        userId: selectedSession.clientId,
        marketSummary,
        potentialRoutes,
        recommendations,
      }).unwrap();

      toast.success(
        "AECCI Opportunity Report generated, emailed to client, and saved in their dashboard.",
      );
      setSelectedSession(null);
      setMarketSummary("");
      setPotentialRoutes("");
      setRecommendations("");
      refetch();
    } catch (err: any) {
      console.error(err);
      toast.error(
        err?.data?.message || "Failed to compile opportunity report.",
      );
    }
  };

  const handleDownloadPdf = (reportId: string) => {
    const url = `${import.meta.env.VITE_API_BASE_URL?.replace("/api/", "/api") || "http://localhost:5000/api"}/reports/${reportId}/pdf`;

    // Trigger download in new window/tab
    const token = localStorage.getItem("accessToken");
    if (token) {
      // In production, we might want to fetch with headers, but simple redirect works if JWT is passed or authenticated via session cookie
      window.open(`${url}?token=${token}`, "_blank");
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <Main fluid className="space-y-6 max-w-7xl mx-auto py-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
          Bilateral Opportunity Reports
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Review expert post-session summaries and manually compile official
          AECCI Trade Opportunity Reports for clients.
        </p>
      </div>

      <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-muted-foreground animate-pulse text-sm flex flex-col items-center gap-2 justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            Loading completed sessions...
          </div>
        ) : completedSessions.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground text-sm flex flex-col items-center gap-2 justify-center">
            <Calendar className="size-8 text-muted-foreground/50" />
            No completed Deal Room matchmaking sessions found.
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Completed Date</TableHead>
                <TableHead>Client / Exporter</TableHead>
                <TableHead>Chamber Expert</TableHead>
                <TableHead>Country Focus</TableHead>
                <TableHead>Report Delivery</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {completedSessions.map((session: any) => {
                const hasReport = session.reports && session.reports.length > 0;
                const report = hasReport ? session.reports[0] : null;

                return (
                  <TableRow key={session.id} className="hover:bg-muted/10">
                    <TableCell className="font-semibold text-xs text-foreground/80">
                      {format(new Date(session.date), "MMM dd, yyyy h:mm a")}
                    </TableCell>
                    <TableCell className="text-xs">
                      <div className="font-bold text-foreground">
                        {session.client?.fullName || "Exporter"}
                      </div>
                      <div className="text-muted-foreground text-[10px]">
                        {session.client?.companyName || "Individual"}
                      </div>
                    </TableCell>
                    <TableCell className="text-xs">
                      <div className="font-bold text-foreground">
                        {session.partner?.fullName || "Representative"}
                      </div>
                      <div className="text-muted-foreground text-[10px]">
                        {session.partner?.companyName || "Chamber Officer"}
                      </div>
                    </TableCell>
                    <TableCell className="text-xs">
                      <Badge
                        variant="secondary"
                        className="text-[10px] px-2 py-0"
                      >
                        {session.country || "Global"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {hasReport ? (
                        <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-[10px] font-semibold">
                          Report Delivered
                        </Badge>
                      ) : (
                        <Badge className="bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20 text-[10px] font-semibold">
                          Action Required
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {hasReport ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 text-xs gap-1.5 text-emerald-600 hover:text-emerald-700"
                          onClick={() => handleDownloadPdf(report.id)}
                        >
                          <Download className="w-3.5 h-3.5" /> Download PDF
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 text-xs gap-1.5 border-rose-200 hover:bg-rose-50/50"
                          onClick={() => setSelectedSession(session)}
                        >
                          <FileText className="w-3.5 h-3.5 text-rose-500" />{" "}
                          Compile Report
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Compile Report Dialog */}
      <Dialog
        open={!!selectedSession}
        onOpenChange={(open) => !open && setSelectedSession(null)}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col">
          <DialogHeader className="shrink-0">
            <DialogTitle className="flex items-center gap-2 text-xl font-extrabold text-primary">
              <FileText className="size-5" /> Compile AECCI Opportunity Report
            </DialogTitle>
            <DialogDescription>
              Process the bilateral meeting summary notes and compose the
              official client report.
            </DialogDescription>
          </DialogHeader>

          {selectedSession && (
            <div className="space-y-4 py-3 text-xs leading-relaxed overflow-y-auto pr-1 flex-1">
              <div className="grid grid-cols-2 gap-4 border-b pb-3">
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                    Client / Exporter
                  </span>
                  <div className="font-bold text-sm text-foreground">
                    {selectedSession.client?.fullName}
                  </div>
                  <div className="text-muted-foreground">
                    {selectedSession.client?.companyName}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                    Assigned Chamber Expert
                  </span>
                  <div className="font-bold text-sm text-foreground">
                    {selectedSession.partner?.fullName}
                  </div>
                  <div className="text-muted-foreground">
                    {selectedSession.partner?.companyName}
                  </div>
                </div>
              </div>

              {/* Expert Notes */}
              <div className="space-y-1">
                <span className="text-[10px] text-rose-500 uppercase font-bold tracking-wider block flex items-center gap-1">
                  <AlertCircle className="size-3.5" /> Expert Post-Session
                  Summary Notes
                </span>
                <div className="bg-rose-500/5 p-3.5 rounded-lg border border-rose-100 whitespace-pre-line text-foreground/90 font-medium">
                  {selectedSession.postSessionSummary ||
                    "No summary notes submitted by the expert yet."}
                </div>
              </div>

              {/* Questionnaire */}
              <div className="space-y-1">
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider block">
                  Original Client Pre-Session Questionnaire
                </span>
                <div className="bg-muted p-3 rounded-lg border text-foreground/80 italic">
                  {selectedSession.questionnaire ||
                    "No questionnaire submitted."}
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                <h4 className="font-bold text-sm text-foreground">
                  AECCI Official Report Sections
                </h4>

                <div className="space-y-2">
                  <Label
                    htmlFor="marketSummary"
                    className="text-xs font-semibold"
                  >
                    1. Market Intelligence & Demand Summary{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="marketSummary"
                    required
                    value={marketSummary}
                    onChange={(e) => setMarketSummary(e.target.value)}
                    placeholder="Enter detailed evaluation of market size, potential competitors, compliance protocols, tariff structures, etc..."
                    className="min-h-[90px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="potentialRoutes"
                    className="text-xs font-semibold"
                  >
                    2. Potential Routes & Channels to Market{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="potentialRoutes"
                    required
                    value={potentialRoutes}
                    onChange={(e) => setPotentialRoutes(e.target.value)}
                    placeholder="Describe direct shipping channels, customs agents, free trade zones, wholesale distribution partners, local trade desks, etc..."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="recommendations"
                    className="text-xs font-semibold"
                  >
                    3. Strategic Recommendations & Actions{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="recommendations"
                    required
                    value={recommendations}
                    onChange={(e) => setRecommendations(e.target.value)}
                    placeholder="Provide pricing advice, certifications checklist, marketing timelines, and follow-up session recommendations..."
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="flex items-center justify-end w-full pt-4 border-t gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedSession(null)}
            >
              Cancel
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-9 text-xs"
              onClick={handleGenerateReport}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
              ) : (
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
              )}
              Compile & Deliver PDF Report
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Main>
  );
}
