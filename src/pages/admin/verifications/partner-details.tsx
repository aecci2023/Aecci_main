import { useParams, useNavigate } from "react-router-dom";
import { Main } from "@/components/layout/main";
import {
  useGetUserByIdQuery,
  useUpdatePartnerStatusMutation,
} from "@/store/api/adminApi";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  FileText,
  ArrowLeft,
  Building2,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

import { DocumentViewerModal } from "@/components/common/DocumentViewerModal";

export default function AdminPartnerVerificationDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetUserByIdQuery(id as string, {
    skip: !id,
  });
  const [updatePartnerStatus, { isLoading: isUpdating }] =
    useUpdatePartnerStatusMutation();

  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [isApproveDialogOpen, setIsApproveDialogOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [viewDocument, setViewDocument] = useState<{ url: string; label: string } | null>(null);

  const user = data?.data;

  if (isLoading) {
    return (
      <Main fluid className="flex items-center justify-center h-screen">
        <p className="text-muted-foreground animate-pulse">
          Loading verification details...
        </p>
      </Main>
    );
  }

  if (error || !user) {
    return (
      <Main
        fluid
        className="flex items-center justify-center h-screen flex-col gap-4"
      >
        <p className="text-destructive">Failed to load user details.</p>
        <Button
          variant="outline"
          onClick={() => navigate("/admin/verifications")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Verifications
        </Button>
      </Main>
    );
  }

  const handleUpdateStatus = async (status: string, reason?: string) => {
    try {
      await updatePartnerStatus({
        userId: user.id,
        status: status === 'approved' ? 'active' : 'suspended',
        reason,
      }).unwrap();
      toast.success("Approved successfully.");
      if (status === "rejected") {
        setIsRejectDialogOpen(false);
        setRejectionReason("");
      }
      navigate("/admin/verifications");
    } catch (err) {
      console.error("Update Error:", err);
      toast.error("Failed to update status.");
    }
  };

  const renderDocumentCard = (
    label: string,
    url: string | undefined | null,
  ) => {
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
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewDocument({ url, label })}
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> View Document
            </Button>
          </div>
        </CardHeader>
      </Card>
    );
  };

  const isPending =
    user.partnerProfile?.status === "pending_review";

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
                <CheckCircle2 className="w-4 h-4 mr-2" /> Approve
              </Button>
            </>
          ) : (
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 capitalize">
              Status: {user.partnerProfile?.status?.replace(/_/g, " ") || "Unknown"}
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
          Review the information and verify the uploaded documents below.
        </p>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>User Profile & Verification Details</CardTitle>
          <CardDescription>
            Comprehensive overview of all submitted registration data.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-10">
          
          {/* Data Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-4">
            
            {user.applicationNumber && (
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Application Number</p>
                <p className="font-medium">{user.applicationNumber}</p>
              </div>
            )}

            {user.createdAt && (
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Registered On</p>
                <p className="font-medium">{new Date(user.createdAt).toLocaleString()}</p>
              </div>
            )}
            
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Account Type</p>
              <p className="font-medium capitalize">{user.userType}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">System Role</p>
              <p className="font-medium capitalize">{user.role || "user"}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Plan Status</p>
              <div>
                <Badge variant={user.planActive ? "default" : "secondary"}>
                  {user.planActive ? "Active" : "Inactive"}
                </Badge>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Full Name</p>
              <p className="font-medium">{user.fullName || "N/A"}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Email Address</p>
              <div className="flex items-center gap-2">
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

            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Mobile Number</p>
              <p className="font-medium">
                {user.countryCode ? `${user.countryCode} ` : ""}
                {user.mobileNumber || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Country</p>
              <p className="font-medium">{user.country || "N/A"}</p>
            </div>

            {user.companyName && (
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Company Name</p>
                <p className="font-medium">{user.companyName}</p>
              </div>
            )}

            {user.businessAddress && (
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Business Address</p>
                <p className="font-medium">{user.businessAddress}</p>
              </div>
            )}
            
            {user.role !== 'partner' && (
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Industry</p>
                <p className="font-medium">{user.industrySector || "N/A"}</p>
              </div>
            )}

            {user.iecNumber && (
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">IEC Number</p>
                <p className="font-medium">{user.iecNumber}</p>
              </div>
            )}

            {user.gstNumber && (
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">GST Number</p>
                <p className="font-medium">{user.gstNumber}</p>
              </div>
            )}

            {user.panNumber && (
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">PAN Number</p>
                <p className="font-medium">{user.panNumber}</p>
              </div>
            )}
            
            {user.role !== 'partner' && (
              <>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Company Size</p>
                  <p className="font-medium">{user.companySize || "N/A"}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Turnover</p>
                  <p className="font-medium">{user.turnover || "N/A"}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Legal Structure</p>
                  <p className="font-medium">{user.legalStructure || "N/A"}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Est. Year</p>
                  <p className="font-medium">{user.yearEstablished || "N/A"}</p>
                </div>
              </>
            )}

            {user.experience && (
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Experience Level</p>
                <p className="font-medium">{user.experience}</p>
              </div>
            )}
            
            {user.role !== 'partner' && (
              <>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Total Slots</p>
                  <p className="font-medium">{user.slotsTotal ?? 0}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Remaining Slots</p>
                  <p className="font-medium">{user.slotsRemaining ?? 0}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Reports Used</p>
                  <p className="font-medium">{user.reportsUsed ?? 0}</p>
                </div>
              </>
            )}
            
            {user.websiteUrl && (
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Website</p>
                <a
                  href={user.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline block truncate"
                >
                  {user.websiteUrl}
                </a>
              </div>
            )}
            
            {user.linkedinUrl && (
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">LinkedIn Profile</p>
                <a
                  href={user.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline block truncate"
                >
                  {user.linkedinUrl}
                </a>
              </div>
            )}

            {user.role === 'partner' && (
              <>
                {user.professionalTitle && (
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Professional Title</p>
                    <p className="font-medium">{user.professionalTitle}</p>
                  </div>
                )}
                {user.nationality && (
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Nationality</p>
                    <p className="font-medium">{user.nationality}</p>
                  </div>
                )}
                {user.yearsOfExperience && (
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Years of Experience</p>
                    <p className="font-medium">{user.yearsOfExperience}</p>
                  </div>
                )}
                {user.partnerProfile?.organization && (
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Organization</p>
                    <p className="font-medium">{user.partnerProfile.organization}</p>
                  </div>
                )}
              </>
            )}
          </div>

          <Separator />

          {/* Tags & Lists */}
          <div className="space-y-6">
            {user.objective && (
              <div>
                <h3 className="text-sm text-muted-foreground font-medium mb-2 border-b pb-1">
                  Business Objective
                </h3>
                <p className="font-medium whitespace-pre-wrap">{user.objective}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {user.role !== 'partner' && (
                <>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-2">Business Roles</p>
                    <div className="flex flex-wrap gap-2">
                      {user.businessRole && user.businessRole.length > 0
                        ? user.businessRole.map((role: string) => (
                            <Badge key={role} variant="secondary">
                              {role}
                            </Badge>
                          ))
                        : "N/A"}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-2">Target Markets</p>
                    <div className="flex flex-wrap gap-2">
                      {user.targetMarkets && user.targetMarkets.length > 0
                        ? user.targetMarkets.map((market: string) => (
                            <Badge key={market} variant="secondary">
                              {market}
                            </Badge>
                          ))
                        : "N/A"}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground font-medium mb-2">Products</p>
                    <div className="flex flex-col gap-2">
                      {user.products && user.products.length > 0
                        ? user.products.map((product: string, idx: number) => (
                            <p key={idx} className="text-sm font-medium whitespace-pre-wrap">
                              {product}
                            </p>
                          ))
                        : <p className="text-sm text-muted-foreground">N/A</p>}
                    </div>
                  </div>
                </>
              )}

              {user.keyCertifications && user.keyCertifications.length > 0 && (
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground font-medium mb-2">Key Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {user.keyCertifications.map((cert: string) => (
                      <Badge key={cert} variant="outline">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {user.role === 'partner' && (
                <>
                  {user.languagesSpoken && user.languagesSpoken.length > 0 && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground font-medium mb-2">Languages Spoken</p>
                      <div className="flex flex-wrap gap-2">
                        {user.languagesSpoken.map((lang: string) => (
                          <Badge key={lang} variant="secondary">{lang}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {user.partnerProfile?.expertiseCountries && user.partnerProfile.expertiseCountries.length > 0 && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground font-medium mb-2">Expertise Countries</p>
                      <div className="flex flex-wrap gap-2">
                        {user.partnerProfile.expertiseCountries.map((country: string) => (
                          <Badge key={country} variant="outline">{country}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {user.partnerProfile?.expertiseSectors && user.partnerProfile.expertiseSectors.length > 0 && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground font-medium mb-2">Expertise Sectors</p>
                      <div className="flex flex-wrap gap-2">
                        {user.partnerProfile.expertiseSectors.map((sector: string) => (
                          <Badge key={sector} variant="outline">{sector}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {user.partnerProfile?.bio && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground font-medium mb-2 border-b pb-1">Bio</p>
                      <p className="font-medium whitespace-pre-wrap">{user.partnerProfile.bio}</p>
                    </div>
                  )}
                  {user.partnerProfile?.motivation && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground font-medium mb-2 border-b pb-1">Motivation</p>
                      <p className="font-medium whitespace-pre-wrap">{user.partnerProfile.motivation}</p>
                    </div>
                  )}
                  {user.partnerProfile?.references && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground font-medium mb-2 border-b pb-1">References</p>
                      <p className="font-medium whitespace-pre-wrap">{user.partnerProfile.references}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <Separator />

          {/* Verification Documents */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Documents & Identifications</h2>

            {(user.internationalBusinessIds?.length > 0 || user.internationalIds?.length > 0) && (
              <div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.internationalBusinessIds
                    ?.filter((o: any) => o.type || o.idNumber)
                    .map((idObj: any, idx: number) => (
                      <Card key={`biz-${idx}`} className="bg-muted/10">
                        <CardContent className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                          <span className="font-medium">{idObj.type || "Business ID"}</span>
                          <Badge variant="outline" className="w-fit">
                            {idObj.idNumber}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  {user.internationalIds
                    ?.filter((o: any) => o.type || o.idNumber)
                    .map((idObj: any, idx: number) => (
                      <Card key={`doc-${idx}`} className="bg-muted/10">
                        <CardContent className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                          <span className="font-medium">{idObj.type || "Personal ID"}</span>
                          <Badge variant="outline" className="w-fit">
                            {idObj.idNumber}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            )}

            {user.role !== 'partner' && (
              <div className="space-y-4 mt-4">
                <h3 className="text-lg font-medium border-b pb-2">Uploaded Files</h3>
                {user.uploadedFiles && user.uploadedFiles.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {user.uploadedFiles.map((fileObj: any, idx: number) => {
                      const label =
                        fileObj.type === "product_catalogue"
                          ? `Product Catalogue: ${fileObj.name}`
                          : `Document: ${fileObj.name}`;
                      return (
                        <React.Fragment key={`file-${idx}`}>
                          {renderDocumentCard(label, fileObj.url)}
                        </React.Fragment>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No files uploaded.</p>
                )}
              </div>
            )}

            {user.role === 'partner' && (
              <div className="space-y-4 mt-8">
                <h3 className="text-lg font-medium border-b pb-2">Partner Verification Documents</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {renderDocumentCard("Profile Picture", user.profilePicture)}
                  {renderDocumentCard("Government ID", user.partnerProfile?.governmentId)}
                  {renderDocumentCard("Professional Certificate", user.partnerProfile?.professionalCert)}
                  {renderDocumentCard("Business Proof", user.partnerProfile?.businessProof)}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Approve Dialog */}
      <Dialog open={isApproveDialogOpen} onOpenChange={setIsApproveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Approve Application</DialogTitle>
            <DialogDescription>
              The user will receive an approval email and gain full access to their account immediately.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsApproveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => {
                setIsApproveDialogOpen(false);
                handleUpdateStatus("approved");
              }}
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
            <DialogTitle>Reject Application</DialogTitle>
            <DialogDescription>
              Provide a reason for rejection. This will be sent to the user via
              email.
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
            <Button
              variant="outline"
              onClick={() => setIsRejectDialogOpen(false)}
            >
              Cancel
            </Button>
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

      {/* Document Viewer Dialog */}
      <DocumentViewerModal
        isOpen={!!viewDocument}
        onClose={() => setViewDocument(null)}
        url={viewDocument?.url || null}
        label={viewDocument?.label || null}
      />
    </Main>
  );
}
