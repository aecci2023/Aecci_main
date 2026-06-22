import { Main } from "@/components/layout/main";
import { useGetPendingSessionsQuery, useApproveSessionMutation, useRejectSessionMutation } from "@/store/api/sessionApi";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar, Eye, CheckCircle2, XCircle, Loader2, FileText } from "lucide-react";

export default function AdminSessionsPage() {
  const { data, isLoading, refetch } = useGetPendingSessionsQuery();
  const [approveSession, { isLoading: isApproving }] = useApproveSessionMutation();
  const [rejectSession, { isLoading: isRejecting }] = useRejectSessionMutation();

  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const pendingRequests = data?.data || [];

  const handleApprove = async (id: string) => {
    try {
      await approveSession(id).unwrap();
      toast.success("Deal room session approved and scheduled successfully!");
      setSelectedRequest(null);
      refetch();
    } catch (err: any) {
      console.error(err);
      toast.error(err?.data?.message || "Failed to approve session request.");
    }
  };

  const handleReject = async (id: string) => {
    try {
      await rejectSession(id).unwrap();
      toast.success("Deal room request rejected.");
      setSelectedRequest(null);
      refetch();
    } catch (err: any) {
      console.error(err);
      toast.error(err?.data?.message || "Failed to reject session request.");
    }
  };

  return (
    <Main fluid className="space-y-6 max-w-7xl mx-auto py-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
          Deal Room Verification Desk
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Review client matchmaking pre-session questionnaires and schedule approved 1-on-1 sessions.
        </p>
      </div>

      <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-muted-foreground animate-pulse text-sm flex flex-col items-center gap-2 justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            Loading pending requests...
          </div>
        ) : pendingRequests.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground text-sm flex flex-col items-center gap-2 justify-center">
            <Calendar className="size-8 text-muted-foreground/50" />
            No pending Deal Room scheduling requests found.
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Requested Date & Time</TableHead>
                <TableHead>Client / Exporter</TableHead>
                <TableHead>Target Partner / Expert</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingRequests.map((req: any) => (
                <TableRow key={req.id} className="hover:bg-muted/10">
                  <TableCell className="font-semibold text-xs text-foreground/80">
                    {format(new Date(req.date), "MMM dd, yyyy h:mm a")}
                  </TableCell>
                  <TableCell className="text-xs">
                    <div className="font-bold text-foreground">{req.client?.fullName || "Exporter"}</div>
                    <div className="text-muted-foreground text-[10px]">{req.client?.companyName || "Individual"}</div>
                  </TableCell>
                  <TableCell className="text-xs">
                    <div className="font-bold text-foreground">{req.partner?.fullName || "Representative"}</div>
                    <div className="text-muted-foreground text-[10px]">{req.partner?.companyName || "Chamber Officer"}</div>
                  </TableCell>
                  <TableCell className="text-xs">
                    <Badge variant="secondary" className="text-[10px] px-2 py-0">
                      {req.country || "Global"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 text-[10px] font-semibold">
                      Pending Screening
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5" onClick={() => setSelectedRequest(req)}>
                      <Eye className="w-3.5 h-3.5" /> Review Brief
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Review Dialog */}
      <Dialog open={!!selectedRequest} onOpenChange={(open) => !open && setSelectedRequest(null)}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl font-extrabold text-primary">
              <FileText className="size-5" /> Matchmaking Request Verification
            </DialogTitle>
            <DialogDescription>
              Vet the client's pre-session questionnaire prior to scheduling and slot deduction.
            </DialogDescription>
          </DialogHeader>

          {selectedRequest && (
            <div className="space-y-4 py-3 text-xs leading-relaxed">
              <div className="grid grid-cols-2 gap-4 border-b pb-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Client Business Profile</span>
                  <div className="font-bold text-sm text-foreground">{selectedRequest.client?.fullName}</div>
                  <div className="text-muted-foreground">{selectedRequest.client?.companyName || "Individual Exporter"}</div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Assigned Chamber Expert</span>
                  <div className="font-bold text-sm text-foreground">{selectedRequest.partner?.fullName}</div>
                  <div className="text-muted-foreground">{selectedRequest.partner?.companyName}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-b pb-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Requested Slot</span>
                  <div className="font-semibold text-foreground flex items-center gap-1">
                    <Calendar className="size-3.5 text-primary shrink-0" />
                    {format(new Date(selectedRequest.date), "MMM dd, yyyy h:mm a")}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Target Market</span>
                  <div className="font-semibold text-foreground">{selectedRequest.country}</div>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider block">Pre-Session Questionnaire Responses</span>
                <div className="bg-muted p-3.5 rounded-lg border border-border whitespace-pre-line text-foreground/90 font-medium">
                  {selectedRequest.questionnaire || "No questionnaire details submitted."}
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="flex items-center justify-between sm:justify-between w-full pt-4 border-t">
            <Button 
              variant="outline" 
              className="text-destructive hover:bg-destructive/10 border-destructive/20 h-9 text-xs font-semibold"
              onClick={() => handleReject(selectedRequest.id)}
              disabled={isApproving || isRejecting}
            >
              <XCircle className="w-4 h-4 mr-1.5" /> Reject Request
            </Button>
            <div className="space-x-2">
              <Button variant="outline" size="sm" className="h-9 text-xs" onClick={() => setSelectedRequest(null)}>Cancel</Button>
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-9 text-xs"
                onClick={() => handleApprove(selectedRequest.id)}
                disabled={isApproving || isRejecting}
              >
                {isApproving ? (
                  <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 mr-1.5" />
                )}
                Approve & Deduct Slot
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Main>
  );
}
