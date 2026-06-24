import { useParams, useNavigate } from "react-router-dom";
import { Main } from "@/components/layout/main";
import {
  useGetUserByIdQuery,
  useUpdateKycStatusMutation,
} from "@/store/api/adminApi";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, FileText, Download, ArrowLeft, Building2 } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function AdminVerificationDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetUserByIdQuery(id as string, { skip: !id });
  const [updateKycStatus, { isLoading: isUpdating }] = useUpdateKycStatusMutation();

  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  const user = data?.data;

  if (isLoading) {
    return (
      <Main fluid className="flex items-center justify-center h-screen">
        <p className="text-muted-foreground animate-pulse">Loading verification details...</p>
      </Main>
    );
  }

  if (error || !user) {
    return (
      <Main fluid className="flex items-center justify-center h-screen flex-col gap-4">
        <p className="text-destructive">Failed to load user details.</p>
        <Button variant="outline" onClick={() => navigate("/admin/verifications")}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Verifications
        </Button>
      </Main>
    );
  }

  const handleUpdateStatus = async (status: string, reason?: string) => {
    try {
      await updateKycStatus({ id: user.id, kycStatus: status, reason }).unwrap();
      toast.success("KYC status updated successfully.");
      if (status === "rejected") {
        setIsRejectDialogOpen(false);
        setRejectionReason("");
      }
      navigate("/admin/verifications");
    } catch (err) {
      console.error("KYC Update Error:", err);
      toast.error("Failed to update KYC status.");
    }
  };

  const renderDocumentCard = (label: string, url: string | undefined | null) => {
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
                <Download className="w-4 h-4" /> View Document
              </a>
            </Button>
          </div>
        </CardHeader>
      </Card>
    );
  };

  const isPending = user.kycStatus === "pending" || user.kycStatus === "pending_verification";

  return (
    <Main fluid className="space-y-6 w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => navigate("/admin/verifications")} className="gap-2 text-muted-foreground">
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
                onClick={() => handleUpdateStatus("approved")}
              >
                <CheckCircle2 className="w-4 h-4 mr-2" /> Approve KYC
              </Button>
            </>
          ) : (
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 capitalize">
              Status: {user.kycStatus.replace(/_/g, " ")}
            </Badge>
          )}
        </div>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
          <Building2 className="size-8 text-primary" />
          {user.companyName || user.fullName}
        </h1>
        <p className="text-muted-foreground mt-2">
          Review the KYC information and verify the uploaded documents below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Information */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Primary details submitted during registration.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Account Type</p>
              <p className="capitalize font-medium">{user.userType}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Full Name</p>
              <p className="font-medium">{user.fullName || "N/A"}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Email Address</p>
              <div className="flex items-center justify-between">
                <p className="font-medium">{user.email}</p>
                <Badge
                  variant="outline"
                  className={
                    user.isEmailVerified
                      ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/10"
                      : "text-amber-500 border-amber-500/20 bg-amber-500/10"
                  }
                >
                  {user.isEmailVerified ? "Verified" : "Pending"}
                </Badge>
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Mobile Number</p>
              <p className="font-medium">{user.mobileNumber || "N/A"}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Country</p>
              <p className="font-medium">{user.country || "N/A"}</p>
            </div>
            {user.companyName && (
              <>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Company Name</p>
                  <p className="font-medium">{user.companyName}</p>
                </div>
              </>
            )}
            {user.businessAddress && (
              <>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Business Address</p>
                  <p className="font-medium">{user.businessAddress}</p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Roles & Markets */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Roles & Markets</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Business Roles</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {user.businessRole && user.businessRole.length > 0
                  ? user.businessRole.map((role: string) => (
                      <Badge key={role} variant="secondary">{role}</Badge>
                    ))
                  : "N/A"}
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Target Markets</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {user.targetMarkets && user.targetMarkets.length > 0
                  ? user.targetMarkets.map((market: string) => (
                      <Badge key={market} variant="secondary">{market}</Badge>
                    ))
                  : "N/A"}
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Products</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {user.products && user.products.length > 0
                  ? user.products.map((product: string) => (
                      <Badge key={product} variant="outline">{product}</Badge>
                    ))
                  : "N/A"}
              </div>
            </div>
            {user.experience && (
              <>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Experience Level</p>
                  <p className="font-medium">{user.experience}</p>
                </div>
              </>
            )}
            {user.objective && (
              <>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Business Objective</p>
                  <p className="font-medium whitespace-pre-wrap">{user.objective}</p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Verification Documents */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Verification Documents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {(user.internationalBusinessIds?.length > 0 || user.internationalKycIds?.length > 0) && (
              <div className="space-y-4 mb-4">
                <h3 className="text-lg font-medium border-b pb-2">International Identifications</h3>
                {user.internationalBusinessIds?.filter((o: any) => o.type || o.idNumber).map((idObj: any, idx: number) => (
                  <Card key={`biz-${idx}`} className="bg-muted/10">
                    <CardContent className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                      <span className="font-medium">{idObj.type || "Business ID"}</span>
                      <Badge variant="outline" className="w-fit">{idObj.idNumber}</Badge>
                    </CardContent>
                  </Card>
                ))}
                {user.internationalKycIds?.filter((o: any) => o.type || o.idNumber).map((idObj: any, idx: number) => (
                  <Card key={`kyc-${idx}`} className="bg-muted/10">
                    <CardContent className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                      <span className="font-medium">{idObj.type || "Personal KYC ID"}</span>
                      <Badge variant="outline" className="w-fit">{idObj.idNumber}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <h3 className="text-lg font-medium border-b pb-2 mt-4">Required Documents</h3>
            {user.documents && user.documents.length > 0 ? (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {user.documents.map((doc: string, idx: number) => (
                  <React.Fragment key={`kyc-doc-${idx}`}>
                    {renderDocumentCard(`KYC Document ${idx + 1}`, doc)}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No KYC documents uploaded.</p>
            )}

            {user.productCatalogue && user.productCatalogue.length > 0 && (
              <div className="space-y-4 mt-8">
                <h3 className="text-lg font-medium border-b pb-2">Product Catalogues</h3>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {user.productCatalogue.map((doc: string, idx: number) => (
                    <React.Fragment key={`cat-doc-${idx}`}>
                      {renderDocumentCard(`Product Catalogue ${idx + 1}`, doc)}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Business Overview */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Business Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Industry</p>
              <p className="font-medium">{user.industrySector || "N/A"}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Company Size</p>
              <p className="font-medium">{user.companySize || "N/A"}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Turnover</p>
              <p className="font-medium">{user.turnover || "N/A"}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Legal Structure</p>
              <p className="font-medium">{user.legalStructure || "N/A"}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Est. Year</p>
              <p className="font-medium">{user.yearEstablished || "N/A"}</p>
            </div>
            {user.websiteUrl && (
              <>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Website</p>
                  <a
                    href={user.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline block truncate"
                  >
                    {user.websiteUrl}
                  </a>
                </div>
              </>
            )}
            {user.linkedinUrl && (
              <>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground font-medium">LinkedIn Profile</p>
                  <a
                    href={user.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline block truncate"
                  >
                    {user.linkedinUrl}
                  </a>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Reject Dialog */}
      <Dialog open={isRejectDialogOpen} onOpenChange={setIsRejectDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Application</DialogTitle>
            <DialogDescription>
              Provide a reason for rejection. This will be sent to the user via email.
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
            <Button variant="outline" onClick={() => setIsRejectDialogOpen(false)}>Cancel</Button>
            <Button
              variant="destructive"
              onClick={() => handleUpdateStatus("rejected", rejectionReason)}
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
