import { useParams, useNavigate } from "react-router-dom";
import { Main } from "@/components/layout/main";
import {
  useGetPartnerProfileQuery,
  useUpdatePartnerStatusMutation,
} from "@/store/api/adminApi";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  FileText,
  Download,
  ArrowLeft,
  Globe,
  Briefcase,
  User,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

function PartnerDetailsSkeleton() {
  return (
    <Main fluid className="space-y-6 w-full pb-10">
      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-32" />
        <div className="flex gap-3">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-36" />
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Skeleton className="size-16 rounded-lg shrink-0" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-6 w-36 rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className={i === 2 ? "md:col-span-2" : ""}>
            <CardHeader>
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-4 w-56 mt-1" />
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j}>
                  <Skeleton className="h-3 w-24 mb-1" />
                  <Skeleton className="h-4 w-48" />
                  <Separator className="mt-3" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Main>
  );
}

export default function AdminPartnerVerificationDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetPartnerProfileQuery(id as string, {
    skip: !id,
  });
  const [updatePartnerStatus, { isLoading: isUpdating }] = useUpdatePartnerStatusMutation();

  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [isApproveDialogOpen, setIsApproveDialogOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  const profile = data?.data;
  const user = profile?.user;

  if (isLoading) return <PartnerDetailsSkeleton />;

  if (error || !profile) {
    return (
      <Main fluid className="flex items-center justify-center h-screen flex-col gap-4">
        <p className="text-destructive">Failed to load partner details.</p>
        <Button variant="outline" onClick={() => navigate("/admin/verifications")}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Verifications
        </Button>
      </Main>
    );
  }

  const handleApprove = async () => {
    try {
      await updatePartnerStatus({
        userId: profile.userId,
        status: "active",
      }).unwrap();
      toast.success("Partner approved and activated.");
      setIsApproveDialogOpen(false);
      navigate("/admin/verifications");
    } catch {
      toast.error("Failed to approve partner.");
    }
  };

  const handleReject = async () => {
    if (!rejectionReason.trim()) return;
    try {
      await updatePartnerStatus({
        userId: profile.userId,
        status: "suspended",
        reason: rejectionReason.trim(),
      }).unwrap();
      toast.success("Partner application rejected.");
      setIsRejectDialogOpen(false);
      setRejectionReason("");
      navigate("/admin/verifications");
    } catch {
      toast.error("Failed to reject partner.");
    }
  };

  const renderDocCard = (label: string, url: string | undefined | null) => {
    if (!url) {
      return (
        <Card className="bg-muted/10 border-dashed">
          <CardHeader className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FileText className="w-5 h-5" />
                <CardTitle className="text-base font-medium">{label}</CardTitle>
              </div>
              <Badge variant="outline">Not Provided</Badge>
            </div>
          </CardHeader>
        </Card>
      );
    }
    return (
      <Card className="hover:border-primary/50 transition-colors">
        <CardHeader className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <CardTitle className="text-base font-medium">{label}</CardTitle>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Download className="w-4 h-4" /> View
              </a>
            </Button>
          </div>
        </CardHeader>
      </Card>
    );
  };

  const isPending = profile.status === "pending_review";

  return (
    <Main fluid className="space-y-6 w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate("/admin/verifications")}
          className="gap-2 text-muted-foreground"
        >
          <ArrowLeft className="w-4 h-4" /> Back to List
        </Button>
        <div className="flex gap-3">
          {isPending ? (
            <>
              <Button
                variant="outline"
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                disabled={isUpdating}
                onClick={() => setIsRejectDialogOpen(true)}
              >
                <XCircle className="w-4 h-4 mr-2" /> Reject
              </Button>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                disabled={isUpdating}
                onClick={() => setIsApproveDialogOpen(true)}
              >
                <CheckCircle2 className="w-4 h-4 mr-2" /> Approve Partner
              </Button>
            </>
          ) : (
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 capitalize">
              Status: {profile.status.replace(/_/g, " ")}
            </Badge>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="flex items-start gap-4">
        {user?.profilePicture ? (
          <img
            src={user.profilePicture}
            alt={user.fullName || "Logo"}
            className="size-16 rounded-lg object-cover border border-border shrink-0"
          />
        ) : (
          <div className="size-16 rounded-lg bg-muted flex items-center justify-center shrink-0">
            <Briefcase className="size-7 text-muted-foreground" />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {user?.fullName || "Partner Application"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {profile.organization}{user?.country ? ` — ${user.country}` : ""}
          </p>
          <Badge className="mt-2" variant="outline">
            {user?.applicationNumber || "No Application Number"}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="size-4" /> Personal Information
            </CardTitle>
            <CardDescription>Identity and contact details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {(
              [
                ["Full Name", user?.fullName],
                ["Email", user?.email],
                ["Mobile", user?.mobileNumber],
                ["Country", user?.country],
                ["Nationality", user?.nationality],
                ["Professional Title", user?.professionalTitle],
                ["Years of Experience", user?.yearsOfExperience],
              ] as [string, string | undefined][]
            )
              .filter(([, v]) => v)
              .map(([label, value], idx, arr) => (
                <div key={label}>
                  <p className="text-sm text-muted-foreground font-medium">{label}</p>
                  <p className="font-medium">{value}</p>
                  {idx < arr.length - 1 && <Separator className="mt-3" />}
                </div>
              ))}
            {user?.linkedinProfileUrl && (
              <>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">LinkedIn</p>
                  <a
                    href={user.linkedinProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline truncate block"
                  >
                    {user.linkedinProfileUrl}
                  </a>
                </div>
              </>
            )}
            {user?.websiteUrl && (
              <>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Website</p>
                  <a
                    href={user.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline truncate block"
                  >
                    {user.websiteUrl}
                  </a>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Professional Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="size-4" /> Professional Profile
            </CardTitle>
            <CardDescription>Organisation, expertise, and motivation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Organisation</p>
              <p className="font-medium">{profile.organization || "N/A"}</p>
              <Separator className="mt-3" />
            </div>

            {profile.bio && (
              <div>
                <p className="text-sm text-muted-foreground font-medium">Professional Biography</p>
                <p className="text-sm whitespace-pre-wrap">{profile.bio}</p>
                <Separator className="mt-3" />
              </div>
            )}

            {profile.motivation && (
              <div>
                <p className="text-sm text-muted-foreground font-medium">Motivation</p>
                <p className="text-sm whitespace-pre-wrap">{profile.motivation}</p>
                <Separator className="mt-3" />
              </div>
            )}

            <div>
              <p className="text-sm text-muted-foreground font-medium mb-2">Languages Spoken</p>
              <div className="flex flex-wrap gap-1">
                {(user?.languagesSpoken || []).length > 0
                  ? (user!.languagesSpoken as string[]).map((l) => (
                      <Badge key={l} variant="secondary" className="text-xs">{l}</Badge>
                    ))
                  : <span className="text-sm text-muted-foreground">N/A</span>}
              </div>
              <Separator className="mt-3" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground font-medium mb-2">Countries of Expertise</p>
              <div className="flex flex-wrap gap-1">
                {(profile.expertiseCountries as string[] || []).map((c) => (
                  <Badge key={c} variant="outline" className="text-xs">{c}</Badge>
                ))}
              </div>
              <Separator className="mt-3" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground font-medium mb-2">Sectors of Expertise</p>
              <div className="flex flex-wrap gap-1">
                {(profile.expertiseSectors as string[] || []).map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </div>

            {profile.references && (
              <>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">References</p>
                  <p className="text-sm whitespace-pre-wrap">{profile.references}</p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Documents */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Verification Documents</CardTitle>
            <CardDescription>Review uploaded credentials and identity documents.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {renderDocCard("Government ID", profile.governmentId)}
            {renderDocCard("Professional Certificate / License", profile.professionalCert)}
            {renderDocCard("Business Registration Proof", profile.businessProof)}
          </CardContent>
        </Card>
      </div>

      {/* Approve Dialog */}
      <Dialog open={isApproveDialogOpen} onOpenChange={setIsApproveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Approve Partner Application</DialogTitle>
            <DialogDescription>
              The partner will receive an approval email and gain access to their dashboard immediately.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsApproveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={handleApprove}
              disabled={isUpdating}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" /> Confirm Approval
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reject Dialog */}
      <Dialog open={isRejectDialogOpen} onOpenChange={setIsRejectDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Partner Application</DialogTitle>
            <DialogDescription>
              Provide a reason. This will be recorded against the application.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              placeholder="Enter rejection reason..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRejectDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleReject}
              disabled={isUpdating || !rejectionReason.trim()}
            >
              Confirm Rejection
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Main>
  );
}
