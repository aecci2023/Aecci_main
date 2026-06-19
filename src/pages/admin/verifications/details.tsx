import { useParams, useNavigate } from "react-router-dom";
import { Main } from "@/components/layout/main";
import { 
  useGetUserByIdQuery, 
  useUpdateKycStatusMutation,
  useGetUsersQuery,
  useAssignPartnerMutation
} from "@/store/api/adminApi";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, FileText, Download, ArrowLeft, Building2, UserPlus } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AdminVerificationDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetUserByIdQuery(id as string, {
    skip: !id,
  });
  const [updateKycStatus, { isLoading: isUpdating }] = useUpdateKycStatusMutation();

  const { data: partnersData } = useGetUsersQuery({ role: 'partner' });
  const partners = partnersData?.data || [];

  const [selectedPartner, setSelectedPartner] = useState("");
  const [assignPartner, { isLoading: isAssigning }] = useAssignPartnerMutation();

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

  const handleUpdateStatus = async (status: string) => {
    try {
      await updateKycStatus({ id: user.id, kycStatus: status }).unwrap();
      toast.success(`User KYC status has been updated.`);
      // Instead of navigating away immediately, let them assign a partner if approved
      if (status === 'rejected') {
        navigate("/admin/verifications");
      }
    } catch (err) {
      console.error("KYC Update Error:", err);
      toast.error(`Failed to update KYC status.`);
    }
  };

  const handleAssignPartner = async () => {
    if (!selectedPartner) {
      toast.error("Please select a partner first.");
      return;
    }
    try {
      await assignPartner({ id: user.id, partnerId: selectedPartner }).unwrap();
      toast.success("Partner assigned successfully.");
      navigate("/admin/verifications");
    } catch (err) {
      console.error("Partner Assignment Error:", err);
      toast.error("Failed to assign partner.");
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

  return (
    <Main fluid className="space-y-6 max-w-5xl mx-auto pb-10">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => navigate("/admin/verifications")} className="gap-2 text-muted-foreground">
          <ArrowLeft className="w-4 h-4" /> Back to List
        </Button>
        <div className="flex gap-3">
          {user.kycStatus === 'pending' || user.kycStatus === 'pending_verification' ? (
            <>
              <Button
                variant="outline"
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                disabled={isUpdating}
                onClick={() => handleUpdateStatus('rejected')}
              >
                <XCircle className="w-4 h-4 mr-2" /> Reject Application
              </Button>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                disabled={isUpdating}
                onClick={() => handleUpdateStatus('approved_pending_assignment')}
              >
                <CheckCircle2 className="w-4 h-4 mr-2" /> Approve KYC
              </Button>
            </>
          ) : user.kycStatus === 'approved_pending_assignment' ? (
            <div className="flex items-center gap-3">
              <Select value={selectedPartner} onValueChange={setSelectedPartner}>
                <SelectTrigger className="w-[200px] bg-background">
                  <SelectValue placeholder="Select Partner" />
                </SelectTrigger>
                <SelectContent>
                  {partners.map((p: any) => (
                    <SelectItem key={p.id} value={p.id}>{p.fullName || p.email}</SelectItem>
                  ))}
                  {partners.length === 0 && <SelectItem value="none" disabled>No partners available</SelectItem>}
                </SelectContent>
              </Select>
              <Button 
                onClick={handleAssignPartner} 
                disabled={!selectedPartner || isAssigning || selectedPartner === "none"}
              >
                <UserPlus className="w-4 h-4 mr-2" /> Assign Partner
              </Button>
            </div>
          ) : (
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 capitalize">
              Status: {user.kycStatus.replace(/_/g, ' ')}
            </Badge>
          )}
        </div>
      </div>

      {/* Main Title */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
          <Building2 className="size-8 text-primary" /> 
          {user.companyName || user.fullName}
        </h1>
        <p className="text-muted-foreground mt-2">
          Review the KYC information and verify the uploaded documents below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Info */}
        <div className="space-y-6">
          <Card>
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
                  <Badge variant="outline" className={user.isEmailVerified ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/10" : "text-amber-500 border-amber-500/20 bg-amber-500/10"}>
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
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Documents */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Verification Documents</h2>
          <div className="grid grid-cols-1 gap-4">
            {renderDocumentCard("IEC (Import Export Code) Document", user.iecDocument)}
            {renderDocumentCard("GST Document", user.gstDocument)}
            {renderDocumentCard("PAN Document", user.panDocument)}
            {renderDocumentCard("Company Profile", user.companyProfileDocument)}
            
            {user.productCatalogue && user.productCatalogue.length > 0 && (
              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-medium">Product Catalogues</h3>
                {user.productCatalogue.map((doc: string, idx: number) => 
                  renderDocumentCard(`Product Catalogue ${idx + 1}`, doc)
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Main>
  );
}
